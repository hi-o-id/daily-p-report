(function () {
  function slugify(text) {
    return String(text || '')
      .toLowerCase()
      .trim()
      .replace(/[\s\u00A0]+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fa5]/g, '')
      .replace(/\-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList || []);
  }

  function getScopes() {
    var postPageContent = document.querySelector('article.post .post-content.e-content');
    if (postPageContent) return [postPageContent];

    var homeExpandedPosts = document.querySelectorAll('.home .post-list .post-content.e-content');
    if (homeExpandedPosts.length > 0) return toArray(homeExpandedPosts);

    var fallbackScopes = document.querySelectorAll('.post-content.e-content');
    if (fallbackScopes.length > 0) return toArray(fallbackScopes);

    return [];
  }

  function buildToc() {
    var scopes = getScopes();
    if (!scopes.length) return;

    var usedIds = {};
    toArray(document.querySelectorAll('[id]')).forEach(function (el) {
      if (el.id) usedIds[el.id] = true;
    });

    var headings = [];

    scopes.forEach(function (scope, scopeIndex) {
      toArray(scope.querySelectorAll('h2, h3')).forEach(function (heading, headingIndex) {
        var id = heading.id || slugify(heading.textContent || 'section');
        if (!id) id = 'section-' + (scopeIndex + 1) + '-' + (headingIndex + 1);

        var baseId = id;
        var n = 2;
        while (usedIds[id] && heading.id !== id) {
          id = baseId + '-' + n;
          n += 1;
        }

        heading.id = id;
        usedIds[id] = true;

        headings.push({
          id: id,
          text: (heading.textContent || '').trim(),
          level: (heading.tagName || '').toLowerCase()
        });
      });
    });

    if (!headings.length) return;

    var existingShell = document.querySelector('.quick-toc-shell');
    if (existingShell && existingShell.parentNode) {
      existingShell.parentNode.removeChild(existingShell);
    }

    var shell = document.createElement('div');
    shell.className = 'quick-toc-shell';

    var tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'quick-toc-tab';
    tab.textContent = '专利条目';
    tab.setAttribute('aria-expanded', 'true');
    shell.appendChild(tab);

    var toc = document.createElement('aside');
    toc.className = 'quick-toc';
    toc.setAttribute('aria-label', '页面目录');

    var list = document.createElement('ol');
    list.className = 'quick-toc__list';

    headings.forEach(function (heading) {
      var item = document.createElement('li');
      item.className = 'quick-toc__item' + (heading.level === 'h3' ? ' is-sub' : '');

      var link = document.createElement('a');
      link.className = 'quick-toc__link';
      link.href = '#' + heading.id;
      link.textContent = heading.text;
      link.setAttribute('data-target-id', heading.id);

      item.appendChild(link);
      list.appendChild(item);
    });

    toc.appendChild(list);
    shell.appendChild(toc);
    document.body.appendChild(shell);

    tab.addEventListener('click', function () {
      var isCollapsed = shell.classList.toggle('is-collapsed');
      tab.setAttribute('aria-expanded', String(!isCollapsed));
    });

    var links = toArray(toc.querySelectorAll('.quick-toc__link'));
    var linkById = {};

    links.forEach(function (link) {
      linkById[link.getAttribute('data-target-id')] = link;
    });


    var headingIndexById = {};
    var lastScrollY = window.scrollY || window.pageYOffset || 0;
    var ACTIVATE_AHEAD_COUNT = 2;
    var manualActiveId = null;
    var manualActiveUntil = 0;
    var manualActiveLockMs = 1200;

    headings.forEach(function (heading, index) {
      headingIndexById[heading.id] = index;
    });

    function pickBiasedActiveId(baseId) {
      var baseIndex = headingIndexById[baseId];
      if (typeof baseIndex !== 'number') return baseId;

      var currentScrollY = window.scrollY || window.pageYOffset || 0;
      var scrollingDown = currentScrollY >= lastScrollY;
      lastScrollY = currentScrollY;

      var targetIndex = scrollingDown
        ? baseIndex + ACTIVATE_AHEAD_COUNT
        : baseIndex - ACTIVATE_AHEAD_COUNT;

      if (targetIndex < 0) targetIndex = 0;
      if (targetIndex >= headings.length) targetIndex = headings.length - 1;

      return headings[targetIndex].id;
    }


    function isHeadingInActiveZone(headingId) {
      var el = document.getElementById(headingId);
      if (!el) return false;

      var rect = el.getBoundingClientRect();
      var zoneTop = window.innerHeight * 0.2;
      var zoneBottom = window.innerHeight * 0.8;
      return rect.top <= zoneBottom && rect.bottom >= zoneTop;
    }

    function scrollActiveLinkIntoView(activeLink) {
      if (!activeLink) return;
      if (shell.classList.contains('is-collapsed')) return;

      var linkTop = activeLink.offsetTop;
      var linkBottom = linkTop + activeLink.offsetHeight;
      var viewTop = toc.scrollTop;
      var viewBottom = viewTop + toc.clientHeight;

      if (linkTop < viewTop) {
        toc.scrollTo({ top: linkTop - 8, behavior: 'smooth' });
        return;
      }

      if (linkBottom > viewBottom) {
        toc.scrollTo({ top: linkBottom - toc.clientHeight + 8, behavior: 'smooth' });
      }
    }

    var currentHashId = (window.location.hash || '').replace(/^#/, '');

    function syncAddressHash(id) {
      if (!id || id === currentHashId) return;
      currentHashId = id;

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '#' + id);
      } else {
        window.location.hash = id;
      }
    }

    function setActive(id, shouldSyncHash) {
      links.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('data-target-id') === id);
      });

      scrollActiveLinkIntoView(linkById[id]);

      if (shouldSyncHash) {
        syncAddressHash(id);
      }
    }


    links.forEach(function (link) {
      link.addEventListener('click', function () {
        var targetId = link.getAttribute('data-target-id');
        if (!targetId) return;

        manualActiveId = targetId;
        manualActiveUntil = Date.now() + manualActiveLockMs;
        setActive(targetId, true);
      });
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

        if (visible.length > 0) {
          if (manualActiveId) {
            setActive(manualActiveId, true);

            if (Date.now() >= manualActiveUntil && isHeadingInActiveZone(manualActiveId)) {
              manualActiveId = null;
            }
            return;
          }

          setActive(pickBiasedActiveId(visible[0].target.id), true);
        }
      }, {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 1]
      });

      headings.forEach(function (heading) {
        var el = document.getElementById(heading.id);
        if (el) observer.observe(el);
      });
    }

    if (headings[0]) setActive(headings[0].id, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();

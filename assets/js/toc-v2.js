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

    var existing = document.querySelector('.quick-toc');
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
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
      title.setAttribute('aria-expanded', String(!isCollapsed));
    });

    var links = toArray(toc.querySelectorAll('.quick-toc__link'));
    var linkById = {};

    links.forEach(function (link) {
      linkById[link.getAttribute('data-target-id')] = link;
    });

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

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('data-target-id') === id);
      });

      scrollActiveLinkIntoView(linkById[id]);
    }


    links.forEach(function (link) {
      link.addEventListener('click', function () {
        var targetId = link.getAttribute('data-target-id');
        if (!targetId) return;

        manualActiveId = targetId;
        manualActiveUntil = Date.now() + MANUAL_ACTIVE_LOCK_MS;
        setActive(targetId);
      });
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

        if (visible.length > 0) {
          setActive(visible[0].target.id);
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

    if (headings[0]) setActive(headings[0].id);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();

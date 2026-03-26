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
    tab.textContent = document.body.getAttribute('data-toc-title') || '页面目录';
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

    var MANUAL_ACTIVE_LOCK_MS = 1500;
    var manualActiveId = null;
    var manualActiveUntil = 0;

    function scrollActiveLinkIntoView(activeLink) {
      if (!activeLink) return;
      if (shell.classList.contains('is-collapsed')) return;

      var tocRect = toc.getBoundingClientRect();
      var tocTop = tocRect.top;
      var tocBottom = tocRect.bottom;

      // ── 1. Find visible links and where activeLink sits among them ──
      var visibleLinks = [];
      var activeVisibleIndex = -1;

      for (var i = 0; i < links.length; i++) {
        var r = links[i].getBoundingClientRect();
        // A link counts as "visible" if more than half of it is inside the toc viewport
        var midY = r.top + r.height / 2;
        if (midY >= tocTop && midY <= tocBottom) {
          if (links[i] === activeLink) activeVisibleIndex = visibleLinks.length;
          visibleLinks.push(links[i]);
        }
      }

      // ── 2. Also find activeLink's overall index in the full links array ──
      var activeGlobalIndex = -1;
      for (var j = 0; j < links.length; j++) {
        if (links[j] === activeLink) { activeGlobalIndex = j; break; }
      }

      // ── 3. Decide what to scroll to ──
      // Helper: compute how far a link's top edge is from the toc's scroll origin
      function linkScrollPos(link) {
        return link.getBoundingClientRect().top - tocTop + toc.scrollTop;
      }

      var EDGE = 2; // "edge zone" = first/last 2 visible items

      // Case A: activeLink is completely outside the visible area → just bring it in
      var activeRect = activeLink.getBoundingClientRect();
      var activeMid = activeRect.top + activeRect.height / 2;

      if (activeMid < tocTop || activeMid > tocBottom) {
        // Off-screen above → scroll so it lands ~3rd from top
        if (activeMid < tocTop) {
          let target = Math.max(0, activeGlobalIndex - EDGE);
          toc.scrollTo({ top: linkScrollPos(links[target]), behavior: 'smooth' });
        } else {
          // Off-screen below → scroll so it lands ~3rd from bottom
          let target = Math.min(links.length - 1, activeGlobalIndex + EDGE);
          let pos = linkScrollPos(links[target]) + links[target].getBoundingClientRect().height - toc.clientHeight;
          toc.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        }
        return;
      }

      // Case B: activeLink IS visible but in the edge zone → nudge the list
      if (activeVisibleIndex < 0) return; // shouldn't happen, but safety

      var totalVisible = visibleLinks.length;

      // Near the TOP of visible area (1st or 2nd visible item)
      // → scroll up so the item above becomes visible
      if (activeVisibleIndex < EDGE && activeGlobalIndex > 0) {
        // Scroll so that one item above the active link is at the top of toc
        var showFrom = Math.max(0, activeGlobalIndex - 1);
        toc.scrollTo({ top: linkScrollPos(links[showFrom]), behavior: 'smooth' });
        return;
      }

      // Near the BOTTOM of visible area (last or 2nd-to-last visible item)
      // → scroll down so the item below becomes visible
      if (activeVisibleIndex >= totalVisible - EDGE && activeGlobalIndex < links.length - 1) {
        var showUntil = Math.min(links.length - 1, activeGlobalIndex + 1);
        let pos = linkScrollPos(links[showUntil]) + links[showUntil].getBoundingClientRect().height - toc.clientHeight;
        toc.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        return;
      }

      // Otherwise: activeLink is comfortably in the middle, no scrolling needed
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
      if (manualActiveId && Date.now() < manualActiveUntil && id !== manualActiveId) {
        return;
      }

      links.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('data-target-id') === id);
      });

      scrollActiveLinkIntoView(linkById[id]);

      if (shouldSyncHash !== false) {
        syncAddressHash(id);
      }
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

    if (headings[0]) setActive(headings[0].id, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();

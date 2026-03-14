(function () {
  function slugify(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/^\s+|\s+$/g, '')
      .replace(/[\s\u00A0]+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fa5]/g, '')
      .replace(/\-+/g, '-');
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
      toArray(scope.querySelectorAll('h2, h3')).forEach(function (heading) {
        var id = heading.id || slugify(heading.textContent || 'section');
        if (!id) id = 'section-' + (scopeIndex + 1);

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
          text: (heading.textContent || '').replace(/^\s+|\s+$/g, ''),
          level: (heading.tagName || '').toLowerCase()
        });
      });
    });

    if (!headings.length) return;

    var existing = document.querySelector('.quick-toc');
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);

    var toc = document.createElement('aside');
    toc.className = 'quick-toc';
    toc.setAttribute('aria-label', '页面目录');

    var title = document.createElement('button');
    title.type = 'button';
    title.className = 'quick-toc__title';
    title.textContent = '专利条目';
    title.setAttribute('aria-expanded', 'true');
    toc.appendChild(title);

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
    document.body.appendChild(toc);

    title.addEventListener('click', function () {
      var isCollapsed = toc.classList.toggle('is-collapsed');
      title.setAttribute('aria-expanded', String(!isCollapsed));
    });

    var links = toArray(toc.querySelectorAll('.quick-toc__link'));

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('data-target-id') === id);
      });
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

        if (visible.length > 0) {
          var currentId = visible[0].target.id;
          setActive(currentId);
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

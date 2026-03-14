(function () {
  function slugify(text) {
    return (text || '')
      .toLowerCase()
      .trim()
      .replace(/[\s\u00A0]+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fa5]/g, '')
      .replace(/\-+/g, '-');
  }

  function getScopes() {
    const postPageContent = document.querySelector('article.post .post-content.e-content');
    if (postPageContent) {
      return [postPageContent];
    }

    const homeExpandedPosts = document.querySelectorAll('.home .post-list .post-content.e-content');
    if (homeExpandedPosts.length > 0) {
      return Array.from(homeExpandedPosts);
    }

    const fallbackScopes = document.querySelectorAll('.post-content.e-content');
    if (fallbackScopes.length > 0) {
      return Array.from(fallbackScopes);
    }

    return [];
  }

  function buildToc() {
    const scopes = getScopes();
    if (!scopes.length) return;

    const usedIds = new Set(Array.from(document.querySelectorAll('[id]')).map((el) => el.id));
    const headings = [];

    scopes.forEach((scope, scopeIndex) => {
      const scopeHeadings = scope.querySelectorAll('h2, h3');
      scopeHeadings.forEach((heading) => {
        let id = heading.id || slugify(heading.textContent || 'section');
        if (!id) id = `section-${scopeIndex + 1}`;

        const baseId = id;
        let n = 2;
        while (usedIds.has(id)) {
          if (heading.id === id) break;
          id = `${baseId}-${n}`;
          n += 1;
        }

        heading.id = id;
        usedIds.add(id);

        headings.push({
          id,
          text: (heading.textContent || '').trim(),
          level: heading.tagName.toLowerCase(),
        });
      });
    });

    if (!headings.length) return;

    const existing = document.querySelector('.quick-toc');
    if (existing) existing.remove();

    const toc = document.createElement('aside');
    toc.className = 'quick-toc';
    toc.setAttribute('aria-label', '页面目录');

    const title = document.createElement('button');
    title.type = 'button';
    title.className = 'quick-toc__title';
    title.textContent = '专利条目';
    title.setAttribute('aria-expanded', 'true');
    toc.appendChild(title);

    const list = document.createElement('ol');
    list.className = 'quick-toc__list';

    headings.forEach((heading) => {
      const item = document.createElement('li');
      item.className = `quick-toc__item ${heading.level === 'h3' ? 'is-sub' : ''}`;

      const link = document.createElement('a');
      link.className = 'quick-toc__link';
      link.href = `#${heading.id}`;
      link.textContent = heading.text;
      link.dataset.targetId = heading.id;

      item.appendChild(link);
      list.appendChild(item);
    });

    toc.appendChild(list);
    document.body.appendChild(toc);

    title.addEventListener('click', () => {
      const isCollapsed = toc.classList.toggle('is-collapsed');
      title.setAttribute('aria-expanded', String(!isCollapsed));
    });

    const links = Array.from(toc.querySelectorAll('.quick-toc__link'));
    const byId = new Map(links.map((link) => [link.dataset.targetId, link]));

    function setActive(id) {
      links.forEach((link) => link.classList.toggle('is-active', link.dataset.targetId === id));
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible.length > 0) {
            const currentId = visible[0].target.id;
            if (byId.has(currentId)) setActive(currentId);
          }
        },
        {
          rootMargin: '-20% 0px -65% 0px',
          threshold: [0, 1],
        }
      );

      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
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

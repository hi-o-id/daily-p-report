(function () {
  function slugify(text) {
    return (text || '')
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\u00A0]+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fa5]/g, '')
      .replace(/\-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function findScopes() {
    const postScope = document.querySelector('article.post .post-content.e-content');
    if (postScope) return [postScope];

    const homeScopes = document.querySelectorAll('.home .post-content.e-content');
    if (homeScopes.length) return Array.from(homeScopes);

    const fallbackScopes = document.querySelectorAll('.post-content.e-content');
    return Array.from(fallbackScopes);
  }

  function ensureUniqueId(heading, usedIds, fallbackId) {
    let id = heading.id || slugify(heading.textContent) || fallbackId;
    const original = id;
    let index = 2;

    while (usedIds.has(id)) {
      // If heading already has this id and it's only used by itself, allow it.
      const same = document.querySelectorAll(`#${CSS.escape(id)}`);
      if (same.length === 1 && same[0] === heading) break;
      id = `${original}-${index}`;
      index += 1;
    }

    heading.id = id;
    usedIds.add(id);
    return id;
  }

  function buildToc() {
    const scopes = findScopes();
    if (!scopes.length) return;

    const headingList = [];
    const usedIds = new Set(
      Array.from(document.querySelectorAll('[id]'))
        .map((el) => el.id)
        .filter(Boolean)
    );

    scopes.forEach((scope, scopeIndex) => {
      scope.querySelectorAll('h2, h3').forEach((heading, headingIndex) => {
        const id = ensureUniqueId(heading, usedIds, `section-${scopeIndex + 1}-${headingIndex + 1}`);
        headingList.push({
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
    if (!headingList.length) return;

    const existing = document.querySelector('.quick-toc');
    if (existing) existing.remove();

    const toc = document.createElement('aside');
    toc.className = 'quick-toc';
    toc.setAttribute('aria-label', '专利条目导航');
    if (!headings.length) return;

    const toc = document.createElement('aside');
    toc.className = 'quick-toc';
    toc.setAttribute('aria-label', '页面目录');

    const title = document.createElement('button');
    title.type = 'button';
    title.className = 'quick-toc__title';
    title.textContent = '专利条目';
    title.setAttribute('aria-expanded', 'true');
    const title = document.createElement('h2');
    title.className = 'quick-toc__title';
    title.textContent = '目录';
    toc.appendChild(title);

    const list = document.createElement('ol');
    list.className = 'quick-toc__list';

    headingList.forEach((heading) => {
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

    title.addEventListener('click', function () {
      const collapsed = toc.classList.toggle('is-collapsed');
      title.setAttribute('aria-expanded', String(!collapsed));
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
        function (entries) {
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
        { rootMargin: '-20% 0px -65% 0px', threshold: [0, 1] }
      );

      headingList.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });
    }

    if (headingList[0]) setActive(headingList[0].id);
  }

  function init() {
    try {
      buildToc();
    } catch (err) {
      console.error('[quick-toc] failed to initialize', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
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

    if (headings[0]) setActive(headings[0].id);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToc);
  } else {
    buildToc();
  }
})();

/*
 * Simple client-side TOC + scrollspy.
 * - Builds a TOC from h2/h3 elements inside .page-main.
 * - Adds anchors if missing.
 * - Highlights active section using IntersectionObserver.
 */
(function () {
  const main = document.querySelector('.page-main');
  const toc = document.getElementById('toc');
  if (!main || !toc) return;

  const headings = Array.from(main.querySelectorAll('h2, h3'))
    .filter(h => h.textContent && h.textContent.trim().length > 0);

  if (headings.length === 0) {
    // Hide empty TOC card.
    const aside = document.querySelector('.page-toc');
    if (aside) aside.style.display = 'none';
    return;
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s]+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
      .replace(/\-+/g, '-');
  }

  const used = new Set();
  headings.forEach(h => {
    if (!h.id) {
      let base = slugify(h.textContent);
      if (!base) base = 'section';
      let id = base;
      let i = 2;
      while (used.has(id) || document.getElementById(id)) {
        id = `${base}-${i++}`;
      }
      h.id = id;
      used.add(id);
    }
  });

  const ul = document.createElement('ul');
  ul.className = 'toc-list';

  headings.forEach(h => {
    const li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'toc-item toc-h3' : 'toc-item toc-h2';

    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    a.className = 'toc-link';

    li.appendChild(a);
    ul.appendChild(li);
  });

  toc.innerHTML = '';
  toc.appendChild(ul);

  // Smooth scrolling (respect reduced motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  // Scrollspy
  const linkById = new Map();
  toc.querySelectorAll('a.toc-link').forEach(a => {
    const id = a.getAttribute('href').slice(1);
    linkById.set(id, a);
  });

  function clearActive() {
    toc.querySelectorAll('.toc-link.active').forEach(a => a.classList.remove('active'));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length === 0) return;

      const id = visible[0].target.id;
      const a = linkById.get(id);
      if (!a) return;

      clearActive();
      a.classList.add('active');
    },
    {
      root: null,
      rootMargin: '0px 0px -70% 0px',
      threshold: [0, 1]
    }
  );

  headings.forEach(h => observer.observe(h));
})();

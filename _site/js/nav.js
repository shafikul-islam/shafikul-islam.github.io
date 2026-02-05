(function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('navlist');
  if (!toggle || !nav) return;

  const setState = (open) => {
    nav.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    setState(open);
  });

  // Close after clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a && nav.classList.contains('open')) setState(false);
  });

  // Close on resize up
  window.addEventListener('resize', () => {
    if (window.innerWidth > 650 && nav.classList.contains('open')) setState(false);
  });
})();

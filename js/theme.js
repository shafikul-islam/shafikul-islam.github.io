(function () {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const setIcon = (theme) => {
    const icon = btn.querySelector('.theme-icon');
    if (!icon) return;
    // Minimal inline SVG (no external libs)
    icon.innerHTML = theme === 'dark'
      ? '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z"/></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.76 4.84 5.35 3.43 3.93 4.85 5.34 6.26 6.76 4.84ZM1 13h3v-2H1v2Zm10 10h2v-3h-2v3Zm9-10h3v-2h-3v2Zm-2.24 6.16 1.41 1.41 1.42-1.42-1.41-1.41-1.42 1.42ZM18.66 6.26l1.41-1.41-1.42-1.42-1.41 1.41 1.42 1.42ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/></svg>';
  };

  const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    setIcon(theme);
  };

  // init icon
  applyTheme(getTheme());

  btn.addEventListener('click', () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();

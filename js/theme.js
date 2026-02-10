(function () {
  const storageKey = "theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const iconEl = btn ? btn.querySelector(".theme-icon") : null;
  const labelEl = btn ? btn.querySelector(".theme-label") : null;
  const media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  const getStoredTheme = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "dark" || value === "light" ? value : null;
    } catch (e) {
      return null;
    }
  };

  const getSystemTheme = () => (media && media.matches ? "dark" : "light");

  const getTheme = () => {
    const attrTheme = root.getAttribute("data-theme");
    if (attrTheme === "dark" || attrTheme === "light") return attrTheme;
    return getStoredTheme() || getSystemTheme();
  };

  const persistTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // no-op
    }
  };

  const setIcon = (theme) => {
    if (!iconEl) return;
    iconEl.innerHTML = theme === "dark"
      ? '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z"/></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.76 4.84 5.35 3.43 3.93 4.85 5.34 6.26 6.76 4.84ZM1 13h3v-2H1v2Zm10 10h2v-3h-2v3Zm9-10h3v-2h-3v2Zm-2.24 6.16 1.41 1.41 1.42-1.42-1.41-1.41-1.42 1.42ZM18.66 6.26l1.41-1.41-1.42-1.42-1.41 1.41 1.42 1.42ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/></svg>';
  };

  const syncButton = (theme) => {
    if (!btn) return;
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (labelEl) labelEl.textContent = theme === "dark" ? "Dark" : "Light";
    setIcon(theme);
  };

  const applyTheme = (theme, options) => {
    const shouldPersist = options && options.persist;
    root.setAttribute("data-theme", theme);
    if (shouldPersist) persistTheme(theme);
    syncButton(theme);
  };

  applyTheme(getTheme());

  if (btn) {
    btn.addEventListener("click", () => {
      const next = getTheme() === "dark" ? "light" : "dark";
      applyTheme(next, { persist: true });
    });
  }

  const onSystemThemeChange = (event) => {
    if (getStoredTheme()) return;
    applyTheme(event.matches ? "dark" : "light");
  };

  if (media) {
    if (media.addEventListener) {
      media.addEventListener("change", onSystemThemeChange);
    } else if (media.addListener) {
      media.addListener(onSystemThemeChange);
    }
  }
})();

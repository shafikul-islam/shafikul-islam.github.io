(function () {
  "use strict";
  var root = document.documentElement;

  // SMIL illustrations (the WAAM robot) do not follow CSS reduced-motion rules, so pause them here.
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("svg.anim").forEach(function (s) { if (s.pauseAnimations) s.pauseAnimations(); });
  }

  // ---------- Theme toggle (remembers the choice; defaults to system) ----------
  var themeBtn = document.getElementById("theme-toggle");
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function syncThemeButton() {
    if (!themeBtn) return;
    var dark = currentTheme() === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    // Icons are swapped by CSS through data-theme, so make sure it is always set.
    root.setAttribute("data-theme", currentTheme());
  }
  if (themeBtn) {
    syncThemeButton();
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncThemeButton();
    });
  }

  // ---------- Hero photos: crossfade every 4 s ----------
  var heroPhotos = document.querySelectorAll("#hero-photo img");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroPhotos.length > 1 && !reduceMotion) {
    var hi = 0;
    setInterval(function () {
      if (document.hidden) return;
      heroPhotos[hi].classList.remove("is-on");
      hi = (hi + 1) % heroPhotos.length;
      heroPhotos[hi].classList.add("is-on");
    }, 4000);
  }

  // ---------- Mobile navigation ----------
  var navBtn = document.getElementById("nav-toggle");
  var header = document.getElementById("site-header");
  function setNav(open) {
    header.classList.toggle("nav-open", open);
    navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  if (navBtn && header) {
    navBtn.addEventListener("click", function () { setNav(!header.classList.contains("nav-open")); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
    document.addEventListener("click", function (e) {
      if (header.classList.contains("nav-open") && !header.contains(e.target)) setNav(false);
    });
  }

  // ---------- "Show all" toggles ----------
  document.querySelectorAll("[data-show-more]").forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute("data-show-more"));
    if (!target) return;
    var moreLabel = btn.textContent;
    btn.addEventListener("click", function () {
      var hidden = target.hasAttribute("hidden");
      if (hidden) target.removeAttribute("hidden"); else target.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", hidden ? "true" : "false");
      btn.textContent = hidden ? "Show fewer" : moreLabel;
    });
  });

  // ---------- Publication filters ----------
  var pubRoot = document.getElementById("pubs");
  if (pubRoot) {
    var items = Array.prototype.slice.call(pubRoot.querySelectorAll(".pub"));
    var groups = Array.prototype.slice.call(pubRoot.querySelectorAll("[data-group]"));
    var search = document.getElementById("pub-search");
    var empty = document.getElementById("pub-empty");
    var state = { type: "all", topic: "all", q: "" };

    function press(attr, value) {
      document.querySelectorAll("[" + attr + "]").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute(attr) === value ? "true" : "false");
      });
    }
    function apply() {
      var q = state.q.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (el) {
        var ok = (state.type === "all" || el.dataset.type === state.type) &&
          (state.topic === "all" || (el.dataset.tags || "").split("|").indexOf(state.topic) > -1) &&
          (!q || el.textContent.toLowerCase().indexOf(q) > -1);
        el.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        var n = g.querySelectorAll(".pub:not([hidden])").length;
        g.hidden = n === 0;
        var c = g.querySelector("[data-count]");
        if (c) c.textContent = n;
      });
      if (empty) empty.hidden = shown > 0;
    }
    document.querySelectorAll("[data-filter-type]").forEach(function (b) {
      b.addEventListener("click", function () { state.type = b.getAttribute("data-filter-type"); press("data-filter-type", state.type); apply(); });
    });
    document.querySelectorAll("[data-filter-topic]").forEach(function (b) {
      b.addEventListener("click", function () { state.topic = b.getAttribute("data-filter-topic"); press("data-filter-topic", state.topic); apply(); });
    });
    if (search) search.addEventListener("input", function () { state.q = search.value; apply(); });
  }
})();

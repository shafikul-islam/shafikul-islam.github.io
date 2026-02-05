(function () {
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function initNewsScroller() {
    var scroller = qs('.news-scroller');
    if (!scroller) return;

    qsa('[data-news-scroll="top"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        scroller.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    qsa('[data-news-scroll="bottom"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        scroller.scrollTo({ top: scroller.scrollHeight, behavior: 'smooth' });
      });
    });
  }

  function initAbstractToggles() {
    qsa('[data-abstract-toggle]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var card = link.closest('.research-body');
        if (!card) return;
        var full = qs('.abstract-full', card);
        if (!full) return;

        var isHidden = full.hasAttribute('hidden');
        if (isHidden) {
          full.removeAttribute('hidden');
          qsa('[data-abstract-toggle]', card).forEach(function (toggle) {
            toggle.setAttribute('aria-expanded', 'true');
          });
          full.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          full.setAttribute('hidden', '');
          qsa('[data-abstract-toggle]', card).forEach(function (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
          });
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNewsScroller();
    initAbstractToggles();
  });
})();

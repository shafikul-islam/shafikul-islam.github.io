(function () {
  // Mobile Menu Toggle
  var menuToggle = document.getElementById('toggle-main-menu-mobile');
  var mobileMenu = document.getElementById('main-menu-mobile');
  var body = document.body;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('is-active');
      mobileMenu.classList.toggle('open');
      body.classList.toggle('lock-scroll');
    });
  }
})();

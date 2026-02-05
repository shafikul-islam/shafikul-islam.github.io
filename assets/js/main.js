document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle-main-menu-mobile");
    const menu = document.getElementById("main-menu-mobile");

    if (!toggle || !menu) return;

    const closeMenu = () => {
        menu.classList.remove("open");
        toggle.classList.remove("is-active");
        document.body.classList.remove("lock-scroll");
    };

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        toggle.classList.toggle("is-active");
        document.body.classList.toggle("lock-scroll");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuToggle');
    const closeBtn = document.getElementById('closeToggle');
    const navOverlay = document.getElementById('navOverlay');
    const overlayLinks = document.querySelectorAll('.overlay-menu a');

    function openMenu() {
        navOverlay.classList.add('active');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        navOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }

    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    overlayLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
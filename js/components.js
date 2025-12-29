/**
 * Components Loader
 * Loads header and footer components dynamically
 */

async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error('Component load error:', error);
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Load header
    await loadComponent('header-component', 'components/header.html');

    // Load footer
    await loadComponent('footer-component', 'components/footer.html');

    // Re-initialize language after components are loaded
    const savedLang = localStorage.getItem('dermocean_lang') || 'en';
    if (typeof changeLanguage === 'function') {
        changeLanguage(savedLang, false);
    }

    // Re-initialize mobile menu handlers
    initMobileMenu();

    // Initialize sticky header behavior
    initStickyHeader();
});

// Sticky header: top-bar scrolls away, header sticks to top
function initStickyHeader() {
    const topBar = document.querySelector('.top-bar');
    const header = document.querySelector('header');

    if (!topBar || !header) return;

    const topBarHeight = topBar.offsetHeight;
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= topBarHeight) {
            // Header becomes fixed
            if (!header.classList.contains('header-fixed')) {
                header.classList.add('header-fixed');
                document.body.style.paddingTop = headerHeight + 'px';
            }
        } else {
            // Header returns to normal flow
            if (header.classList.contains('header-fixed')) {
                header.classList.remove('header-fixed');
                document.body.style.paddingTop = '0';
            }
        }
    });
}

// Initialize mobile menu event handlers
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileSidebar = document.querySelector('.mobile-menu-sidebar');
    const closeMenu = document.querySelector('.close-menu');

    function closeMobileMenu() {
        if (mobileSidebar) mobileSidebar.classList.remove('active');
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (mobileSidebar) mobileSidebar.classList.add('active');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    // Mobile Submenu Toggle (Resources dropdown)
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const parent = toggle.closest('.mobile-submenu');
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });
}

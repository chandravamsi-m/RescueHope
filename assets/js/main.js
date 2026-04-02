/**
 * RescueHope — Global Interactions
 * Version: 1.1.0 (Modular Components)
 * TODO: Consider separating component loaders into a standalone utility script for better modularity.
 */

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Determine path depth for components
    const path = window.location.pathname;
    const isRoot = path.endsWith('index.html') || path.endsWith('/');
    const isInsidePages = path.includes('/pages/') || path.includes('/auth/');

    let componentPath = 'assets/components/';
    if (isInsidePages) componentPath = '../assets/components/';

    // Load common components
    const loaders = [
        loadComponent('#navbar-placeholder', componentPath + 'navbar.html'),
        loadComponent('#footer-placeholder', componentPath + 'footer.html')
    ];

    await Promise.all(loaders);

    // Initializations
    initNavbar();
    initTheme();
    initRTL();
    initMobileMenu();
    initScrollAnimations();
    initDashboardUI();
    initCardGlow();
});

/**
 * LTR/RTL toggle logic
 */
function initRTL() {
    const toggles = document.querySelectorAll('.rtl-toggle');
    const currentDir = localStorage.getItem('dir') || 'ltr';

    const setDir = (dir) => {
        document.documentElement.setAttribute('dir', dir);
        localStorage.setItem('dir', dir);
        
        // Update all toggle UIs
        toggles.forEach(toggle => {
            const labels = {
                ltr: toggle.querySelector('.rtl-toggle__label.ltr'),
                rtl: toggle.querySelector('.rtl-toggle__label.rtl')
            };
            if (labels.ltr && labels.rtl) {
                if (dir === 'ltr') {
                    labels.ltr.classList.add('bg-primary', 'text-white');
                    labels.rtl.classList.remove('bg-primary', 'text-white');
                } else {
                    labels.rtl.classList.add('bg-primary', 'text-white');
                    labels.ltr.classList.remove('bg-primary', 'text-white');
                }
            }
        });
    };

    setDir(currentDir);

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            setDir(isRTL ? 'ltr' : 'rtl');
        });
    });
}

/**
 * Component Loader
 * Loads external HTML fragments into placeholders
 */
async function loadComponent(selector, url) {
    const placeholder = document.querySelector(selector);
    if (!placeholder) return;

    // Capture classes from placeholder to pass to component
    const placeholderClasses = Array.from(placeholder.classList);

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const html = await response.text();
        
        // Create a temporary element to hold the html
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        // The primary component is the first significant child (e.g., the <nav> tag)
        const component = temp.firstElementChild;
        
        // Transfer classes from the placeholder to the primary component
        if (component) {
            placeholderClasses.forEach(cls => component.classList.add(cls));
        }

        // Replace placeholder with all the content from the fetched file
        placeholder.replaceWith(...temp.childNodes);
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

/**
 * Navbar scroll behavior and mobile menu toggle
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.navbar__toggle');
    const mobileMenu = document.querySelector('.navbar__links');
    const dropdowns = document.querySelectorAll('.navbar__dropdown');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar--scrolled');
            } else {
                navbar.classList.remove('navbar--scrolled');
            }
        });
    }

    // Active Link Detection
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href === 'javascript:void(0)') return;

        // Normalize paths for comparison
        const normalizedHref = href.startsWith('/') ? href : '/' + href;
        const normalizedPath = currentPath === '/' || currentPath === '' ? '/index.html' : currentPath;

        const isExactMatch = normalizedPath === normalizedHref;
        const isIndexMatch = (normalizedPath === '/index.html' && normalizedHref === '/');
        const isParentMatch = normalizedPath.startsWith(normalizedHref.replace('.html', ''));
        
        if (isExactMatch || isIndexMatch || isParentMatch) {
            link.classList.add('!text-primary');
            link.classList.remove('text-neutral-700', 'text-neutral-600', 'text-white/90');
            
            // If it's in a dropdown, also highlight the parent
            const parentDropdown = link.closest('.group');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('a');
                if (parentLink && parentLink !== link) {
                    parentLink.classList.add('!text-primary');
                    parentLink.classList.remove('text-neutral-700', 'text-white/90');
                }
            }
        }
    });
}

/**
 * Dark/Light mode logic with system preference detection
 */
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    };

    if (currentTheme) {
        setTheme(currentTheme);
    } else if (prefersDark.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    const toggles = document.querySelectorAll('.theme-toggle');
    if (toggles.length > 0) {
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                setTheme(isDark ? 'light' : 'dark');
            });
        });
    }
}

/**
 * Dashboard UI specific logic
 */
function initDashboardUI() {
    const toggles = document.querySelectorAll('.sidebar-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (sidebar && toggles.length > 0) {
        const toggleSidebar = (show) => {
            if (show) {
                sidebar.classList.add('is-open');
                overlay?.classList.remove('opacity-0', 'invisible');
                document.body.style.overflow = 'hidden';
            } else {
                sidebar.classList.remove('is-open');
                overlay?.classList.add('opacity-0', 'invisible');
                document.body.style.overflow = '';
            }
        };

        toggles.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = sidebar.classList.contains('is-open');
                toggleSidebar(!isOpen);
            });
        });

        overlay?.addEventListener('click', () => toggleSidebar(false));

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
                toggleSidebar(false);
            }
        });
    }

}

/**
 * Mobile Menu Toggle Logic
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const close = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');
    const menuIcon = toggle?.querySelector('.menu-icon');
    const closeIcon = toggle?.querySelector('.close-icon');

    if (!toggle || !drawer || !overlay) return;

    const toggleMenu = (show) => {
        if (show) {
            drawer.classList.add('is-open');
            overlay.classList.remove('opacity-0', 'invisible');
            document.body.style.overflow = 'hidden';
            if (menuIcon && closeIcon) {
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        } else {
            drawer.classList.remove('is-open');
            overlay.classList.add('opacity-0', 'invisible');
            document.body.style.overflow = '';
            if (menuIcon && closeIcon) {
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
    };

    toggle.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('is-open');
        toggleMenu(!isOpen);
    });

    close.addEventListener('click', () => toggleMenu(false));
    overlay.addEventListener('click', () => toggleMenu(false));

    // Close on link click
    const links = drawer.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
}

/**
 * Basic scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Premium Card Glow Effect
 * Tracks mouse movement for radial gradient highlights
 */
function initCardGlow() {
    const cards = document.querySelectorAll('.card-glow');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

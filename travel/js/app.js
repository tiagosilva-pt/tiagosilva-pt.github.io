// Copyright
const copyrightEl = document.getElementById("copyright");
if (copyrightEl) {
    copyrightEl.outerHTML = `© ${new Date().getFullYear()} <a href='https://tiagosilva-pt.github.io/'>Tiago Silva</a>`;
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navItems = document.querySelectorAll('.nav-item');

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navList.classList.toggle('active');
    });

    navItems.forEach(item => {
        const title = item.querySelector('.nav-title');
        if (title) {
            title.addEventListener('click', (e) => {
                // Only handle click toggle on mobile (when window width <= 768px)
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    // Close other items
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    item.classList.toggle('active');
                }
            });
        }
    });
}
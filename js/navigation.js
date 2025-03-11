document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');

    // Toggle mobile menu
    mobileMenuToggle?.addEventListener('click', (e) => {
        e.stopPropagation(); // Verhindere Bubble-up
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Handle dropdown toggles
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation(); // Verhindere Bubble-up
                const navItem = toggle.closest('.nav-item');
                
                // Close other dropdowns
                document.querySelectorAll('.nav-item.active').forEach(item => {
                    if (item !== navItem) {
                        item.classList.remove('active');
                    }
                });
                
                navItem.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const isClickInside = navLinks.contains(e.target) || mobileMenuToggle.contains(e.target);
            
            if (!isClickInside && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.querySelectorAll('.nav-item.active').forEach(item => {
                    item.classList.remove('active');
                });
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.querySelectorAll('.nav-item.active').forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}); 
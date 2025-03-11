document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');

    // Toggle mobile menu
    mobileMenuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger button
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Handle dropdown toggles
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
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
                document.querySelectorAll('.nav-item.active').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Reset hamburger button
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            document.querySelectorAll('.nav-item.active').forEach(item => {
                item.classList.remove('active');
            });
            
            // Reset hamburger button
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
}); 
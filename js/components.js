document.addEventListener('DOMContentLoaded', function() {
    // Lade Navigation
    fetch('/components/navigation.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            setActiveNavLink();
        });

    // Lade Footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });

    // Setze aktiven Navigation Link
    function setActiveNavLink() {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link, .mega-menu-link');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '/' && link.getAttribute('data-page') === 'home')) {
                link.classList.add('active');
            }
        });
    }
}); 
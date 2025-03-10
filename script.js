// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const caseStudyCards = document.querySelectorAll('.case-study-card');
            
            caseStudyCards.forEach(card => {
                const title = card.querySelector('.card-header h3').textContent.toLowerCase();
                const description = card.querySelector('.case-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Initialize Mermaid diagrams if present
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'neutral',
            flowchart: {
                curve: 'basis',
                padding: 20
            },
            journey: {
                contentHeight: 100,
                width: 1200,
                diagramMarginX: 50,
                diagramMarginY: 10,
                boxTextMargin: 5,
                boxMargin: 10,
                boxWidth: 150,
                boxHeight: 36
            }
        });
    }

    // Animation für Karten beim Laden der Seite
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    caseStudyCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}); 
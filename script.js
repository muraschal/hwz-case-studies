// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Elemente auswählen
    const searchInput = document.getElementById('searchInput');
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    
    // Suchfunktion
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Durch alle Case Study Karten iterieren
        caseStudyCards.forEach(card => {
            // Text aus der Karte extrahieren
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.card-body p').textContent.toLowerCase();
            const caseNumber = card.querySelector('.case-number').textContent.toLowerCase();
            
            // Prüfen, ob der Suchbegriff im Titel, in der Beschreibung oder in der Fallnummer vorkommt
            const isMatch = title.includes(searchTerm) || 
                           description.includes(searchTerm) || 
                           caseNumber.includes(searchTerm);
            
            // Karte anzeigen oder ausblenden
            card.style.display = isMatch ? 'flex' : 'none';
        });
    });
    
    // Animation für Karten beim Laden der Seite
    caseStudyCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}); 
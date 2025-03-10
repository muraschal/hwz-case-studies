# HWZ Case Studies Index

Eine einfache und schöne HTML5-Webseite, die als Index für verschiedene Case Studies dient.

## Live Demo

Die Webseite ist live verfügbar unter: [https://hwz-case-studies.vercel.app](https://hwz-case-studies.vercel.app)

## Übersicht

Diese Webseite bietet einen übersichtlichen Zugriff auf verschiedene Case Studies im PDF-Format. Die Seite verfügt über:

- Responsive Design für alle Geräte
- Suchfunktion zum schnellen Finden von Case Studies
- Moderne Karten-Darstellung mit Hover-Effekten
- Einfache Navigation zu den PDF-Dokumenten
- Automatisches Deployment über Vercel
- Einheitliches Design-System
- Optimierte Performance

## Projektstruktur

```
hwz-case-studies/
├── index.html              # Hauptseite
├── styles.css             # Globale Styles
├── script.js              # JavaScript-Funktionen
├── vercel.json           # Vercel-Konfiguration
├── src/                  # Case Study PDFs und Details
│   ├── 01_PIAGGIO/      # Piaggio Case Study
│   │   ├── 01_PIAGGIO.pdf
│   │   └── piaggio-details.html
│   └── 02_FORD/         # Ford Case Study
│       ├── 02_FORD.pdf
│       └── ford-details.html
└── images/              # Bildressourcen
```

## Dateien

- `index.html` - Die Hauptseite mit der Struktur der Webseite
- `styles.css` - Alle Stile für das Layout und Design
- `script.js` - JavaScript für die Suchfunktion und Animationen
- `src/` - Verzeichnis mit den PDF-Dokumenten und Detailseiten der Case Studies
- `vercel.json` - Konfigurationsdatei für das Vercel-Deployment

## Deployment

Das Projekt wird automatisch auf Vercel deployed. Die Konfiguration erfolgt über die `vercel.json`:

```json
{
    "version": 2,
    "builds": [
        { "src": "*.html", "use": "@vercel/static" },
        { "src": "*.css", "use": "@vercel/static" },
        { "src": "*.js", "use": "@vercel/static" },
        { "src": "images/*", "use": "@vercel/static" },
        { "src": "src/**/*", "use": "@vercel/static" }
    ]
}
```

Bei jedem Push auf den `main`-Branch wird automatisch ein neues Deployment ausgelöst.

## Hinzufügen neuer Case Studies

Um eine neue Case Study hinzuzufügen:

1. Erstellen Sie ein neues Verzeichnis im `src/`-Ordner (z.B. `03_CASENAME/`)
2. Legen Sie die PDF-Datei im neuen Verzeichnis ab (z.B. `03_CASENAME.pdf`)
3. Erstellen Sie eine neue Detail-Seite (z.B. `casename-details.html`) basierend auf den vorhandenen Templates
4. Öffnen Sie die `index.html`-Datei
5. Fügen Sie eine neue Case Study Card hinzu:

```html
<div class="case-study-card">
    <div class="card-header">
        <h3>Name der Case Study</h3>
        <span class="case-number">XX</span>
    </div>
    <div class="card-body">
        <p>Kurze Beschreibung der Case Study</p>
    </div>
    <div class="card-footer">
        <a href="src/XX_CASENAME/XX_CASENAME.pdf" target="_blank" class="btn">
            <i class="fas fa-file-pdf"></i> PDF öffnen
        </a>
        <a href="src/XX_CASENAME/casename-details.html" class="btn">
            <i class="fas fa-info-circle"></i> Details
        </a>
    </div>
</div>
```

6. Ersetzen Sie:
   - `Name der Case Study` mit dem tatsächlichen Namen
   - `XX` mit der Nummer der Case Study (z.B. 03, 04, usw.)
   - `Kurze Beschreibung der Case Study` mit einer kurzen Beschreibung
   - `XX_CASENAME` mit dem tatsächlichen Verzeichnis- und Dateinamen

7. Committen und pushen Sie die Änderungen

## Lokales Entwickeln

1. Klonen Sie das Repository:
```bash
git clone https://github.com/muraschal/hwz-case-studies.git
cd hwz-case-studies
```

2. Öffnen Sie die `index.html` in einem modernen Webbrowser oder nutzen Sie einen lokalen Server:
```bash
python -m http.server 8000
# oder
npx serve
```

## Design-System

Das Projekt verwendet ein einheitliches Design-System mit:

- Konsistente Farbpalette (definiert in CSS-Variablen)
- Einheitliche Typografie
- Wiederverwendbare Komponenten (Cards, Buttons, etc.)
- Responsive Breakpoints
- Standardisierte Abstände und Größen

### Farben anpassen

Die Hauptfarben können in der `styles.css` unter den CSS-Variablen angepasst werden:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* weitere Farben... */
}
```

## Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. 
# HWZ Case Studies Index

Eine einfache und schöne HTML5-Webseite, die als Index für verschiedene Case Studies dient.

## Übersicht

Diese Webseite bietet einen übersichtlichen Zugriff auf verschiedene Case Studies im PDF-Format. Die Seite verfügt über:

- Responsive Design für alle Geräte
- Suchfunktion zum schnellen Finden von Case Studies
- Moderne Karten-Darstellung mit Hover-Effekten
- Einfache Navigation zu den PDF-Dokumenten

## Dateien

- `index.html` - Die Hauptseite mit der Struktur der Webseite
- `styles.css` - Alle Stile für das Layout und Design
- `script.js` - JavaScript für die Suchfunktion und Animationen
- `src/` - Verzeichnis mit den PDF-Dokumenten der Case Studies

## Hinzufügen neuer Case Studies

Um eine neue Case Study hinzuzufügen:

1. Legen Sie die PDF-Datei im `src/`-Verzeichnis ab (z.B. `02_CASENAME.pdf`)
2. Öffnen Sie die `index.html`-Datei
3. Kopieren Sie einen vorhandenen Case Study Card-Block und passen Sie ihn an:

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
        <a href="src/XX_CASENAME.pdf" target="_blank" class="btn">
            <i class="fas fa-file-pdf"></i> PDF öffnen
        </a>
    </div>
</div>
```

4. Ersetzen Sie:
   - `Name der Case Study` mit dem tatsächlichen Namen
   - `XX` mit der Nummer der Case Study (z.B. 02, 03, usw.)
   - `Kurze Beschreibung der Case Study` mit einer kurzen Beschreibung
   - `XX_CASENAME.pdf` mit dem tatsächlichen Dateinamen der PDF-Datei

5. Speichern Sie die Datei

## Lokales Ausführen

Öffnen Sie einfach die `index.html`-Datei in einem modernen Webbrowser, um die Seite anzuzeigen.

## Anpassungen

- Farben können in der `styles.css`-Datei unter den CSS-Variablen im `:root`-Selektor angepasst werden
- Schriftarten und andere Stile können ebenfalls in der `styles.css`-Datei geändert werden 
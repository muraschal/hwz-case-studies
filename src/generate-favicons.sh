#!/bin/bash

# Erstelle Favicon-Verzeichnis
mkdir -p images/favicon

# Konvertiere das Logo in verschiedene Favicon-Größen
convert logo.png -resize 192x192 images/favicon/android-chrome-192x192.png
convert logo.png -resize 512x512 images/favicon/android-chrome-512x512.png
convert logo.png -resize 180x180 images/favicon/apple-touch-icon.png
convert logo.png -resize 32x32 images/favicon/favicon-32x32.png
convert logo.png -resize 16x16 images/favicon/favicon-16x16.png
convert logo.png -resize 70x70 images/favicon/mstile-70x70.png
convert logo.png -resize 150x150 images/favicon/mstile-150x150.png
convert logo.png -resize 310x310 images/favicon/mstile-310x310.png
convert logo.png -resize 310x150 images/favicon/mstile-310x150.png

# Erstelle Safari Pinned Tab SVG
convert logo.png -resize 512x512 -colorspace gray -separate -average images/favicon/safari-pinned-tab.svg

echo "Favicons wurden generiert!" 
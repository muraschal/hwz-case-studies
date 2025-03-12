#!/bin/bash

# Korrigiere alle Asset-Pfade in HTML-Dateien
find src -name "*.html" -type f -exec sed -i '' \
    -e 's|/assets/css/assets/css/styles.css|/assets/css/styles.css|g' \
    -e 's|/assets/assets/assets/assets/images|/assets/images|g' \
    -e 's|/assets/assets/assets/images|/assets/images|g' \
    -e 's|/assets/assets/images|/assets/images|g' \
    -e 's|/assets/assets/js|/assets/js|g' \
    -e 's|/assets/assets/css|/assets/css|g' \
    -e 's|/assets/css/assets|/assets|g' \
    -e 's|/images/favicon|/assets/images/favicon|g' \
    -e 's|/images/|/assets/images/|g' \
    -e 's|/styles.css|/assets/css/styles.css|g' \
    -e 's|/js/|/assets/js/|g' \
    -e 's|/assets/assets/|/assets/|g' \
    -e 's|/assets/css/assets/|/assets/|g' \
    -e 's|/assets/assets/assets/|/assets/|g' {} \; 
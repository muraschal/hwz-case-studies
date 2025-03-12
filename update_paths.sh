#!/bin/bash

# Aktualisiere die Pfade in allen HTML-Dateien
find src -name "*.html" -type f -exec sed -i '' \
    -e 's|../../styles.css|/assets/css/styles.css|g' \
    -e 's|../../js/navigation.js|/assets/js/navigation.js|g' \
    -e 's|../../images|/assets/images|g' \
    -e 's|/images/favicon|/assets/images/favicon|g' \
    -e 's|/images/|/assets/images/|g' \
    -e 's|/styles.css|/assets/css/styles.css|g' \
    -e 's|/js/|/assets/js/|g' {} \; 
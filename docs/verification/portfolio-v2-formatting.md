# Code readability verification

Checked on 6 Nov 2026 on `feature/portfolio-v2-template`. The user requested readable source across all code introduced in compressed form.

## Scope

Formatted 27 active source files: 14 HTML pages, two CSS files, one browser JavaScript file, eight SVG files, and two Node scripts. Applied two-space indentation, readable blocks, consistent spacing, and line breaks with the existing editor-bundled Prettier 3.7.4. No dependencies were installed. The 100-column print width is a preference, not a hard limit: indivisible SVG path attributes remain long to preserve their exact coordinate data.

Added `.editorconfig`, `.prettierrc.json`, and `.prettierignore`. The saved template package is excluded from formatting to retain its SHA-256 provenance; it remains archival source, not the code maintained for the active site. No reset or checkout of user work was performed. Formatting read the current files in place.

The source checker was updated because exact compressed-source comparisons would reject valid formatting and copy edits. It still verifies all immutable reference hashes, the archive hash, raster bytes, and SVG tokens including quoted geometry attributes. It now checks all 14 active pages for shared structure/brand assets and JavaScript parseability. Runtime-file presence does not imply full semantic equivalence to the historical template.

## Fresh checks passed

- Prettier `--debug-check` on all 27 source files before formatting: passed, checking the formatter's syntax-tree round trip. SVG files use the HTML parser override.
- Prettier `--check` on all active source and its JSON configuration after formatting: passed.
- Before/after browser DOM fingerprints across all 14 pages matched after accounting for Prettier removing an irrelevant trailing space in `class="badge-pair "`. Fingerprints compare element structure, attributes, and text with whitespace normalization; script contents are checked separately through syntax and behavior checks.
- `node scripts/check-source.mjs`: 37 reference hashes, archive hash, 32 runtime files, 19 artwork checks, and 14 page contracts passed.
- `node --check assets/js/main.js`, `node --check scripts/preview.mjs`, `node --check scripts/check-source.mjs`, and `git diff --check` passed.
- Chromium: all 14 pages at 360/768/1440 widths in both themes, 84 combinations. Both stylesheets loaded, theme selection applied, images decoded, and no horizontal overflow was detected. No page exceptions or console errors occurred in this matrix.
- All 47 local resource/link/fragment targets resolved.
- Theme switching and reload persistence, mobile menu and Escape focus return, project AI filter/search/empty state, blog QA/Data filters, and keyboard skip-to-main passed after formatting.

## Review

Open `index.html`, `assets/css/style.css`, and `assets/js/main.js` in the editor. The HTML now shows its nested page sections, CSS has declarations on separate lines, and JavaScript has readable statement/function blocks. Use the editor's Prettier Format Document action to maintain the same style.

The [local preview](http://127.0.0.1:4173) remains available for manual review. Screen-reader/physical-device testing, broader browser coverage, and live deployment remain unverified. Nothing was pushed, merged, published, or submitted as a PR.

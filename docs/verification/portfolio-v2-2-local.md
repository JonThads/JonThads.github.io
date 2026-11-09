# Portfolio v2.2 local verification

Date: 9 November 2026. Branch: `feature/portfolio-v2-2-color-themes`.
Base: `origin/qa` at `ee8cb7d`. Local preview: <http://127.0.0.1:4175>.

## Completed checks

- `node scripts/check-source.mjs`: passed 37 reference hashes, archive hash, 30 runtime files, 19 artwork checks, and 13 page contracts. Saved template and logo geometry are intact.
- `node --check` passed for `assets/js/main.js`, `assets/js/v21.js`, and `scripts/preview.mjs`.
- `git diff --check`: no whitespace errors.
- Dependency-free Node VM checks passed 169 head-initialization cases across all 13 active pages: four valid themes, invalid/missing preferences, system light/dark, and unavailable storage.
- Shared-script checks passed four selection/persistence cases, saved custom-theme protection against system changes, cross-tab selection, invalid stored-value fallback, and storage-clear fallback.
- Static headline check confirms that hiding the line break leaves `A practical approach.` with a word separator.
- The initial palette-only candidate passed eight representative text/background pairs per palette: minimum Gundam 5.05:1 and Claude 4.51:1. The Gundam candidate was subsequently revised as recorded below. These calculations are not a complete accessibility audit.
- Local HTTP requests returned 200 for home, project listing, blog listing, CARE article, color tokens, and shared JavaScript.
- Opened the localhost preview in the app browser. Its header exposes Light, Dark, Gundam, and Claude; the page accessibility text contains the separated hero words. Retained this tab as the review output.

## Review

note: The four-way selector keeps fixed dimensions. Themes inherit shared fonts and responsive layout rules. The revised Gundam theme adds scoped decorative shapes, illustration, borders, radii, and shadows; personal header/footer logos remain intact. Light, Dark, and Claude keep their existing visual treatment.

No Playwright tests were run, per user instruction. Full responsive visual comparison, browser console coverage, keyboard and screen-reader review, and physical-device checks have not been performed for v2.2. User visual review remains pending.

## Reproduce

1. In PowerShell at the repository root, run `$env:PORT = '4175'`, then `node scripts/preview.mjs` if the preview is no longer running.
2. Open <http://127.0.0.1:4175>. Use the header color-theme menu to select Light, Dark, Gundam, or Claude.
3. Visit Projects, Blog, and the CARE article; the selected theme should remain. Reload to confirm persistence in your browser.
4. At mobile width, check that the hero reads "A practical approach." with a space and that the theme/menu controls remain usable.

No push, PR, merge, or public deployment was performed. Await a new user go signal before promoting this candidate through qa and main.

## Follow-up review: Gundam and skill cards

The user rejected the generic palette-only Gundam appearance and requested stronger red, anime/mecha motifs, and logo-then-name skill cards. The revised candidate includes an original RX-78-inspired helmet/chest/shield illustration in the desktop identity sheet, red/yellow/blue hero bands, a shield motif, yellow vent geometry, blue header, red primary actions, panel grids, and armor-style cards. The mobile layout retains shared structural rules, with a restrained shield watermark behind the text.

Fresh lightweight checks after the revision:

- All 73 skills have an image before the visible name, across ten semantic lists. All referenced images exist locally.
- The displayed heading is exactly "Technical Skills & Tech Stack". Practice labels use title case; product names preserve canonical casing. Corrected remaining Pytest/PyTest instances on home, projects listing, and the Selenium detail page.
- Recorded logo source hashes match the downloaded files. New SVGs were checked for an SVG root and absence of script elements, foreignObject elements, or onload handlers.
- Eight representative Gundam text/background pairs now have a minimum contrast of 5.30:1; white header text on blue also exceeds 4.5:1.
- All 85 unique images referenced by the home page returned HTTP 200 from the local preview, including the mecha artwork and skill logos.
- Source-fidelity checker still passes 37 saved-reference hashes, archive hash, 30 runtime files, 19 artwork checks, and 13 page contracts. Shared JavaScript syntax and whitespace checks pass.
- Opened the revised skills section in the local browser and selected Gundam using native keyboard interaction. Captured its blue header and corrected section heading. The visual review identified that the blue header needs the existing white JTL variant; scoped that variant to the Gundam header without changing artwork.

Review remains local and pending user approval. No Playwright tests were run. These source/HTTP checks do not establish pixel-level theme parity, image legibility at every breakpoint, full keyboard behavior, or a complete accessibility audit.

## Follow-up: restore personal identity

At the user's request, removed the robot illustration from the home identity panel and deleted its unused SVG asset. Removed the CSS that hid the JTL hero badge. Gundam now shows the existing white JTL variant on its blue panel; the personal logo occupies the same badge stage as the other themes. Retained the requested theme colors and surrounding decoration. The illustration description above records the earlier review state, not the current candidate.

The source-fidelity checker passes after restoring the logo, preserving all 19 archived artwork checks and 13 page contracts. No Playwright tests, push, merge, or deployment were performed.

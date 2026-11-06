# Portfolio v2 local verification

Content-refresh results are recorded in [portfolio-v2-content.md](portfolio-v2-content.md), followed by the latest [readability-formatting checks](portfolio-v2-formatting.md). The sections below retain the initial 10-page implementation and asset-organization evidence; the current site has 14 pages.

Verified on 6 Nov 2026 on `feature/portfolio-v2-template`, based on freshly fetched `qa` at `02fb0f7ad3530c5d02efc81de77349b31732dcae`. Working tree was clean before branch creation; no open PRs were returned. No branches were deleted. No push, PR, merge, or publication was performed. User review and release gates remain pending.

## Implementation and review

Applied the approved [handoff](../planning/portfolio-v2-template/HANDOFF.md) to the public root. The saved package remains intact; repository license, notice, governance, and existing assets remain preserved. The snapshot README, changelog, and historical verification were not copied over repository documents. The newer resume was not migrated.

Self-review found one deployment issue: relative resources in the supplied 404 page would resolve beneath a missing nested URL. **issue (resolved):** add `<base href="/">` to the public 404 page for this root-hosted GitHub Pages user site. The reference remains unchanged. A dependency-free Node preview serves the page with HTTP 404 for missing paths; live GitHub Pages behavior is still untested.

The 37 reference files and source ZIP match their recorded SHA-256 hashes. The 32 implemented runtime files match the reference (text comparison normalizes Windows line endings), allowing the documented 404 base adaptation and CSS/JS relocation with corresponding HTML path changes. SVGs and raster images match byte hashes, preserving final logo geometry and original evidence. Active styles now live in `assets/css/` and behavior in `assets/js/`; superseded v1 CSS/JS files were removed from the active tree and remain in Git history.

## Fresh checks passed

- `node scripts/check-source.mjs`: 37 reference hashes, archive hash, and 32 implemented files passed.
- `node --check assets/js/main.js`, `node --check scripts/preview.mjs`, and `node --check scripts/check-source.mjs`: passed (main.js was initially at the root before organization).
- Playwright Chromium: all 10 pages at 360, 768, and 1440 CSS-pixel widths in both themes, 60 combinations. No horizontal overflow, broken images, missing skip links, duplicate/missing h1, or residual removed footer copy. Lazy screenshots were explicitly decoded for the image checks.
- All 39 distinct local resource/link/fragment targets encountered across the pages resolved successfully. No console errors or page exceptions occurred in the completed page matrix.
- Unsaved theme followed system dark preference. Toggle persisted light theme across reload; saved choice overrode system preference. Theme controls and mobile menu had the expected accessible labels and expanded state.
- Mobile menu opened, closed after navigation, and closed on Escape with focus returned to its trigger.
- First Tab reached the skip link; Enter focused main. Visible solid focus ring observed (CSS specifies 3px; this browser reported 2.4px after device-pixel rounding).
- Project Automation filter returned one result; Postman search returned one; unmatched search showed empty state. Blog QA returned one sample, Data showed empty state, and All restored both samples.
- `/missing/deep/page` returned HTTP 404 with styled heading and loaded JTL logo. Go home navigated to `/index.html`.
- Computed text-contrast scan at desktop width across every page in both themes: 1,042 visible text-bearing elements, no failures against applicable 4.5:1 normal / 3:1 large-text thresholds. Lowest measured pair: 4.88:1 light, 7.08:1 dark. Visible images had alt attributes. This scan excludes raster content and decorative logos and is not a full accessibility audit.
- Screenshots recorded for the home page at all six width/theme combinations. Desktop light and mobile dark screenshots visually inspected for layout, approved logo, role line, blog identity, and compact footer.

Test-harness corrections: image checks initially ran before lazy images loaded; explicitly decoding them resolved that false failure. A contrast probe initially measured during a theme transition; repeating with the saved theme applied before page load produced stable ratios. A literal 3px computed-focus assertion was changed to verify a visible solid ring because browser rounding reports 2.4px. These did not require changes to the approved styles.

## Reproduce and review

1. From the repository root run `node scripts/preview.mjs`; open [localhost](http://127.0.0.1:4173). Expect the approved hero, JTL lightning artwork, exact professional role line, original sections, Signals & Sandbox samples, and compact footer.
2. At 360, 768, and 1440px, inspect home, projects, all three project details, blog, both samples, post template, and 404 in light and dark themes. Expect readable content and no horizontal overflow. All marks should preserve their proportions.
3. Toggle theme and reload/navigate. Expect the chosen theme to persist. Clear localStorage to check system preference fallback.
4. At mobile width open Menu, follow a navigation link, reopen and press Escape. Expect closure, updated expanded state, and restored trigger focus on Escape.
5. Reload, press Tab, and activate Skip to main content. Expect visible focus and focus on main; continue tabbing through controls.
6. On Projects select Automation, then All projects and search Postman, then an unmatched term. Expect one, one, and zero matches respectively. On Blog select QA, Data, and All topics; expect one, zero, and two samples.
7. Visit [a nested missing URL](http://127.0.0.1:4173/missing/deep/page). Expect the styled 404 with working home/projects navigation.
8. Run the source and syntax checks above, then `git diff --check`. Review the diff before authorizing any remote action.

Screenshots: [360 light](portfolio-v2/home-360-light.png), [360 dark](portfolio-v2/home-360-dark.png), [768 light](portfolio-v2/home-768-light.png), [768 dark](portfolio-v2/home-768-dark.png), [1440 light](portfolio-v2/home-1440-light.png), [1440 dark](portfolio-v2/home-1440-dark.png), [mobile detail](portfolio-v2/mobile-detail.png).

## Not verified

Manual NVDA/VoiceOver testing, physical devices, browsers beyond Chromium, a full independent WCAG audit, zoom/high-contrast modes, Google Fonts outage, blocked storage, cross-tab synchronization, and external destination availability/authentication. The earlier Sites verification is historical evidence only. GitHub Pages deployment is pending explicit authorization and was not exercised here.

## Asset organization follow-up

At the user's request, moved the active CSS into `assets/css/` and JavaScript into `assets/js/`, updated all 10 HTML pages, and removed superseded v1 CSS/JS files. The saved template package remains unchanged. The source checker now maps relocated files and permits only the corresponding HTML reference edits plus the existing 404 adaptation.

Fresh checks after organization passed: all 37 reference hashes, archive hash, 32 implemented-file comparisons, JavaScript syntax, and whitespace checks. Repeated the 60 page/width/theme browser combinations and all 39 local targets: both stylesheets loaded on every page, no broken images, overflow, console errors, or script exceptions. Theme persistence, menu/Escape focus, project search/filters/empty state, blog filters/empty state, nested 404 styling/recovery, and keyboard skip-to-main passed. The keyboard check was repeated from a fresh navigation to establish a predictable initial focus position. No additional visual design changes were made; earlier screenshots remain design evidence from before the file moves. User manual review remains pending.

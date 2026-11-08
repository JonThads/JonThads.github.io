# Portfolio v2.1 - UI/UX review mockup

Status: interactive review candidate; not approved for GitHub Pages or replacement of the existing v2 Sites publication.

## Scope agreed on 8 Nov 2026

- Branch from current qa, whose site tree matches current main: `feature/portfolio-v2-1-ui-ux-enhancements`.
- Restore the original portfolio/QA Automation Roadmap's quiet pastel geometry and recognizable tool logos while retaining the v2 typography, content, JTL mark, blog mark, compact footer, and accessible controls.
- Prioritize reading tools, per the user's selection: article contents, reading progress, and device-local bookmarks. Retain the existing topic filters.
- Present a separate private Sites mockup before any live portfolio redeployment. No GitHub push, PR, merge, or live-site replacement is authorized in this task.

## Visual decisions

Use the existing cream/navy base and type families. Add lavender, blush, mint, sky, and honey surfaces as large, static decorative geometry within the home and blog opening cards. Give dark mode corresponding low-luminance hues. Keep shapes away from reading text and controls. Use the tool-logo images embedded in the user-supplied roadmap PDF, extracted without including the PDF or personal roadmap prose in the public assets. Keep the two blog posts clearly marked as illustrative samples.

The home remains an introduction and work portfolio. The blog becomes a reading desk: a spacious illustrated introduction, an article grid with save controls, a saved-only view, and focused article pages with contents navigation and reading progress. No account, server database, fake social metrics, or comments service is introduced. Bookmark state is stored on the reader's browser/device and is described accordingly.

## Reproduced mobile defect

At 360px, switching dark to light changed the page gutter from 16px to 32px. The hero heading gained a line and moved subsequent content by about 46px. The theme label also changed its button width by about 2px.

Root cause: the initial token rule combined `:root` with `:root[data-theme='light']`, giving light shared sizing tokens higher specificity than the mobile `:root` rule. Dark mode inherited the lower-specificity root tokens, so it received the mobile sizes. Shared layout tokens must live on `:root`; dark overrides contain colors only. Theme and menu controls also need fixed dimensions, and alternate SVG icons must share the same grid cell.

## Review and validation

Verify element rectangles before/after theme toggles at 360, 390, 768, and desktop widths, including menu, article contents, and bookmark states. Verify bookmark persistence after reload and across the blog listing/article, reading-progress changes on scroll, keyboard-operable contents links, empty saved view, reduced-motion handling, local links/assets, original artwork fidelity, and console output. Record measured results separately from untested coverage.

The current production GitHub Pages and v2 Sites publication remain the comparison baseline. Review approval is required before integrating or redeploying this candidate there.

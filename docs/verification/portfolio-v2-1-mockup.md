# Portfolio v2.1 mockup validation

Date: 8 Nov 2026. Scope: a review candidate on `feature/portfolio-v2-1-ui-ux-enhancements`, based on the current qa tree, which matches current main's site content. The detached starting worktree was behind the merge-only integration commits; current qa was fetched before creating the new branch. No existing branches were deleted.

## Private Sites review

Review URL: https://jon-thaddeus-portfolio-v21-review.resourcefulgrape2.chatgpt.site

Blog entry point: https://jon-thaddeus-portfolio-v21-review.resourcefulgrape2.chatgpt.site/blog/index.html

Candidate GitHub working-branch commit: `236c7ca`. Separate Sites source commit: `e255a476ddfddc341bf603f7e233c7e4488cd0a6`. Sites project: `appgprj_6af0048c362c81918e247d82d405d602`. Saved review version: `appgprj_6af0048c362c81918e247d82d405d602~appgver_e5e5f105f55c8191910661e2eef2a0d1`.

The native Sites result confirmed this separate private review publication succeeded. No GitHub push/PR/merge or replacement of either existing live portfolio was performed. User review and production promotion remain pending.

## Confirmed checks

- Reproduced v2's mobile theme defect at 360px: a 16px dark gutter versus 32px light gutter changed heading wrapping and moved following content. The theme button also varied in width. The shared-token specificity and control sizing fixes address these causes.
- Measured 42 before/after theme comparisons: all 14 active pages at actual CSS viewport widths of 360px, 768px, and 1440px. Header, content, cards, reading tools, and footer rectangles had a maximum measured change of 0px. No overflow or broken loaded images was detected in these comparisons.
- A separate 390px article check confirmed the mobile menu and expanded contents retained their dimensions/state through a theme switch. The preview browser's pixel ratio was accounted for; final checks verified actual `innerWidth` values rather than assuming requested physical viewport sizes equaled CSS pixels.
- Saving a post changed its state to Saved; it remained saved after reload and appeared as the one result in Saved view. Removing it in that view displayed the empty saved state. Local test data was cleared through the UI afterward.
- An article contents link navigated to the matching heading. The reading percentage and top progress bar changed with reading position; one mobile anchor check displayed 89% with the matching progress value.
- Existing source checker passed: 37 immutable reference hashes, archive hash, 32 baseline runtime files, 19 original artwork checks, and 14 page contracts. New JavaScript syntax checks passed. The approved JTL and blog SVG artwork was preserved.
- The tool images were extracted from page 1 of the supplied roadmap PDF. The PDF itself and its personal learning/career prose are not deployed as website assets. Their caption distinguishes tools in use from those being explored.
- Browser logs inspected during bookmark and reading checks contained no warning or error entries.
- Checked 400 local links/assets/fragments across all 14 pages with no missing targets. Both main page stylesheets use color tokens rather than literal hex colors.
- The copy-code control returned its successful clipboard confirmation. A 640px blog layout check passed with no overflow and correctly clipped rounded article covers. Denied clipboard permission remains untested.

## Scope and remaining limits

This is an interactive mockup for user review. GitHub Pages and the existing v2 Sites publication must not be redeployed from this task. The new private Sites project is only a review destination.

Manual screen-reader testing, physical phones/tablets, additional browser engines, cloud bookmark sync (not implemented), and blocked-storage/clipboard permission scenarios were not verified. Previous independent-WCAG-audit limitations still apply. Theme geometry measurements do not constitute a complete accessibility audit.

## Repeat the review

1. Run `node scripts/preview.mjs` and open the home page. Inspect static pastel shapes, retained JTL identity, and the tool row.
2. Open the blog, save a sample, reload, and choose Saved. Remove it to see the empty state, then return to All topics.
3. Open a sample article. Follow contents links, scroll to see the progress indicator, and inspect the mobile collapsed/expanded contents states.
4. At 360px, 390px, 768px, and desktop width, switch themes without changing viewport or scroll position. Text wrapping, controls, and content placement should remain unchanged.
5. Tab through links, menus, bookmark controls, and article contents. Retain visible focus and Escape-to-close menu behavior.

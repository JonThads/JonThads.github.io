# Portfolio v2.2 promotion

The user reviewed the local candidate and explicitly authorized "Push and merge to 'qa' and 'main'" on 9 November 2026. This approval covers `feature/portfolio-v2-2-color-themes`, including the follow-up that restores the original JTL monogram in the Gundam hero panel. Earlier pending-approval statements in the local review report describe prior checkpoints.

## Approved scope

- Four persistent themes: Light, Dark, Gundam, and Claude, across all 13 active pages.
- Revised Gundam decoration with red shield shapes, yellow vents, and blue panels. Preserve personal JTL and Signals & Sandbox artwork; the robot illustration was removed.
- All 73 skills displayed as local logo/icon-then-name cards, with source attribution and licenses.
- Correct "Technical Skills & Tech Stack", product-name casing, mobile headline spacing, and the home metadata typo.
- Optional local preview port, README, changelog, design and verification notes.

## Verification and review

See [local verification](portfolio-v2-2-local.md) for source hashes, theme-initialization checks, image coverage, contrast calculations, manual review, and limitations. Playwright is intentionally excluded at the user's request. The user approved the final visual result; implementation review found no blocking issues in the scoped source changes. Existing article/bookmark behavior is retained.

Promotion starts from current `origin/qa` at `ee8cb7d`; current `origin/main` is `ff0a923`. Remote state was fetched immediately before release preparation, with no open PRs or intervening qa changes.

Fresh release checks passed all 13 four-theme pages, 444 local links/assets/fragments, 73 skill cards, the explicit mobile word separator, and restoration of the JTL hero panel. Normalized trailing whitespace in vendored assets, refreshed their hashes, and pinned SVG line endings to LF for consistent Windows checkout verification.

The feature was pushed and [PR #9 into qa](https://github.com/JonThads/JonThads.github.io/pull/9) was created. Before integration, GitHub reported it MERGEABLE/CLEAN with no status checks listed.

## Integration and deployment evidence

Use the repository's live records for exact merge SHAs, timestamps, checks, and deployment outcome:

- [v2.2 feature pull requests](https://github.com/JonThads/JonThads.github.io/pulls?q=is%3Apr+head%3Afeature%2Fportfolio-v2-2-color-themes)
- [qa-to-main pull requests](https://github.com/JonThads/JonThads.github.io/pulls?q=is%3Apr+base%3Amain+head%3Aqa)
- [GitHub Actions deployment history](https://github.com/JonThads/JonThads.github.io/actions)
- [Published portfolio](https://jonthads.github.io/)

This record is prepared with the approved source before integration. An open PR or successful push alone does not establish a completed Pages deployment; verify the main merge, successful Pages run, and live HTML/CSS/JS before reporting publication.

## Rollback

If a deployed page fails to load or critical navigation/theme selection breaks, revert the v2.2 changes through a new fix branch and qa/main PRs. Preserve subsequent unique changes. No data migration or account state is involved; theme preferences and reading lists remain browser-local. No force push or destructive reset is part of this promotion.

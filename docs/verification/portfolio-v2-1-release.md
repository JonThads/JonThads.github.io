# Portfolio v2.1 production promotion

## Authorization and scope

On 8 Nov 2026 the user approved the private v2.1 Sites mockup and explicitly requested pushing and merging `feature/portfolio-v2-1-ui-ux-enhancements` through `qa` into `main` to update GitHub Pages. This supersedes the pending promotion gates in the historical mockup report and plan. It does not request replacing the separate v2 Sites publication or deleting branches.

The approved candidate is `236c7ca`, with review-publication documentation in `7fb40ea`. Promotion also records this release handoff. There are no additional UI changes in this promotion step.

## Contents

- Pastel home/blog opening cards and tool logos from the supplied roadmap reference.
- Article contents, reading progress, local bookmarks, saved-post view, and copy-code control.
- Mobile theme geometry fix: shared responsive tokens and stable control dimensions.
- Preserved JTL/blog artwork, current portfolio content, sample labeling, and compact footer.

## Pre-promotion evidence

- Fetched origin and confirmed a clean working tree on the requested feature branch.
- `origin/qa` was `a67c7a0cbf2d32b1d696adeafa07ea2384a55140`; `origin/main` was `df8bdea69a293297c54e9f16c54358fa0e4d5aef`.
- No open PRs were present; the feature branch was two commits ahead of qa, with no remote divergence.
- Fresh source checks passed: 37 immutable reference hashes, archive hash, 32 baseline runtime files, 19 original artwork checks, and 14 page contracts. Both JavaScript files passed syntax checks.
- The unchanged approved candidate's browser evidence is in [the mockup report](portfolio-v2-1-mockup.md): 42 paired theme comparisons at three actual CSS widths with zero measured geometry movement, functional reading/bookmark controls, and 400 local link/asset/fragment checks.
- GitHub Pages uses `main` at `/`, with public URL https://jonthads.github.io/ . Deployment success is checked after main promotion.

## Recovery and completion

This is a static, reversible release with no database migration. The previous production state is the recorded main commit above; a deployment fault can be addressed by reverting the production merge through the normal branch/PR workflow. No branch deletion or force push is part of this promotion.

Integration PR: [v2.1 feature branch into qa, PR #5](https://github.com/JonThads/JonThads.github.io/pull/5). The following qa-to-main promotion PR and GitHub Actions deployment history are the final integration/publication records; the release handoff reports their returned links and results. This file records authorization and pre-promotion evidence. Existing manual screen-reader, physical-device, independent accessibility-audit, and permission-denial testing limits remain documented in the mockup report.

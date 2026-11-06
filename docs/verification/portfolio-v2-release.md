# Portfolio v2 release record

On 6 Nov 2026 the user explicitly requested promotion to `qa` and `main`, superseding the pending review/publication gates recorded in the earlier verification reports. Promotion uses the repository's feature → qa → main PR workflow. No branch deletion or force push is authorized or planned.

## Release contents

- Approved Portfolio v2 design, final JTL and Signals & Sandbox marks, compact footer, and exact professional titles.
- Updated resume-based experience and consolidated technical skills; four additional GitHub project pages.
- Shared assets organized into `assets/css`, `assets/js`, and `assets/logos`; readable source and editor formatting settings.
- Preserved original project routes, screenshots, license/notices, repository governance, and immutable saved reference package.
- User's latest home-page copy edits, including the AI-Assisted Testing label and “I test systems” introduction, are included. Only formatting was normalized before release.

The initial saved snapshot and subsequent content/formatting reports remain historical evidence of their respective stages. Their statements that no publication had occurred describe those earlier stages, not a restriction after this authorization.

Integration record: [Portfolio v2 into qa, PR #3](https://github.com/JonThads/JonThads.github.io/pull/3). The main promotion PR and deployment outcome are recorded in GitHub and the release handoff once completed. GitHub Pages is configured to publish from `main` at `/`, with public URL `https://jonthads.github.io/`.

## Pre-promotion checks

Freshly fetched `origin/qa` and `origin/main` matched the local base `02fb0f7ad3530c5d02efc81de77349b31732dcae`; no open PRs were found. The release branch is `feature/portfolio-v2-template`. Fresh checks passed before promotion: source hashes/artwork/page contracts, JavaScript syntax, Prettier formatting, whitespace, 84 browser page/width/theme combinations, and 47 local resource/link/fragment targets. The browser matrix found no overflow, broken images, console errors, or script exceptions. The earlier reports document check scope and limitations. GitHub Pages deployment is verified after main is updated; PR links and the final outcome are reported with the release.

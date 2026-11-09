# Changelog

All notable changes to this project are documented here, following
[Common Changelog](https://common-changelog.org/). Untagged work accumulates
under Unreleased.

## Unreleased

### Added

- Give all 73 skills a logo-then-name card using local product/ecosystem marks or original concept icons; retain icon sources and licenses
- Add Light, Dark, Gundam RX-78, and Claude choices in a persistent, accessible theme selector on all active pages ([v2.2 plan](docs/planning/portfolio-v2-2-color-themes.md))
- Add the first Signals & Sandbox post, "Prompt Engineering with the CARE Framework", with an AI / Prompting topic filter, blog and homepage cards, and a reading-list entry
- Add a Portfolio v2.1 review candidate with roadmap-inspired pastel opening cards and tool logos, article contents, reading progress, device-local bookmarks, and a saved-post view; retain the approved identity and sample-post labeling ([review plan](docs/planning/portfolio-v2-1-ui-ux.md))
- Add ClockWise, Pickle-Rick, Tokenomics MCP, and ReposRAG project cards and detail pages based on their public GitHub documentation, with source links and explicit scope limitations
- Add the unified Signals & Sandbox blog, two clearly labeled sample posts, reusable post template, and topic filters from the [approved reference](docs/planning/portfolio-v2-template/HANDOFF.md)
- Retain the complete approved template package and its hashes; add dependency-free local preview and source-fidelity checks with [local verification evidence](docs/verification/portfolio-v2.md)
- Add `CLAUDE.md` and `AGENTS.md` so AI agents follow the project standards
- Add `docs/workflow/claude-instructions.md` (branching, commits, comments,
  changelog, documentation rules) adapted from the Pickle Rick standards
- Add `docs/workflow/implementation-workflow.md` (eight-stage workflow)

### Changed

- Record the user's 9 November 2026 approval to promote Portfolio v2.2 through qa and main, retaining the JTL identity panel and skipping Playwright ([release record](docs/verification/portfolio-v2-2-release.md))
- Recalibrate Gundam with red shield motifs, the approved JTL logo, blue panels, yellow vents, panel lines, and mecha-styled cards; capitalize "Technical Skills & Tech Stack" and skill labels while retaining product spellings such as `pytest`, `axe-core`, and `pgvector`
- Replace the two illustrative sample posts and their cards with the published CARE framework post; keep `blog/post-template.html` for future posts
- Record the user's 8 Nov 2026 approval to promote the reviewed v2.1 enhancement branch through qa and main; retain the mockup's validation evidence and document the GitHub Pages release ([promotion record](docs/verification/portfolio-v2-1-release.md))
- Include the user's final introduction/label copy edits and record explicit authorization to promote Portfolio v2 through `qa` and `main` ([PR #3](https://github.com/JonThads/JonThads.github.io/pull/3), [release record](docs/verification/portfolio-v2-release.md))
- Format active HTML, CSS, JavaScript, scripts, and SVG markup for human readability; add shared editor/Prettier settings and update source checks to permit formatting while preserving archived hashes and artwork geometry ([verification](docs/verification/portfolio-v2-formatting.md))
- Reconcile experience with the supplied latest resume, adding Skubbs and correcting Lane/Phoenix dates and duties; consolidate resume/profile technical skills into ten groups without proficiency ratings or planned-tool claims ([sources](docs/planning/portfolio-v2-content-refresh.md))
- Organize active shared styles under `assets/css/` and behavior under `assets/js/`, update all 10 pages and source verification for those paths, and remove superseded v1 CSS/JS files to avoid competing implementations
- Implement Portfolio v2 at the GitHub Pages root, preserving all three project routes, original content/screenshots, final JTL lightning and Signals & Sandbox marks, approved professional titles, and compact footer; use the saved tokens, responsive layouts, themes, search, and navigation
- Convert this changelog to the Common Changelog format; entries below are
  legacy and keep their original wording

### Fixed

- Restore the approved JTL logo in the Gundam hero identity panel and remove the robot illustration at the user's request
- Preserve the space between "practical" and "approach" when the mobile hero hides its desktop line break; correct "Continuous" in the home page description
- Keep mobile light/dark geometry consistent by removing the light theme's higher-specificity shared sizing declarations and assigning stable dimensions to the theme/menu controls; validate the candidate before live integration
- Resolve custom 404 assets and recovery links from the site root so missing nested URLs retain styling and working navigation

## Legacy entries (pre-Common Changelog)

v1.4.0
	[FEATURE] Selenium and TryHackMe
    [DOCS] Added Changelog, .gitignore, Code of Conduct, Revised Readme,

v1.3.2
	[HOTFIX] Project Details CSS Fix
	[DOCS] License and Notice Addition
	
v1.3.1
	Project Showcase and Details
	
v1.3.0
	Project Showcase and Details
	
v1.2.0
	Technical Skills Section update
	
v1.1.0
	Added 404 Page

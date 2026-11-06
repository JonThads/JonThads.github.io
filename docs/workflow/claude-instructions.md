# Claude Instructions

*GitHub Portfolio (JonThads.github.io)*

Adapted from the Pickle Rick standards
(`C:\Projects\pickle-rick\docs\workflow\claude-instructions.md`). This is a
static GitHub Pages site (HTML/CSS/JS), so the Docker, Postman, k6 and
database rules from Pickle Rick do not apply and are intentionally omitted.
Everything else (branching, commits, comments, changelog, documentation,
ticket hygiene) applies in full.

## Branches

- Branch `main` for Production. GitHub Pages deploys from `main`, so anything
  merged there goes live.
- Branch `qa` for QA and review (preview and verification before release).
- Local development branches, all cut from `qa`, prefixed by purpose:
  - `feature/<purpose>` — new functionality or UI/UX changes
  - `fix/<purpose>` — bug fixes
  - `test/<purpose>` — test or tooling work (accessibility, Lighthouse, Playwright)
  - `chore/<purpose>` — dependency, config, or tooling work with no behavior change
  - `docs/<purpose>` — documentation-only changes
  - `refactor/<purpose>` — internal restructuring, no behavior change
  - `ci/<purpose>` — GitHub Actions / pipeline changes

Use [Conventional Branch](https://conventionalbranch.org/). Include the ticket
key when one exists, for example `feature/PF-12-redesign-hero-section`.
Lowercase, hyphen-separated, no trailing hyphens.

### Flow

Development never happens directly on `qa` or `main`.

1. Branch `<prefix>/<purpose>` off `qa`.
2. Open a pull request into `qa`; verify it there.
3. Once `qa` is verified stable, open a pull request from `qa` into `main`.

Never push, merge, or open a PR without the user's go-ahead.

> **Status (2026-11-06):** the remote has no `qa` branch yet (only `main` and
> legacy `dev`, `feature/*`, `hotfix/*`). The user approved pushing `qa` once
> real fixes or enhancements start; push it then, still before opening the
> first PR into `qa`.
>
> **Legacy branches:** the user waived cleanup of old remote branches, since
> this is a personal portfolio with no privacy concerns. Leave them alone
> unless asked.

## Environment

- Preview the site locally (a static server or the built-in browser) while
  developing, so the change is visible, not just committed.
- Check responsive layouts (mobile, tablet, desktop) and light/dark themes
  before calling UI work done.

## Testing and Quality

Before merging UI changes, verify as applicable:

- No broken links, images, or console errors on every page
  (`index.html`, `projects.html`, `404.html`, `projects/*.html`).
- Accessibility holds at the WCAG level the README claims (semantic HTML, alt
  text, keyboard navigation, skip links, contrast, focus indicators, ARIA).
- Responsive behavior at common widths.
- Any test data or temporary files created are removed.

Distinguish checks that passed, checks that failed, and coverage not tested.

## Tech Stack

- HTML, CSS, JavaScript (static site, no build step unless introduced and documented)
- Git and GitHub, GitHub Pages
- Accessibility auditing; Playwright + TypeScript if automated checks are added

## Professional / Production-Grade Conventions

Default to the conventions a real production codebase would use in code, git,
tooling and process, unless a specific doc says otherwise.

### Conventional Commits

Use [Conventional Commits](https://www.conventionalcommits.org/), including the
ticket key when one exists, for example
`feat: PF-12 redesign hero section` or `docs: add project standards`.
Include the ticket key in the pull request title as well. End commits with the
attribution line configured for the session.

### Ticket (Jira) Board Hygiene

When a Jira project exists for this portfolio, every task gets a ticket and its
status moves with the work: To Do, In Development, For Testing, Done. Create
the ticket before coding, comment the PR link at For Testing, and comment PR
links plus how it was verified at Done. Never leave deferred work only in chat.

> **Decision (2026-11-06):** this portfolio has no Jira project. Branch names,
> commits and PR titles omit the ticket key; do not invent one.

### Conventional Comments

Use [Conventional Comments](https://conventionalcomments.org/) in reviews, plus
a reference work item or ticket number where one exists, for example
`suggestion: use a semantic <nav> here, as per PF-12`.

### Common Changelog

Use [Common Changelog](https://common-changelog.org/) in the root
[CHANGELOG.md](../../CHANGELOG.md). Group entries under Changed, Added,
Removed, and Fixed, and link supporting records. Use verified version tags and
release dates only; never invent versions or use commit dates as unverified
release dates. Accumulate untagged work under Unreleased.

### Documentation maintenance

For every completed code, content, configuration or documentation change,
update `CHANGELOG.md` in the same change set. Explain what changed and why,
link the ticket or PR when available, and consolidate related edits into one
entry. Record completed work, not proposals or unrun checks. Update affected
README sections, setup instructions and links alongside the change. Active
plans and designs go in `docs/planning/`, verification reports in
`docs/verification/`, and historical material in `docs/archive/`.

## Implementation workflow

Before every implementation, follow the
[eight-stage workflow](implementation-workflow.md).

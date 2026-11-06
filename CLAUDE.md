# CLAUDE.md

Project: personal GitHub Pages portfolio (JonThads.github.io), a static
HTML/CSS/JS site.

All AI agents working in this repository MUST follow the standards in:

- [docs/workflow/claude-instructions.md](docs/workflow/claude-instructions.md)
  — branching (Conventional Branch, `main`/`qa`, prefixed branches cut from
  `qa`), Conventional Commits, Conventional Comments, Common Changelog,
  documentation maintenance, ticket hygiene.
- [docs/workflow/implementation-workflow.md](docs/workflow/implementation-workflow.md)
  — the eight-stage workflow to follow before and during every implementation.

Key rules at a glance:

1. Never work directly on `main` or `qa`; branch `<prefix>/<purpose>` off `qa`.
2. Commit with Conventional Commits; PR titles follow the same format.
3. Update `CHANGELOG.md` (Common Changelog) in the same change set.
4. Never push, merge, open a PR, or delete branches without the user's go-ahead.
5. Report what was verified and what was not.

Source of these standards: `C:\Projects\pickle-rick\docs\workflow\`.

# Approved Portfolio v2 template - start here

Saved on 6 Nov 2026 for a future chat to implement in this GitHub Pages repository.

## Objective and scope

The user likes the current Portfolio Version 2.0 design and wants to retain it as the implementation reference for a later chat. This package saves that reference; it does not apply the redesign to the live GitHub Pages site.

Implement from the saved files rather than recreating the design from screenshots or starting another visual exploration. Read the repository's AGENTS.md and both linked workflow documents before working. Recheck the current branch and working tree. Preserve unrelated changes. Use a feature branch cut from current qa. Do not push, open a PR, merge, delete branches, or publish to GitHub Pages without the user's explicit go-ahead.

## What is saved

- `site/`: complete buildless HTML/CSS/JavaScript website, SVG logos, original project screenshots, README, license, changelog, and prior verification notes. It contains 10 complete HTML pages, including three project pages, the unified blog, two sample posts, a post template, and 404.
- `portfolio-v2-source.zip`: portable copy of the same site files, with files at the archive root. Extract to a separate folder for review; do not extract over the repository without reconciling its files and standards.
- `snapshot.json`: source identity, SHA-256 hashes for every site file and the archive, and confirmation that ZIP contents match the snapshot.
- `.gitattributes`: preserves the snapshot's exact file bytes across Windows checkouts, so automatic line-ending conversion does not invalidate the hashes.
- This handoff: final accepted decisions, implementation boundaries, and a next-chat prompt.

Source: Sites version 3, commit `b5ef86f239545d773d2c37bb1e00e364a6e7b981`.
Visual reference: https://jon-thaddeus-portfolio-v2.resourcefulgrape2.chatgpt.site . The Site is owner-private; the local files are sufficient if access is unavailable. The GitHub Pages repository is a separate publication.

## Final accepted design

### Personal logo

Use the final approved JTL monogram crossed by a blue lightning stroke. Its L's upper and lower sections use the corrected alignment. The SVG paths in `site/assets/logos/jtl-light.svg` and `jtl-dark.svg` are traced from the approved final artwork and have identical geometry. Preserve these files; do not independently redraw the L or regenerate the logo. `favicon.svg` contains the square browser-icon treatment. The `site-light.svg` and `site-dark.svg` files are compatibility copies of the same JTL artwork.

Rejected directions: circular T badge; firefly; a quote-based logo; plain upright JTL without the preferred lightning. Do not revisit these unless the user requests it. Peters Design Company was broad geometric inspiration, not a source for copied marks.

### Signals & Sandbox

This is ONE blog title and concept. Never split it into Signals and Sandbox categories. Keep the exact spelling "Signals & Sandbox".

The most recent blog mark is `signals-sandbox-v2.svg`: one bold ivory geometric S ribbon in a clipped-corner navy badge, with a teal terminal integrated into the letter. This replaced the original radio-arcs-and-blocks mark following the user's browser comment. Every current blog image references the v2 filename. `signals-sandbox.svg` is a matching compatibility copy.

Keep both example posts clearly marked as samples. Preserve the complete reusable post template and topic filters.

### Hero and footer

- The professional role line is exactly: `IT Professional | Product Quality Engineer | Electronics Engineer`.
- The hero heading remains "A curious mind. A practical approach."
- The footer retains the JTL mark, the owner's name, and `Kapag may alitaptap, tumingin sa mga ulap.`
- The entire lower copyright/navigation row was removed, including its extra name and "Back to the top" link.
- Remove the footer tagline "Keep asking. Keep learning." It is absent in the saved pages.

### Design system and behavior

Use `site/tokens.css`, `site/style.css`, and `site/main.js` as the actual source of truth. The system is named Portfolio v2: deep blue/orange identity, flat fills, hard offset shadows, geometric marks, and light/dark themes. Bricolage Grotesque is the display font, Instrument Sans the body font, and JetBrains Mono the label/code font.

Preserve the theme's inline head script, system preference fallback, localStorage persistence, mobile menu, skip links, visible focus rings, breadcrumbs, timelines, unfilled skill tags, project search/filters, blog topic filters, and restrained reduced-motion handling. No frameworks or build step. Do not introduce gradients, blurred shadows, emoji, or looping motion.

## Content boundaries

The original portfolio's mission, institutional quotes, education, project copy/screenshots, skill categories, employer names and dates, and LinkedIn-only contact were retained. The mission is `To leverage technology to create impactful solutions that will shape the nation.` Education quotes are `Pamantasang Bukas para sa Magandang Bukas` and `Ad Majorem Dei Gloriam`.

The user supplied a newer resume and LinkedIn cover as logo references during design. The newer resume's full work history was NOT migrated into the website. Do not claim that the snapshot contains all latest resume facts. Reconcile content separately if the user requests that scope. Do not publish private resume contact details or attach the resume by default.

## Implementation approach in the next chat

1. Read current repository instructions, this handoff, `site/README.md`, `site/VERIFICATION.md`, and `snapshot.json`.
2. Verify hashes and inspect current repository changes. Follow the repository's branch/review/testing workflow. The template is saved on local branch `docs/save-portfolio-v2-template`. After creating the implementation branch from current qa, restore just the package with `git restore --source=docs/save-portfolio-v2-template --worktree -- docs/planning/portfolio-v2-template`. This keeps the reference available after changing branches. Do not blindly restore the older root README or changelog over newer work.
3. Compare `site/` with the repository's current routes and assets. Prepare the redesign on a feature branch from current qa, preserving repository governance files, license/notices, documentation, and unrelated work. Do not blindly copy the snapshot README or changelog over the repository's existing ones.
4. The snapshot `site/` contents belong at the GitHub Pages root when implemented; the `site/` wrapper and Sites `dist/` convention are reference packaging, not the desired public URL prefix. Do not copy a Sites `.openai/hosting.json` or project identity into the GitHub Pages deployment. None is included in this site snapshot.
5. Keep the three original project routes and add the blog routes from the snapshot. Review custom 404 behavior, relative links, favicon, and asset paths for GitHub Pages.
6. Preview and review mobile/tablet/desktop layouts in both themes, keyboard access, menu, theme persistence, project/blog filters, images, and links. Confirm the final JTL mark's alignment and scaling and the compact footer.
7. Update the repository README, Common Changelog, and verification documentation. Report observed results separately from untested coverage. Stop before shared GitHub changes until explicitly authorized.

## Validation status

Before this package was saved, the Sites implementation had passed checks across 10 pages, three viewport widths (360, 768, 1440), and two themes. Its latest four browser-comment changes were confirmed in the published Site. Local file/fragment checks passed. The snapshot's own VERIFICATION.md records detailed evidence and limitations.

Saving this package verified every copied file and every ZIP entry against the source with SHA-256. No GitHub Pages redesign has been implemented or tested as part of saving the reference. Previous Site checks must not be presented as fresh GitHub Pages results.

Remaining limits include manual screen-reader testing, physical-device testing, broader browser coverage, and an independent WCAG audit. The supplied light signal token on surface-sunken is 4.46:1 and is deliberately not used for text; preserve that constraint.

## Prompt to paste into the next chat

```text
Read C:\Projects\github_portfolio\AGENTS.md and C:\Projects\github_portfolio\docs\planning\portfolio-v2-template\HANDOFF.md. Use the saved site snapshot as the approved Portfolio v2 design and implement it in this GitHub Pages repository. Preserve the final JTL logo, latest Signals & Sandbox mark, footer edits, and professional titles. Follow the repository workflow and verify locally. Do not push, create PRs, merge, or publish without my explicit approval.
```

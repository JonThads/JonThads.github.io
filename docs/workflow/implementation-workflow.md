# Portfolio implementation workflow

Adapted from Pickle Rick's user-approved eight-stage workflow (recorded
2026-11-05). Follow these stages for every implementation. Docker and database
steps are dropped because this is a static site; a local preview replaces them.

1. **Git Branch Cleaning.** Fetch remote references and inspect the working
   tree, open PRs, and local/remote branches. Remove branches only after
   proving their changes were integrated or explicitly abandoned. Preserve
   unique work. Fast-forward integration branches and check again immediately
   before a merge. Legacy remote branches are exempt from cleanup (user
   decision, 2026-11-06); only clean up branches created in the current task.
2. **Git Branch Creation.** Create a purpose-prefixed branch from current `qa`,
   including the ticket key when one exists. Preserve unrelated changes. Start
   a local preview of the site and keep it running through implementation,
   review and testing.
3. **Fix Implementation.** Implement the agreed scope and record material
   design decisions.
4. **Code Review.** Review by the user, the implementing agent, or another AI
   agent as agreed, using Conventional Comments. Resolve actionable findings.
   If the user reserves the review, leave the gate pending.
5. **Fix Testing.** Check all pages for broken links, console errors,
   responsive layout and accessibility. Remove any temporary files. Distinguish
   passing checks, failures, and untested coverage.
6. **Step-by-Step Instructions.** Give the user reproducible steps to view and
   validate the change, with expected results.
7. **Push and Merge to `qa` and `main`.** Respect the user's testing gate. Push
   the reviewed branch, integrate through a PR into `qa`, then promote through
   a PR into `main`. Merging to `main` publishes the live site. Resolve
   divergence without discarding unique commits.
8. **Documentation.** Finalize README and other affected docs, ticket status,
   links, and `CHANGELOG.md`, reconciled with actual validation and merge
   outcomes.

Completion requires evidence for the applicable stages. Work awaiting user
review, testing or a merge remains explicitly pending.

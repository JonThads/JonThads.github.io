# Portfolio v2.2 color themes

User scope: add Gundam and Claude to Light and Dark, fix the mobile headline spacing, provide a localhost preview, and wait for a new go signal before publishing. Do not run Playwright.

Branch: `feature/portfolio-v2-2-color-themes`, based on current `origin/qa` at `ee8cb7d`, retaining the CARE framework article and v2.1 reading tools.

- Gundam RX-78 uses the supplied white, yellow `#fff867`, red `#fb2f38`, blue `#2c52b3`, and gray `#5a5b6d`. Following user feedback, red anchors links and primary buttons using a darker readable variant. A blue header, the approved JTL personal logo, yellow vents, angular shield shapes, panel lines, and armor cards provide the requested anime/mecha character.
- Claude uses supplied terracotta `#c15f3c`, white, ivory `#f4f3ee`, and taupe `#b1ada1`. Darker terracotta supports links and primary buttons; warm neutrals replace the pastel decoration.
- A native labeled select provides four explicit choices without changing control size between themes. Keep the existing `theme` storage key, system light/dark default, cross-tab synchronization, and storage-blocked fallback. Initialize all four values before styles load.
- Keep theme-dependent decoration in CSS scoped to Gundam. Preserve approved personal/blog logos, existing tool artwork, content, fonts, and the shared responsive layout. The home identity sheet retains the JTL logo in every theme. Gundam uses the existing white JTL variant against its blue panel; header/footer marks also remain intact.
- Add an explicit word separator before the responsive headline break. Correct the obvious metadata typo as well.

Review locally on home, projects, blog, and article pages. Check the header at mobile widths and verify "A practical approach." has a space. User review is pending; release authorization from earlier versions does not apply to v2.2.

## Follow-up: skill cards and naming

The user requested an icon followed by a name inside each skill card. Convert all 73 items into semantic lists with local logo/icon files, reserved image dimensions, and a white backing for color/monochrome logo legibility. Retain ten skill groups. Use actual product marks where available, parent/ecosystem marks for related packages, and original concept icons for non-product practices. Preserve canonical product capitalization rather than forcing all names into title case. Set the section heading to exactly "Technical Skills & Tech Stack" and use title case for practice labels. Artwork provenance and licenses belong alongside the local assets.

# Portfolio v2

A complete, buildless HTML/CSS/JavaScript portfolio for Jon Thaddeus Laguitao. Serve this directory as a static site, or copy its contents to the root of a GitHub Pages repository. No installation or build command is required. Sites hosting uses this directory as dist/.

## Files
- index.html: About, Education, Experience, Skills, Contact, selected work, and blog introduction.
- projects.html and projects/*.html: searchable/filterable project index and three detail pages.
- blog/index.html: the unified Signals & Sandbox blog, with topic filters.
- blog/a-small-check-with-a-clear-purpose.html and blog/leave-room-for-the-experiment.html: clearly labeled illustrative samples.
- blog/post-template.html: complete reusable sample post template.
- 404.html: custom not-found page.
- tokens.css: theme, typography, spacing, shape, and shadow variables.
- style.css: shared components and responsive layouts; colors use tokens only.
- main.js: theme persistence, system theme changes, mobile menu, and filters.
- assets/logos/: original fixed-color site badges and unified blog mark.
- assets/images/: original project evidence and institutional assets.

## Design system: Portfolio v2
Deep blue, orange, and badge geometry build on the original identity. Bricolage Grotesque is the display face, Instrument Sans the body face, and JetBrains Mono the label and code face. Fonts load from Google Fonts with local system fallbacks.

Color and layout definitions live in tokens.css. The html element receives data-theme=light or dark before styles load. A saved localStorage theme wins; otherwise the operating system preference applies. The button labels the theme it switches to. Storage access failures do not prevent the site working.

The maximum content width is 1120px; articles use 680px. Shared components include buttons, cards, tags, timelines, post cards, breadcrumbs, a fixed header, and footer. Decorative hairlines use rule; controls use border-strong. Focus rings are 3px with a 2px offset. Only hover-related transitions of 150ms are enabled when reduced motion is not requested. There are no gradients, blurred shadows, or looping animations.

The approved personal logo is the JTL monogram with a blue lightning stroke. Its L uses the alignment approved in the final concept. The light, dark, and monochrome SVG files share identical geometry traced from that approved artwork; do not redraw individual sections independently. Keep the navy, electric blue, and ivory logo colors fixed, preserve its wide proportions, provide clear space, and never stretch or add shadows to it. The browser favicon uses the light-on-navy treatment within a square tile. Blog marks sit on surface-raised. Signals & Sandbox is one title and one concept; topic tags are topics, not separate publications.

## Add a page
Copy a complete page at the same folder depth. Update the title, meta description, breadcrumb, active navigation, and main content. Preserve the inline head theme script, skip link, shared styles, header, main.js, and footer. Adjust ../ prefixes if the page is nested. Keep the original brand marks and use shared classes rather than introducing page-specific color values.

## Add a post
Copy blog/post-template.html to blog/your-slug.html. Replace the sample title, date and datetime, reading time, description, tags, and body. Remove the sample label only when the content is a real published post. Add a matching article card to blog/index.html and optionally index.html. Set data-post and data-topics on the card for filtering. Keep the blog title Signals & Sandbox and the 680px reading column. Code examples use pre/code; callouts use the shared callout component.

## Check a change
1. Open the home page at desktop, tablet, and 360px widths; expect readable text and no horizontal overflow.
2. Switch themes and reload; expect the selected theme to persist on every page.
3. At mobile width, open Menu, follow a link, then reopen and press Escape; expect the menu to close and focus to return to Menu.
4. Tab from the address bar; expect the skip link first, then visible focus on every interactive element.
5. Search and filter projects, including a query with no matches; expect an updated result count and a helpful empty state.
6. Open both sample posts, all three project pages, their screenshots, LinkedIn, and the 404 page.

## Source and content
Original portfolio content and screenshots: https://github.com/JonThads/JonThads.github.io . Original mission, education quotes, experience dates and employer names, skill categories, and Filipino footer are retained. New posts are illustrative samples. Source project screenshot captions describe historical evidence, not newly executed tests. The new Sites project is separate from the existing GitHub Pages repository.

## Verification
See VERIFICATION.md for measured checks and remaining limits. Automated checks do not replace manual screen-reader or real-device testing.

## Blog identity and footer
The Signals & Sandbox logo is a single geometric S ribbon in a clipped-corner navy badge, with a turquoise terminal integrated into the letter. It is original artwork inspired by bold geometric identity design. The same mark is used throughout the home blog section, blog listing, sample posts, and template. The footer keeps the JTL logo, name, and Filipino quote; the redundant bottom row and extra tagline are omitted.

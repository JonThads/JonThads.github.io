# Jon Thaddeus Laguitao - Portfolio
---
Portfolio v2 is a buildless GitHub Pages site for Jon Thaddeus Laguitao: IT Professional | Product Quality Engineer | Electronics Engineer. It uses the [approved saved template](docs/planning/portfolio-v2-template/HANDOFF.md), including the final JTL lightning logo, Signals & Sandbox mark, compact footer, and light/dark themes.

## Local preview and checks

### Portfolio v2.1

The user approved the `feature/portfolio-v2-1-ui-ux-enhancements` candidate for promotion through qa and main on 8 Nov 2026. It adds the supplied roadmap's pastel geometry and extracted tool logos to the home/blog opening cards while retaining the final JTL and blog marks. Reading tools include article contents, progress, local bookmarks, a saved-only listing, and a copy-code control. Bookmarks belong to the current browser/device; there is no account or cloud synchronization.

The candidate adds `assets/css/v21.css` and `assets/js/v21.js` to each active page. New colors live in `tokens.css`. Shared responsive sizing now comes from `:root` so light and dark receive the same media-query values. A new article copied from the template must update its `data-bookmark` slug and `data-post-title` along with the title, date, content, and listing card. Article heading IDs and contents links must stay paired.

See [the 2.1 review plan](docs/planning/portfolio-v2-1-ui-ux.md), [validation notes](docs/verification/portfolio-v2-1-mockup.md), and [production promotion record](docs/verification/portfolio-v2-1-release.md). The private Sites review publication remains separate from the GitHub Pages site and previous v2 Sites publication.

### Serving and checking locally

With Node.js installed, run `node scripts/preview.mjs` from the repository root and open [the local preview](http://127.0.0.1:4173). The server binds only to localhost and returns the custom 404 page for missing URLs. Keep it running while reviewing; Ctrl+C stops it. No package installation or build is required.

Run `node scripts/check-source.mjs`, `node --check assets/js/main.js`, and `node --check scripts/preview.mjs` to verify the approved reference, implementation fidelity, and JavaScript syntax. The source check permits relocating the shared CSS/JS into `assets/` and the GitHub Pages adaptation in `404.html`: `<base href="/">` keeps assets and recovery links working at nested missing URLs. This is a root-hosted user site; deployment under a project subpath would require adjusting that base.

Source files use two-space indentation and readable line breaks. `.editorconfig` and `.prettierrc.json` keep editor formatting consistent; use your editor's Prettier **Format Document** action. Formatting covers active HTML, CSS, JavaScript, scripts, and SVG markup. SVG coordinate strings remain intact. `.prettierignore` excludes the immutable saved template package so its recorded hashes remain valid. No formatter dependency is required to serve the site or run the source checker.

The source checker verifies saved-reference hashes, original raster bytes, SVG artwork tokens, runtime-file presence, page structure/brand contracts, and JavaScript syntax. It permits active content and formatting to evolve; it no longer compares active HTML/CSS/JS byte-for-byte with the compressed template. Browser checks verify behavior and appearance after changes.

Review [the local verification report](docs/verification/portfolio-v2.md) for results, screenshots, limitations, and repeatable browser checks. Promotion follows feature → `qa` → `main` through pull requests; merging into `main` publishes the site and requires explicit approval. The user authorized this Portfolio v2 promotion on 6 Nov 2026; see the [release record](docs/verification/portfolio-v2-release.md).

## Routes and maintenance

- `index.html`: introduction, mission, education, experience, skills, selected work, and LinkedIn contact.
- `projects.html` and seven `projects/*.html` routes: searchable/filterable projects, including ClockWise, Pickle-Rick, Tokenomics MCP, ReposRAG, and the original three project pages with historical screenshots.
- `blog/index.html`: Signals & Sandbox, a single publication with topic filters. The first post covers prompt engineering with the CARE framework.
- `blog/post-template.html`: copy this complete template for a new post, update metadata/content/relative paths, then add a card with `data-post` and `data-topics` to the blog index. Remove sample labels only for real posts.
- `404.html`: custom not-found page.

The design source is `assets/css/tokens.css`, `assets/css/style.css`, and `assets/js/main.js`. Preserve the inline head theme initializer, skip links, focus styles, reduced-motion handling, and original SVG geometry. Google Fonts supplies Bricolage Grotesque, Instrument Sans, and JetBrains Mono with system fallbacks. Superseded v1 CSS/JS files have been removed from the active folders and remain available in Git history. The saved reference package retains its original structure.

The reference package is retained with its original hashes and historical verification. Its README/changelog do not replace repository governance or release history. Experience and technical skills have since been reconciled with the supplied October 2026 resume and public GitHub profile. Project summaries follow the public repositories and distinguish implemented scope from planned work. Contact remains LinkedIn-only; the resume and its private contact details are not included in the site. See [content sources](docs/planning/portfolio-v2-content-refresh.md).

## 🌟 About Me

IT Professional | Product Quality Engineer | Electronics Engineer
I'm an enthusiastic IT professional with a broad foundation in computer science and technology, driven by continuous learning and tackling challenging technical problems. Currently expanding expertise in Automated Testing, Cybersecurity, and Data Science to stay at the forefront of the industry.

## 🎯 Mission

To leverage technology to create impactful solutions that will shape the nation.

## 🎓 Education

	Postgraduate Diploma in Computer Science (2023 - 2025)

	University of the Philippines - Open University
	Coursework: Management Information Systems, Data Structures, Software Engineering, Database Systems


	Bachelor's Degree in Electronics Engineering (2015 - 2021)

	Ateneo de Davao University
	Focus: Multidisciplinary teams, Engineering problem-solving, Global impact assessment

## 💼 Professional Experience

	Product Quality Engineer | Skubbs Pte Ltd (Sep 2026 - Present)

	AI testing platform quality ownership, web/mobile UAT, AI-generated test evaluation, and QA process documentation

	Software Quality Assurance Tester | Lane Systems, Inc. (Sep 2023 - Jun 2026)

	Manual Testing across Performance, Functional, Non-Functional, Black-Box, and Regression Testing
	Ensuring software stability and user accessibility

	Systems Developer / QA Tester | Phoenix Petroleum Philippines, Inc. (Mar 2022 - Jul 2023)

	Quality Assurance Testing, Application Support, IT Level 2 Support
	Database Management, Information Security, Project Management
	Basic Data Engineering

	Auxiliary Building Design Intern | Amplify Inc. (2020)

	CCTV system design using AutoCAD and Microsoft Excel

## ♿ Accessibility

This portfolio targets WCAG Level A accessibility. Local semantic, keyboard, image-alt, responsive, and text-contrast checks passed; this is not an independently audited conformance claim. Manual assistive-technology coverage remains pending. Features include:

	✅ Semantic HTML structure
	✅ Alternative text for images
	✅ Keyboard navigation support
	✅ Skip links for screen readers
	✅ Sufficient color contrast
	✅ Responsive design
	✅ Focus indicators
	✅ ARIA labels and roles

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

	University of the Philippines - Open University for advanced computer science education
	Ateneo de Davao University for foundational engineering principles
	Lane Systems, Inc. for professional growth opportunities
	Phoenix Petroleum Philippines, Inc. for diverse technical exposure
	Open Source Community for tools and inspiration

"Kapag may alitaptap, tumingin sa mga ulap."

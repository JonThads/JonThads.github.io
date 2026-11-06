# Experience, skills, and projects refresh verification

Checked locally on 6 Nov 2026, on `feature/portfolio-v2-template`. User manual review remains pending. No push, PR, merge, or publication was performed.

## Changes reviewed

Read the supplied latest resume and the public GitHub profile/repository READMEs. [Source record and content decisions](../planning/portfolio-v2-content-refresh.md) explain employer attribution, dates, project scope, and excluded planned capabilities. No resume PDF, phone number, email, or address was added to the site.

Experience now has four entries, beginning with Skubbs; Lane and Phoenix dates/duties follow the resume, and the original internship is retained. Technical skills contain ten groups and 73 distinct tags. Four added project pages bring the total to seven projects and 14 HTML pages. The public portfolio and profile repositories are linked separately. Logos, hero titles, footer, CSS, and JavaScript behavior remain unchanged by this content update.

Concurrent editing precaution: home-page changes replaced only the current experience and skills sections at mutation time, preserving the internship and the other page sections. The project listing was updated in place. No reset/restore of the user's working tree was used. User edits made after these checks can require rechecking.

## Fresh results

- `node scripts/check-source.mjs`: 37 saved-reference hashes and archive hash passed; 32 existing runtime-file checks passed. Home and project listing now receive shell/brand checks instead of exact copy comparisons, allowing authorized content changes. The four new pages were covered by browser checks below.
- `node --check assets/js/main.js`, `node --check scripts/check-source.mjs`, and `git diff --check` passed.
- Chromium: 14 routes × 3 widths (360, 768, 1440) × 2 themes = 84 combinations passed. Both local stylesheets loaded, one h1 existed per page, themes applied, all images decoded, and no horizontal overflow was detected.
- All 47 distinct local resource/link/fragment targets resolved. No console errors or page exceptions occurred during the completed page matrix.
- Project listing initially showed seven entries. AI filter returned two and Database returned three. Searching each of ClockWise, Pickle-Rick, Tokenomics, and ReposRAG returned one card; an unmatched term showed the empty state.
- Experience role order and corrected Lane end date passed DOM checks. Skills showed ten categories and 73 case-insensitively unique tags.
- Computed text-contrast checks on the six changed/new pages in both themes scanned 974 visible text-bearing elements without failures against 4.5:1 normal / 3:1 large-text thresholds. This is not a full accessibility audit.
- At mobile width, the Experience anchor heading remained below the fixed header.
- Visually inspected desktop skills and tablet project-list screenshots. Shared cards/tags retain the approved design.

Screenshots: [skills](portfolio-v2-content/skills-desktop-light.png), [experience](portfolio-v2-content/experience-desktop-light.png), [project listing](portfolio-v2-content/projects-tablet-light.png). The fixed header is hidden only during section-image capture so it does not obscure the cropped section headings; site files are unaffected.

## Manual review steps

1. Open [Experience](http://127.0.0.1:4173/index.html#experience) and compare the Skubbs, Lane, and Phoenix summaries/dates with the resume.
2. Open [Skills](http://127.0.0.1:4173/index.html#skills) and review group names and tool coverage.
3. Open [Projects](http://127.0.0.1:4173/projects.html), try AI/Database filters and the search box, then open each new detail page and its GitHub source link.
4. Repeat at mobile/tablet widths and in dark mode. The original three project routes, brand marks, footer, and professional role line should remain available.

## Limits

These checks verify the local portfolio, not the functionality or CI results of the linked projects. Their summaries reflect repository documentation read for this task. Manual screen-reader use, physical devices, browsers beyond Chromium, a full WCAG audit, and live GitHub Pages deployment remain untested. Prior verification reports describe earlier revisions and are not substituted for the fresh checks above.

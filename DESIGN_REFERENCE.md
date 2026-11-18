# Apex Legends visual reference

Reference reviewed: [EA Apex Legends home page](https://www.ea.com/games/apex-legends/apex-legends), checked 18 November 2026. The live page content and navigation were inspected. No browser/DevTools session was available in this environment, so computed CSS values, hover states, and viewport screenshots could not be measured. Values below are implementation targets inferred from the page composition and existing local assets, not claims of exact EA CSS values.

## Visual system observed

| Area              | Reference observation                                                                                            | Fan-site implementation target                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Header            | Compact, dark EA global bar above a distinct game navigation; uppercase, widely spaced labels                    | 72px game navigation on desktop, 60px on compact screens; dark charcoal surface; persistent visible fan-project label |
| Navigation        | Horizontal groups, understated text links, strong download action                                                | 12px uppercase labels, 1.2px tracking, generous 28–44px gaps; high-contrast red CTA                                   |
| Hero              | Full-bleed cinematic key art, dark gradient overlay, large condensed uppercase title and primary download action | 16:9 artwork with cover crop, layered black gradients, responsive 64–112px display type; 48px minimum CTA height      |
| Palette           | Near-black surfaces, warm white text, EA/Apex red accents, occasional light editorial sections                   | `#111315` / `#1b1e20` darks, `#f2f0ea` warm paper, `#d94d35` accent; use gradients for readable image overlays        |
| Typography        | Condensed display headings, compact uppercase labels, clean sans-serif body                                      | Locally licensed Oswald display + system body stack; headings use tight line-height and tracking                      |
| Content           | Event hero and feature panels, then Legends, modes, maps, lore, news and download/signup areas                   | Distinct full-width sections with 12-column-like grids, broad gutters, editorial light/dark alternation               |
| Cards and imagery | Large rectangular image panels with darkened lower copy areas; artwork keeps cinematic wide crops                | 16:9 feature cards, 3:4 transparent character renders, 1px low-contrast borders, restrained radius (2–6px)            |
| Interaction       | Clear button hierarchy and carousel/event links; hover is secondary to imagery                                   | 180–550ms transitions, subtle image zoom, underline/arrow movement, visible keyboard focus                            |
| Responsive        | Navigation and content adapt to narrower viewports; broad panels collapse to stacked sections                    | 1024px / 768px / 640px breakpoints; 2-column cards at tablet and single-column hero/content on small phones           |
| Footer            | Large utility footer with platform, legal and social destinations                                                | Fan-project footer with working internal routes and official external links; no fabricated actions                    |

## Sources and asset notes

- [EA Apex Legends home page](https://www.ea.com/games/apex-legends/apex-legends) — page structure, navigation labels, Features, Legends, Maps, News and official destinations.
- [EA Characters Hub](https://www.ea.com/games/apex-legends/apex-legends/characters-hub) — existing locally stored Legend artwork attribution is listed in `README.md`.
- [EA Maps Hub](https://www.ea.com/games/apex-legends/apex-legends/game-objects/maps-hub) — existing E-District image attribution is listed in `README.md`.
- [EA content policy](https://help.ea.com/en/articles/security-and-rules/ea-content-policy/) — personal fan projects may use EA game content under stated conditions; no endorsement should be implied, and third-party licensed content is excluded.
- [EA Apex font stylesheet](https://www.ea.com/fonts/apex-legends/fonts.css) — linked by the existing README as the source of Duke and TT Lakes. These fonts are not bundled because redistribution permission was not established.

This is a non-official fan project. EA artwork remains the property of its respective rights holders. No EA stylesheet or source code is copied into this repository.

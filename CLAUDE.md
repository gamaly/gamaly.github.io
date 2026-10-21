# gamaly.github.io

Personal website for Gregory Maly. Live at https://www.gregorymaly.com (also https://gamaly.github.io).

## Structure

Static site, no build step. Each page is self-contained — its own HTML, CSS, and JS in one file, with the design tokens duplicated rather than shared. There is no stylesheet to import, so a change to the palette or type means editing every page.

- `index.html` — the whole profile on one screen. Dateline, name, then the first-person bio in the left rail as `.intro` paragraphs (the one-line lede was removed from the page; it survives only in the meta description, social tags, and `og-card.png`), then Now / Advisory, teaching & other work / Before / Selected builds / Recent writing / Elsewhere, and a footer of links. Recent writing (`.writing`) is a hand-kept list of Substack posts, newest first; add new posts at the top. The only JS is a short inline script that opens the Bait to Plate YouTube video in a native `<dialog>` (`.video`); the player is injected on click and removed on close, and the link falls back to YouTube without JS.
- `card/index.html` — contact card at `/card/`. Renders a vCard QR from a hardcoded `VCARD` array; the only runtime dependency is `qrcode-generator` from jsDelivr.
- `work/bait-to-plate/index.html` — case study. Wide page (`72rem`) with text held to a `40rem` column, full-width figures, and a Google Drive video embed. Screenshots live in `work/bait-to-plate/images/`.

Everything in the repo is published as-is, including files nothing links to. Keep drafts and scratch out of the tree — `.gitignore` covers `preview.html` and `*.local.html`.

`CNAME` holds the custom domain (`www.gregorymaly.com`). Pages is Actions-sourced, so this file — not the Pages settings UI — is what binds the domain; the apex redirects to `www`.

## Editing

Open the file in any text editor and change the content directly. To see changes, open it in a browser (double-click or `File > Open`).

To change what the QR encodes, edit the `VCARD` array in `card/index.html` — it drives the QR, the `.vcf` download, and nothing else. Keep the payload short; past ~420 bytes the QR needs a higher version and gets hard to scan in print.

## Deploying

Commit and push to `master`. GitHub Actions deploys automatically via `.github/workflows/deploy.yml` — takes ~15 seconds, no build required.

## Design

Minimal wire-service: white paper, near-black ink, one ultramarine accent, and **no rules anywhere**. Separation comes from whitespace alone — flex `gap`, not borders. Don't reintroduce hairline dividers, boxes, cards, shadows, or border radius; the rules were removed deliberately and the spacing was retuned to replace them.

One typeface does everything, so hierarchy lives in **weight, size, and case**:

- Headline 800 at `-0.035em`; entry titles, org names, and schools 700 at `-0.022em`; body 400.
- Metadata (labels, roles, buttons, links, notes) is uppercase at `0.75rem` with `letter-spacing` around `0.1em`.
- Body sits at `1rem`, not the browser default — the sans reads optically larger than a serif at the same size.

**Font** (Google Fonts, loaded in `<head>`; both pages load the same stylesheet):
- Libre Franklin — everything. `--display` and `--meta` both point at it; they stay separate variables so the pairing can be split again without touching rules.

**Colors** (CSS custom properties in `:root` inside the `<style>` block, duplicated in both pages):
- `--paper: #FFFFFF` — page background
- `--ink: #0E0E0C` — primary text and button fills
- `--ink-soft: #3A3A36` — body copy and descriptions
- `--ink-mute: #75736C` — metadata, roles, captions
- `--rule: #D6D4CC` — the hero separator glyph, the scrolled-masthead hairline, and resting link underlines; it no longer draws dividers
- `--accent: #26418F` — active labels, section numbers, link underlines, hover states

**Dark mode** (`index.html` only, so far): the same paper/ink relationship inverted, declared as token overrides inside `@media (prefers-color-scheme: dark)` — never as new rules. `--paper: #121211`, `--ink: #F4F3EF`, `--ink-soft: #C9C7C0`, `--ink-mute: #928F87`, `--rule: #3B3A36`, and `--accent: #8AA4EE`, because `#26418F` is unreadable on a dark ground. `:root` carries `color-scheme: light dark`, and `theme-color` is declared twice with `media` attributes. Every pairing clears WCAG AA; re-check if you touch a token. There is no toggle — the page follows the OS, and a manual switch would mean more JS and stored state.

`work/bait-to-plate/index.html` is still light-only. Anyone adding dark mode there has the figures to think about: `.fig-dark` screenshots sit on a dark ground that will need to hold up against a dark page.

Keep the token list honest: unused custom properties were removed once the rules came out, so anything declared here should have a `var()` referencing it.

**No nav.** `index.html` is one screen with no masthead, no anchors, and no scroll behaviour — the sections are short enough that navigation would cost more than it saves. The case study keeps its own sticky masthead, whose links point back at `../../` (site root), not at anchors.

## CSS class conventions

`index.html` (compact profile):

- `.page` — the whole frame. Caps at `68rem`; a single column below `60rem`, then a `21rem 1fr` grid above it: left rail (dateline, name, lede, intro) and right column of sections.
- `.portrait` — the black-and-white headshot at the top of the rail, `7.5rem` and round. It is the one deliberate exception to the no-border-radius rule; no border or shadow.
- `.section-label` — section headings (Now, Before, …) at `1.5rem`/800 in ink. They were small uppercase accent labels until the page got longer and the sections stopped reading as separate; sections sit `4rem` apart.
- `.dateline` / `.entry-role` / `.entry-link` / `.footer` — the metadata register: uppercase `0.75rem`, `letter-spacing: 0.1em`. Links are accent; dateline and roles are `--ink-mute`.
- `.entries` / `.entry-title` + `.entry-role` + `.entry-body` — one job or engagement per `<article>`, stacked at `gap: 1.375rem`.
- `.entry-lead` — the main job (The Outlaw Ocean Project), alone under "Now" and one step larger. Everything else current sits under "Advisory, teaching & other work" at the normal entry size; keep that split.
- `.prose` — running copy inside a section, held to `42rem`. `.prose strong` is the lead-in ("Earlier — ").
- `.entry-link` — uppercase accent link with a trailing arrow (a CSS `::after`, not an SVG).

`work/bait-to-plate/index.html` still uses the older `.container` / `.item-list` / `.item` / `.row-list` vocabulary. It was left alone; the two pages no longer share class names, only tokens.

## Motion

Under 450ms with `ease-out`, behind a `prefers-reduced-motion` guard. `index.html` has two: one page-load `settle`, and link underlines that wipe in via `background-size`. The scrolled-masthead hairline survives only on the case study, which still has a masthead. Resist per-section scroll reveals — they were considered and rejected.

## Assets

`icons/` holds a generated QR-mark used as favicon, apple-touch-icon, and PWA icon (32/180/192/512), plus `og-card.png` — the 1200×630 social preview, rendered from Libre Franklin in the site palette. Regenerate it if the name or lede changes, or link previews go stale. `card/manifest.webmanifest` and `card/sw.js` make `/card/` installable and offline-capable; **bump `CACHE` in `sw.js` whenever the card page changes**, or installed phones keep serving the old copy.

`icons/greg-maly.jpg` is the 800px portrait, downsized from a full-size PNG that is gitignored; it is also the `image` on the `Person` node.

Give every `<img>` explicit `width`/`height` plus `loading="lazy"`, so figures reserve their space before decoding. The portrait is the exception on `loading`: it is the first thing on the page, so it loads eagerly. Dark UI screenshots take `.fig-dark`; near-square ones also take `.fig-tall`, which caps them at `44rem` so they don't tower.

## SEO

Absolute URLs everywhere: canonical, `og:url`, `og:image`, sitemap. The site answers on two hostnames and only `www.gregorymaly.com` should accumulate signal.

- Each indexed page carries `<link rel="canonical">`, an OG block with the shared `icons/og-card.png`, and `twitter:card = summary_large_image`.
- `index.html` holds one `Person` node in JSON-LD, `@id` = `https://www.gregorymaly.com/#greg-maly`. The case study's `Article` node references that `@id` as its author rather than restating the person — keep it that way so the two pages resolve to one entity.
- `alternateName` carries "Gregory Maly" so the formal spelling (and the domain) still resolves to the same person as the displayed "Greg Maly".
- `robots.txt` points at `sitemap.xml`; the sitemap lists only the two public pages. Bump `lastmod` on real content changes.
- Do not chase broad executive/recruiting queries — those SERPs belong to LinkedIn and job boards. The page is built to win the name and specific long-tail work queries.

## Privacy notes

`/card/` is deliberately unlinked from the site: its vCard carries a personal phone number. Unlinked is not private — the repo is public and the URL resolves — so don't add links to it without asking. It also carries `<meta name="robots" content="noindex, nofollow">` and is absent from `sitemap.xml`. Deliberately it is **not** disallowed in `robots.txt`: a disallow would stop crawlers reading the noindex, and would advertise the path in a public file.

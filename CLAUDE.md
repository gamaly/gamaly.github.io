# gamaly.github.io

Personal website for Gregory Maly. Live at https://www.gregorymaly.com (also https://gamaly.github.io).

## Structure

Static site, no build step. Each page is self-contained — its own HTML, CSS, and JS in one file, with the design tokens duplicated rather than shared. There is no stylesheet to import, so a change to the palette or type means editing every page.

- `index.html` — the whole profile on one screen. ~330 words: dateline, name, one-line lede, an intro paragraph, then Now / Before / Selected builds / Elsewhere, and a footer of links. No JS at all.
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

Keep the token list honest: unused custom properties were removed once the rules came out, so anything declared here should have a `var()` referencing it.

**No nav.** `index.html` is one screen with no masthead, no anchors, and no scroll behaviour — the sections are short enough that navigation would cost more than it saves. The case study keeps its own sticky masthead, whose links point back at `../../` (site root), not at anchors.

## CSS class conventions

`index.html` (compact profile):

- `.page` — the whole frame. Caps at `68rem`; a single column below `60rem`, then a `21rem 1fr` grid above it: left rail (dateline, name, lede, intro) and right column of sections.
- `.dateline` / `.section-label` / `.entry-role` / `.entry-link` / `.footer` — the metadata register: uppercase `0.75rem`, `letter-spacing: 0.1em`. Labels are accent; dateline and roles are `--ink-mute`.
- `.entries` / `.entry-title` + `.entry-role` + `.entry-body` — one job or engagement per `<article>`, stacked at `gap: 1.375rem`.
- `.prose` — running copy inside a section, held to `42rem`. `.prose strong` is the lead-in ("Earlier — ").
- `.entry-link` — uppercase accent link with a trailing arrow (a CSS `::after`, not an SVG).

`work/bait-to-plate/index.html` still uses the older `.container` / `.item-list` / `.item` / `.row-list` vocabulary. It was left alone; the two pages no longer share class names, only tokens.

## Motion

Under 450ms with `ease-out`, behind a `prefers-reduced-motion` guard. `index.html` has two: one page-load `settle`, and link underlines that wipe in via `background-size`. The scrolled-masthead hairline survives only on the case study, which still has a masthead. Resist per-section scroll reveals — they were considered and rejected.

## Assets

`icons/` holds a generated QR-mark used as favicon, apple-touch-icon, and PWA icon (32/180/192/512). `card/manifest.webmanifest` and `card/sw.js` make `/card/` installable and offline-capable; **bump `CACHE` in `sw.js` whenever the card page changes**, or installed phones keep serving the old copy.

Give every `<img>` explicit `width`/`height` plus `loading="lazy"`, so figures reserve their space before decoding. Dark UI screenshots take `.fig-dark`; near-square ones also take `.fig-tall`, which caps them at `44rem` so they don't tower.

## Privacy notes

`/card/` is deliberately unlinked from the site: its vCard carries a personal phone number. Unlinked is not private — the repo is public and the URL resolves — so don't add links to it without asking.

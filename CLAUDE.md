# gamaly.github.io

Personal website for Gregory Maly. Live at https://www.gregorymaly.com (also https://gamaly.github.io).

## Structure

Static site, no build step. Each page is self-contained — its own HTML, CSS, and JS in one file, with the design tokens duplicated rather than shared. There is no stylesheet to import, so a change to the palette or type means editing every page.

- `index.html` — the main site.
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

**Nav anchors**: `#work`, `#speaking`, `#education`, `#contact`

## CSS class conventions

- `.section-label` — kicker row. Wrap the leading number in `.section-num` (accent, tabular). Numbers run `01`–`08` in document order — renumber if you add a section.
- `.item-list` / `.item` — entry rows, spaced by `gap: 2.75rem`. `.item` is a two-column grid (`15rem 1fr`) above `48rem`, single column below. Left column holds `.item-title` + `.item-role` + `.item-active`; right column holds `.item-body` / `.item-body-sm` and `.item-footer`.
- `.row-list` / `.row` — same grid at `gap: 1.5rem`, for technical / speaking. Left column is `.row-label`.
- `.item-link` — uppercase external link with accent underline and arrow icon.
- `.container` caps width at `60rem`; add `.measure` to hold running prose to `42rem`.

## Motion

Three effects only, all under 450ms with `ease-out`, all behind a `prefers-reduced-motion` guard: link underlines wipe in via `background-size`, one page-load `settle`, and the masthead gains a hairline past 40px of scroll (an inset shadow, so nothing reflows). Resist per-section scroll reveals — they were considered and rejected.

## Assets

`icons/` holds a generated QR-mark used as favicon, apple-touch-icon, and PWA icon (32/180/192/512). `card/manifest.webmanifest` and `card/sw.js` make `/card/` installable and offline-capable; **bump `CACHE` in `sw.js` whenever the card page changes**, or installed phones keep serving the old copy.

Give every `<img>` explicit `width`/`height` plus `loading="lazy"`, so figures reserve their space before decoding. Dark UI screenshots take `.fig-dark`; near-square ones also take `.fig-tall`, which caps them at `44rem` so they don't tower.

## Privacy notes

`/card/` is deliberately unlinked from the site: its vCard carries a personal phone number. Unlinked is not private — the repo is public and the URL resolves — so don't add links to it without asking.

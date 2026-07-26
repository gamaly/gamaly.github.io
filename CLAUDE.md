# gamaly.github.io

Personal website for Gregory Maly. Live at https://www.gregorymaly.com (also https://gamaly.github.io).

## Structure

Static site, no build step. Two pages:

- `index.html` — the main site. All HTML, CSS, and JavaScript in one file.
- `card/index.html` — contact card at `/card/`. Renders a vCard QR from a hardcoded `VCARD` array; the only runtime dependency is `qrcode-generator` from jsDelivr.

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
- `--rule: #D6D4CC` — retained for the hero separator glyph and as a hover tint; no longer draws dividers
- `--rule-strong: #0E0E0C` — currently unused
- `--accent: #26418F` — active labels, section numbers, link underlines, hover states
- `--accent-dark: #1A2E66` — darker accent (index only)

**Nav anchors**: `#work`, `#speaking`, `#education`, `#contact`

## CSS class conventions

- `.section-label` — kicker row. Wrap the leading number in `.section-num` (accent, tabular). Numbers run `01`–`08` in document order — renumber if you add a section.
- `.item-list` / `.item` — entry rows, spaced by `gap: 2.75rem`. `.item` is a two-column grid (`15rem 1fr`) above `48rem`, single column below. Left column holds `.item-title` + `.item-role` + `.item-active`; right column holds `.item-body` / `.item-body-sm` and `.item-footer`.
- `.row-list` / `.row` — same grid at `gap: 1.5rem`, for technical / speaking. Left column is `.row-label`.
- `.item-link` — uppercase external link with accent underline and arrow icon.
- `.container` caps width at `60rem`; add `.measure` to hold running prose to `42rem`.

## Assets

`icons/` holds a generated QR-mark used as favicon, apple-touch-icon, and PWA icon (32/180/192/512). `card/manifest.webmanifest` and `card/sw.js` make `/card/` installable and offline-capable; bump `CACHE` in `sw.js` when the card page changes.

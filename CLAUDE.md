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

Editorial / newsprint: true white paper, near-black ink, hairline rules, one ink-red accent. Structure comes from ruled rows and a label/rule kicker, not from cards or shadows. Border radius is 0 throughout.

**Fonts** (Google Fonts, loaded in `<head>`; both pages load the same stylesheet):
- Newsreader — display headings and body text (`--display`)
- Archivo Narrow — kickers, labels, metadata, nav, buttons; always uppercase with `letter-spacing` around `0.1em` (`--meta`)

**Colors** (CSS custom properties in `:root` inside the `<style>` block, duplicated in both pages):
- `--paper: #FFFFFF` — page background
- `--ink: #0E0E0C` — primary text, button fills, hard rules
- `--ink-soft: #3A3A36` — body copy and descriptions
- `--ink-mute: #75736C` — metadata, roles, captions
- `--rule: #D6D4CC` — hairline dividers
- `--rule-strong: #0E0E0C` — the `3px double` masthead and footer rules
- `--accent: #A6231B` — active labels, section numbers, link underlines, hover states
- `--accent-dark: #7E1913` — darker accent (index only)

**Nav anchors**: `#work`, `#speaking`, `#education`, `#contact`

## CSS class conventions

- `.section-label` — kicker row; flex, with `::after` drawing the rule out to the right edge. Wrap the leading number in `.section-num` (accent, tabular). Numbers run `01`–`08` in document order — renumber if you add a section.
- `.item-list` / `.item` — ruled entry rows. `.item` is a two-column grid (`15rem 1fr`) above `48rem`, single column below. Left column holds `.item-title` + `.item-role` + `.item-active`; right column holds `.item-body` / `.item-body-sm` and `.item-footer`.
- `.row-list` / `.row` — same grid at tighter padding, for technical / speaking. Left column is `.row-label`.
- `.item-link` — uppercase external link with accent underline and arrow icon.
- `.container` caps width at `60rem`; add `.measure` to hold running prose to `42rem`.

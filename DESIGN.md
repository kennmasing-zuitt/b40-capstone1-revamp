---
name: AltMobility Philippines (revamp)
colors:
  baseblue: '#30506e'
  basebluedark: '#223a50'
  rightsblue: '#72a1b4'
  rightsbluedark: '#3d6d80'
  rightsbluelight: '#e8f1f5'
  bodytext: '#43454a'
  subtlebg: '#f8fafc'
  bordercolor: '#e2e8f0'
  white: '#ffffff'
  line-pnr: '#f97316'
  line-lrt1: '#fff23b'
  line-lrt2: '#924ac2'
  line-mrt3: '#3f94fc'
  line-4: '#fa66fa'
  line-5: '#7acc54'
  line-6: '#eb9d31'
  line-7: '#963d27'
  line-8: '#754e1b'
  line-9: '#db0000'
  line-pnr-north: '#126e3d'
  line-pnr-south: '#0c5b82'
typography:
  display-hero:
    fontFamily: Oswald
    fontSize: 128px
    fontWeight: '700'
    lineHeight: 128px
    letterSpacing: '-3.2px'
  display-hero-mobile:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: '-1.2px'
  hero-sub:
    fontFamily: Saira Extra Condensed
    fontSize: 30px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 6.6px
  hero-sub-mobile:
    fontFamily: Saira Extra Condensed
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 4.4px
  section-title:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: '-1.2px'
  section-title-mobile:
    fontFamily: Oswald
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: '-0.75px'
  quote:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
  quote-mobile:
    fontFamily: Oswald
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 37.5px
  card-title:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.6px
  line-name:
    fontFamily: Oswald
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  stat-number:
    fontFamily: Oswald
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
  eyebrow:
    fontFamily: Saira Extra Condensed
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 3px
  nav-link:
    fontFamily: Saira Extra Condensed
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.9px
  button-label:
    fontFamily: Saira Extra Condensed
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 1px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.6px
rounded:
  logo-box: 8px
  card-sm: 12px
  card: 16px
  panel: 24px
  pill: 9999px
spacing:
  container-max: 1280px
  header-height: 80px
  section-padding-y: 80px
  section-padding-y-lg: 112px
  breakpoint-sm: 640px
  breakpoint-md: 768px
  breakpoint-lg: 1024px
  breakpoint-xl: 1280px
---

## Brand & Style

AltMobility Philippines is a one-page advocacy site for commuters' rights in Metro Manila (`#COMMUTERSNAMAN`). This file describes the revamp: a Google Stitch redesign of Capstone 1, built with Tailwind CSS. The Bootstrap 4 version it replaced is documented in `docs/DESIGN-v1-bootstrap.md` (superseded).

The look is still a **campaign poster on a calm blue base**, now cleaner and card-based:
- **Photo bands** (hero, Halalan, contact) put white type over a photo with a Base Blue Dark gradient.
- **Light content sections** (Bill of Rights, rail network, NACTO) use white or near-white backgrounds with bordered, rounded cards.
- **Condensed type**: Oswald for headlines and numbers, letter-spaced Saira Extra Condensed for eyebrows, navigation and buttons, Inter for body copy and form labels.

## Colors

All brand colours are Tailwind theme colours in `tailwind.config.js` (`theme.extend.colors`) and are used as classes such as `bg-baseblue` or `text-rightsbluedark`. Use those names instead of hex values.

- **Base Blue (`#30506e`):** header, headings in light sections, primary buttons, Bill of Rights icon tiles.
- **Base Blue Dark (`#223a50`):** section backgrounds behind photos, photo overlays, the mobile menu and dark button text on white buttons.
- **Rights Blue (`#72a1b4`):** large accents on dark backgrounds (the `FEATURED ARTICLE` eyebrow and `2022`), hover states and the focus outline. Don't use it for small text on blue: it reaches only 2.99:1 on Base Blue and 4.18:1 on Base Blue Dark.
- **Rights Blue Dark (`#3d6d80`):** the darker accent for text on white and the fill of the secondary buttons (`READ MORE`, `SUBMIT`) with white text (5.68:1).
- **Rights Blue Light (`#e8f1f5`):** small accent text on dark backgrounds (the footer tagline 7.34:1, the contact email link 10.25:1) and pale tinted backgrounds.
- **Body Text (`#43454a`):** body copy on white (9.59:1).
- **Subtle BG (`#f8fafc`) and Border (`#e2e8f0`):** rail line cards, form fields and card borders.
- **Rail line colours (`line-*`):** a 10px marker on the left edge of each line card, set inline with `style="background-color: …"`. They identify lines only; don't reuse them for UI. PNR uses Tailwind's orange (`#f97316`).
- **Tailwind default greys and greens** are also used directly: slate for the NACTO stat labels and bars, emerald for the bike-lane figure and bar, red for the required-field asterisks.

**Contrast:** all text pairings measured in the browser pass WCAG AA (4.5:1 for normal text). The large Rights Blue eyebrow and `2022` on Base Blue Dark (4.18:1) pass the 3:1 rule for large text. White on Rights Blue is 2.81:1, so Rights Blue is never a fill behind white text.

## Typography

- **Display (Oswald 700, uppercase):** hero headline 128px (48px on phones), section titles 48px (30px on phones), the Halalan quote 48px (30px on phones).
- **Card titles and numbers (Oswald 700):** card titles 24px, rail line names 20px, NACTO figures 30px (the Transitway figure is 36px on desktop).
- **Saira Extra Condensed (uppercase, letter-spaced):** the hero subtitle 30px with 6.6px tracking, eyebrows 24–30px, navigation 18px, buttons 16–24px. Unlike the old site, the spacing comes from `letter-spacing`, not from spaces typed into the text.
- **Inter:** body 16–18px, small copy 14px, form labels 12px bold uppercase.

Fonts load from Google Fonts in one request (Inter 400–700, Oswald 500–700, Saira Extra Condensed 500–800, `display=swap`).

## Layout & Spacing

- **One markup for every screen size.** Tailwind's default breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px) change the layout. The header shows the full navigation from `lg` up and a hamburger menu below it. The old duplicated desktop/mobile sections are gone.
- **Container:** content sits in `max-w-7xl` (1280px), centred with 16–32px side padding.
- **Sections:** 80px vertical padding, 112px from `lg` up (the Halalan band uses 96px/128px). Sections grow with their content; there are no fixed `vh` heights except the hero (`min-h-[90vh]`, full screen from `lg`).
- **Grids:** Bill of Rights cards go from one column to two (`md`) and three (`lg`). NACTO cards go from one column to two (`sm`) and four (`lg`). The rail section, Halalan and contact use 12-column grids (7 + 5 columns) from `lg`.

## Elevation & Depth

Depth comes mostly from photography and the gradient overlays. Cards use light Tailwind shadows (`shadow-sm`, rising to `shadow-md` on hover); the Halalan panel and the contact form card use `shadow-2xl`. The header has `shadow-md`. Two glass panels (newsletter box and Halalan panel) add `backdrop-blur-md`.

Photo overlays:
- **Hero:** a gradient from Base Blue Dark at 90% (bottom) through transparent to 60% (top).
- **Halalan:** a left-to-right gradient, 85% → 40% → 60%, darker behind the quote.
- **Contact:** a top-to-bottom gradient, 80% → 35% → 80%.

## Shapes

- **Logo boxes:** 8px corners (`rounded-lg`).
- **Rail line cards and icon tiles:** 12px (`rounded-xl`).
- **Bill of Rights and NACTO cards, newsletter box:** 16px (`rounded-2xl`).
- **Halalan panel and contact form card:** 24px (`rounded-3xl`).
- **Buttons, search fields, social icons and capacity bars:** fully rounded (`rounded-full`).

## Components

### Header
- Sticky Base Blue bar, 80px tall, with the logo on the left, Saira navigation links and a pill search field. Links get a Rights Blue underline on hover. Below `lg`, a hamburger toggles a Base Blue Dark menu with the same links and search; tapping a link closes it.

### Hero (`#home`)
- Full-screen photo with gradient overlay, the `#COMMUTERSNAMAN` headline, the letter-spaced subtitle and two buttons: a white button (`GET IN TOUCH & TAKE ACTION`) and an outlined one (`EXPLORE THE BILL OF RIGHTS`). A bouncing "Scroll" cue sits at the bottom.

### Bill of Rights cards (`#billofrights`)
- Five white cards (Safe, Reliable, Accessible, Comfortable, Sustainable). Each has its white icon on a 64px Base Blue tile, an Oswald title and Inter body text. The border turns Rights Blue on hover.

### Rail line cards (`#history`)
- Subtle BG cards with the line colour marker on the left, the logo in a white bordered box and the line name. They are grouped under `EXISTING LINES` and `PROPOSED LINES` next to the rail network map.

### Halalan panel (`#joinus`)
- Left: `FEATURED ARTICLE`, the quote with a Rights Blue left border and a Rights Blue Dark `READ MORE` button. Right: a glass panel with the fingerprint icon, `HALALAN`, `2022` and a white `MAGPA-REHISTRO, BUMOTO!` button.

### NACTO comparison (`#nacto`)
- Four white cards (Car lane, Bike lane, Sidewalk, Transitway), each with its GIF on a slate tile, the people-per-hour figure and a capacity bar whose width is the figure divided by 25,000 (Car lane 6.4%).

### Contact (`#contact`)
- Left: newsletter glass box (Rights Blue Dark `SUBMIT` button), social icons for Facebook, Twitter and Instagram, and the business enquiries email. Right: a white form card (Name, Email, Affiliation, Message, a demo "I'm not a robot" checkbox and `SEND MESSAGE`). Every field has a visible label. The forms are demo content and don't submit anywhere.

### Footer
- Base Blue band with the logo, the `JOIN THE CONVERSATION` tagline, a white `CONTRIBUTE` button, legal links and the copyright line.

## Links

Navigation, hero buttons and footer links jump to sections on the page. Outside links open in a new tab (`target="_blank" rel="noopener"`) and keep the original site's targets: the Bill of Rights article (Rappler), the JICA Dream Plan video (YouTube), the featured article (`READ MORE`, Facebook) and the AltMobility Facebook, Twitter and Instagram pages.

## Building the CSS

`index.css` is generated; don't edit it by hand. Edit classes in `index.html` (or custom CSS in `tailwind.input.css`), then run:

```
npx -y tailwindcss@3.4.19 -i tailwind.input.css -o index.css --minify
```

Then update the cache-busting query in `index.html` (`index.css?v=<first 8 hex of sha256(index.css)>`).

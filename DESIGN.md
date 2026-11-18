---
name: AltMobility Philippines
colors:
  base: '#30506e'
  white: '#ffffff'
  dark-gray: '#5c6b73'
  text-gray: '#666666'
  charcoal: '#43454a'
  body-olive: '#5f7053'
  rights-blue: '#72a1b4'
  sidebar-accent: '#47748b'
  sidebar-hover: '#7386d5'
  button-border: 'rgba(148, 148, 148, 0.5)'
  overlay: 'rgba(0, 0, 0, 0.7)'
  line-pnr: orange
  line-subway: gray
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
    fontSize: 112px
    fontWeight: '500'
    lineHeight: 134px
  display-hero-mobile:
    fontFamily: Oswald
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
  hero-sub:
    fontFamily: Saira Extra Condensed
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 72px
  hero-sub-mobile:
    fontFamily: Saira Extra Condensed
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 29px
  section-title:
    fontFamily: Oswald
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 60px
  section-title-mobile:
    fontFamily: Oswald
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 42px
  headline-md:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
  card-title:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 50px
  card-title-sm:
    fontFamily: Oswald
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
  quote:
    fontFamily: Arial
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  subhead-condensed:
    fontFamily: Saira Extra Condensed
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 29px
  list-heading:
    fontFamily: Arial Narrow
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  body-md:
    fontFamily: Arial
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Arial
    fontSize: 14.4px
    fontWeight: '400'
    lineHeight: 21.6px
  nav-link:
    fontFamily: Calibri
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
rounded:
  DEFAULT: 0.25rem
  button: 5px
  full: 50rem
spacing:
  section-height: 100vh
  card-gap: 0.5rem
  breakpoint-small-phone: 411px
  breakpoint-phone: 576px
  breakpoint-small-tablet: 767px
  breakpoint-tablet: 991px
  breakpoint-desktop: 992px
---

> **Superseded (2026-11-18):** this describes the Bootstrap 4 page from the P2 commit. On branch `p3-stitch-redesign` the page was replaced by a Google Stitch redesign built with Tailwind (tokens in `tailwind.config.js`). A new DESIGN.md for that page is still to be written.

## Brand & Style

AltMobility Philippines is a one-page advocacy site for commuters' rights in Metro Manila. It speaks to daily commuters, voters ahead of Halalan 2022 and anyone who walks, bikes or takes the train. The tone is civic and urgent but hopeful: big campaign headlines (`#COMMUTERSNAMAN`), plain facts about rail lines and street design, and clear calls to sign up and vote.

The look is a **campaign poster on a calm blue base**:
- **Full-screen photo sections** (EDSA traffic, commuters, the contact backdrop) set the mood behind white display type.
- **White content sections** carry the facts: the Bill of Rights cards, the rail-line cards and the NACTO street comparison.
- **Condensed type everywhere**: Oswald for headlines, Saira Extra Condensed for spaced-out subheads (`J O I N   T H E   C O N V E R S A T I O N`).

## Colors

- **Base Blue (`#30506e`):** Page background, desktop navbar, mobile sidebar and footers. The single brand colour; every dark band on the page uses it.
- **White (`#ffffff`):** Display type over photos, text on blue, and the background of the fact sections.
- **Rights Blue (`#72a1b4`):** Fill of the five Commuter's Bill of Rights cards, with white text. It only reaches 2.81:1 contrast with white, which is below WCAG AA; fix it before relying on it for body text.
- **Text Gray (`#666666`) and Charcoal (`#43454a`):** Headings inside white sections: gray for section titles and rail-network headings, charcoal for rail-line and NACTO card titles.
- **Body Olive (`#5f7053`) and Dark Gray (`#5c6b73`):** Body copy in the white sections and default link colour.
- **Sidebar Accent (`#47748b`) and Sidebar Hover (`#7386d5`):** Mobile sidebar list rules and the close-button hover.
- **Rail line colours (`--line-*`):** Each line card has a 5px left marker in that line's official colour, for example LRT-1 yellow `#fff23b`, LRT-2 purple `#924ac2` and MRT-3 blue `#3f94fc`. They identify lines only; don't reuse them for UI.
- **Overlay (`rgba(0, 0, 0, 0.7)`):** Dims the page while the mobile sidebar is open.

All colours live as custom properties in the `:root` block of `index.css` (`--color-*` and `--line-*`). Use the variable, not the hex, when adding rules.

## Typography

- **Display & Section Titles (Oswald):** The hero headline at 112px (40px on phones), section titles at 40px bold (28px on phones) and card titles. Mostly uppercase in the markup.
- **Condensed Subheads (Saira Extra Condensed):** Letter-spaced hero subtitles, the `2 0 2 2` Halalan year and contact subheads. The spacing is typed into the text, so keep it when editing copy.
- **Body (Arial):** Descriptions, card text and the featured quote (40px bold on desktop).
- **List Headings (Arial Narrow):** "EXISTING LINES"-style headings in the rail section.
- **Navigation (Calibri):** Desktop navbar links. Bootstrap's system font covers forms, buttons and small print.

Fonts load from Google Fonts in one request (`Oswald` and `Saira Extra Condensed`, `display=swap`). Arial, Arial Narrow and Calibri are system fonts.

## Layout & Spacing

- **Sections fill the screen:** each section is `100vh` on desktop, and some mobile sections use fixed `170vh`–`180vh` heights to fit their content.
- **Bootstrap 4 grid:** cards are Bootstrap `card` elements in rows (`col-5 col-lg`), wrapping two per row on phones.
- **Breakpoints:** `index.css` uses its own closed ranges: ≤411px, 412–576px, 577–767px, 768–991px and ≥992px. They don't match Bootstrap's breakpoints.
- **Desktop and mobile copies:** the navbar, hero, Join Us, NACTO and footer sections exist twice in `index.html`, and CSS hides the copy that doesn't fit the screen. Edit both copies until they are merged.

## Elevation & Depth

The site is flat. Depth comes from photography and the parallax background in the contact section, not from shadows. The only shadows are the navbar's `1px 1px 3px rgba(0, 0, 0, 0.1)` and the mobile sidebar's drop shadow. The sidebar slides in over a 70% black overlay.

## Shapes

- **Cards:** Bootstrap's default `0.25rem` corners.
- **Buttons:** "Know more" buttons use `5px` corners with a `1px solid rgba(148, 148, 148, 0.5)` border on a transparent background.
- **Pills:** the search field and the newsletter Submit button are fully rounded (Bootstrap `rounded-pill`) with a light outline.

## Components

### Desktop Navbar
- Sticky Base Blue bar with the AltMobility logo on the left, centred Calibri links to each section, and a pill search field on the right.

### Mobile Sidebar
- A hamburger button opens a Base Blue sidebar from the left with the logo and the section links. Tapping a link or the dark overlay closes it.

### Hero
- Full-screen photo with the `#COMMUTERSNAMAN` headline in Oswald and a spaced-out Saira subtitle.

### Bill of Rights Cards
- Five Rights Blue cards (Safe, Reliable, Accessible, Comfortable, Sustainable), each with an icon, an Oswald title and white body text. They flip in on scroll (AOS `flip-left`).

### Rail Line Cards
- White cards with a coloured line marker (`--line-*`) before the line name and the line's logo below. Existing and future lines are grouped, next to the rail network map.

### Halalan Panel
- A card over the Join Us photo: a fingerprint icon, `H A L A L A N` in Oswald, `2 0 2 2` in Saira and a "Magpa-rehistro, bumoto!" call to action.

### NACTO Comparison
- Four animated GIFs (car lane, bike lane, sidewalk, transit) with Oswald captions and people-per-hour figures.

### Contact
- Newsletter signup, social icons (Font Awesome), contact details and a demo CAPTCHA over a parallax photo. The forms are demo content and don't submit anywhere.

### Footer
- Base Blue band with the logo, a Contribute button, legal links and the copyright line.

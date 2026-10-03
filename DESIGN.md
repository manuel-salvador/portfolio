---
name: Manuel Salvador — Portfolio
description: A studio poster for Manuel Salvador, a full-stack developer.
colors:
  studio-black: "#0C0C0C"
  ice-ink: "#D7E2EA"
  steel-shadow: "#646973"
  steel-light: "#BBCCD7"
  white-sheet: "#FFFFFF"
  ember-root: "#18011F"
  ember-magenta: "#B600A8"
  ember-violet: "#7621B0"
  ember-heat: "#BE4C00"
  ember-gradient: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)"
typography:
  display:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(3rem, 12vw, 160px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(3rem, 10vw, 140px)"
    fontWeight: 900
    lineHeight: 1
  title:
    fontFamily: "Kanit, sans-serif"
    fontSize: "clamp(1rem, 2.2vw, 2.1rem)"
    fontWeight: 500
    lineHeight: 1
  body:
    fontFamily: "Kanit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Kanit, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  poster: "40px"
  poster-sm: "50px"
  poster-md: "60px"
  index: "32px"
  field: "16px"
  pill: "9999px"
spacing:
  row: "12px"
  gutter: "20px"
  gutter-wide: "40px"
  offset: "28px"
  stack: "32px"
  section: "80px"
  sheet: "128px"
components:
  button-contact:
    backgroundColor: "{colors.ember-gradient}"
    textColor: "{colors.white-sheet}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ice-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-ghost-hover:
    backgroundColor: "rgba(215, 226, 234, 0.1)"
    textColor: "{colors.ice-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ice-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "16px"
  card-stack:
    backgroundColor: "{colors.studio-black}"
    textColor: "{colors.ice-ink}"
    rounded: "{rounded.poster}"
    padding: "16px"
  sheet-services:
    backgroundColor: "{colors.white-sheet}"
    textColor: "{colors.studio-black}"
    rounded: "{rounded.poster}"
    padding: "80px 20px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ice-ink}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Manuel Salvador — Portfolio

## Palette update — 2026-10-03

The user's latest direction replaces the steel headings and ember contact palette below with the brand colors from `main`. The studio composition, neutral surfaces, typography, and spacing remain in place. This palette update takes precedence over the original color rules.

- Display headings: vertical cyan-to-teal gradient, #22D3EE → #06B6D4 → #0D9488.
- Contact actions, including submit and sent state: main's primary gradient, #0891B2 → #06B6D4, with #020617 text, #A5F3FC inset ring, and #67E8F9 focus ring. Dark text preserves contrast across the gradient.
- Browser chrome: #0891B2 scrollbar thumb and #A5F3FC selection highlight on #0C0C0C.
- Purple, magenta, and orange contact stops are retired. Other actions retain their ice ghost treatment.

## Overview

**Creative North Star: "The Studio Poster"**

The homepage is a poster on a dark studio floor. One black field, one white services sheet, steel display type, and a single magenta-to-ember action. Scale is dense at the headline and quiet in the paragraph. The name on the poster is Manuel Salvador; the work is full-stack product delivery.

The previous observatory is rejected: glass cards, sonar cyan, and a floating pill nav do not belong on this floor. Generic purple-on-black chrome is rejected too. Magenta lives inside one pill. It is a pinned accent, not a theme.

**Key Characteristics:**

- Studio black field, ice ink, steel gradient display on that field
- One white sheet with 40–60px top corners
- One filled pill; every other action is a ghost stroke
- Uppercase tracked labels, then quiet body copy
- Kanit only, in the weights the site loads: 300, 400, 500, 700, and 900
- Depth from an overlapping sheet and a sticky project stack, not glow

## Colors

The floor is near-black, the type is a cool ice, and the only saturated color is the contact pill’s ember gradient.

### Primary

- **Ember Root** (#18011F): the dark start of the contact pill, at 7% along a 123deg gradient.
- **Ember Magenta** (#B600A8): the pinned accent, at 37%. This is the one saturated voice on the poster.
- **Ember Violet** (#7621B0): the mid-to-late stop, at 72%. It stays inside the pill.
- **Ember Heat** (#BE4C00): the warm end, at 100%. White pill type sits on this whole gradient.

### Neutral

- **Studio Black** (#0C0C0C): the page field, the project stack, the contact sheet, the footer, and type on the white sheet. Selection inverts to this on ice.
- **Ice Ink** (#D7E2EA): default text, ghost strokes, nav, focus outlines’ companion, and the selection highlight. Muted lines use the same ink at 80% (project descriptions) or 70% (resting field labels).
- **Steel Shadow** (#646973): the top stop of display type on the black field. It is not a body color; alone on studio black it is too dim to read.
- **Steel Light** (#BBCCD7): the bottom stop of that same vertical gradient, and the color that makes the headline readable.
- **White Sheet** (#FFFFFF): the services block, and the contact pill’s type and ring. Scrollbar chrome is steel shadow on studio black.

### Named Rules

**The One Pill Rule.** Ember magenta, ember violet, and ember heat appear only inside the contact pill (including the sent-state disc that reuses that control). No other surface, rule, or heading takes this gradient. If a screen needs a second filled color, it does not get one.

## Typography

**Display Font:** Kanit (with sans-serif)
**Body Font:** Kanit (with sans-serif)
**Label Font:** Kanit (with sans-serif)

**Character:** One family. Display is black, uppercase, and packed tight. Body stays in the same face at a reading size. Nothing else is loaded.

### Hierarchy

- **Display** (900, clamp(3rem, 12vw, 160px), line-height 1, tracking -0.025em): section titles, uppercase. On studio black they use the steel gradient (180deg, steel shadow to steel light). The hero line is the same face, weight, case, and gradient at 10.2vw, then 11vw from 640px, 12vw from 768px, and 12.6vw from 1024px, kept on one line. The projects index caps the same treatment at 8rem. Contact, inside its sheet, steps down to 3rem and 4.5rem from 768px.
- **Headline** (900, clamp(3rem, 10vw, 140px), line-height 1): the two-digit index beside a service or a stacked project. Not a second typeface and not the steel gradient on the white sheet.
- **Title** (500, clamp(1rem, 2.2vw, 2.1rem), line-height 1): service and project names, uppercase, under the index.
- **Body** (400, 1rem, line-height 1.625): unset reading text, including the contact intro and footer. About steps up to 500 at clamp(1rem, 2vw, 1.35rem), max 560px. Supporting lines drop to 300: the hero caption at clamp(0.75rem, 1.4vw, 1.5rem), and sheet descriptions at clamp(0.85rem, 1.6vw, 1.25rem).
- **Label** (500, 0.875rem, tracking 0.1em): ghost actions, uppercase. The contact pill uses the same weight, case, and tracking at 0.75rem, 0.875rem from 640px, and 1rem from 768px. Poster nav is uppercase at tracking 0.05em, from 0.875rem to 1.125rem at 768px and 1.4rem at 1024px.

### Named Rules

**The Poster Then Quiet Rule.** Headlines are black weight, uppercase, and leading-none. Paragraphs do not inherit that size. On the white sheet, display type is solid studio black. The steel gradient is only for display type on the black field.

**The Steel On Black Rule.** Clip the gradient to the glyphs. Do not paint a flat white headline on the field, and do not run the steel gradient across the white sheet.

## Layout

The poster is a full-bleed column. The field has no container; the sections do. About centers at 48rem. Services and the contact sheet stop at 64rem. The project stack and the projects index stop at 72rem. The footer stops at 80rem.

Poster gutters are 20px, widening to 32px and then 40px. The hero uses 24px, then 40px from 768px. Vertical rhythm is 80px (about), 80px / 96px / 128px (services), 96px (contact), and a marquee pad of 96px / 128px / 160px above a 40px foot. Stacked projects sit 32px apart. Below 640px, cards follow their content; from 640px, each card is a sticky viewport of 85vh.

The white sheet overlaps nothing above it. The black project sheet pulls back over it by 40px, 48px from 640px, and 56px from 768px, with the same top radius as the sheet. Sticky cards pin at 72px plus 28px per index, and at 96px plus that offset from 768px. Each card behind scales down by 0.03 as it sticks.

The hero fills the dynamic viewport. Four text links with at least 44px hit height spread across the first row. A quiet ghost View CV link sits below the introduction in the lower-left information area; Contact Me remains the filled action on the right. There is no fixed bar on `/`. Inner pages keep a fixed studio-black bar and clear it with 112px of top padding. The contact block is the only poster section with a scroll margin, and that margin is 8px. Do not also set a document scroll-padding; the offsets would stack.

The screenshot marquee is two rows of 420×270 stills, 12px apart, radius 16px, translated from scroll at 0.3. It does not run when reduced motion is requested. Poster entrances start visibly at 85% opacity, then fade and rise over 0.7s (stills 0.9s) on cubic-bezier(0.25, 0.1, 0.25, 1), once. The contact sheet rises 28px over 0.6s from the same readable opacity. About animates complete words from 80% to full opacity with a 2px rise, while assistive technology receives one continuous paragraph. Reduced motion also disables smooth scrolling and the success-disc spring.

Breakpoints in use are 640px, 768px, and 1024px.

## Elevation & Depth

The poster is flat. Cards do not lift, glow, or blur. Depth is a white sheet laid on the black field, then a black sheet laid back over it, then a stack of project cards that stick and scale down. The inner-page bar is studio black at 90% with a backdrop blur; that blur is not a material for cards or the poster.

### Shadow Vocabulary

- **Contact pill** (`box-shadow: 0 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721b1`): the only shadow. It belongs to that one control, including the sent-state disc. It is not a card elevation.

### Named Rules

**The Flat Field Rule.** Surfaces are flat at rest and on hover. Do not add a drop shadow, a glow, or a glass blur to a sheet, a card, or a field. Hover on a ghost pill is a 10% ice wash. Hover on the contact pill is opacity 0.85. Disabled pill opacity is 0.5.

## Shapes

Poster sheets and stack cards share one corner: 40px, 50px from 640px, and 60px from 768px. The services sheet rounds only the top. Stack screenshots use the same three steps. The projects index uses a smaller card radius, 32px, with a 2px ice stroke. Marquee tiles and contact fields use 16px. Actions, skill chips, and the sent-state disc are full pills.

Strokes are ice. Stack cards and ghost pills use 2px solid ice. The contact sheet uses 2px ice at 25%. Fields use 1px ice at 35%. Service rows use a bottom rule of studio black at 15%; the footer uses an ice hairline at 15%. Focus is a 2px white outline, offset 3px on pills and fields’ companions and 4px on nav and linked screenshots. The contact pill’s resting ring is that same white outline pulled inside by 3px.

Original stills (portrait, moon, brick, sculpture, forms) sit unframed on the field. They are not clipped into cards.

### Named Rules

**The Big Corner Rule.** A poster sheet or a stacked project card uses the 40 / 50 / 60px steps. Do not drop those surfaces back to an 8px or 12px radius. Pills stay fully round. The 16px radius is for fields and marquee tiles, not for the sheet.

## Components

Actions are either the one ember pill or an ice ghost. Labels are uppercase. The poster’s own actions are words, not icons.

### Buttons

- **Shape:** full pill (9999px). Minimum hit height on ghost actions is 44px.
- **Contact pill:** white type on the ember gradient, padding 12px 32px, then 14px 40px from 640px and 16px 48px from 768px. Type is 500, uppercase, tracking 0.1em, at 0.75rem / 0.875rem / 1rem. Resting inset white ring (outline 2px, offset -3px) plus the pill shadow. Hover opacity 0.85 over 200ms. Focus moves the white outline outside by 3px. Disabled opacity 0.5. The hero, the about block, and the contact submit all use this control. The sent state reuses it as an 80px disc.
- **Ghost:** transparent, 2px ice stroke, ice type, padding 12px 32px, label size 0.875rem, tracking 0.1em, uppercase. Hover washes ice at 10%. Focus outline is white, offset 3px. This is “Live Project”, “Code”, “All projects”, “View CV”, and “Send another”. “Email me” is the same pill with the stroke at 40% until hover, when it becomes solid ice. The live-project control grows to 40px horizontal padding and 1rem type from 640px.

### Chips

- **Style:** skill chips are full pills, 1px ice at 30%, ice type, 0.75rem, uppercase, tracking 0.05em, padding 4px 12px. No fill.
- **State:** they are not toggles. A “Live client” mark on an index screenshot is a separate status chip: ice at 40% stroke, studio black at 80% fill, 0.75rem uppercase, tracking 0.1em, with a 6px ice dot.

### Cards / Containers

- **Corner Style:** stack cards follow the big corner (40px, 50px, 60px). Index cards use 32px. Screenshot crops inside a stack card repeat the big corner.
- **Background:** studio black. The services list is the white sheet, not a card grid.
- **Shadow Strategy:** none. See Elevation. Stack cards stick and scale; they do not cast.
- **Border:** 2px solid ice on the stack and the index card. The contact container is a two-column sheet (0.9fr / 1.1fr from 768px) with 2px ice at 25% and a 40px radius.
- **Internal Padding:** stack cards pad 16px, 24px from 640px, and 32px from 768px. Index cards pad 20px 16px vertically and horizontally, 24px 20px from 768px. Service rows pad 32px / 40px / 48px vertically.

### Inputs / Fields

- **Style:** transparent, 1px ice at 35%, radius 16px, padding 16px, ice type at 1rem. The label sits inside, then rises to 0.75rem on a studio-black chip when the field is focused, filled, or autofilled.
- **Focus:** border becomes solid ice; a 2px ring of ice at 30% replaces the outline.
- **Error / Disabled:** an invalid field uses a red border at 70% (#f87171) and a red message (#fca5a5). A failed send keeps the draft in a red-tinted note (#fecaca on a 10% red fill, 1px border at 40%). The pill’s disabled state is the only disabled treatment.

### Navigation

The poster nav is a single row of four uppercase ice links — About, Services, Projects, Contact — spread across the hero, not fixed and not a pill. Hover drops opacity to 0.7. Focus is a 2px white outline, offset 4px. Current location is not drawn there.

Inner pages use a fixed full-width bar, studio black at 90%, blurred, with the mark, the same uppercase ice links, and a 44px menu button below 768px. The current item is white with an ice underline. The mobile menu is a studio-black veil at 95%. That bar is not rendered on `/`.

### Project Stack

Each featured project is a black card: a two-digit index, an uppercase name, a restrained project-context line, ghost links for a live URL and a repo when those exist, a 16px light description at 80% ice, and technology chips from the spreadsheet's skills. An optional spreadsheet-owned contribution appears as a short sentence when confirmed. From 640px, the card is sticky and shows three crops of the same still; scroll progress scales it from 1 toward `1 - (cards behind) × 0.03`, unless reduced motion is on. Below 640px, one complete screenshot sits inside a 2:1 landscape frame and the card follows its content without scaling. The main screenshot links out when a URL exists and its accessible name identifies that destination.

### Services Sheet

A white sheet with a solid black “Services” display line and five numbered rows. Descriptions are light weight at 60% of studio black, which lands near a 5.2:1 gray on white. The last row has no rule.

## Do's and Don'ts

### Do:

- **Do** paint the field studio black (#0C0C0C) and set reading type in ice ink (#D7E2EA).
- **Do** set poster display in Kanit 900, uppercase, leading-none, tracking -0.025em, and clip it to the steel gradient only on the black field.
- **Do** keep a single filled action: the contact pill, white type on the ember gradient, fully round, with its own inset ring and shadow.
- **Do** draw every other action as a ghost pill: 2px ice stroke, ice type, uppercase, tracking 0.1em.
- **Do** round poster sheets and stack cards at 40px, 50px from 640px, and 60px from 768px.
- **Do** place the original stills unframed on the field.

### Don't:

- **Don't** revive the observatory: glass cards, sonar cyan, glow shadows, or a floating pill nav.
- **Don't** theme the page in purple. Magenta is a stop inside the one pill, not a surface color.
- **Don't** set body copy in the display clamp, or introduce a second typeface. The face is Kanit.
- **Don't** add hard offset shadows, eyebrows, or kickers. The floor is flat except for the contact pill’s own shadow.
- **Don't** invent another name, 3D services, or prices. The poster is Manuel Salvador’s.

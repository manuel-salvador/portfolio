---
name: Manuel Salvador — Portfolio
description: A deep-sea observatory — dark navy depth, sonar-cyan signals, glass instruments
colors:
  sonar-cyan: "#06b6d4"
  sonar-cyan-bright: "#22d3ee"
  sonar-cyan-pale: "#67e8f9"
  sonar-cyan-deep: "#0891b2"
  deep-current-teal: "#0d9488"
  living-teal: "#14b8a6"
  abyss-navy: "#020617"
  observatory-slate: "#0f172a"
  instrument-slate: "#1e293b"
  slate-hairline: "rgba(51, 65, 85, 0.5)"
  ice-mist: "#f1f5f9"
  dim-slate: "#cbd5e1"
  misted-slate: "#94a3b8"
  faint-slate: "#64748b"
  glass-bg: "rgba(15, 23, 42, 0.6)"
  glass-border: "rgba(6, 182, 212, 0.15)"
  glass-border-hover: "rgba(6, 182, 212, 0.4)"
  signal-red: "#f87171"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 4.5rem)"
    fontWeight: 700
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "76px"
components:
  button-primary:
    backgroundColor: "linear-gradient(to right, #06b6d4, #14b8a6)"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "linear-gradient(to right, #22d3ee, #2dd4bf)"
  button-pill:
    backgroundColor: "linear-gradient(to right, #1e293b, #334155)"
    textColor: "{colors.ice-mist}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-ghost:
    backgroundColor: "rgba(30, 41, 59, 0.5)"
    textColor: "{colors.dim-slate}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  button-accent-outline:
    backgroundColor: "linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(20, 184, 166, 0.2))"
    textColor: "{colors.sonar-cyan-pale}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  card-glass:
    backgroundColor: "linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.5) 100%)"
    textColor: "{colors.misted-slate}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  chip-skill:
    backgroundColor: "rgba(30, 41, 59, 0.8)"
    textColor: "{colors.dim-slate}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  input-floating-label:
    backgroundColor: "rgba(30, 41, 59, 0.5)"
    textColor: "{colors.ice-mist}"
    rounded: "{rounded.xl}"
    padding: "16px"
  nav-pill:
    backgroundColor: "rgba(15, 23, 42, 0.4)"
    textColor: "{colors.dim-slate}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  social-icon-button:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.dim-slate}"
    rounded: "{rounded.full}"
    size: "32px"
---

# Design System: Manuel Salvador — Portfolio

## Overview

**Creative North Star: "The Deep-Sea Observatory"**

The site reads as a research station sunk into dark water: everything beyond the glass is deep navy void, and everything worth noticing arrives as light. Calm, precise, luminous. Color behaves like sonar — a single cyan family sweeping across slate depths, marking what is interactive or important, while teal rides as the warm undercurrent that keeps the space from feeling clinical. Surfaces are instruments: translucent glass panels with hairline cyan borders, quiet at rest, brightening when touched.

Density is deliberate and spacious. Sections float as full-width stages with one focal composition each; content gathers into narrow glass containers rather than filling the frame. Motion is the observatory's pulse, never decoration: elements surface with slow fade-up reveals, ambient orbs drift and breathe behind the glass, and interaction answers with lift and glow. The personality is welcoming without chasing — light signals that reward attention, in line with a professional who is open to offers rather than chasing them.

**Key Characteristics:**

- Dark navy depth (`#020617` → `#0f172a` diagonal gradient) as the permanent field — no light mode, no pure black.
- One signal family: cyan and teal only; slate neutrals carry everything else.
- Glassmorphism as the surface language: translucent panels, `backdrop-blur`, hairline cyan borders.
- Glow as the elevation vocabulary: ambient on focal elements at rest, interactive lift + glow on state.
- Slow, deliberate motion: 0.5–0.8s fade-up reveals, drifting ambient orbs, gradient text that shifts like light through water.
- Capsule geometry for navigation and actions; soft 12–16px radii for content containers.

## Colors

A two-current palette: cyan signals over abyssal navy, teal as the companion current, slate as the water itself.

### Primary

- **Sonar Cyan** (#06b6d4): the system's single accent. Interactive states, focus rings, section eyebrows, hover borders, gradient endpoints, the scrollbar, and every glow. If it glows, it is this family.
- **Sonar Cyan Bright** (#22d3ee): the gradient-text entry point and hover brightening of cyan elements.
- **Sonar Cyan Pale** (#67e8f9): hover text on cards and chips — the brightest signal, reserved for interaction feedback.
- **Sonar Cyan Deep** (#0891b2): gradient anchor at the dark end; button starts, scrollbar thumb.

### Secondary

- **Deep Current Teal** (#0d9488): the warm undercurrent. Gradient terminus of headline text and buttons; keeps the cyan family from reading as a single flat hue.
- **Living Teal** (#14b8a6): animated-border segments, stat highlights, gradient midpoints.

### Neutral

- **Abyss Navy** (#020617) and **Observatory Slate** (#0f172a): the body field as a 135° diagonal gradient between them — the water the whole site floats in.
- **Instrument Slate** (#1e293b): surface tone for glass fills, chip backgrounds, and card gradient endpoints, always at partial opacity.
- **Slate Hairline** (rgba(51, 65, 85, 0.5)): default borders on chips, badges, skill tiles, and ghost buttons.
- **Ice Mist** (#f1f5f9): body text and the base for all headings.
- **Dim Slate** (#cbd5e1): secondary text, nav links, chip labels.
- **Misted Slate** (#94a3b8): paragraphs, descriptions, supporting copy.
- **Faint Slate** (#64748b): tertiary copy — footer line, back-links.
- **Signal Red** (#f87171): the only warm alarm — form error states exclusively.

### Named Rules

**The Sonar Rule.** Cyan is signal, not decoration. It marks what is interactive, focused, or important; on any given screen it should occupy a small minority of the pixels. If everything glows, nothing does.

**The Two-Current Rule.** Hue lives only in the cyan→teal current and the slate depths. The single exception is error red; no other hue family enters the system.

**The Abyss Floor Rule.** The darkest value in play is Abyss Navy (#020617). Pure black (#000000) backgrounds never appear — the depth is navy water, not a void.

## Typography

**Body Font:** Inter (with system-ui fallback), loaded with feature settings `"cv02", "cv03", "cv04", "cv11"` and antialiasing.
**Display Font:** Space Grotesk is loaded as `--font-display` but is not used by any component today — a ready display face awaiting an explicit decision. All current headings render in Inter.

**Character:** A single disciplined face carries the entire hierarchy through weight and scale — engineered, legible, unhurried. The personality lives in color and motion, not in letterforms.

### Hierarchy

- **Display** (700, clamp 3rem→4.5rem, tight tracking): hero name only. Rendered with the animated gradient-text treatment — the one place type itself becomes light.
- **Headline** (700, 1.875rem → 2.25rem at md): section titles ("About me", "Featured Projects", "Let's Talk"), typically with a single gradient-text word.
- **Title** (600, 1.125rem): card titles; shift from white to cyan-pale on card hover.
- **Body** (400, 0.875rem–1rem, line-height 1.625): paragraphs and descriptions in Misted Slate; inline emphasis spans step up to medium weight with cyan/teal/white color.
- **Label** (500, 0.75rem, 0.1em tracking, uppercase): section eyebrows ("Portfolio", "Contact", "Sobre mí") in Sonar Cyan, and skill-group captions at reduced opacity.

### Named Rules

**The One Face Rule.** Inter alone carries every level of the hierarchy today; differentiate by weight and size, not by font mixing. Introducing Space Grotesk as the display face is an open decision, never a silent drift.

**The Single Glowing Word Rule.** Gradient text appears once per section at most — a single word in a headline, or the hero name. It is a beacon, not a highlighter.

## Layout

A single-column stage with centered compositions. The app frame is a centered `max-w-7xl` (80rem) column; individual sections narrow their content further — `max-w-4xl` for the about composition, `max-w-6xl` for the projects grid, `max-w-lg` for the contact form, `max-w-md` for link-list pages. Sections are full-width stages separated by generous vertical rhythm (`py-[76px]` baseline from the section layout, commonly overridden toward `py-24` / 96px).

The hero occupies nearly the full viewport (`calc(100vh - 5rem)`) as a centered vertical composition; every other section stacks one focal idea per screen. Project grids are `md:grid-cols-2` with `gap-8` (32px); component gaps run 8/16/32px. Responsive behavior is column-first: grids collapse to one column, the floating nav pill swaps to a full-screen blurred overlay, and typographic steps widen at `md` (768px) and `2xl` (1536px) breakpoints.

## Elevation & Depth

Depth here is hydraulic, not stacked: layering comes from glass translucency and blur (surfaces at 40–80% opacity with 12–20px backdrop blur float over the gradient field), while glow replaces the traditional shadow scale. Two glow registers coexist — ambient glow that focal elements carry at rest (hero orbs, the profile ring, gradient halos), and interactive glow that answers hover and focus. Lift always accompanies interactive glow (`translateY(-2px)` to `-4px`). Traditional dark drop shadows are effectively absent; the only dark shadow is a faint one under the nav pill.

### Shadow Vocabulary

- **Glow sm** (`box-shadow: 0 0 15px rgba(6, 182, 212, 0.3)`): subtle emphasis on small accent elements.
- **Glow md** (`box-shadow: 0 0 30px rgba(6, 182, 212, 0.4)`): medium emphasis.
- **Glow lg** (`box-shadow: 0 0 60px rgba(6, 182, 212, 0.5)`): maximum broadcast; use sparingly.
- **Glass hover** (`box-shadow: 0 8px 32px rgba(6, 182, 212, 0.15), 0 0 0 1px rgba(6, 182, 212, 0.1)`): glass-card hover state, paired with `translateY(-4px)` and a border brightening to `rgba(6, 182, 212, 0.4)`.
- **Primary hover** (`box-shadow: 0 10px 40px rgba(6, 182, 212, 0.4)`): primary button hover, paired with `translateY(-2px)`.
- **Input focus** (`box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1), 0 0 20px rgba(6, 182, 212, 0.2)`): focus ring as a cyan halo rather than a flat ring.

### Named Rules

**The Flat-By-Default Rule.** Surfaces rest as quiet glass. Glow and lift appear as a response to state — hover, focus, success — with ambient glow reserved for designated focal elements (hero orbs, profile ring) only.

**The Cyan Glow Rule.** Every glow in the system is the cyan family at 10–50% alpha. Never white glow, never gray/black drop shadows for elevation.

## Shapes

The form language splits cleanly by role. Everything you act on is a capsule: navigation pills, social icon buttons, skill chips, tag pills, and pill CTAs are fully rounded (`border-radius: 9999px`). Everything that holds content gets a soft rectangle: 12px (`rounded-xl`) for inputs, skill tiles, and image frames; 16px (`rounded-2xl`) for cards and the contact form. Borders are hairlines — 1px at 50% alpha slate for neutral containers, cyan at 15% alpha for glass, brightening to 40% on interaction.

Signature geometry includes the animated gradient ring around the profile image (a rotating cyan→teal border on a circle), circular blurred orbs as background bodies, and the masked animated-border treatment (gradient stroke revealed on hover via mask-composite). Dividers are 1px gradient lines fading transparent→cyan→transparent.

**The Capsule Rule.** Actions and navigation are capsules (fully rounded); content containers are soft rectangles (12–16px). The two never swap.

## Components

**The Gradient Text Is a Beacon Rule.** Reserve it for the hero name and one word per section headline. Body copy never shimmers.

### Buttons

The system has four distinct button species, all sharing smooth 300ms transitions and the gradient-forward primary.

- **Shape:** primary and inputs share a gentle 12px radius (rounded-xl); the secondary CTA is a full capsule; small card actions use 8px (rounded-lg).
- **Primary** (contact submit): full-width, cyan→teal horizontal gradient, white medium text, `py-4` (16px vertical). Overflow-hidden with a built-in shimmer sweep on hover (a white 20%-alpha band traveling left→right via `::before`).
- **Primary Hover/Focus:** gradient brightens one step (cyan-400→teal-400), `translateY(-2px)`-style lift via scale (1.02), glow bloom. Disabled: 50% opacity, not-allowed cursor. Loading: spinner replaces label.
- **Pill CTA** ("View all projects"): capsule with slate-800→slate-700 gradient fill, slate-600 border; hover adds a cyan/teal 10%-alpha overlay and brightens the border. Contains a perpetually nudging arrow (`x: 0→4→0`, 1.5s loop).
- **Ghost** (card "Code"): 8px radius, slate-800 at 50% fill, slate-700/50 hairline, dim-slate label with icon; hover: cyan-tinted border and background (`cyan-500/10`), icon and text shift cyan.
- **Accent Outline** (card "Demo"): 8px radius, cyan→teal 20%-alpha gradient fill over transparent, cyan-500/30 border, cyan-pale text; hover deepens the gradient to 30%.

### Chips

- **Skill tags:** full capsule, slate-800 at 80% fill, slate-700/50 hairline, dim-slate 0.75rem text, `px-3 py-1`. Hover: border cyan-500/30, text cyan-pale. Enter with 50ms-staggered scale-in.

### Cards / Containers

- **Glass Card** (project cards, link-list rows, contact form shell): the signature surface. 16px radius, 135° gradient from slate-900/70 to slate-800/50, cyan 15%-alpha hairline, 12px backdrop blur, `transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Hover:** border brightens to 40%, glass-hover glow + ring shadow, `translateY(-4px)`.
- **Internal padding:** 20px vertical / 20–24px horizontal (`px-5 py-4 md:px-6 md:py-5`).
- **Project card anatomy:** title (semibold 1.125rem) → 16:9 image frame (12px radius, image scales to 1.05 on group-hover) → centered skill chips → centered description → centered Code/Demo action pair. The image block sits inside an Atropos 3D tilt wrapper (shadow and highlight off) — a signature interaction.

### Inputs / Fields

- **Style:** 12px radius, slate-800 at 50% fill, slate-700/50 hairline, generous `px-4 py-4` (16px) padding. Floating labels: positioned absolutely, they shrink to a 0.75rem cyan label seated on the top border when focused or filled (peer `:placeholder-shown` mechanics).
- **Focus:** border shifts to cyan-500/50 plus a two-layer ring (`ring-2 ring-cyan-500/20`); the `.input-premium` variant adds the halo shadow from the Shadow Vocabulary.
- **Error:** red-500/30 border, red-500/10 fill banner with Signal Red text ("Please check your information and try again").
- **Success state:** the form cross-fades to a centered confirmation — cyan→teal gradient circle with a spring-scaled white check, then message.

### Navigation

- **Header:** a floating capsule pill, fixed and centered near the top: slate-900 at 40% opacity, backdrop-blur-md, slate-700/50 hairline, faint dark shadow. Contains logo (40px image) → links → divider → circular social icons. On scroll it compacts (width 95%→90%, padding `py-3`→`py-2`). Links: dim-slate 0.875rem medium, hover white with `scale(1.05)`.
- **Mobile:** the pill collapses to logo + hamburger; the menu is a full-screen overlay (`bg-cyan-950/50`, backdrop-blur-xl) with centered 1.5rem light links and large 48px social icons. Body scroll locks while open.
- **Footer:** quiet horizontal band — slate-800/50 top border, slate-900/30 fill with light blur, faint-slate copyright, large social icons.

### Skill Tile (signature)

A 56px (48px at md) rounded-xl slate container holding a technology icon, label below in 0.75rem medium Misted Slate. On hover: a cyan glow bloom scales up behind the tile (blur-lg, cyan-500/40), the border brightens, the icon scales 1.1, and the whole tile springs `y: -4` (spring damping 15, stiffness 100). Entrance: staggered horizontal slide-in (±30px) from each side of the screen.

### Gradient Text (signature)

Headline emphasis treatment: `background-clip: text` over a 135° gradient (#22d3ee → #06b6d4 → #0d9488) at 200% background size, animated through `gradient-shift` over 8s — text that shimmers like light through water. Applied to the hero name and one word per section headline.

## Do's and Don'ts

### Do:

- **Do** keep the body field as the Abyss Navy → Observatory Slate 135° gradient; new sections inherit it rather than painting their own backgrounds.
- **Do** use glass surfaces (translucent slate fill + cyan hairline + backdrop-blur) for any new floating container, matching the 12px blur / 15%-alpha border defaults.
- **Do** answer interaction with the paired lift + glow (`translateY(-2px…-4px)` plus a cyan glow from the Shadow Vocabulary), at 300–400ms with `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Do** enter new content with slow fade-up reveals (0.5–0.8s, `once: true`) and 0.1s stagger between siblings.
- **Do** keep ambient motion (orbs, rings, gradient text) confined to designated focal elements — one ambient moment per viewport.
- **Do** keep labels uppercase, 0.75rem, 0.1em tracking, in the cyan family at ≤70% opacity.
- **Do** treat Space Grotesk (`--font-display`, already loaded) as the sanctioned upgrade path if a distinct display face is ever needed.

### Don't:

- **Don't** ship a light theme or any light-mode variant — dark navy is the identity.
- **Don't** reach for neon-green-on-black terminal/hacker aesthetics; the darkness here is navy water, and the accent is cyan.
- **Don't** introduce hue outside the cyan→teal current and slate neutrals (error red is the single exception).
- **Don't** use white glows or gray/black drop shadows for elevation — glow is always cyan-family.
- **Don't** use pure black (#000000) surfaces anywhere.
- **Don't** spread gradient text across whole paragraphs or multiple words per headline.
- **Don't** hard-radius anything: no 0px corners on UI surfaces, and no radius larger than a capsule for interactive elements.

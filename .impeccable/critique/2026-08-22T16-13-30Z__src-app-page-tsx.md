---
target: home page
total_score: 16
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-22T16-13-30Z
slug: src-app-page-tsx
---
# Critique: homepage (src/app/page.tsx)

Method: dual-agent (A: design review sub-agent · B: detector sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Spinner/success exist, but no active-page nav state and no aria-live announcements |
| 2 | Match System / Real World | 2 | "Demo" labels a live client business; "Sobre mí" beside English; literal < /> in tagline |
| 3 | User Control and Freedom | 2 | Success state is a one-way door; closed mobile overlay's links stay keyboard-focusable |
| 4 | Consistency and Standards | 3 | Strong glass/capsule system; minor heading-semantics drift |
| 5 | Error Prevention | 1 | Regexes reject accented names/ES messages; autoComplete="off" everywhere |
| 6 | Recognition Rather Than Recall | 3 | Floating labels good; skill tiles glow/lift but aren't clickable (false affordance) |
| 7 | Flexibility and Efficiency | n/a | Single-visit Experience surface; no expert use to accelerate |
| 8 | Aesthetic and Minimalist Design | 2 | Hero stacks name + tagline + blurb + 11 tiles + scroll cue; perpetual motion in every viewport |
| 9 | Error Recovery | 1 | One generic banner covers 4 failures; server outage reads as user's fault; no fallback email |
| 10 | Help and Documentation | n/a | Portfolio needs no docs; its analog (response expectations) is scored under H9 |
| **Total** | | **16/32** | **Acceptable (50%)** |

Heuristics 7 and 10 scored n/a (Experience/portfolio surface); applicable maximum = 32.

## Design Specificity Verdict

**LLM assessment**: Category-interchangeable in substance, authored only in skin. The visual language (deep-sea observatory, cyan sonar, glass instruments) is genuinely authored and disciplined — but strip it away and what remains is a generic dev-portfolio skeleton: hero + skill wall + two cards + form. The one fact that makes Manuel specific — shipping real client work (Portal Bosque) — is invisible: both Featured cards render identically, with no badge, hierarchy, or copy distinguishing a hackathon DAO from a live business.

**Deterministic scan**: detect.mjs exited 0 with zero findings across 15 markup files (validated via positive control). The mechanical layer is clean; every substantive issue is structural/UX, not a markup defect. No false positives.

**Visual overlays**: browser visualization skipped — no browser tool exposed in this harness.

## Overall Impression

A polished, internally consistent design system wrapped around generic content and a missing proof hierarchy. The homepage is beautifully built but under-directed: its strongest asset (real client delivery) is invisible, its conversion moment is under-reassured, and its error path actively blames the user. Biggest opportunity: make Portal Bosque visibly the headline proof and give the visitor a first-viewport action.

## What's Working

1. **An authored visual system actually executed in code** — glass cards, cyan-halo focus rings, animated profile ring match DESIGN.md in practice; the success check is genuine delight.
2. **Real conversion care** — floating labels, loading/success/error states, server-side validation in actions.ts — more than most portfolios invest.
3. **Data-driven content** — Featured projects flow from the CSV (page.tsx), honoring "data stays editable."

## Priority Issues

- **[P0] The differentiator is invisible.** Portal Bosque (live client work) and Tuse render as two identical glass cards, and About never mentions real client delivery. Contradicts PRODUCT.md positioning and "proof over claims." *Fix:* give the client project a visible "Live client work" marker + primary placement; rewrite the About lead to name the shipped product. *Command:* /impeccable layout (+ /impeccable clarify for copy).
- **[P1] Error handling blames and abandons the user.** One generic banner covers name/email/message failures AND EmailJS 500s (contact.tsx:207-217); regexes reject accented names and Spanish messages (actions.ts:3-5); no fallback email. For a bilingual EN/ES commitment, rejecting "José" is disqualifying. *Fix:* per-field inline errors with aria-describedby/aria-live, Unicode regexes (\p{L} with u flag), always show manu.sacr@hotmail.com as fallback. *Command:* /impeccable harden.
- **[P1] No primary CTA above the fold.** Hero offers name, tagline, blurb, 11 skill tiles, scroll arrow — zero action buttons (home.tsx). The product's job is "decide whether to initiate contact"; no path to act without scrolling. *Fix:* one primary ("See my work" → #projects) + one secondary ("Get in touch" → #contact); demote the skill wall. *Command:* /impeccable layout.
- **[P2] Form accessibility & mobile friction.** autoComplete="off" blocks autofill; success/error never announced; focus stranded on hidden button after success. *Fix:* autoComplete="name"/"email", role="status"/aria-live on state changes, move focus to success heading. *Command:* /impeccable harden.
- **[P3] Perpetual motion + false affordances.** "View all projects" arrow nudges forever, orbs float, name shimmers — simultaneously; skill tiles lift/glow on hover but aren't clickable. Violates DESIGN.md "one ambient moment per viewport." *Fix:* arrow animates on hover only; drop tile glow or make tiles link to /projects. *Command:* /impeccable quieter.

## Persona Red Flags

**Jordan (first-timer):** No hero CTA — doesn't know what to do next. Generic About copy gives nothing to trust; no response-time expectation near the form. Demo/Code buttons don't say they open in a new tab.

**Casey (distracted mobile):** autoComplete="off" forces re-typing everything. Mobile nav collapses to an unlabeled hamburger; contact paths hidden behind it. Floating labels show empty placeholders — can't tell filled vs required at a glance. Perpetual arrow + orbs compete while reading.

**Sam (screen reader/keyboard):** Closed mobile overlay's links remain in tab order (header.tsx:132-167). Hamburger has no aria-label/aria-expanded. Success state: no aria-live, focus stays on hidden submit. Literal < /> characters in tagline read as noise. Skill tiles react to hover but nothing on focus/Enter. No skip link.

## Minor Observations

- card.tsx:47 — `priority={lazy}` inverts intent; works by accident, reads backwards.
- card.tsx:44 — alt text is just the project name, no image description.
- contact.tsx:29-36 — preview mode fakes success via 2s setTimeout; invisible branch.
- skills-list.tsx — gap asymmetry: frontend gap-10 md:gap-8, backend gap-6 md:gap-8.
- about-me.tsx:62 — "Sobre mí" is the only Spanish string; reads as a bug.
- layout.tsx — no themeColor/colorScheme meta for the dark UI.
- No loading.tsx/error.tsx in src/app/ — CSV fetch failure throws a raw 500.
- Error banner lacks role="alert"; appears silently for everyone.

## Questions to Consider

1. If Portal Bosque is the proof, why does it share equal billing with a hackathon build? What would the homepage look like if the client project got 2x the space and a "live for real users" marker?
2. The hero answers "who am I" but never "what do you do next." On an Experience surface where the work should lead, is a CTA-less hero confidence — or is it making the visitor do the conversion work?
3. Every glow, orb, and shimmer says "look here" — but if "here" is a generic skill list, is the motion amplifying a signal, or decorating its absence?

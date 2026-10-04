# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two equally important primary audiences:

1. **Recruiters and hiring managers** evaluating Manuel as a full-stack developer candidate; they scan quickly for credibility, stack fit, and evidence of real work.
2. **Potential clients and agencies** deciding whether to hire Manuel for a project; they look for shipped products and a low-friction way to reach out.

Both arrive for a short visit and do the same job: decide whether to initiate contact (contact form, email, or CV download).

## Product Purpose

Manuel Salvador's personal portfolio: a marketing surface that converts visits into conversations — job interviews and project inquiries. Success means contact-form submissions, CV downloads, and project click-throughs. He is **open to offers**, not actively hunting, so the tone is inviting availability, not urgent self-promotion.

## Positioning

Shipped client work, plus the products he is building now. Portal Bosque stays as a site he delivered for a nature-based family club. As of 2026-10-03 he no longer continues there. Current work includes Diseñar Viajes, the internal system for a travel agency (packages, reservations, and the team that sells them), and later products as they ship. Supporting facts: 3+ years of experience, 10+ projects, and a full-stack TypeScript toolkit. Do not write copy that puts him at Portal Bosque today.

## Operating Context

- Visitors arrive from LinkedIn/GitHub profiles, the CV link, or direct URL.
- Project content is maintained by Manuel in a public Google Sheet (CSV); the site fetches it at request time, and a token-protected revalidate route refreshes cached pages.
- CVs live as Google Drive PDFs in two languages (EN/ES), linked from `/curriculum`.
- Deployed on Vercel (`manuel-salvador.vercel.app`) with a preview deployment where the contact form simulates success instead of sending email.

## Capabilities and Constraints

- Next.js (App Router, server components), React, TypeScript, Tailwind CSS, Motion.
- Routes: `/` (hero, about, main projects, contact form), `/projects` (all projects), `/curriculum` (CV links), `/social` (link list).
- Contact form submits through a server action to EmailJS with regex validation of name/email/message.
- Project data source is the Google Sheets CSV (`src/services/api.ts`); `isMain` flags which projects appear on the home page. Currently flagged: Tuse and Portal Bosque.
- Content is English-only today (one stray Spanish label in the About section); **bilingual EN/ES is a confirmed durable goal**. The language mechanism (locale routes, switcher, dual content) is deliberately undecided.
- Site claims "3+ Years Experience" and "10+ Projects" — confirmed accurate in August 2026; keep them verifiable.

## Brand Commitments

- Name: Manuel Salvador. Handles: `@manu_svd` (X/Twitter), `manu.sacr` (Instagram/Threads), `manuel-salvador` (GitHub/LinkedIn). Contact email: manu.sacr@hotmail.com.
- Bilingual presence is binding: CV already exists in both English and Spanish.
- Streaming channels (Kick, Twitch) and Web3 socials live on the `/social` page; streaming is not a positioning pillar of the portfolio.

## Evidence on Hand

- **Portal Bosque** — shipped client website (portalbosque.com). It stays as proof of work he did. He does not continue on it as of 2026-10-03.
- **Diseñar Viajes** — travel-agency system he is building: an internal backoffice for packages, stock, reservations, and the team. Public agency site: diseñarviajes.com. The backoffice is not a public portfolio link and is not in the projects spreadsheet yet. Do not invent a screenshot or a public repo.
- **Projects spreadsheet** — 11 projects in the Google Sheets CSV: hackathon builds (Tuse, Sportsbook), a published npm CLI (`create-manu-app`), and practice apps; screenshots hosted on ibb.co.
- **CV/Resume** — Google Drive PDFs, EN and ES versions (`src/app/curriculum/page.tsx`).
- **Assets** — profile photo and logo in `public/`.
- Absences future work must not fabricate: no testimonials, no client quotes, no case-study metrics, no employer names beyond what the CV states.

## Product Principles

1. **Two doors, one stage.** Every surface must serve recruiters and clients equally; neither audience gets a second-class path to contact.
2. **Proof over claims.** Shipped work (Portal Bosque first) outranks self-description. Current work such as Diseñar Viajes can be named once it is real. Claims stay verifiable. New projects join through the spreadsheet when there is an image and an honest description.
3. **Open, not chasing.** Availability is warm and easy to act on, never desperate in tone.
4. **Both languages count.** EN and ES audiences are first-class; future surfaces must plan for both.
5. **Data stays editable.** Manuel maintains content in the spreadsheet and CVs; the design must not hardcode what the data source should own.

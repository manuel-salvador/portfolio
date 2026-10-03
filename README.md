# This is my Personal Portfolio

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project content

Project descriptions, screenshots, and comma-separated `skills` are maintained in the published Google Sheet referenced by `src/constants/urls.ts`.

Two optional columns add context to the featured projects:

- `context`: a short, verified project category, such as `Live client project` or `Hackathon project`. When absent, the homepage uses the existing badge or project context already available in its name and links.
- `contribution`: a brief description of Manuel's own work. The homepage labels it `My contribution`. Include only confirmed responsibilities; leave the cell empty until they are verified.

Existing sheets without these columns continue to work. The technology list comes from `skills`; no stack or contribution is hardcoded in the homepage.

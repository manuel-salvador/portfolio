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

## Hero character media

The hero character uses an MP4 timeline controlled by the mouse and a frontal poster. Its media URLs live in `src/constants/hero-character-media.ts`, following the same approach as the project screenshots. Both files are served from UploadThing. The video is centered and cropped to the portrait frame, including when the uploaded source is widescreen.

The existing Next.js image configuration allows the UploadThing host `gqbv64qxck.ufs.sh`; allow the poster's host in `next.config.js` if a different UploadThing app is used. Serving these public files does not require an UploadThing token or an upload endpoint in the portfolio.

Source `assets/`, temporary `.tmp/` and `tmp/` folders, and the prepared `public/studio/manuel-character.mp4` and `public/studio/manuel-character-poster.webp` copies are ignored by Git. Upload these prepared files when replacing the character, then update the media URLs. Before deployment, ensure both URLs point to UploadThing because local media copies are not included in the repository.

The atmospheric hero background is also served from UploadThing; its URL lives in `src/constants/hero-background-media.ts`. Two forward-playing video layers overlap for 1.5 seconds to conceal the loop boundary. A pause/play button controls the background, and playback stops when the hero is offscreen, the tab is hidden, or reduced motion is enabled. The avatar's mouse interaction remains independent.

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

Project descriptions, the index screenshot, and comma-separated `skills` are maintained in the published Google Sheet referenced by `src/constants/urls.ts`. The homepage stack shows extra page stills hosted on UploadThing for sites that have more than one public page. Those stills are real captures of distinct pages, not crops of the sheet image. The URLs live in `src/constants/project-page-shots.ts`.

Two optional columns add context to the featured projects:

- `context`: a short, verified project category, such as `Live client project` or `Hackathon project`. When absent, the homepage uses the existing badge or project context already available in its name and links.
- `contribution`: a brief description of Manuel's own work. The homepage labels it `My contribution`. Include only confirmed responsibilities; leave the cell empty until they are verified.

Existing sheets without these columns continue to work. The technology list comes from `skills`; no stack or contribution is hardcoded in the homepage.

## Hero character media

The hero character uses a paused MP4 timeline controlled by the mouse. Its UploadThing URL, frame rate, and calibrated pose times live in `src/constants/hero-character-media.ts`. The current optimized video is 720×720 at 24 fps with a keyframe at every frame. Its continuous turn runs from 0 seconds (left), through 2 seconds (front), to 5 seconds (right). Horizontal pointer movement across the hero eases toward that pose; leaving the hero returns to the front. The timeline stops updating at rest, offscreen, and in hidden tabs. Touch devices and reduced-motion visitors see the static frontal frame at 2 seconds from the same video, with metadata preloading instead of the full-video preload used on desktop. No separate poster or autoplay is used. The video is centered and cropped to the portrait frame.

Serving this public video does not require an UploadThing token or an upload endpoint in the portfolio. When replacing it, inspect the new timeline and update the pose times and frame rate along with the URL.

Mouse easing uses the elapsed time between decoded frames and snaps seeks to the video's frame rate, so slow decoding does not accumulate extra easing delay. The current clip was trimmed from the original source's 2.5–7.5 second turn and retains the last frame at 5 seconds, giving a duration of 5.041667 seconds. When preparing replacements, encode every frame as a keyframe (`-g 1 -bf 0`) and move MP4 metadata to the start (`-movflags +faststart`) before uploading it to UploadThing.

Source `assets/`, temporary `.tmp/` and `tmp/` folders, and old prepared `public/studio/manuel-character.mp4` and `public/studio/manuel-character-poster.webp` copies are ignored by Git. Before deployment, ensure the active video URL points to UploadThing because local media copies are not included in the repository. For smooth seeking, upload an MP4 with frequent keyframes; a single-keyframe video makes the decoder replay earlier frames for each seek.

The atmospheric hero background is also served from UploadThing; its URL lives in `src/constants/hero-background-media.ts`. Two forward-playing video layers overlap for 1.5 seconds to conceal the loop boundary. The decorative background has no visible playback controls. Playback stops when the hero is offscreen, the tab is hidden, or reduced motion is enabled. The avatar's mouse interaction remains independent.

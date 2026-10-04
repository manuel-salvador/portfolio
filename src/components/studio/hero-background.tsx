"use client";

import { useEffect, useRef } from "react";

import { HERO_BACKGROUND_VIDEO } from "@/constants/hero-background-media";

const CROSSFADE_SECONDS = 1.5;

function fadeDuration(duration: number): number {
  return Math.min(CROSSFADE_SECONDS, duration / 3);
}

export default function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const firstVideo = firstVideoRef.current;
    const secondVideo = secondVideoRef.current;
    const hero = backgroundRef.current?.closest("section");

    if (!(firstVideo && secondVideo && hero)) {
      return;
    }

    const videos = [firstVideo, secondVideo] as const;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeIndex = 0;
    let incomingIndex: number | null = null;
    let startingFade = false;
    let animationFrame = 0;
    let isVisible = false;
    let failed = false;
    let disposed = false;

    firstVideo.style.opacity = "1";
    firstVideo.style.zIndex = "0";
    secondVideo.style.opacity = "0";
    secondVideo.style.zIndex = "1";

    const canAnimate = () =>
      !(disposed || failed || document.hidden || reducedMotion.matches) &&
      isVisible;

    const pauseVideos = () => {
      for (const video of videos) {
        video.pause();
      }
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const playVideo = async (video: HTMLVideoElement): Promise<boolean> => {
      try {
        await video.play();
        if (!canAnimate()) {
          video.pause();
          return false;
        }
        return true;
      } catch {
        if (canAnimate()) {
          failed = true;
          pauseVideos();
        }
        return false;
      }
    };

    const finishFade = (nextIndex: number) => {
      const outgoing = videos[activeIndex];
      outgoing.pause();
      outgoing.currentTime = 0;
      outgoing.style.opacity = "0";
      videos[nextIndex].style.opacity = "1";
      activeIndex = nextIndex;
      incomingIndex = null;
    };

    const startFade = async () => {
      startingFade = true;
      const nextIndex = 1 - activeIndex;
      const incoming = videos[nextIndex];
      if (!incoming.getAttribute("src")) {
        incoming.src = HERO_BACKGROUND_VIDEO;
        incoming.load();
      }
      incoming.style.opacity = "0";
      incoming.style.zIndex = "1";
      videos[activeIndex].style.zIndex = "0";
      if (await playVideo(incoming)) {
        incomingIndex = nextIndex;
      }
      startingFade = false;
    };

    const tick = async () => {
      animationFrame = 0;
      if (!canAnimate()) {
        return;
      }

      const active = videos[activeIndex];
      if (incomingIndex !== null) {
        const incoming = videos[incomingIndex];
        const progress = Math.min(
          1,
          incoming.currentTime / fadeDuration(active.duration)
        );
        incoming.style.opacity = String(progress);
        if (progress >= 1) {
          finishFade(incomingIndex);
        }
      } else if (
        !startingFade &&
        Number.isFinite(active.duration) &&
        active.duration > 0 &&
        active.currentTime >= active.duration - fadeDuration(active.duration)
      ) {
        await startFade();
      }

      if (animationFrame === 0 && canAnimate()) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const resumeVideos = async () => {
      if (!(await playVideo(videos[activeIndex]))) {
        return;
      }
      if (incomingIndex !== null && !(await playVideo(videos[incomingIndex]))) {
        return;
      }
      if (animationFrame === 0 && canAnimate()) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const syncPlayback = async () => {
      if (!canAnimate()) {
        pauseVideos();
        return;
      }
      await resumeVideos();
    };

    const onError = () => {
      failed = true;
      pauseVideos();
    };

    const observer = new IntersectionObserver(async ([entry]) => {
      isVisible = entry.isIntersecting;
      await syncPlayback();
    });

    firstVideo.addEventListener("loadeddata", syncPlayback);
    for (const video of videos) {
      video.addEventListener("error", onError);
    }
    reducedMotion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    observer.observe(hero);

    return () => {
      disposed = true;
      pauseVideos();
      observer.disconnect();
      firstVideo.removeEventListener("loadeddata", syncPlayback);
      for (const video of videos) {
        video.removeEventListener("error", onError);
      }
      reducedMotion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0C0C0C]"
      ref={backgroundRef}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        disablePictureInPicture
        height={720}
        muted
        playsInline
        preload="metadata"
        ref={firstVideoRef}
        src={HERO_BACKGROUND_VIDEO}
        width={1280}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        disablePictureInPicture
        height={720}
        muted
        playsInline
        preload="none"
        ref={secondVideoRef}
        width={1280}
      />
      <div
        className="absolute inset-0 z-10 [--portrait-y:50%] sm:[--portrait-y:75%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% var(--portrait-y), rgba(12,12,12,0.94) 0%, rgba(12,12,12,0.65) 24%, transparent 58%), linear-gradient(180deg, rgba(12,12,12,0.78) 0%, rgba(12,12,12,0.48) 38%, rgba(12,12,12,0.72) 100%)",
        }}
      />
    </div>
  );
}

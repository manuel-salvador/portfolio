"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { HERO_BACKGROUND_VIDEO } from "@/constants/hero-background-media";

const CROSSFADE_SECONDS = 1.5;

function fadeDuration(duration: number): number {
  return Math.min(CROSSFADE_SECONDS, duration / 3);
}

export default function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const togglePlaybackRef = useRef<(() => Promise<void>) | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const onTogglePlayback = useCallback(async () => {
    await togglePlaybackRef.current?.();
  }, []);

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
    let userPaused = false;
    let failed = false;
    let disposed = false;

    firstVideo.style.opacity = "1";
    firstVideo.style.zIndex = "0";
    secondVideo.style.opacity = "0";
    secondVideo.style.zIndex = "1";

    const canAnimate = () =>
      !(
        disposed ||
        failed ||
        userPaused ||
        document.hidden ||
        reducedMotion.matches
      ) && isVisible;

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
          userPaused = true;
          setIsPaused(true);
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

    const onReady = async () => {
      setShowControl(!(reducedMotion.matches || failed));
      await syncPlayback();
    };

    const onError = () => {
      failed = true;
      setShowControl(false);
      pauseVideos();
    };

    const onMotionChange = async () => {
      setShowControl(
        !(reducedMotion.matches || failed) &&
          firstVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
      );
      await syncPlayback();
    };

    togglePlaybackRef.current = async () => {
      userPaused = !userPaused;
      setIsPaused(userPaused);
      await syncPlayback();
    };

    const observer = new IntersectionObserver(async ([entry]) => {
      isVisible = entry.isIntersecting;
      await syncPlayback();
    });

    firstVideo.addEventListener("loadeddata", onReady);
    for (const video of videos) {
      video.addEventListener("error", onError);
    }
    reducedMotion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", syncPlayback);
    observer.observe(hero);
    if (firstVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      setShowControl(!(reducedMotion.matches || failed));
    }

    return () => {
      disposed = true;
      pauseVideos();
      observer.disconnect();
      togglePlaybackRef.current = null;
      firstVideo.removeEventListener("loadeddata", onReady);
      for (const video of videos) {
        video.removeEventListener("error", onError);
      }
      reducedMotion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, []);

  return (
    <>
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
      {showControl ? (
        <button
          aria-label={
            isPaused ? "Play background video" : "Pause background video"
          }
          className="absolute right-6 bottom-24 z-30 inline-flex size-11 items-center justify-center rounded-full border border-[#D7E2EA]/30 bg-[#0C0C0C]/60 text-[#D7E2EA] transition-colors hover:bg-[#0C0C0C] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 md:right-10 md:bottom-28"
          onClick={onTogglePlayback}
          title={isPaused ? "Play background video" : "Pause background video"}
          type="button"
        >
          <svg
            aria-hidden="true"
            fill="none"
            height="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="16"
          >
            {isPaused ? (
              <path d="m8 5 11 7-11 7Z" />
            ) : (
              <path d="M9 5v14M15 5v14" />
            )}
          </svg>
        </button>
      ) : null}
    </>
  );
}

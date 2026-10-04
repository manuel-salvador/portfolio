"use client";

import { useEffect, useRef } from "react";

import { HERO_CHARACTER_MEDIA } from "@/constants/hero-character-media";

const FRAME_DURATION = 1 / HERO_CHARACTER_MEDIA.frameRate;
const SEEK_THRESHOLD = FRAME_DURATION / 2;
const RESPONSE_TIME_MS = 85;
const POSITION_THRESHOLD = 0.002;
const INITIAL_FRAME_MS = 1000 / 60;
const BOTTOM_FADE_MASK =
  "linear-gradient(to bottom, #000 66%, rgb(0 0 0 / 0.7) 77%, rgb(0 0 0 / 0.2) 89%, transparent 98%)";

function getPoseTime(position: number, duration: number): number {
  const endTime = Math.max(0, duration - FRAME_DURATION);
  const leftTime = Math.min(HERO_CHARACTER_MEDIA.poseTimes.left, endTime);
  const frontTime = Math.min(HERO_CHARACTER_MEDIA.poseTimes.front, endTime);
  const rightTime = Math.min(HERO_CHARACTER_MEDIA.poseTimes.right, endTime);

  if (position <= 0.5) {
    return leftTime + position * 2 * (frontTime - leftTime);
  }

  return frontTime + (position - 0.5) * 2 * (rightTime - frontTime);
}

export default function HeroCharacter() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    const video = videoRef.current;
    const hero = portrait?.closest("section");

    if (!(portrait && video && hero)) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let pointerPosition = 0.5;
    let displayedPosition = 0.5;
    let animationFrame = 0;
    let lastFrameTime = 0;
    let isVisible = true;
    let failed = false;

    const canScrub = () => finePointer.matches && !reducedMotion.matches;

    const cancelSeek = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      lastFrameTime = 0;
    };

    const hasPendingMovement = () =>
      Math.abs(displayedPosition - pointerPosition) > POSITION_THRESHOLD;

    const seekToPointer = (timestamp: number) => {
      animationFrame = 0;

      if (
        !canScrub() ||
        document.hidden ||
        !isVisible ||
        failed ||
        video.seeking ||
        video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }

      const elapsed = lastFrameTime
        ? timestamp - lastFrameTime
        : INITIAL_FRAME_MS;
      lastFrameTime = timestamp;
      const blend = 1 - Math.exp(-elapsed / RESPONSE_TIME_MS);
      displayedPosition += (pointerPosition - displayedPosition) * blend;
      if (!hasPendingMovement()) {
        displayedPosition = pointerPosition;
      }

      const poseTime = getPoseTime(displayedPosition, video.duration);
      const targetTime = Math.round(poseTime / FRAME_DURATION) * FRAME_DURATION;
      if (Math.abs(video.currentTime - targetTime) > SEEK_THRESHOLD) {
        video.currentTime = targetTime;
        return;
      }

      if (hasPendingMovement()) {
        animationFrame = window.requestAnimationFrame(seekToPointer);
      } else {
        lastFrameTime = 0;
      }
    };

    const queueSeek = () => {
      if (
        animationFrame === 0 &&
        canScrub() &&
        isVisible &&
        !document.hidden &&
        !failed
      ) {
        animationFrame = window.requestAnimationFrame(seekToPointer);
      }
    };

    const onSeeked = () => {
      if (!failed) {
        portrait.dataset.ready = "true";
        if (hasPendingMovement()) {
          queueSeek();
        } else {
          lastFrameTime = 0;
        }
      }
    };

    const initializePose = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0 || failed) {
        return;
      }

      video.pause();
      const initialTime = canScrub()
        ? getPoseTime(0.5, video.duration)
        : HERO_CHARACTER_MEDIA.poseTimes.still;
      video.currentTime = initialTime;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !canScrub()) {
        return;
      }

      const bounds = hero.getBoundingClientRect();
      if (bounds.width <= 0) {
        return;
      }

      pointerPosition = Math.max(
        0,
        Math.min(1, (event.clientX - bounds.left) / bounds.width)
      );
      queueSeek();
    };

    const resetPose = () => {
      pointerPosition = 0.5;
      queueSeek();
    };

    const onVideoError = () => {
      failed = true;
      cancelSeek();
      portrait.dataset.ready = "false";
    };

    const syncPreferences = () => {
      cancelSeek();
      pointerPosition = 0.5;
      displayedPosition = 0.5;
      portrait.dataset.ready = "false";
      video.preload = canScrub() ? "auto" : "metadata";
      initializePose();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelSeek();
        return;
      }

      resetPose();
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry?.isIntersecting ?? false;
      if (isVisible) {
        resetPose();
      } else {
        cancelSeek();
        pointerPosition = 0.5;
      }
    });

    video.addEventListener("loadedmetadata", initializePose);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("error", onVideoError);
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetPose);
    window.addEventListener("blur", resetPose);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", syncPreferences);
    finePointer.addEventListener("change", syncPreferences);
    observer.observe(hero);
    syncPreferences();
    video.src = HERO_CHARACTER_MEDIA.video;
    video.load();

    return () => {
      cancelSeek();
      observer.disconnect();
      video.removeEventListener("loadedmetadata", initializePose);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("error", onVideoError);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", resetPose);
      window.removeEventListener("blur", resetPose);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", syncPreferences);
      finePointer.removeEventListener("change", syncPreferences);
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="group relative aspect-[360/347] w-full"
      data-ready="false"
      ref={portraitRef}
      style={{
        maskImage: BOTTOM_FADE_MASK,
        WebkitMaskImage: BOTTOM_FADE_MASK,
      }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-150 group-data-[ready=true]:opacity-100 motion-reduce:transition-none"
        disablePictureInPicture
        height={720}
        muted
        playsInline
        preload="none"
        ref={videoRef}
        width={720}
      />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { HERO_CHARACTER_MEDIA } from "@/constants/hero-character-media";

const FRONT_TIME = 1.5;
const START_TIME = 0.25;
const FRAME_DURATION = 1 / 24;
const SEEK_THRESHOLD = FRAME_DURATION / 2;
const BOTTOM_FADE_MASK =
  "linear-gradient(to bottom, #000 66%, rgb(0 0 0 / 0.7) 77%, rgb(0 0 0 / 0.2) 89%, transparent 98%)";

function getPoseTime(position: number, duration: number): number {
  const endTime = Math.max(START_TIME, duration - FRAME_DURATION);
  const frontTime = Math.min(FRONT_TIME, endTime);

  if (position <= 0.5) {
    return START_TIME + position * 2 * (frontTime - START_TIME);
  }

  return frontTime + (position - 0.5) * 2 * (endTime - frontTime);
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
    let animationFrame = 0;

    const canScrub = () => finePointer.matches && !reducedMotion.matches;

    const cancelSeek = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const seekToPointer = () => {
      animationFrame = 0;

      if (
        !canScrub() ||
        document.hidden ||
        video.seeking ||
        video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }

      const targetTime = getPoseTime(pointerPosition, video.duration);
      if (Math.abs(video.currentTime - targetTime) > SEEK_THRESHOLD) {
        video.currentTime = targetTime;
      }
    };

    const queueSeek = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(seekToPointer);
      }
    };

    const onSeeked = () => {
      if (canScrub()) {
        portrait.dataset.ready = "true";
        queueSeek();
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !canScrub()) {
        return;
      }

      const bounds = hero.getBoundingClientRect();
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
      cancelSeek();
      portrait.dataset.ready = "false";
    };

    const syncPreferences = () => {
      cancelSeek();
      pointerPosition = 0.5;
      portrait.dataset.ready = "false";

      if (canScrub()) {
        video.preload = "auto";
        video.src = HERO_CHARACTER_MEDIA.video;
      } else {
        video.removeAttribute("src");
        video.preload = "none";
      }

      video.load();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelSeek();
        return;
      }

      resetPose();
    };

    video.addEventListener("loadeddata", queueSeek);
    video.addEventListener("seeked", onSeeked);
    video.addEventListener("error", onVideoError);
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetPose);
    window.addEventListener("blur", resetPose);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", syncPreferences);
    finePointer.addEventListener("change", syncPreferences);
    syncPreferences();

    return () => {
      cancelSeek();
      video.removeEventListener("loadeddata", queueSeek);
      video.removeEventListener("seeked", onSeeked);
      video.removeEventListener("error", onVideoError);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", resetPose);
      window.removeEventListener("blur", resetPose);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", syncPreferences);
      finePointer.removeEventListener("change", syncPreferences);
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
      <Image
        alt=""
        className="object-contain"
        fill
        priority
        sizes="(min-width: 1024px) 520px, (min-width: 768px) 440px, (min-width: 640px) 360px, 280px"
        src={HERO_CHARACTER_MEDIA.poster}
      />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-150 group-data-[ready=true]:opacity-100 motion-reduce:transition-none"
        disablePictureInPicture
        height={694}
        muted
        playsInline
        poster={HERO_CHARACTER_MEDIA.poster}
        preload="none"
        ref={videoRef}
        width={720}
      />
    </div>
  );
}

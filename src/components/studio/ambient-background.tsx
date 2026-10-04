"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) {
      return;
    }

    let heroCoversViewport = false;
    const syncAnimation = () => {
      background.dataset.active = String(
        !(document.hidden || heroCoversViewport)
      );
    };
    const hero = pathname === "/" ? document.getElementById("home") : null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        heroCoversViewport = entry.intersectionRatio >= 0.95;
        syncAnimation();
      },
      { threshold: [0, 0.95] }
    );

    if (hero) {
      observer.observe(hero);
    }
    document.addEventListener("visibilitychange", syncAnimation);
    syncAnimation();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="ambient-background"
      data-active="false"
      ref={backgroundRef}
    >
      <div className="ambient-background-light ambient-background-light-cyan" />
      <div className="ambient-background-light ambient-background-light-teal" />
      <div className="ambient-background-shade" />
    </div>
  );
}

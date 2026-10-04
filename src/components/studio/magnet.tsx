"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type MagnetProps = {
  activeTransition?: string;
  children: ReactNode;
  className?: string;
  inactiveTransition?: string;
  padding?: number;
  strength?: number;
};

export default function Magnet({
  activeTransition = "transform 0.3s ease-out",
  children,
  className,
  inactiveTransition = "transform 0.6s ease-in-out",
  padding = 150,
  strength = 3,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const reset = () => {
      setTransition(inactiveTransition);
      setTransform("translate3d(0, 0, 0)");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduced.matches) {
        reset();
        return;
      }

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const withinX = Math.abs(distanceX) <= rect.width / 2 + padding;
      const withinY = Math.abs(distanceY) <= rect.height / 2 + padding;

      if (!(withinX && withinY)) {
        reset();
        return;
      }

      setTransition(activeTransition);
      setTransform(
        `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`
      );
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ transform, transition, willChange: "transform" }}
    >
      {children}
    </div>
  );
}

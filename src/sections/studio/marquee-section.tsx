"use client";

import Image from "next/image";
import { type RefObject, useEffect, useRef } from "react";

type MarqueeSectionProps = {
  images: string[];
};

const COPIES = ["first", "second", "third"] as const;

function looped(images: string[]): { copy: string; src: string }[] {
  return COPIES.flatMap((copy) => images.map((src) => ({ copy, src })));
}

function MarqueeRow({
  direction,
  images,
  rowRef,
}: {
  direction: "left" | "right";
  images: string[];
  rowRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3"
        ref={rowRef}
        style={{
          transform:
            direction === "right" ? "translateX(-200px)" : "translateX(200px)",
          willChange: "transform",
        }}
      >
        {looped(images).map((tile) => (
          <Image
            alt=""
            className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            height={270}
            key={`${tile.copy}-${tile.src}`}
            loading="lazy"
            src={tile.src}
            width={420}
          />
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection({ images }: MarqueeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || images.length === 0) {
      return;
    }

    const update = () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (rowOneRef.current) {
        rowOneRef.current.style.transform = `translateX(${offset - 200}px)`;
      }

      if (rowTwoRef.current) {
        rowTwoRef.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  const splitAt = Math.ceil(images.length / 2);
  const firstRow = images.slice(0, splitAt);
  const secondRow = images.slice(splitAt);
  const trailingRow = secondRow.length > 0 ? secondRow : firstRow;

  return (
    <section
      aria-label="Project screenshots"
      className="overflow-hidden pt-24 pb-10 sm:pt-32 md:pt-40"
      ref={sectionRef}
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow direction="right" images={firstRow} rowRef={rowOneRef} />
        <MarqueeRow direction="left" images={trailingRow} rowRef={rowTwoRef} />
      </div>
    </section>
  );
}

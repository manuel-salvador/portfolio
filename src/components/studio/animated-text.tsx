"use client";

import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { type CSSProperties, useRef } from "react";

type AnimatedTextProps = {
  className?: string;
  style?: CSSProperties;
  text: string;
};

function Character({
  character,
  index,
  progress,
  total,
}: {
  character: string;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = index / total;
  const end = Math.min(start + 1 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const glyph = character === " " ? "\u00A0" : character;

  return (
    <span className="relative inline-block whitespace-pre">
      <span aria-hidden="true" className="invisible">
        {glyph}
      </span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {glyph}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  className,
  style,
  text,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start 0.8", "end 0.2"],
    target: ref,
  });
  const characters = Array.from(text);
  const tokens: { character: string; index: number; key: string }[] = [];
  let prefix = "";

  for (const character of characters) {
    prefix += character === " " ? "·" : character;
    tokens.push({ character, index: tokens.length, key: prefix });
  }

  if (reduce) {
    return (
      <p className={className} ref={ref} style={style}>
        {text}
      </p>
    );
  }

  return (
    <p className={className} ref={ref} style={style}>
      {tokens.map((token) => (
        <Character
          character={token.character}
          index={token.index}
          key={token.key}
          progress={scrollYProgress}
          total={characters.length}
        />
      ))}
    </p>
  );
}

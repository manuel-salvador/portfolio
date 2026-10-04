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

function Word({
  word,
  index,
  progress,
  total,
}: {
  word: string;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = index / total;
  const end = Math.min(start + 1 / total, 1);
  const opacity = useTransform(progress, [start, end], [0.8, 1]);
  const y = useTransform(progress, [start, end], [2, 0]);

  return (
    <motion.span className="inline-block" style={{ opacity, y }}>
      {word}
    </motion.span>
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
  const words = text.split(" ");
  const tokens: { word: string; index: number; key: string }[] = [];
  let prefix = "";

  for (const word of words) {
    prefix += `${word} `;
    tokens.push({ index: tokens.length, key: prefix, word });
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
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {tokens.map((token) => (
          <span key={token.key}>
            <Word
              index={token.index}
              progress={scrollYProgress}
              total={words.length}
              word={token.word}
            />
            {token.index < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </p>
  );
}

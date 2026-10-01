"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeTags = {
  div: motion.create("div"),
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  nav: motion.create("nav"),
  p: motion.create("p"),
} as const;

type FadeTag = keyof typeof fadeTags;

type FadeInProps = {
  as?: FadeTag;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export default function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const reduce = useReducedMotion();
  const Tag = fadeTags[as];

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, x, y }}
      transition={{ delay, duration, ease: EASE }}
      viewport={{ amount: 0, margin: "50px", once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </Tag>
  );
}

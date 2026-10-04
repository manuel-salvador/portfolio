import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type FadeTag = "div" | "h1" | "h2" | "nav" | "p";

type FadeStyle = CSSProperties & {
  "--fade-delay": string;
  "--fade-duration": string;
  "--fade-x": string;
  "--fade-y": string;
};

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
  const Tag = as;
  const style: FadeStyle = {
    "--fade-delay": `${delay}s`,
    "--fade-duration": `${duration}s`,
    "--fade-x": `${x}px`,
    "--fade-y": `${y}px`,
  };

  return (
    <Tag className={cn("studio-fade-in", className)} style={style}>
      {children}
    </Tag>
  );
}

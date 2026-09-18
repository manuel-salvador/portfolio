import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLayoutType = {
  children: ReactNode;
  className?: string;
  id: string;
};

export default function SectionLayout({
  children,
  className,
  id,
}: SectionLayoutType) {
  return (
    <section
      className={cn("w-full px-2 py-[76px] md:py-[74px]", className)}
      id={id}
    >
      {children}
    </section>
  );
}

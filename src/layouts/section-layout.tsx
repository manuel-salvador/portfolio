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
      className={cn(
        "w-full scroll-mt-28 px-4 py-[76px] md:px-2 md:py-[74px]",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
}

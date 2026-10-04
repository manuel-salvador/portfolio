import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type LiveProjectButtonProps = ComponentProps<"a"> & {
  label?: string;
};

export default function LiveProjectButton({
  className,
  label = "Live Project",
  ...props
}: LiveProjectButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 font-medium text-[#D7E2EA] text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3 sm:px-10 sm:py-3.5 sm:text-base",
        className
      )}
      {...props}
    >
      {label}
    </a>
  );
}

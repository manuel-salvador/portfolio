import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ContactButtonProps = ComponentProps<"a">;

export default function ContactButton({
  children = "Contact Me",
  className,
  ...props
}: ContactButtonProps) {
  return (
    <a className={cn("contact-pill", className)} {...props}>
      {children}
    </a>
  );
}

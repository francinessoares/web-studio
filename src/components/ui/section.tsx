import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "light" | "dark";
};

export function Section({
  className,
  tone = "light",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-[96px] py-[64px] sm:py-[80px] lg:py-[120px]",
        tone === "light" && "bg-background text-foreground",
        tone === "dark" &&
          "bg-dark text-dark-foreground [--ring:var(--dark-foreground)]",
        className,
      )}
      {...props}
    />
  );
}

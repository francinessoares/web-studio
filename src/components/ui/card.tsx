import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  variant?: "light" | "dark" | "highlight";
};

const variants = {
  light: "border-border bg-surface text-foreground",
  dark: "border-border-dark bg-dark text-dark-foreground [--ring:var(--dark-foreground)]",
  highlight: "border-primary bg-surface text-foreground",
} as const;

export function Card({
  className,
  variant = "light",
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[16px] border p-[24px] shadow-sm transition-[border-color,transform] duration-[200ms] sm:p-[32px]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

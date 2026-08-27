import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "lime" | "neutral" | "dark";
};

export function Badge({
  className,
  variant = "lime",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[8px] px-[10px] py-[4px] text-[12px] leading-[1.4] font-medium tracking-[0.04em] uppercase",
        variant === "lime" && "bg-primary text-primary-foreground",
        variant === "neutral" && "bg-secondary text-foreground",
        variant === "dark" && "bg-dark text-dark-foreground",
        className,
      )}
      {...props}
    />
  );
}

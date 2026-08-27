import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  tone?: "light" | "dark";
};

export function Divider({ className, tone = "light", ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "h-px w-full border-0",
        tone === "light" ? "bg-border" : "bg-border-dark",
        className,
      )}
      {...props}
    />
  );
}

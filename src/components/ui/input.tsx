import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type FieldTone = "light" | "dark";

export function fieldControlClass(tone: FieldTone = "light") {
  return cn(
    "w-full rounded-[10px] border px-[16px] text-[16px] outline-none transition-[border-color] duration-[200ms]",
    "disabled:cursor-not-allowed disabled:opacity-40",
    tone === "light" &&
      "bg-surface text-foreground placeholder:text-muted hover:border-neutral-500 focus-visible:border-foreground",
    tone === "dark" &&
      "bg-surface-dark text-dark-foreground placeholder:text-neutral-500 hover:border-neutral-500 focus-visible:border-primary",
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  tone?: FieldTone;
};

export function Input({
  className,
  invalid,
  disabled,
  tone = "light",
  ...props
}: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      disabled={disabled}
      className={cn(
        fieldControlClass(tone),
        "h-[48px]",
        invalid
          ? "border-destructive"
          : tone === "dark"
            ? "border-border-dark"
            : "border-border",
        className,
      )}
      {...props}
    />
  );
}

import type { TextareaHTMLAttributes } from "react";

import { fieldControlClass, type FieldTone } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
  tone?: FieldTone;
};

export function Textarea({
  className,
  invalid,
  disabled,
  tone = "light",
  ...props
}: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      disabled={disabled}
      className={cn(
        fieldControlClass(tone),
        "min-h-[120px] py-[12px] leading-[1.6]",
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

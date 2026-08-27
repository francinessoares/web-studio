"use client";

import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";

import { bindInPageHashClick, type HashHref } from "@/lib/hash-navigation";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[8px] font-medium transition-[color,background-color,border-color,transform] duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus-ring disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        "dark-primary":
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        "dark-secondary":
          "border border-dark-foreground bg-transparent text-dark-foreground hover:bg-dark-foreground hover:text-dark",
        inverse:
          "bg-foreground text-background hover:bg-neutral-800",
        "inverse-secondary":
          "border-0 bg-transparent px-0 text-foreground underline decoration-foreground underline-offset-[6px] hover:bg-transparent",
      },
      size: {
        md: "h-[48px] min-h-[48px] rounded-[10px] px-[24px] text-[16px]",
        sm: "h-[44px] min-h-[44px] rounded-[10px] px-[16px] text-[14px]",
        pill: "h-[44px] min-h-[44px] rounded-full px-[20px] text-[13px] font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof NextLink> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  href,
  onClick,
  ...props
}: ButtonLinkProps) {
  return (
    <NextLink
      href={href}
      onClick={bindInPageHashClick(href as HashHref, onClick)}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };

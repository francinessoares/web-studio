"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";

import { bindInPageHashClick, type HashHref } from "@/lib/hash-navigation";
import { cn } from "@/lib/utils";

type LinkProps = ComponentProps<typeof NextLink> & {
  tone?: "light" | "dark";
};

export function Link({
  className,
  tone = "light",
  href,
  onClick,
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      onClick={bindInPageHashClick(href as HashHref, onClick)}
      className={cn(
        "focus-ring inline-flex min-h-[44px] items-center text-[16px] font-medium underline-offset-[4px] transition-colors duration-[200ms]",
        tone === "light" && "text-foreground hover:underline",
        tone === "dark" && "text-primary hover:underline",
        className,
      )}
      {...props}
    />
  );
}

"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";

import { bindInPageHashClick, type HashHref } from "@/lib/hash-navigation";

export function InPageHashLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      href={href}
      onClick={bindInPageHashClick(href as HashHref, onClick)}
      {...props}
    />
  );
}

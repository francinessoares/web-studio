import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

const styles: Record<HeadingLevel, string> = {
  1: "text-[44px] leading-[1] font-bold tracking-[-1px] sm:text-[56px] lg:text-[72px] lg:leading-[0.95]",
  2: "text-[36px] leading-[1.1] font-bold tracking-[-1px] lg:text-[52px] lg:leading-[1.05]",
  3: "text-[26px] leading-[1.15] font-bold tracking-[-1px] lg:text-[32px]",
  4: "text-[24px] leading-[1.2] font-semibold tracking-[-0.5px]",
};

export function Heading({
  level = 2,
  className,
  ...props
}: HeadingProps) {
  const Tag = tags[level];

  return (
    <Tag className={cn("font-heading", styles[level], className)} {...props} />
  );
}

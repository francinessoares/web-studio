import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "layout-rail mx-auto w-full px-[20px] sm:px-[32px]",
        className,
      )}
      {...props}
    />
  );
}

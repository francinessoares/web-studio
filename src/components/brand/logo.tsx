import Image from "next/image";

import { InPageHashLink } from "@/components/in-page-hash-link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const LOGO = {
  src: "/images/logo.png",
  width: 1774,
  height: 887,
} as const;

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
  size?: "header" | "footer";
};

export function BrandLogo({
  href = "/",
  className,
  priority = false,
  size = "header",
}: BrandLogoProps) {
  return (
    <InPageHashLink
      href={href}
      className={cn(
        "focus-ring inline-flex min-h-[44px] items-center",
        className,
      )}
      aria-label={siteConfig.name}
    >
      <span
        className={cn(
          "relative block shrink-0",
          size === "header" && "h-[64px] w-[128px] sm:h-[72px] sm:w-[144px]",
          size === "footer" && "h-[80px] w-[160px]",
        )}
      >
        <Image
          src={LOGO.src}
          alt=""
          fill
          priority={priority}
          unoptimized
          sizes={size === "footer" ? "160px" : "144px"}
          className="object-contain object-left"
        />
      </span>
    </InPageHashLink>
  );
}

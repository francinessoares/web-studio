import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  titleId: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  level?: 2 | 3;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  tone = "light",
  align = "left",
  level = 2,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-[720px] text-center" : "max-w-[640px]")}>
      {eyebrow ? (
        <p
          className={cn(
            "font-eyebrow inline-flex items-center gap-[8px]",
            tone === "dark" ? "text-primary" : "text-foreground",
            align === "center" && "justify-center",
          )}
        >
          {tone === "light" ? (
            <span className="size-[8px] bg-primary" aria-hidden />
          ) : null}
          {eyebrow}
        </p>
      ) : null}
      <Heading level={level} id={titleId} className="mt-[12px]">
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-body mt-[16px]",
            tone === "dark" ? "text-neutral-400" : "text-muted",
            align === "center" && "mx-auto max-w-[52ch]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

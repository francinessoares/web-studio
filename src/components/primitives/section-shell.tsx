import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionShell({
  id,
  labelledBy,
  children,
  className,
  tone = "light",
}: SectionShellProps) {
  return (
    <Section
      id={id}
      aria-labelledby={labelledBy}
      tone={tone}
      className={cn(className)}
    >
      <Container>{children}</Container>
    </Section>
  );
}

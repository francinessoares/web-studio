import {
  CircleCheck,
  MessageCircle,
  Monitor,
  Pencil,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { processSteps } from "@/data/process";

const processIcons: LucideIcon[] = [
  MessageCircle,
  Pencil,
  Monitor,
  CircleCheck,
  Rocket,
];

export function ProcessSection() {
  return (
    <SectionShell id="como-funciona" labelledBy="como-heading">
      <SectionHeading
        align="center"
        eyebrow="Como funciona"
        title="Um processo simples e transparente."
        description="Não partimos de um pacote fechado. A jornada é a mesma; o conteúdo de cada etapa muda com o seu contexto."
        titleId="como-heading"
      />
      <ol className="mt-[56px] grid gap-[32px] sm:grid-cols-2 lg:grid-cols-5 lg:gap-[16px]">
        {processSteps.map((step, index) => {
          const Icon = processIcons[index] ?? MessageCircle;
          return (
            <li key={step.number} className="relative">
              <div className="flex items-center gap-[12px]">
                <span className="text-[28px] font-bold tracking-[-1px]">
                  {step.number}
                </span>
                <Icon className="size-[20px]" strokeWidth={1.5} aria-hidden />
                {index < processSteps.length - 1 ? (
                  <span
                    className="ml-[8px] hidden h-px flex-1 bg-border lg:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <h3 className="mt-[16px] text-[18px] font-semibold tracking-[-0.5px]">
                {step.title}
              </h3>
              <p className="text-body-sm mt-[8px] text-muted">{step.body}</p>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}

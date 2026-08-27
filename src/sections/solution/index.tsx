import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { solutionCopy, solutionSteps } from "@/data/solution";

export function SolutionSection() {
  return (
    <SectionShell id="solucao" labelledBy="solucao-heading">
      <SectionHeading
        align="center"
        eyebrow="A solução"
        title={solutionCopy.title}
        description={solutionCopy.body}
        titleId="solucao-heading"
      />
      <ol className="mt-[48px] flex flex-col gap-[12px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-[8px]">
        {solutionSteps.map((step, index) => (
          <li key={step.id} className="flex items-center gap-[8px]">
            <span className="text-[16px] font-semibold tracking-[-0.5px]">
              {step.label}
            </span>
            {index < solutionSteps.length - 1 ? (
              <ArrowRight
                className="hidden size-[14px] text-muted sm:block"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

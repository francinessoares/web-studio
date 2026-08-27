import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { plans, plansNote } from "@/data/plans";

export function PlansSection() {
  return (
    <SectionShell id="planos" labelledBy="planos-heading" tone="dark">
      <SectionHeading
        tone="dark"
        eyebrow="Investimento"
        title="Três caminhos. O valor sai da conversa."
        description={plansNote}
        titleId="planos-heading"
      />
      <ul className="mt-[48px] grid gap-[16px] lg:grid-cols-3">
        {plans.map((plan) => (
          <li
            key={plan.id}
            className="border-t border-border-dark pt-[20px]"
          >
            <p className="text-[18px] font-semibold">{plan.name}</p>
            <p className="text-body-sm mt-[8px] text-neutral-400">
              {plan.summary}
            </p>
          </li>
        ))}
      </ul>
      <ButtonLink href="/#contato" variant="dark-primary" className="mt-[40px]">
        Montar meu plano
        <ArrowUpRight className="size-[16px]" aria-hidden />
      </ButtonLink>
    </SectionShell>
  );
}

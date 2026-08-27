import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { plans, plansNote } from "@/data/plans";
import { whyUs } from "@/data/why-us";

export function PlansSection() {
  const highlights = whyUs.slice(0, 3);

  return (
    <section
      id="planos"
      aria-labelledby="planos-heading"
      className="scroll-mt-[96px]"
    >
      <Container className="px-0 sm:px-[32px]">
        <div className="grid lg:grid-cols-12">
          <div className="bg-dark px-[20px] py-[64px] text-dark-foreground sm:px-[40px] lg:col-span-5 lg:rounded-l-[20px] lg:py-[80px] [--ring:var(--dark-foreground)]">
            <SectionHeading
              tone="dark"
              eyebrow="Investimento"
              title="Três caminhos. O valor sai da conversa."
              description={plansNote}
              titleId="planos-heading"
            />
            <ul className="mt-[32px] flex flex-col gap-[16px]">
              {plans.map((plan) => (
                <li key={plan.id} className="border-t border-border-dark pt-[16px]">
                  <p className="text-[18px] font-semibold">{plan.name}</p>
                  <p className="text-body-sm mt-[6px] text-neutral-400">
                    {plan.summary}
                  </p>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/#contato"
              variant="dark-primary"
              className="mt-[32px]"
            >
              Montar meu plano
              <ArrowUpRight className="size-[16px]" aria-hidden />
            </ButtonLink>
          </div>

          <div className="bg-background px-[20px] py-[64px] sm:px-[40px] lg:col-span-7 lg:rounded-r-[20px] lg:border lg:border-l-0 lg:border-border lg:py-[80px]">
            <SectionHeading
              eyebrow="Por que nós"
              title="Profissional desde o primeiro projeto."
              description="Método, execução e conversa direta. Você fala com quem faz o trabalho."
              titleId="porque-heading"
              level={3}
            />
            <ul className="mt-[40px] flex flex-col gap-[24px]">
              {highlights.map((item) => (
                <li key={item.title} className="border-t border-border pt-[20px]">
                  <h3 className="text-[18px] font-semibold tracking-[-0.5px]">
                    {item.title}
                  </h3>
                  <p className="text-body mt-[8px] text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

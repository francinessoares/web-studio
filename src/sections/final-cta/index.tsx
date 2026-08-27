"use client";

import { Calendar, ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { trackEvent } from "@/lib/analytics";

export function FinalCtaSection() {
  return (
    <section
      id="cta-final"
      aria-labelledby="cta-final-heading"
      className="scroll-mt-[96px] bg-background pb-[64px] sm:pb-[80px]"
    >
      <Container>
        <div className="flex flex-col gap-[24px] rounded-[20px] bg-dark px-[24px] py-[36px] text-dark-foreground sm:px-[32px] lg:flex-row lg:items-center lg:justify-between lg:px-[40px] lg:py-[40px] [--ring:var(--dark-foreground)]">
          <div className="flex items-start gap-[16px] sm:items-center">
            <span className="flex size-[48px] shrink-0 items-center justify-center rounded-[10px] bg-primary text-primary-foreground">
              <Calendar className="size-[20px]" aria-hidden />
            </span>
            <div>
              <h2
                id="cta-final-heading"
                className="text-[22px] leading-[1.2] font-bold tracking-[-0.5px] sm:text-[28px]"
              >
                Seu próximo cliente pode estar procurando por você agora.
              </h2>
              <p className="text-body-sm mt-[8px] text-neutral-400">
                Vamos entender seu negócio e descobrir o próximo passo.
              </p>
            </div>
          </div>
          <ButtonLink
            href="/#contato"
            variant="dark-primary"
            className="w-full shrink-0 sm:w-auto"
            onClick={() =>
              trackEvent({
                event: "cta_click",
                label: "cta_final",
                href: "/#contato",
              })
            }
          >
            Quero falar com um especialista
            <ArrowUpRight className="size-[16px]" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

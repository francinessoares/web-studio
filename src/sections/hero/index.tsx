"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { trackEvent } from "@/lib/analytics";
import { buildHeroVariants, useMotionPrefs } from "@/lib/motion";

function HeroTitle() {
  return (
    <>
      <span className="block">Seu negócio</span>
      <span className="block">pronto para</span>
      <span className="block">
        <span className="relative z-0 inline-block px-[2px]">
          crescer
          <span
            className="absolute inset-x-0 bottom-[6px] -z-10 h-[12px] bg-primary sm:bottom-[8px] sm:h-[14px] lg:bottom-[10px] lg:h-[18px]"
            aria-hidden
          />
        </span>{" "}
        no digital.
      </span>
    </>
  );
}

export function Hero() {
  const { reducedMotion } = useMotionPrefs();
  const variants = buildHeroVariants(reducedMotion);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-x-clip bg-background scroll-mt-[96px]"
    >
      <Container>
        <motion.div
          className="grid items-center gap-[48px] pt-[64px] pb-[80px] lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-[56px] lg:pt-[88px] lg:pb-[120px] lg:min-h-[calc(100svh-96px)]"
          initial="hidden"
          animate="visible"
          variants={variants.container}
        >
          <div>
            <motion.p
              variants={variants.badge}
              className="font-eyebrow inline-flex items-center gap-[8px] text-foreground"
            >
              <span className="size-[8px] bg-primary" aria-hidden />
              Presença digital que gera clientes
            </motion.p>
            <motion.div variants={variants.headline}>
              <Heading
                level={1}
                id="hero-heading"
                className="mt-[20px] max-w-[10ch] sm:max-w-[11ch]"
              >
                <HeroTitle />
              </Heading>
            </motion.div>
            <motion.p
              variants={variants.item}
              className="text-body-lg mt-[24px] max-w-[40ch] text-neutral-600"
            >
              Unimos estratégia, marketing, tráfego pago e tecnologia para
              transformar sua presença digital em oportunidades reais de
              negócio.
            </motion.p>
            <motion.div
              variants={variants.item}
              className="mt-[40px] flex w-full max-w-[400px] flex-col gap-[12px]"
            >
              <ButtonLink
                href="/#contato"
                variant="primary"
                className="w-full shrink-0 px-[16px] text-[14px] whitespace-nowrap sm:px-[24px] sm:text-[16px]"
                onClick={() =>
                  trackEvent({
                    event: "cta_click",
                    label: "hero_crescer",
                    href: "/#contato",
                  })
                }
              >
                Quero fazer meu negócio crescer
                <ArrowUpRight className="size-[16px] shrink-0" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href="/#servicos"
                variant="secondary"
                className="w-full shrink-0 px-[16px] text-[14px] whitespace-nowrap sm:px-[24px] sm:text-[16px]"
                onClick={() =>
                  trackEvent({
                    event: "cta_click",
                    label: "hero_servicos",
                    href: "/#servicos",
                  })
                }
              >
                Conhecer nossos serviços
                <ArrowRight className="size-[16px] shrink-0" aria-hidden />
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div variants={variants.item} className="min-w-0">
            <Image
              src="/images/products.png"
              alt="Presença digital em notebook e celular"
              width={1536}
              height={1024}
              priority
              className="mx-auto h-auto w-full max-w-[720px] object-contain lg:max-w-none"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

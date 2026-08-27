"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buildHeroVariants, useMotionPrefs } from "@/lib/motion";

export function Hero() {
  const { reducedMotion } = useMotionPrefs();
  const variants = buildHeroVariants(reducedMotion);

  return (
    <section className="relative overflow-x-clip px-[20px] pt-[128px] pb-[72px] sm:px-[32px] sm:pt-[148px] sm:pb-[88px] lg:pt-[168px] lg:pb-[104px]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_42%)]"
        aria-hidden
      />
      <motion.div
        className="layout-rail relative mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={variants.container}
      >
        <motion.p
          variants={variants.badge}
          className="text-[12px] font-medium tracking-[0.16em] text-eyebrow uppercase"
        >
          Estúdio de sites
        </motion.p>
        <motion.h1
          variants={variants.headline}
          className="font-heading mt-[16px] max-w-[16ch] text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-fg-primary sm:text-[52px] lg:text-[64px]"
        >
          Sites profissionais para o seu negócio
        </motion.h1>
        <motion.p
          variants={variants.item}
          className="mt-[20px] max-w-[52ch] text-[16px] leading-[28px] text-fg-body sm:text-[17px] sm:leading-[30px]"
        >
          A Web Studio cria sites rápidos, acessíveis e com identidade própria —
          do primeiro contato ao lançamento, com acompanhamento próximo.
        </motion.p>
        <motion.div variants={variants.item} className="mt-[32px] flex flex-wrap gap-[12px]">
          <Link
            href="/#contato"
            className="focus-ring inline-flex min-h-[48px] items-center gap-[8px] rounded-[12px] bg-accent px-[20px] text-[15px] font-medium text-white transition-premium hover:bg-accent-deep"
          >
            Pedir um orçamento
            <ArrowRight className="size-[16px]" aria-hidden />
          </Link>
          <Link
            href="/#servicos"
            className="focus-ring inline-flex min-h-[48px] items-center rounded-[12px] border border-border-strong px-[20px] text-[15px] font-medium text-fg-primary transition-premium hover:border-accent-light/40 hover:text-accent-light"
          >
            Ver o que fazemos
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

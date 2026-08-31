"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const EVUFLOW_URL = "https://www.evuflow.com.br";

export function ProjectsSection() {
  return (
    <SectionShell id="projetos" labelledBy="projetos-heading" tone="dark">
      <div className="grid gap-[40px] lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-4">
          <SectionHeading
            tone="dark"
            eyebrow="Portfólio"
            title="O EvuFlow já está no ar."
            description="Plataforma de inteligência corporal desenvolvida pela Vortexa."
            titleId="projetos-heading"
          />
          <ButtonLink
            href={EVUFLOW_URL}
            variant="dark-secondary"
            className="mt-[28px]"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({
                event: "cta_click",
                label: "projetos_ver",
                href: EVUFLOW_URL,
              })
            }
          >
            Ver projeto
            <ArrowUpRight className="size-[16px]" aria-hidden />
          </ButtonLink>
        </div>

        <article className="lg:col-span-8">
          <div className="overflow-hidden rounded-[16px] border border-border-dark bg-surface-dark">
            <Image
              src="/images/evuflow-hero.png"
              alt="Tela inicial do EvuFlow, plataforma de inteligência corporal"
              width={1871}
              height={861}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <p className="mt-[16px] text-[18px] font-semibold tracking-[-0.5px]">
            EvuFlow
          </p>
          <p className="text-body-sm mt-[4px] text-neutral-400">
            Produto digital · inteligência corporal
          </p>
        </article>
      </div>
    </SectionShell>
  );
}

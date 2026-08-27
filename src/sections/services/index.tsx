import {
  Globe,
  LayoutTemplate,
  Megaphone,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { Link } from "@/components/ui/link";
import { services, type ServiceId } from "@/data/services";

const serviceIcons: Record<ServiceId, LucideIcon> = {
  marketing: Megaphone,
  social: Share2,
  ads: Target,
  sites: Globe,
  landing: LayoutTemplate,
  automation: Sparkles,
};

export function ServicesSection() {
  return (
    <SectionShell id="servicos" labelledBy="servicos-heading">
      <SectionHeading
        align="center"
        eyebrow="Serviços"
        title="O que fazemos, com clareza."
        description="Cada frente tem um papel. Você pode começar por uma delas ou montar o conjunto."
        titleId="servicos-heading"
      />
      <ul className="mt-[48px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.id];
          return (
            <li
              key={service.id}
              className="flex flex-col rounded-[16px] bg-dark p-[28px] text-dark-foreground [--ring:var(--dark-foreground)]"
            >
              <Icon className="size-[22px] text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-[24px] text-[20px] leading-[1.2] font-bold tracking-[-0.5px]">
                {service.name}
              </h3>
              <p className="text-body-sm mt-[12px] flex-1 text-neutral-400">
                {service.description}
              </p>
              <p className="text-caption mt-[24px] text-neutral-400">Investimento</p>
              <p className="mt-[4px] text-[18px] font-bold">Alinhamos na conversa</p>
              <Link
                href="/#contato"
                tone="dark"
                className="mt-[8px] min-h-[44px] text-[14px]"
              >
                {service.cta}
              </Link>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}

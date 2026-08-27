import { Mail } from "lucide-react";

import { siteConfig } from "@/config/site";

export function ContactCta() {
  return (
    <section
      id="contato"
      className="scroll-mt-[96px] px-[20px] py-[72px] sm:px-[32px] sm:py-[88px] lg:pb-[120px]"
    >
      <div className="layout-rail mx-auto w-full rounded-[24px] border border-border-default bg-surface-elevated px-[24px] py-[40px] sm:px-[40px] sm:py-[56px]">
        <p className="text-[12px] font-medium tracking-[0.16em] text-eyebrow uppercase">
          Contato
        </p>
        <h2 className="font-heading mt-[12px] max-w-[16ch] text-[28px] leading-[1.1] font-medium tracking-[-0.035em] text-fg-primary sm:text-[36px]">
          Vamos conversar sobre o seu site
        </h2>
        <p className="mt-[16px] max-w-[48ch] text-[16px] leading-[28px] text-fg-body">
          Conte o momento do projeto e o que você precisa. Respondo em{" "}
          {siteConfig.location.city} com uma proposta clara e próxima.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="focus-ring mt-[28px] inline-flex min-h-[48px] items-center gap-[8px] rounded-[12px] bg-accent px-[20px] text-[15px] font-medium text-white transition-premium hover:bg-accent-deep"
        >
          <Mail className="size-[16px]" aria-hidden />
          Enviar e-mail
        </a>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/primitives/section-heading";
import { SectionShell } from "@/components/primitives/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

import { LeadForm } from "./lead-form";

export function ContactSection() {
  const whatsapp = getWhatsAppUrl(
    "Olá. Quero falar com um especialista sobre o meu negócio.",
  );

  return (
    <SectionShell id="contato" labelledBy="contato-heading">
      <div className="editorial-grid">
        <div className="col-span-4 lg:col-span-5">
          <SectionHeading
            eyebrow="Contato"
            title="Conte o seu negócio. A gente devolve o próximo passo."
            description={
              whatsapp
                ? "Formulário curto. Se preferir, chame no WhatsApp."
                : siteConfig.email
                  ? "Formulário curto. Se preferir, escreva para o e-mail da página."
                  : "Formulário curto. Conte o negócio e a gente retorna."
            }
            titleId="contato-heading"
          />
          {whatsapp ? (
            <ButtonLink
              href={whatsapp}
              variant="secondary"
              className="mt-[24px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </ButtonLink>
          ) : siteConfig.email ? (
            <p className="text-body-sm mt-[24px] text-muted">
              Use o formulário ou escreva para {siteConfig.email}.
            </p>
          ) : null}
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <Card variant="dark" className="[color-scheme:dark]">
            <LeadForm />
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}

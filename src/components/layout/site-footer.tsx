import { ArrowUpRight, MessageCircle } from "lucide-react";

import { BrandLogo } from "@/components/brand/logo";
import { InPageHashLink } from "@/components/in-page-hash-link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/config/navigation";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const footerLinkClass =
  "inline-flex min-h-[44px] items-center text-[14px] text-neutral-400 transition-premium hover:text-dark-foreground";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[18px]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.5 9H4V20h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7 1.5 1.5 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.9-.7-2.5-1.8-2.5-1.2 0-1.9.9-1.9 2.5V20H11.3s.05-9.7 0-10.7H13.8v1.5c.5-.8 1.5-1.8 3.4-1.8 2.4 0 4.3 1.5 4.3 4.8V20Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsapp = getWhatsAppUrl("Olá. Quero falar sobre o meu negócio.");

  return (
    <footer className="bg-dark text-dark-foreground [--ring:var(--dark-foreground)]">
      <Container className="py-[64px]">
        <div className="grid gap-[40px] lg:grid-cols-12">
          <div className="lg:col-span-3">
            <BrandLogo size="footer" />
            <p className="text-body-sm mt-[16px] max-w-[28ch] text-neutral-400">
              Presença digital, marketing, tráfego e tecnologia para o negócio
              crescer.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[14px] font-semibold">Navegação</p>
            <ul className="mt-[12px] flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <InPageHashLink href={item.href} className={cn("focus-ring", footerLinkClass)}>
                    {item.label}
                  </InPageHashLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[14px] font-semibold">Serviços</p>
            <ul className="mt-[12px] flex flex-col">
              {services.map((service) => (
                <li key={service.id}>
                  <InPageHashLink href="/#servicos" className={cn("focus-ring", footerLinkClass)}>
                    {service.name}
                  </InPageHashLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[14px] font-semibold">Contato</p>
            <ul className="mt-[12px] flex flex-col">
              {siteConfig.email ? (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={cn("focus-ring", footerLinkClass)}
                  >
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              <li className="text-body-sm py-[12px] text-neutral-400">
                {siteConfig.location.city}, {siteConfig.location.region}
              </li>
              <li className="flex items-center gap-[12px] pt-[4px]">
                {siteConfig.instagramUrl ? (
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex size-[44px] items-center justify-center"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                ) : null}
                {whatsapp ? (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex size-[44px] items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="size-[18px]" aria-hidden />
                  </a>
                ) : null}
                {siteConfig.linkedInProfile ? (
                  <a
                    href={siteConfig.linkedInProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex size-[44px] items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                ) : null}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[18px] font-semibold tracking-[-0.5px]">
              Vamos conversar sobre o seu projeto?
            </p>
            {whatsapp ? (
              <ButtonLink
                href={whatsapp}
                size="pill"
                className="mt-[20px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </ButtonLink>
            ) : (
              <ButtonLink href="/#contato" size="pill" className="mt-[20px]">
                Quero falar com um especialista
                <ArrowUpRight className="size-[16px]" aria-hidden />
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="mt-[48px] flex flex-col gap-[8px] border-t border-border-dark pt-[24px] sm:flex-row sm:justify-between">
          <p className="text-body-sm text-neutral-400">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-caption text-neutral-500">
            {siteConfig.location.city}, {siteConfig.location.region}
          </p>
        </div>
      </Container>
    </footer>
  );
}

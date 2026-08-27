"use client";

import { MessageCircle } from "lucide-react";

import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const defaultMessage =
  "Olá. Quero conversar sobre presença digital e crescimento do meu negócio.";

export function WhatsAppButton() {
  const href = getWhatsAppUrl(defaultMessage, siteConfig.whatsappPhone);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent({ event: "whatsapp_click", href })}
      className="focus-ring inline-flex size-[52px] items-center justify-center rounded-[10px] bg-primary text-primary-foreground"
    >
      <MessageCircle className="size-[22px]" aria-hidden />
    </a>
  );
}

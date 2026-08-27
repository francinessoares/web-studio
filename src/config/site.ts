export const siteConfig = {
  name: "Vortexa",
  role: "Presença digital e crescimento",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  linkedInProfile: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL?.trim() ?? "",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "",
  location: {
    city: "Florianópolis",
    region: "Santa Catarina",
    nearby: "São José",
    country: "BR",
  },
} as const;

export function resolveSiteUrl({
  configured = process.env.NEXT_PUBLIC_SITE_URL,
  vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL,
  nodeEnv = process.env.NODE_ENV,
}: {
  configured?: string;
  vercelProduction?: string;
  nodeEnv?: string;
} = {}) {
  const fromEnv = configured?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/+$/, "");
  }

  const fromVercel = vercelProduction?.trim();
  if (fromVercel) {
    return `https://${fromVercel.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  }

  if (nodeEnv === "development") {
    return "http://localhost:3000";
  }

  return "https://web-studio.vercel.app";
}

export const siteUrl = resolveSiteUrl();

export const siteTitle =
  "Vortexa — Marketing digital e sites em Florianópolis";

export const siteDescription =
  "A Vortexa une marketing digital, tráfego pago e tecnologia para o seu negócio crescer no digital. Atendimento em Florianópolis. Conversa sem compromisso.";

export const siteKeywords =
  "marketing digital Florianópolis, tráfego pago, criação de sites, páginas de captura, gestão de redes sociais, automação, Vortexa";

export const ogImageAlt =
  "Vortexa — marketing digital, tráfego pago e sites em Florianópolis";

export function getWhatsAppUrl(message: string, phone = siteConfig.whatsappPhone) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;

  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

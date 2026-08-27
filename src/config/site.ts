export const siteConfig = {
  name: "Web Studio",
  role: "Criação de sites",
  githubProfile:
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/francinessoares",
  linkedInProfile:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/francine-soares-5ba112124/",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "francinesoares22@gmail.com",
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

export const siteTitle = `${siteConfig.name} — Sites profissionais`;

export function getWhatsAppUrl(message: string, phone = siteConfig.whatsappPhone) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;

  const text = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${text}`;
}

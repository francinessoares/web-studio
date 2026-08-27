import { siteConfig, siteDescription, siteTitle, siteUrl } from "@/config/site";
import { faqs } from "@/data/faq";
import { services } from "@/data/services";

const organizationId = `${siteUrl}/#organizacao`;
const websiteId = `${siteUrl}/#website`;

function sameAs(): string[] {
  return [siteConfig.instagramUrl, siteConfig.linkedInProfile].filter(
    (url): url is string => Boolean(url),
  );
}

export function buildOrganizationJsonLd() {
  const email = siteConfig.email || undefined;
  const links = sameAs();

  return {
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/logo.png`,
    description: siteDescription,
    inLanguage: "pt-BR",
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.location.city,
      },
      {
        "@type": "AdministrativeArea",
        name: siteConfig.location.region,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: "SC",
      addressCountry: siteConfig.location.country,
    },
    knowsAbout: services.map((service) => service.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    ...(email ? { email } : {}),
    ...(links.length > 0 ? { sameAs: links } : {}),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl,
    name: siteConfig.name,
    description: siteTitle,
    inLanguage: "pt-BR",
    publisher: {
      "@id": organizationId,
    },
  };
}

export function buildFaqJsonLd() {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebsiteJsonLd(),
      buildFaqJsonLd(),
    ],
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

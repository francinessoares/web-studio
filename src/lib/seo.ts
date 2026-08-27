import type { Metadata } from "next";

import { siteConfig, siteTitle, siteUrl } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  absoluteTitle?: boolean;
  ogType?: "website" | "profile";
  index?: boolean;
};

const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
  absoluteTitle = false,
  ogType = "website",
  index = true,
}: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} — ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords
      ? keywords.split(",").map((item) => item.trim())
      : undefined,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    robots: index ? indexableRobots : { index: false, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  robots: indexableRobots,
  openGraph: {
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

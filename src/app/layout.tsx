import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { SiteChrome } from "@/components/layout/site-chrome";
import { siteTitle, siteUrl } from "@/config/site";
import { rootMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

import "./globals.css";

const defaultDescription =
  "Web Studio, estúdio de Francine Soares para criação de sites profissionais em Florianópolis.";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  ...rootMetadata,
  description: defaultDescription,
  keywords: [
    "criação de sites",
    "Web Studio",
    "Francine Soares",
    "Florianópolis",
    "sites profissionais",
  ],
  openGraph: {
    ...rootMetadata.openGraph,
    title: siteTitle,
    description: defaultDescription,
    url: siteUrl,
  },
  twitter: {
    ...rootMetadata.twitter,
    title: siteTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("dark font-sans antialiased", geistSans.variable)}
    >
      <body className="bg-surface text-foreground">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

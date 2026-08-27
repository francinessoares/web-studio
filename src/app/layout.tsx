import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import { siteTitle, siteUrl } from "@/config/site";
import { rootMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

import "./globals.css";

const defaultDescription =
  "Marketing, tráfego pago, gestão e sites para profissionais e empresas crescerem no digital — do posicionamento à conversão.";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B0B0B",
};

export const metadata: Metadata = {
  ...rootMetadata,
  description: defaultDescription,
  keywords: [
    "marketing digital",
    "tráfego pago",
    "criação de sites",
    "landing page",
    "gestão de redes sociais",
    "presença digital",
    "Vortexa",
    "Florianópolis",
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
      className={cn("font-sans antialiased", manrope.variable, manrope.className)}
    >
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}

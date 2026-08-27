import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import { rootMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

import "./globals.css";

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

export const metadata: Metadata = rootMetadata;

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

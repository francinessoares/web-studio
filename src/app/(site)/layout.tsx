import { SiteChrome } from "@/components/layout/site-chrome";
import { SiteJsonLd } from "@/components/seo/json-ld";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteChrome>
      <SiteJsonLd />
      {children}
    </SiteChrome>
  );
}

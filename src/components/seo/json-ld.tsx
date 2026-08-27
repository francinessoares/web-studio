import { buildSiteJsonLd, serializeJsonLd } from "@/lib/json-ld";

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSiteJsonLd()) }}
    />
  );
}

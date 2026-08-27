import type { Metadata } from "next";

import { DesignSystemPreview } from "@/app/design-system/preview";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Design System",
  description: "Fundação visual do Web Studio — tokens, tipografia e componentes base.",
  path: "/design-system",
  index: false,
});

export default function DesignSystemPage() {
  return <DesignSystemPreview />;
}

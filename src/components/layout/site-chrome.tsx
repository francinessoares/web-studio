import { AnalyticsProviders } from "@/components/analytics/providers";
import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipToContent } from "@/components/skip-to-content";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <>
      <SkipToContent />
      <AnalyticsProviders />
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingActions />
    </>
  );
}

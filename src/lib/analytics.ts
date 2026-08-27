export type AnalyticsEvent =
  | "page_view"
  | "form_start"
  | "form_submit"
  | "lead"
  | "whatsapp_click"
  | "cta_click";

type EventPayload = {
  event: AnalyticsEvent;
  label?: string;
  href?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent({ event, label, href }: EventPayload) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    event_label: label,
    event_href: href,
  });
}

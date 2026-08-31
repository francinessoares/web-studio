import { describe, expect, it, beforeEach } from "vitest";

import { POST } from "@/app/api/leads/route";
import { getWhatsAppUrl, resolveSiteUrl } from "@/config/site";
import {
  canonicalLocationHash,
  hrefToString,
  shouldHandleInPageHash,
} from "@/lib/hash-navigation";
import {
  isHoneypotFilled,
  resetRateLimit,
} from "@/lib/rate-limit";
import {
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  serializeJsonLd,
} from "@/lib/json-ld";
import { createPageMetadata, toCanonicalPath } from "@/lib/seo";

describe("resolveSiteUrl", () => {
  it("usa NEXT_PUBLIC_SITE_URL quando definida", () => {
    expect(
      resolveSiteUrl({
        configured: "https://exemplo.com.br/",
        vercelProduction: "outro.vercel.app",
        nodeEnv: "production",
      }),
    ).toBe("https://exemplo.com.br");
  });

  it("usa VERCEL_PROJECT_PRODUCTION_URL quando a env canônica está vazia", () => {
    expect(
      resolveSiteUrl({
        configured: "",
        vercelProduction: "web-studio.vercel.app",
        nodeEnv: "production",
      }),
    ).toBe("https://web-studio.vercel.app");
  });

  it("usa localhost em desenvolvimento", () => {
    expect(
      resolveSiteUrl({
        configured: "",
        vercelProduction: "",
        nodeEnv: "development",
      }),
    ).toBe("http://localhost:3000");
  });

  it("usa o placeholder de produção quando a env não está definida", () => {
    expect(
      resolveSiteUrl({
        configured: "",
        vercelProduction: "",
        nodeEnv: "production",
      }),
    ).toBe("https://web-studio.vercel.app");
  });

  it("não gera URL de localhost em produção", () => {
    const url = resolveSiteUrl({
      configured: "",
      vercelProduction: "web-studio.vercel.app",
      nodeEnv: "production",
    });

    expect(url).toBe("https://web-studio.vercel.app");
    expect(url).not.toContain("localhost");
  });
});

describe("getWhatsAppUrl", () => {
  it("retorna null quando o telefone está vazio", () => {
    expect(getWhatsAppUrl("Olá", "")).toBeNull();
  });

  it("inclui o DDI 55 no link comercial da Vortexa", () => {
    expect(getWhatsAppUrl("Olá", "+55 48 9104-6034")).toBe(
      "https://wa.me/554891046034?text=Ol%C3%A1",
    );
  });
});

describe("createPageMetadata", () => {
  it("define título, descrição, canonical e redes sociais", () => {
    const metadata = createPageMetadata({
      title: "Contato",
      description: "Fale com a Vortexa",
      path: "/#contato",
    });

    expect(metadata.title).toBe("Contato");
    expect(metadata.description).toBe("Fale com a Vortexa");
    expect(String(metadata.alternates?.canonical)).not.toContain("#");
    expect(toCanonicalPath("/#contato")).toBe("");
    expect(toCanonicalPath("/design-system")).toBe("/design-system");
    expect(metadata.openGraph?.title).toContain("Contato");
    expect(metadata.robots).toEqual(
      expect.objectContaining({
        index: true,
        follow: true,
      }),
    );
    expect(metadata.twitter).toEqual(
      expect.objectContaining({
        card: "summary_large_image",
      }),
    );
  });
});

describe("json-ld", () => {
  it("descreve a Vortexa sem prova social inventada", () => {
    const organization = buildOrganizationJsonLd();

    expect(organization.name).toBe("Vortexa");
    expect(organization).not.toHaveProperty("email");
    expect(organization.address).toEqual(
      expect.objectContaining({
        addressLocality: "Florianópolis",
        addressCountry: "BR",
      }),
    );
    expect(organization).not.toHaveProperty("aggregateRating");
    expect(organization).not.toHaveProperty("review");
    expect(serializeJsonLd({ html: "<p>oi</p>" })).toContain("\\u003cp>");
    expect(serializeJsonLd({ html: "<p>oi</p>" })).not.toContain("<p>");
  });

  it("expõe as perguntas reais do FAQ", () => {
    const faqPage = buildFaqJsonLd();

    expect(faqPage.mainEntity).toHaveLength(5);
    expect(faqPage.mainEntity[0]).toEqual(
      expect.objectContaining({
        "@type": "Question",
        name: "Tenho pouco capital. Consigo começar?",
      }),
    );
  });
});

describe("hash navigation", () => {
  it("usa o último âncora quando o Next empilha hashes", () => {
    expect(canonicalLocationHash("#servicos#faq")).toBe("#faq");
    expect(canonicalLocationHash("#faq")).toBe("#faq");
    expect(canonicalLocationHash("")).toBe("");
  });

  it("trata âncoras da Home na própria Home", () => {
    expect(shouldHandleInPageHash("/#faq", "/")).toBe(true);
    expect(shouldHandleInPageHash("/#servicos", "/")).toBe(true);
    expect(shouldHandleInPageHash("/", "/")).toBe(true);
    expect(shouldHandleInPageHash("/#faq", "/design-system")).toBe(false);
    expect(shouldHandleInPageHash("https://wa.me/48999990000", "/")).toBe(
      false,
    );
  });

  it("serializa href com hash", () => {
    expect(hrefToString("/#contato")).toBe("/#contato");
    expect(hrefToString({ pathname: "/", hash: "#faq" })).toBe("/#faq");
  });
});

const validLead = {
  name: "Maria Silva",
  phone: "48999990000",
  businessType: "clínica",
  service: "sites" as const,
};

function leadRequest(body: unknown, ip = "203.0.113.10") {
  return new Request("http://localhost/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

describe("leads API", () => {
  beforeEach(() => {
    resetRateLimit();
  });

  it("ignora bot do campo isca sem enviar", async () => {
    const response = await POST(
      leadRequest({ ...validLead, website: "https://spam.test" }),
    );
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(
      expect.objectContaining({ message: expect.stringContaining("Recebemos") }),
    );
  });

  it("rejeita payload inválido", async () => {
    const response = await POST(leadRequest({ name: "A" }));
    expect(response.status).toBe(400);
  });

  it("responde 503 quando o envio não está configurado", async () => {
    const previousKey = process.env.RESEND_API_KEY;
    const previousTo = process.env.CONTACT_TO_EMAIL;
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_TO_EMAIL;

    const response = await POST(leadRequest(validLead));
    expect(response.status).toBe(503);

    if (previousKey === undefined) {
      delete process.env.RESEND_API_KEY;
    } else {
      process.env.RESEND_API_KEY = previousKey;
    }
    if (previousTo === undefined) {
      delete process.env.CONTACT_TO_EMAIL;
    } else {
      process.env.CONTACT_TO_EMAIL = previousTo;
    }
  });

  it("limita tentativas repetidas do mesmo IP", async () => {
    for (let index = 0; index < 5; index += 1) {
      await POST(leadRequest(validLead, "198.51.100.8"));
    }
    const blocked = await POST(leadRequest(validLead, "198.51.100.8"));
    expect(blocked.status).toBe(429);
  });

  it("marca honeypot só quando o campo isca tem texto", () => {
    expect(isHoneypotFilled({ website: "http://x.com" })).toBe(true);
    expect(isHoneypotFilled({ website: "  " })).toBe(false);
    expect(isHoneypotFilled(validLead)).toBe(false);
  });
});

import { describe, expect, it } from "vitest";

import { getWhatsAppUrl, resolveSiteUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

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

  it("monta o link do WhatsApp com DDI e mensagem", () => {
    expect(getWhatsAppUrl("Quero criar meu site", "48 99999-0000")).toBe(
      "https://wa.me/48999990000?text=Quero%20criar%20meu%20site",
    );
  });
});

describe("createPageMetadata", () => {
  it("define título, descrição, canonical e redes sociais", () => {
    const metadata = createPageMetadata({
      title: "Contato",
      description: "Fale com o Web Studio",
      path: "/#contato",
    });

    expect(metadata.title).toBe("Contato");
    expect(metadata.description).toBe("Fale com o Web Studio");
    expect(metadata.alternates?.canonical).toContain("/#contato");
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

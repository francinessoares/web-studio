import { NextResponse } from "next/server";
import { Resend } from "resend";

import { services } from "@/data/services";
import {
  consumeRateLimit,
  getClientIp,
  isHoneypotFilled,
} from "@/lib/rate-limit";
import { leadSchema } from "@/schemas/lead";

const successMessage = "Recebemos seu pedido. Retornamos em breve.";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (consumeRateLimit(ip)) {
    return NextResponse.json(
      { message: "Muitas tentativas. Espere alguns minutos e tente de novo." },
      { status: 429 },
    );
  }

  const json: unknown = await request.json().catch(() => null);

  if (isHoneypotFilled(json)) {
    return NextResponse.json({ message: successMessage });
  }

  const parsed = leadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Dados inválidos." },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  const serviceName =
    services.find((item) => item.id === lead.service)?.name ?? lead.service;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ?? "Vortexa <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        message:
          "Não foi possível enviar agora. Tente de novo ou escreva para o e-mail de contato.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to,
    subject: `Novo lead — ${serviceName}`,
    text: [
      `Nome: ${lead.name}`,
      `WhatsApp: ${lead.phone}`,
      `Negócio: ${lead.businessType}`,
      `Serviço: ${serviceName}`,
      `Mensagem: ${lead.message || "—"}`,
      `Origem: ${lead.source ?? "—"} / ${lead.medium ?? "—"} / ${lead.campaign ?? "—"}`,
      `Página: ${lead.landingPage ?? "—"}`,
    ].join("\n"),
  });

  if (result.error) {
    return NextResponse.json(
      { message: "Não foi possível enviar agora. Tente de novo em instantes." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: successMessage });
}

import { z } from "zod";

export const leadServiceValues = [
  "marketing",
  "social",
  "ads",
  "sites",
  "landing",
  "automation",
] as const;

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(80, "Use um nome mais curto."),
  phone: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido.")
    .max(20, "Informe um WhatsApp válido.")
    .regex(/^[\d\s()+-]+$/, "Use só números e DDD."),
  businessType: z
    .string()
    .trim()
    .min(2, "Conte o tipo do seu negócio.")
    .max(80, "Resuma em poucas palavras."),
  service: z
    .string()
    .refine(
      (value): value is (typeof leadServiceValues)[number] =>
        (leadServiceValues as readonly string[]).includes(value),
      "Escolha um serviço.",
    ),
  message: z
    .string()
    .trim()
    .max(1000, "A mensagem está longa demais.")
    .optional(),
  source: z.string().max(80).optional(),
  campaign: z.string().max(80).optional(),
  medium: z.string().max(80).optional(),
  landingPage: z.string().max(200).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

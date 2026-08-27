export type ServiceId =
  | "marketing"
  | "social"
  | "ads"
  | "sites"
  | "landing"
  | "automation";

export type Service = {
  id: ServiceId;
  name: string;
  description: string;
  benefits: [string, string, string];
  cta: string;
};

export const services: Service[] = [
  {
    id: "marketing",
    name: "Marketing Digital",
    description:
      "Estratégia e posicionamento para fortalecer sua presença digital.",
    benefits: [
      "Direção clara do que comunicar",
      "Presença alinhada ao negócio",
      "Menos esforço solto, mais consistência",
    ],
    cta: "Quero crescer",
  },
  {
    id: "social",
    name: "Gestão de Redes Sociais",
    description:
      "Planejamento, conteúdo e gestão das redes sociais da marca.",
    benefits: [
      "Calendário e rotina definidos",
      "Tom de voz estável",
      "Redes a serviço de contato, não de vaidade",
    ],
    cta: "Quero crescer",
  },
  {
    id: "ads",
    name: "Tráfego Pago",
    description:
      "Campanhas no Meta Ads e Google Ads para gerar tráfego e oportunidades.",
    benefits: [
      "Anúncio com destino certo",
      "Mensagem alinhada à oferta",
      "Acompanhamento para ajustar o que não converte",
    ],
    cta: "Quero crescer",
  },
  {
    id: "sites",
    name: "Criação de Sites",
    description: "Sites profissionais, rápidos e personalizados.",
    benefits: [
      "Presença que inspira confiança",
      "Leitura clara no celular",
      "Caminho óbvio até o contato",
    ],
    cta: "Quero crescer",
  },
  {
    id: "landing",
    name: "Páginas de captura",
    description:
      "Páginas focadas em campanhas, produtos e geração de contatos.",
    benefits: [
      "Uma oferta, uma ação",
      "Pronta para anúncio",
      "Formulário e WhatsApp no lugar certo",
    ],
    cta: "Quero crescer",
  },
  {
    id: "automation",
    name: "Automação e IA",
    description:
      "Automação de processos, atendimento e tarefas com tecnologia e IA.",
    benefits: [
      "Menos trabalho repetido",
      "Resposta mais rápida ao lead",
      "Só o que o negócio realmente precisa",
    ],
    cta: "Quero crescer",
  },
];

export const heroSignals = [
  "Marketing",
  "Tráfego pago",
  "Gestão",
  "Sites",
  "Estratégia digital",
] as const;

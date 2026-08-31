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
};

export const services: Service[] = [
  {
    id: "marketing",
    name: "Marketing Digital",
    description:
      "Estratégia e posicionamento para fortalecer sua presença digital.",
  },
  {
    id: "social",
    name: "Gestão de Redes Sociais",
    description:
      "Planejamento, conteúdo e gestão para manter sua marca presente.",
  },
  {
    id: "ads",
    name: "Tráfego Pago",
    description:
      "Campanhas no Meta e no Google para gerar oportunidades.",
  },
  {
    id: "sites",
    name: "Criação de Sites",
    description:
      "Sites pensados para apresentar, convencer e gerar contatos.",
  },
  {
    id: "landing",
    name: "Páginas de captura",
    description:
      "Páginas focadas em campanhas e geração de contatos.",
  },
  {
    id: "automation",
    name: "Automação e IA",
    description:
      "Tecnologia para automatizar processos e melhorar a operação.",
  },
];

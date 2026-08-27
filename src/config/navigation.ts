export type NavItemId =
  | "home"
  | "services"
  | "projects"
  | "how"
  | "faq"
  | "contact";

export type NavItem = {
  id: NavItemId;
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "home", href: "/", label: "Início" },
  { id: "services", href: "/#servicos", label: "Serviços" },
  { id: "projects", href: "/#projetos", label: "Projetos" },
  { id: "how", href: "/#como-funciona", label: "Processo" },
  { id: "faq", href: "/#faq", label: "Perguntas" },
  { id: "contact", href: "/#contato", label: "Contato" },
];

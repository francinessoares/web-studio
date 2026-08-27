export type NavItemId = "home" | "services" | "contact";

export type NavItem = {
  id: NavItemId;
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "home", href: "/", label: "Início" },
  { id: "services", href: "/#servicos", label: "Serviços" },
  { id: "contact", href: "/#contato", label: "Contato" },
];

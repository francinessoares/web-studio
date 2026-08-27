import { InPageHashLink } from "@/components/in-page-hash-link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
  tone?: "light" | "dark";
};

export function NavLink({
  href,
  label,
  active,
  onClick,
  className,
  tone = "light",
}: NavLinkProps) {
  return (
    <InPageHashLink
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "focus-ring relative inline-flex min-h-[44px] items-center px-[10px] py-[10px] text-[13px] font-medium transition-premium lg:px-[12px]",
        tone === "dark"
          ? active
            ? "text-dark-foreground"
            : "text-neutral-400 hover:text-dark-foreground"
          : active
            ? "text-foreground"
            : "text-muted hover:text-foreground",
        className,
      )}
    >
      {label}
      {active ? (
        <span className="absolute inset-x-[10px] bottom-[8px] h-[2px] bg-primary lg:inset-x-[12px]" />
      ) : null}
    </InPageHashLink>
  );
}

import type { MouseEvent, MouseEventHandler } from "react";

export type HashHref =
  | string
  | {
      pathname?: string | null;
      hash?: string | null;
    };

export function hrefToString(href: HashHref): string {
  if (typeof href === "string") return href;
  const pathname = href.pathname || "/";
  const hash = href.hash?.replace(/^#/, "") ?? "";
  return hash ? `${pathname}#${hash}` : pathname;
}

export function splitInPageHref(href: string): {
  path: string;
  hash: string | null;
} {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return { path: href || "/", hash: null };
  }
  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}

export function canonicalLocationHash(locationHash: string): string {
  const raw = locationHash.replace(/^#/, "");
  if (!raw) return "";
  const last = raw.split("#").filter(Boolean).pop() ?? "";
  return last ? `#${last}` : "";
}

export function shouldHandleInPageHash(
  href: string,
  currentPathname: string,
): boolean {
  if (currentPathname !== "/") return false;
  if (href === "/" || href === "") return true;
  if (!href.includes("#")) return false;
  const { path } = splitInPageHref(href);
  return path === "/";
}

export function getScrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export function replaceStackedHash() {
  if (typeof window === "undefined") return;
  const canonical = canonicalLocationHash(window.location.hash);
  if (!canonical) return;
  if (window.location.hash === canonical) return;
  window.history.replaceState(null, "", `/${canonical}`);
  document.getElementById(canonical.slice(1))?.scrollIntoView({
    behavior: "auto",
    block: "start",
  });
}

export function goToInPageHash(href: string) {
  const { hash } = splitInPageHref(href);
  const nextUrl = hash ? `/#${hash}` : "/";
  window.history.pushState(null, "", nextUrl);
  window.dispatchEvent(new Event("hashchange"));

  const behavior = getScrollBehavior();
  if (!hash) {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  document.getElementById(hash)?.scrollIntoView({
    behavior,
    block: "start",
  });
}

export function handleInPageHashClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (typeof window === "undefined") return;
  if (!shouldHandleInPageHash(href, window.location.pathname)) return;

  event.preventDefault();
  goToInPageHash(href === "/" ? "/" : href);
}

export function bindInPageHashClick(
  href: HashHref,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
): MouseEventHandler<HTMLAnchorElement> {
  return (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    handleInPageHashClick(event, hrefToString(href));
  };
}

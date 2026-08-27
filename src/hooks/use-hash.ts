"use client";

import { useEffect, useSyncExternalStore } from "react";

import { canonicalLocationHash, replaceStackedHash } from "@/lib/hash-navigation";

function subscribeHash(listener: () => void) {
  window.addEventListener("hashchange", listener);
  window.addEventListener("popstate", listener);
  return () => {
    window.removeEventListener("hashchange", listener);
    window.removeEventListener("popstate", listener);
  };
}

function getHashSnapshot() {
  return canonicalLocationHash(window.location.hash);
}

function getServerHashSnapshot() {
  return "";
}

export function useHash() {
  useEffect(() => {
    replaceStackedHash();
  }, []);

  return useSyncExternalStore(
    subscribeHash,
    getHashSnapshot,
    getServerHashSnapshot,
  );
}

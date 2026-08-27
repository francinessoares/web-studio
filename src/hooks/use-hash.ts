"use client";

import { useSyncExternalStore } from "react";

function subscribeHash(listener: () => void) {
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getServerHashSnapshot() {
  return "";
}

export function useHash() {
  return useSyncExternalStore(subscribeHash, getHashSnapshot, getServerHashSnapshot);
}

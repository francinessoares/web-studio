const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const hitsByKey = new Map<string, number[]>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function isHoneypotFilled(payload: unknown): boolean {
  if (!payload || typeof payload !== "object") return false;
  if (!("website" in payload)) return false;
  const website = payload.website;
  return typeof website === "string" && website.trim().length > 0;
}

export function consumeRateLimit(key: string, now = Date.now()): boolean {
  const windowStart = now - WINDOW_MS;
  const recent = (hitsByKey.get(key) ?? []).filter((time) => time > windowStart);

  if (recent.length >= MAX_HITS) {
    hitsByKey.set(key, recent);
    return true;
  }

  recent.push(now);
  hitsByKey.set(key, recent);
  return false;
}

export function resetRateLimit() {
  hitsByKey.clear();
}

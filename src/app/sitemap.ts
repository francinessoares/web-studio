import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${siteUrl}${path}` : siteUrl,
    changeFrequency,
    priority,
  }));
}

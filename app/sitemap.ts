import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jumuika-frontend-clean-2.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages = [
    "", "how-it-works", "institutions", "blog", "about", "privacy", "terms"
  ];

  return pages.map((p) => ({
    url: `${SITE_URL}/${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}

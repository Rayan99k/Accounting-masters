import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const baseUrl = "https://www.accountingmasters.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}

import type { MetadataRoute } from "next";
import { activities } from "@/lib/activities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amusementspk.ca";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const activityRoutes: MetadataRoute.Sitemap = activities.map((a) => ({
    url: `${baseUrl}/activity/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...activityRoutes];
}



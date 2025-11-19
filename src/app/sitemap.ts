import { MetadataRoute } from "next";
import { notes } from "#site/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohammadfaizan.com";

  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/notes",
    "/contact",
    "/stats",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const noteRoutes = notes.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...noteRoutes];
}

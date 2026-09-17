import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://keithmerrill.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://keithmerrill.com/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

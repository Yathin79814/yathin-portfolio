import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const galleryCategories = ["ncc", "savara", "imagix", "cvip"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/resume`, changeFrequency: "monthly", priority: 0.8 },
    ...galleryCategories.map((category) => ({
      url: `${SITE_URL}/gallery/${category}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

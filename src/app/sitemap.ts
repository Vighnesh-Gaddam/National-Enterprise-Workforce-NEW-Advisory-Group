import { MetadataRoute } from "next";
import { seo, navigation, team } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", ...navigation.map((n) => n.href), "/contact"].map((route) => ({
    url: `${seo.url}${route}`,
    lastModified: new Date(),
  }));

  const teamRoutes = team.map((member) => ({
    url: `${seo.url}/team/${member.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...teamRoutes];
}

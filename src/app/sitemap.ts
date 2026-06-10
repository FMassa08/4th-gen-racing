import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.4thgenracing.com";
  return [
    "/",
    "/dynasty/",
    "/dynasty/adriano/",
    "/dynasty/ademaro/",
    "/dynasty/emanuele/",
    "/dynasty/filippo/",
    "/number-6/",
    "/archive/",
    "/contact/"
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));
}

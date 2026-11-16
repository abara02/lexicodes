import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://lexicodesdigital.com/sitemap.xml",
    host: "https://lexicodesdigital.com",
  };
}

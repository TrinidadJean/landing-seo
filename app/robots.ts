// app/robots.ts
import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${BRAND.url}/sitemap.xml`,
    host: BRAND.url,
  };
}
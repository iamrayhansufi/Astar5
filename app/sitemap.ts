import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  "/",
  "/tax-services",
  "/who-we-serve",
  "/how-it-works",
  "/about-us",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date("2026-10-26"),
  }));
}

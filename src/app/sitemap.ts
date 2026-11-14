import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const paths = ["", "/verhuizen", "/sjouwhulp", "/over-ons", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date("2026-11-14") }));
}

import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const pageTitle = title.includes("|")
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: title.includes("|") ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: siteConfig.locale,
      images: [
        {
          url: "/images/hero.jpg",
          width: 2400,
          height: 1600,
          alt: "Professional client conversation supported by Astar5 GlobalConsulting",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/images/hero.jpg"],
    },
  };
}

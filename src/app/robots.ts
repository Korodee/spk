import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const host = "https://amusementspk.ca";
  const sitemap = `${host}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap,
    host,
  };
}



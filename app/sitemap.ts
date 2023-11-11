import { BASE_URL as BaseUrl } from "@app/config/config";

export default async function sitemap() {
  const date = new Date().toISOString();
  return [
    {
      url: `${BaseUrl}/`,
      lastModified: date,
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: `${BaseUrl}/about`,
      lastModified: date,
      changefreq: "daily",
      priority: 0.9,
    },
    {
      url: `${BaseUrl}/contact`,
      lastModified: date,
      changefreq: "daily",
      priority: 0.7,
    },
    {
      url: `${BaseUrl}/blog`,
      lastModified: date,
      changefreq: "daily",
      priority: 0.7,
    },
  ];
}

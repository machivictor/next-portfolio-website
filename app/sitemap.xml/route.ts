import { projects, writing } from "@/src/data/portfolio";

import { BASE_URL } from "@/src/config/site";

export async function GET() {
  const base = BASE_URL;

  const pages = ["/"];

  // collect internal project and writing hrefs
  const extras = [
    ...projects.map((p) => p.href).filter((h) => h.startsWith("/")),
    ...writing.map((w) => w.href).filter((h) => h.startsWith("/")),
  ];

  const urls = Array.from(new Set([...pages, ...extras]));

  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) =>
        `  <url>\n    <loc>${base}${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}

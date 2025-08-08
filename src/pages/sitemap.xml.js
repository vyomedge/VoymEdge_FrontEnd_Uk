// pages/sitemap.xml.js

export async function getServerSideProps({ req, res }) {
  const protocol = req.headers?.["x-forwarded-proto"] || "http";
  const host = req.headers?.host || "https://uk.vyomedge.com";
  const SITE_URL = `${protocol}://${host}`;

  const allUrls = [
    { url: "/", lastModified: new Date() },
    { url: "/services", lastModified: new Date() },
    { url: "/packages", lastModified: new Date() },
    { url: "/aboutus", lastModified: new Date() },
    { url: "/contactus", lastModified: new Date() },
    { url: "/privacyPolicy", lastModified: new Date() },
    { url: "/termsAndConditions", lastModified: new Date() },
    { url: "/disclaimer", lastModified: new Date() },
    { url: "/cookies", lastModified: new Date() },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ url, lastModified }) => `
  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${lastModified.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  // This component will never be rendered because the response ends in getServerSideProps
  return null;
}

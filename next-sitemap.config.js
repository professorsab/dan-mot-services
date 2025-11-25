/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://mot-norwich.co.uk",
  generateRobotsTxt: true, // also generates robots.txt
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*"], // optional
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://mot-norwich.co.uk/sitemap.xml",
    ],
  },
}

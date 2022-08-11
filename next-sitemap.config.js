const siteUrl = process.env.NEXT_PUBLIC_DOMAIN || 'https://globaltreatydialogues.org/';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}sitemap.xml`,
      `${siteUrl}server-sitemap.xml`
    ],
  }
};
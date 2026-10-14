/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://okosit.hu',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://okosit.hu/sitemap.xml',
    ],
  },
  i18n: {
    locales: ['en', 'hu'],
    defaultLocale: 'en',
  },
  outDir: 'public',
};

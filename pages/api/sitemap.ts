import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';

// Define language types
interface Language {
  code: string;
  name: string;
  locale: string;
  hrefLang: string;
  direction: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    locale: 'en-US',
    hrefLang: 'en-US',
    direction: 'ltr',
  },
  {
    code: 'hu',
    name: 'Magyar',
    locale: 'hu-HU',
    hrefLang: 'hu-HU',
    direction: 'ltr',
  },
];

const defaultLanguage = 'en';
const siteUrl = process.env.SITE_URL || 'https://okosit-web.vercel.app';

// This function would typically fetch your dynamic routes from a CMS or database
const getDynamicRoutes = async (locale: string): Promise<string[]> => {
  // Example: Fetch your dynamic routes here
  // const products = await fetchProducts(locale);
  // return products.map(product => `/products/${product.slug}`);
  return [];
};

// Generate sitemap entries for all routes
const generateSitemapEntries = async (): Promise<Array<{
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod: Date;
  links: Array<{ lang: string; url: string }>;
}>> => {
  const entries: Array<{
    url: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
    lastmod: Date;
    links: Array<{ lang: string; url: string }>;
  }> = [];
  
  for (const lang of languages) {
    const locale = lang.code;
    const isDefaultLocale = locale === defaultLanguage;
    const prefix = isDefaultLocale ? '' : `/${locale}`;
    
    // Static pages
    const staticPages = ['', '/about', '/services', '/contact'];
    
    // Add static pages
    for (const path of staticPages) {
      const url = `${prefix}${path}`;
      const links = languages.map(l => ({
        lang: l.hrefLang,
        url: `${l.code === defaultLanguage ? '' : `/${l.code}`}${path || ''}`,
      }));
      
      entries.push({
        url,
        changefreq: 'daily',
        priority: path === '' ? 1.0 : 0.8,
        lastmod: new Date(),
        links,
      });
    }
    
    // Add dynamic routes
    const dynamicRoutes = await getDynamicRoutes(locale);
    for (const path of dynamicRoutes) {
      const url = `${prefix}${path}`;
      const links = languages.map(l => ({
        lang: l.hrefLang,
        url: `${l.code === defaultLanguage ? '' : `/${l.code}`}${path}`,
      }));
      
      entries.push({
        url,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
        links,
      });
    }
  }

  return entries;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req || !res) {
    return;
  }

  try {
    // Set response header
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=600');

    // Create a sitemap stream
    const smStream = new SitemapStream({
      hostname: siteUrl,
    });

    // Create a gzip stream
    const pipeline = smStream.pipe(createGzip());

    // Generate sitemap entries
    const entries = await generateSitemapEntries();
    
    // Add each URL to the sitemap
    entries.forEach(entry => {
      smStream.write(entry);
    });

    // End the stream
    smStream.end();

    // Stream the sitemap to the response
    pipeline.pipe(res).on('error', (e) => {
      throw e;
    });

    // Handle the stream completion
    await streamToPromise(pipeline);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
}

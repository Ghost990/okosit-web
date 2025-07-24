import { Metadata } from 'next';

type OpenGraphType = 'website' | 'article' | 'book' | 'profile' | 'video.movie' | 'music.song';

interface PageMetadataOptions {
  title: string;
  description: string;
  url: string;
  siteName?: string;
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  locale?: string;
  type?: OpenGraphType;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    url,
    siteName = 'OkosIT',
    images = [],
    locale = 'hu_HU',
    type = 'website',
    publishedTime,
    modifiedTime,
    authors = [],
    section,
    tags = [],
    twitterCard = 'summary_large_image',
    twitterSite = '@okosit',
    twitterCreator = '@okosit',
    canonicalUrl,
    noindex = false,
    nofollow = false,
  } = options;

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://okosit-web.vercel.app'),
    alternates: {
      canonical: canonicalUrl || url,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale,
      type,
      publishedTime,
      modifiedTime,
      authors,
      section,
      tags,
      images: images.length > 0 ? images : undefined,
    },
    twitter: {
      card: twitterCard,
      site: twitterSite,
      creator: twitterCreator,
      title,
      description,
      images: images.length > 0 ? images : undefined,
    },
    other: {
      'application-name': siteName,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'theme-color': '#ffffff',
    },
  };

  return metadata;
}

// Helper function to generate JSON-LD structured data as a string
export function generateStructuredDataString(data: Record<string, unknown>): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...data,
  });
}

// Generate WebSite structured data
export function generateWebsiteStructuredData(options: {
  '@id': string;
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    '@type': 'SearchAction';
    target: string | { '@type': 'EntryPoint'; urlTemplate: string };
    'query-input': string;
  };
}): string {
  return generateStructuredDataString({
    '@type': 'WebSite',
    ...options,
  });
}

// Generate Organization structured data
export function generateOrganizationStructuredData(options: {
  '@id': string;
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: Array<{
    '@type': 'ContactPoint';
    telephone?: string;
    contactType: string;
    email?: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  }>;
}): string {
  return generateStructuredDataString({
    '@type': 'Organization',
    ...options,
  });
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): string {
  const mainEntity = faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  return generateStructuredDataString({
    '@type': 'FAQPage',
    mainEntity,
  });
}

// Generate BreadcrumbList structured data
export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; url?: string }>
): string {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  }));

  return generateStructuredDataString({
    '@type': 'BreadcrumbList',
    itemListElement,
  });
}

// Generate metadata for the home page
export function generateHomePageMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://okosit.hu';
  
  return generatePageMetadata({
    title: 'OkosIT - Az Ön okosIT partnere',
    description: 'Rugalmas, megbízható és skálázható IT megoldások vállalkozások számára.',
    url: siteUrl,
    siteName: 'OkosIT',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: 'https://okosit.hu/00_share/okosit_share.png',
        width: 1200,
        height: 630,
        alt: 'OkosIT - Az Ön okosIT partnere',
      },
    ],
    twitterCard: 'summary_large_image',
    twitterSite: '@okosit',
  });
}

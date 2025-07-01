import { Metadata } from 'next';

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    siteName?: string;
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
    nocache?: boolean;
  };
  canonical?: string;
  languageAlternates?: Array<{
    hrefLang: string;
    href: string;
  }>;
  additionalMetaTags?: Array<{
    name: string;
    content: string;
    property?: string;
  }>;
};

export function generateMetadata({
  title = 'OkosIT - Az Ön okosIT partnere',
  description = 'Rugalmas, megbízható és skálázható IT megoldások vállalkozások számára.',
  keywords = [
    'OkosIT',
    'IT szolgáltatások',
    'informatikai megoldások',
    'vállalati IT',
    'karbantartás',
    'biztonsági mentés',
    'hálózat',
    'felhőalapú megoldások',
    'IT tanácsadás'
  ],
  openGraph = {},
  twitter = {},
  robots = { index: true, follow: true },
  canonical,
  languageAlternates = [],
  additionalMetaTags = []
}: SeoProps = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://okosit-web.vercel.app';
  const defaultOgImage = {
    url: `${siteUrl}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: title,
  };

  // Default OpenGraph values
  const defaultOpenGraph = {
    title: title,
    description: description,
    url: canonical ? new URL(canonical, siteUrl).toString() : siteUrl,
    type: 'website',
    images: [defaultOgImage],
    siteName: 'OkosIT',
    locale: 'hu_HU',
  };

  // Merge default and provided OpenGraph values
  const og = { ...defaultOpenGraph, ...openGraph };

  // Default Twitter card values
  const defaultTwitter = {
    card: 'summary_large_image',
    site: '@okosit',
    creator: '@okosit',
    title: title,
    description: description,
    image: defaultOgImage.url,
    imageAlt: title,
  };

  // Merge default and provided Twitter values
  const tw = { ...defaultTwitter, ...twitter };

  // Generate alternates for languages
  const alternates = languageAlternates.length > 0 ? {
    canonical: canonical ? new URL(canonical, siteUrl).toString() : siteUrl,
    languages: languageAlternates.reduce((acc, curr) => ({
      ...acc,
      [curr.hrefLang]: new URL(curr.href, siteUrl).toString()
    }), {}),
  } : undefined;

  // Generate robots string
  const robotsValue = [
    robots.index ? 'index' : 'noindex',
    robots.follow ? 'follow' : 'nofollow',
    robots.noarchive ? 'noarchive' : '',
    robots.nosnippet ? 'nosnippet' : '',
    robots.noimageindex ? 'noimageindex' : '',
    robots.nocache ? 'nocache' : '',
  ].filter(Boolean).join(', ');

  // Add viewport and theme-color meta tags
  const viewportMeta = {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, maximum-scale=5',
  };

  const themeColorMeta = {
    name: 'theme-color',
    content: '#ffffff',
  };

  return {
    title: title,
    description: description,
    keywords: keywords.join(', '),
    metadataBase: new URL(siteUrl),
    alternates: alternates,
    robots: robotsValue,
    openGraph: og,
    twitter: tw,
    other: {
      ...(additionalMetaTags || []).reduce((acc, tag) => ({
        ...acc,
        [tag.name || tag.property || '']: tag.content,
      }), {}),
      // Add viewport and theme-color
      [viewportMeta.name]: viewportMeta.content,
      [themeColorMeta.name]: themeColorMeta.content,
    },
  };
}

// This component is a no-op in the new App Router, but we keep it for compatibility
export default function Seo() {
  return null;
}

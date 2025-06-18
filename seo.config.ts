import { DefaultSeoProps } from 'next-seo';

export const siteConfig = {
  title: 'Okosit - Your Trusted Partner',
  titleTemplate: '%s | Okosit',
  description: 'Okosit provides innovative solutions for your business needs. Discover our services and products today.',
  siteName: 'Okosit',
  siteUrl: 'https://okosit-web.vercel.app',
  twitter: {
    handle: '@okosit',
    site: '@okosit',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://okosit-web.vercel.app',
    siteName: 'Okosit',
  },
};

export const openGraphImages = [
  {
    url: `${siteConfig.siteUrl}/images/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: 'Okosit',
  },
];

export const defaultSeoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    ...siteConfig.openGraph,
    images: openGraphImages,
  },
  twitter: siteConfig.twitter,
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

// Language configurations
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    locale: 'en-US',
    hrefLang: 'en-US',
    direction: 'ltr',
  },
  hu: {
    code: 'hu',
    name: 'Magyar',
    locale: 'hu-HU',
    hrefLang: 'hu-HU',
    direction: 'ltr',
  },
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
  },
  hu: {
    'nav.home': 'Kezdőlap',
    'nav.about': 'Rólunk',
    'nav.services': 'Szolgáltatások',
    'nav.contact': 'Kapcsolat',
  },
} as const;

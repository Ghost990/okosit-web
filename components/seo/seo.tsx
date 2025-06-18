import { NextSeo, NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { siteConfig, languages, defaultLanguage, defaultSeoConfig } from '../../seo.config';

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: NextSeoProps['openGraph'];
  additionalMetaTags?: NextSeoProps['additionalMetaTags'];
  noindex?: boolean;
  nofollow?: boolean;
};

export function Seo({
  title,
  description = siteConfig.description,
  canonical,
  openGraph,
  additionalMetaTags = [],
  noindex = false,
  nofollow = false,
}: SeoProps) {
  const { locale = defaultLanguage, defaultLocale, asPath } = useRouter();
  const currentLanguage = (locale as keyof typeof languages) || defaultLanguage;
  const currentLanguageConfig = languages[currentLanguage];

  // Generate alternate links for all languages
  const languageAlternates = Object.values(languages).map((lang) => ({
    hrefLang: lang.hrefLang,
    href: `${siteConfig.siteUrl}${lang.code === defaultLanguage ? '' : `/${lang.code}`}${asPath}`,
  }));

  // Set the canonical URL
  const canonicalUrl = canonical || `${siteConfig.siteUrl}${asPath}`;

  // Configure OpenGraph
  const ogImages = openGraph?.images || [];
  const defaultOgImage = {
    url: `${siteConfig.siteUrl}/images/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: title || siteConfig.title,
  };

  return (
    <NextSeo
      title={title ? `${title} | ${siteConfig.siteName}` : siteConfig.title}
      titleTemplate={siteConfig.titleTemplate}
      description={description}
      canonical={canonicalUrl}
      noindex={noindex}
      nofollow={nofollow}
      openGraph={{
        ...defaultSeoConfig.openGraph,
        ...openGraph,
        locale: currentLanguageConfig.locale,
        url: canonicalUrl,
        title: title || siteConfig.title,
        description,
        images: ogImages.length > 0 ? ogImages : [defaultOgImage],
        site_name: siteConfig.siteName,
      }}
      twitter={siteConfig.twitter}
      additionalMetaTags={[
        ...(defaultSeoConfig.additionalMetaTags || []),
        ...additionalMetaTags,
      ]}
      additionalLinkTags={[
        ...(defaultSeoConfig.additionalLinkTags || []),
        // Add alternate language links
        ...languageAlternates.map((alt) => ({
          rel: 'alternate',
          hrefLang: alt.hrefLang,
          href: alt.href,
        })),
        // Add x-default language link
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${siteConfig.siteUrl}${asPath}`,
        },
      ]}
    />
  );
}

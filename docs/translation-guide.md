# OkosIT Website Translation Guide

This document provides guidance on how to translate the OkosIT website and maintain its multilingual support.

## Overview

The website currently supports two languages:
- Hungarian (hu) - Default language
- English (en)

## Translation Structure

All translations are stored in TypeScript files in the `translations` directory:
- `translations/hu.ts` - Hungarian translations
- `translations/en.ts` - English translations

Each translation file exports a `translations` object with the same structure, containing all user-facing text organized by sections.

## How to Add a New Language

1. Create a new file in the `translations` directory, e.g., `translations/de.ts` for German
2. Copy the structure from an existing translation file (e.g., `en.ts`)
3. Translate all text values while keeping the keys and structure identical
4. Update the `LanguageProvider` in `contexts/language-context.tsx` to include the new language:
   - Add the new locale to the `Locale` type
   - Import the new translations file
   - Update the `useTranslations` hook to return the new translations based on the locale

## How to Update Translations

When adding new text to the website:
1. Add the text to all translation files with the same key structure
2. Use the `useTranslations` hook to access the text in your components
3. Test the website in all supported languages to ensure the text appears correctly

## Translation Keys Structure

The translations are organized by sections:

### Common Elements
- `common.company` - Company name
- `common.tagline` - Company tagline
- `common.description` - Brief company description
- `common.cta` - Call to action section
- `common.contactUs` - Contact us button text
- `common.learnMore` - Learn more button text
- `common.or` - Or text
- `common.theme` - Theme switcher text
- `common.language` - Language switcher text

### Navigation
- `navigation.home` - Home page link
- `navigation.services` - Services page link
- `navigation.about` - About page link
- `navigation.partners` - Partners page link
- `navigation.help` - Help page link
- `navigation.contact` - Contact page link

### Header
- `header.freeConsultation` - Free consultation button text

### Footer
- `footer.copyright` - Copyright text
- `footer.privacyPolicy` - Privacy policy link
- `footer.termsOfService` - Terms of service link

### Home Page
- `home.hero` - Hero section
- `home.services` - Services section
- `home.features` - Features section
- `home.testimonials` - Testimonials section
- `home.cta` - Call to action section
- `home.partners` - Partners section
- `home.stats` - Statistics section

### Services Page
- `services.meta` - Meta information
- `services.title` - Page title
- `services.subtitle` - Page subtitle
- `services.description` - Page description
- `services.badge` - Services badge text
- `services.details` - Details button text
- `services.moreFeatures` - More features text
- `services.hero` - Hero section
- `services.categories` - Service categories
- `services.descriptions` - Service descriptions
- `services.features` - Service features
- `services.pricing` - Service pricing
- `services.cta` - Call to action section

### About Page
- `about.meta` - Meta information
- `about.hero` - Hero section
- `about.mission` - Mission section
- `about.values` - Values section
- `about.team` - Team section
- `about.history` - History section
- `about.stats` - Statistics section
- `about.cta` - Call to action section

### Partners Page
- `partners.meta` - Meta information
- `partners.companies` - Partner companies
- `partners.industries` - Industries section
- `partners.logos` - Partner logos section
- `partners.cta` - Call to action section

### Contact Page
- `contact.meta` - Meta information
- `contact.hero` - Hero section
- `contact.phone` - Phone information
- `contact.email` - Email information
- `contact.contact` - Contact information
- `contact.hours` - Business hours
- `contact.callUs` - Call us text
- `contact.form` - Contact form
- `contact.info` - Contact information
- `contact.map` - Map section
- `contact.faq` - FAQ section

### Support Page
- `support.hero` - Hero section
- `support.faq` - FAQ section
- `support.contactForm` - Contact form

## Best Practices

1. **Consistency**: Ensure terminology is consistent across all pages
2. **Context**: Consider the context in which the text appears
3. **Length**: Be mindful of text length, especially for buttons and labels
4. **Testing**: Test the website in all languages to ensure proper display
5. **Maintenance**: Keep all translation files in sync when adding new features

## Language Switcher

The language switcher component is located in `components/language-switcher.tsx`. It allows users to switch between available languages. The selected language is stored in localStorage and persists across page reloads.

## Language Provider

The `LanguageProvider` in `contexts/language-context.tsx` manages the current locale and provides it to all components via React Context. It also updates the `<html lang>` attribute when the locale changes.

## Translation Hook

The `useTranslations` hook in `hooks/useTranslations.ts` returns the appropriate translations based on the current locale. Use this hook in your components to access translated text.

```tsx
import { useTranslations } from "@/hooks/useTranslations";

export default function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t.common.company}</h1>
      <p>{t.common.description}</p>
    </div>
  );
}
```

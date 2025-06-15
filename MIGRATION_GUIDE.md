# OkosIT Web Next.js Migration Guide

This document provides a comprehensive guide to the migration from the Vite-based React application to the Next.js application.

## Project Structure

The Next.js project follows the App Router structure:

```
okosit-web-next/
├── app/                      # App Router directory
│   ├── kapcsolat/            # Contact page route
│   ├── partnereink/          # Partners page route
│   ├── rolunk/               # About page route
│   ├── segitseg/             # Support/Help page route
│   ├── szolgaltatasok/       # Services page route
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with Header and Footer
│   └── page.tsx              # Home page
├── components/               # Shared components
│   ├── cta.tsx               # Call to Action component
│   ├── footer.tsx            # Footer component
│   ├── header.tsx            # Header component
│   ├── hero.tsx              # Hero section component
│   ├── partner-logos.tsx     # Partner logos component
│   ├── services.tsx          # Services component
│   ├── structured-data-head.tsx # SEO structured data component
│   ├── testimonials.tsx      # Testimonials component
│   └── theme-switcher.tsx    # Dark/Light theme switcher
├── data/                     # Data files
│   └── services.json         # Services data
├── hooks/                    # Custom hooks
│   └── useTranslations.ts    # Translations hook
├── public/                   # Static assets
├── translations/             # Translation files
│   └── hu.ts                 # Hungarian translations
└── types/                    # TypeScript type definitions
```

## Key Features Implemented

1. **App Router Structure**: Implemented Next.js 13+ App Router for improved routing and layouts.
2. **Dark Mode**: Integrated system-wide dark mode using next-themes.
3. **i18n Support**: Centralized translations in `translations/hu.ts` with a custom `useTranslations` hook.
4. **SEO Optimization**: Added metadata and structured data for better search engine visibility.
5. **Responsive Design**: Maintained responsive design across all pages using Tailwind CSS.
6. **Component Reusability**: Shared components across pages for consistency.

## Migration Checklist

- [x] Project setup with Next.js, TypeScript, and Tailwind CSS
- [x] App Router structure implementation
- [x] Theme switching functionality (light/dark mode)
- [x] i18n translations integration
- [x] Home page migration
- [x] Services page migration
- [x] About page migration
- [x] Partners page migration
- [x] Support page migration
- [x] Contact page migration
- [x] Shared components migration
- [x] SEO optimization

## Key Components

### Layout Components

- **Root Layout**: Contains the Header and Footer components and wraps all pages.
- **Page Layouts**: Each route has its own layout for metadata management.

### Shared Components

- **Hero**: Dynamic hero section with animation support.
- **CTA (Call to Action)**: Reusable call-to-action section.
- **Services**: Displays service cards with icons and descriptions.
- **PartnerLogos**: Showcases partner logos with dark mode support.
- **Testimonials**: Customer testimonials carousel.
- **StructuredDataHead**: Adds structured data for SEO.

### Utility Components

- **ThemeSwitcher**: Toggles between light and dark mode.

## Translations

All text content is centralized in the `translations/hu.ts` file, organized by sections:

- Common texts
- Navigation items
- Header content
- Footer content
- Page-specific content (home, services, about, partners, support, contact)

## Next Steps

1. **Deployment**: Deploy the Next.js application to a hosting platform.
2. **Performance Optimization**: Implement image optimization and lazy loading.
3. **Additional Languages**: Add support for more languages (English, etc.).
4. **Analytics Integration**: Add web analytics for tracking user behavior.
5. **Form Functionality**: Implement form submission and validation.

## Technical Debt and Improvements

- Consider implementing server components where appropriate for better performance.
- Add more robust error handling and loading states.
- Implement proper form validation and submission handling.
- Add automated tests for critical components and pages.
- Implement proper image optimization using Next.js Image component.

---

This migration guide serves as documentation for the Next.js migration process and can be used as a reference for future development.

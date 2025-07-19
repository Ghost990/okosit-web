# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the OkosIT website - a modern, bilingual (Hungarian/English) static website built with Next.js 15.3.3 App Router, TypeScript, and Tailwind CSS. The site is optimized for static export and deployment on Vercel.

## Development Commands

- **`npm run dev`** - Start development server at http://localhost:3000
- **`npm run build`** - Create production build (static export to `out/` directory)
- **`npm run lint`** - Run ESLint for code quality checks
- **`npm run format`** - Auto-format code with Prettier
- **`npm run check-types`** - TypeScript type checking without emit
- **`npm run analyze`** - Bundle size analysis (currently disabled in next.config.js)
- **`npm test`** - Run Jest tests (no tests currently implemented)

## Architecture

### Key Technologies
- **Framework**: Next.js 15.3.3 with App Router (static export mode)
- **Language**: TypeScript with path aliases (@/*)
- **Styling**: Tailwind CSS with custom color palette and dark mode
- **UI Components**: Radix UI primitives with custom components
- **Animations**: Framer Motion
- **Email Service**: Resend (requires API key in .env)

### Directory Structure
- **`app/`** - Next.js App Router pages (Hungarian default, `/en/` for English)
- **`components/`** - Reusable React components
- **`contexts/`** - React Context providers (language, theme)
- **`hooks/`** - Custom React hooks
- **`lib/`** - Utility functions (analytics, SEO, cookies)
- **`translations/`** - Language files (hu.ts, en.ts)
- **`public/`** - Static assets, favicons, manifests

### Multi-language Architecture
The site implements manual routing for languages:
- Hungarian (default): Direct routes like `/`, `/services`, `/about`
- English: Prefixed routes like `/en/`, `/en/services`, `/en/about`
- Language preference persisted via cookies
- Middleware handles locale detection and routing
- All user-facing text stored in translation files

### Static Export Configuration
- **Output**: Static HTML/CSS/JS files via `output: 'export'`
- **Images**: Unoptimized for static hosting (`unoptimized: true`)
- **Dynamic Routes**: Not supported in static export mode
- **API Routes**: Contact form endpoint (requires server for email functionality)

## Key Implementation Details

### Theme System
- Uses `next-themes` for dark/light mode switching
- Theme preference persisted in localStorage
- CSS variables defined in Tailwind config for consistency

### SEO & Performance
- Metadata generation utilities in `lib/seo.ts`
- Web Vitals monitoring in `lib/performance.ts`
- Security headers configured in `next.config.js`
- Bundle optimization with tree-shaking for large libraries

### Contact Form
- Server-side API route at `/api/contact`
- Uses Resend for email delivery (requires RESEND_API_KEY in .env)
- Form validation and error handling implemented

### Cookie Consent
- GDPR-compliant cookie banner
- Analytics only loaded after consent
- Preferences stored in cookies

## Common Development Tasks

### Adding a New Page
1. Create page component in `app/[page-name]/page.tsx` (Hungarian)
2. Create English version in `app/en/[page-name]/page.tsx`
3. Add translations to both `translations/hu.ts` and `translations/en.ts`
4. Update navigation in `components/navigation.tsx`
5. Add metadata generation for SEO

### Updating Translations
1. Edit translation files in `translations/` directory
2. Maintain identical key structure across all language files
3. Use `useTranslations()` hook to access translations in components
4. Test in both languages to ensure proper display

### Modifying Components
1. Components use Tailwind classes for styling
2. Follow existing patterns for dark mode support (dark: prefix)
3. Ensure responsive design with mobile-first approach
4. Use TypeScript interfaces for props

### Building for Production
1. Run `npm run build` to create static export
2. Output will be in `out/` directory
3. Test locally with a static server before deployment
4. Deploy to Vercel or any static hosting service

## Important Notes

- The site is configured for static export - no server-side features except API routes
- Bundle analyzer is currently disabled but can be re-enabled in `next.config.js`
- Test files are not present despite Jest being configured
- Email functionality requires server environment with Resend API key
- All paths use absolute imports with `@/` prefix configured in TypeScript
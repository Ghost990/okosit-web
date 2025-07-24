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
- **`npm run lint:fix`** - Auto-fix linting issues

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
- GDPR-compliant cookie banner with proper dark mode styling
- Analytics only loaded after consent
- Preferences stored in cookies
- Uses `bg-gray-800 border border-gray-600` for dark mode visibility

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
5. For card layouts, use `flex flex-col h-full` and `flex-grow` for equal heights
6. Contact components use clickable card containers with obfuscated contact details

### Building for Production
1. Run `npm run build` to create static export
2. Output will be in `out/` directory
3. Test locally with a static server before deployment
4. Deploy to Vercel or any static hosting service

## Current Website Configuration

### Contact Information
- **Phone**: +36703915000
- **Email**: info@okosit.hu
- **Statistics**: 200+ monitored devices (not satisfied clients)

### Service Categories
- Rendszerüzemeltetés (System Administration)
- PC és laptop javítás (PC and Laptop Repair)  
- Webfejlesztés (Web Development)
- Webshop készítés (Webshop Creation)
- IT kivitelezés (IT Implementation)
- IT eszközök bérbeadása (IT Equipment Rental)

### Industry Focus
- Egészségügy (Healthcare)
- Építőipar (Construction) - updated from Education
- Kereskedelem (Commerce)
- Szolgáltatások (Services)
- Gyártás (Manufacturing)
- Technológia (Technology)

### Company Timeline
- **2014**: Company founding focused on micro/small businesses
- **2016**: First network delivery (fully designed and implemented)
- **2020**: Service expansion (webdev/webshop)
- **2022**: 24/7 server monitoring (10+ continuous servers)
- **2023**: 250+ managed IT endpoints, system scaling
- **2025**: Webshop launch with curated devices

### About Page Structure
- Hero section
- Values section  
- Stats section (includes "100% bizalom/trust")
- Timeline section
- CTA section
- **Note**: Team section has been removed

## Important Notes

- The site is configured for static export - no server-side features except API routes
- Bundle analyzer is currently disabled but can be re-enabled in `next.config.js`
- Test files are not present despite Jest being configured
- Email functionality requires server environment with Resend API key
- All paths use absolute imports with `@/` prefix configured in TypeScript
- Partners page displays partner logos instead of industry solutions section

## Environment Variables

Required for production:
- **`RESEND_API_KEY`** - API key for Resend email service (contact form functionality)

## TypeScript Configuration

- Target: ES2017
- Path aliases configured: `@/*` maps to project root
- Strict mode partially enabled (consider enabling fully for better type safety)
- JSX: preserve mode for Next.js compatibility

## HTTPS Configuration (Updated)

The website has been fully migrated from HTTP to HTTPS with the following security enhancements:

### Security Headers Enhanced
**Location**: `next.config.js` - Updated security headers for HTTPS compliance:
- **Strict-Transport-Security**: `max-age=63072000; includeSubDomains; preload` (2 years)
- **Referrer-Policy**: `strict-origin-when-cross-origin` 
- **Permissions-Policy**: `camera=(), microphone=(), geolocation=()`
- Existing headers maintained: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection

### URL Updates Made
**Location**: `lib/seo-utils.ts` - Lines 185 and 196:
- Changed default site URL from `http://okosit.hu` → `https://okosit.hu`
- Updated social sharing image URL from HTTP to HTTPS
- All other configuration files already used HTTPS URLs correctly

### Environment Configuration
- **`.env.example`** created with HTTPS defaults
- **`SITE_URL`** environment variable uses HTTPS
- All external services (Google Fonts, Analytics) already use HTTPS connections

## Favicon Configuration (Issue Identified)

### Current Setup
**Location**: `app/layout.tsx` - Lines 80-102:
```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/assets/icon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
```

### Available Favicon Files
**Location**: `public/` and `public/assets/`:
- `/favicon.ico` (15.4KB) - Main favicon in root
- `/assets/favicon.ico` (1.7KB) - Alternative favicon
- `/assets/favicon-16x16.png`, `/assets/favicon-32x32.png` - PNG versions
- `/assets/icon.svg` - SVG version
- Complete set of PWA icons in `/assets/` directory

### Known Issue
- Tab icon may not display properly in some browsers
- Development server may not serve favicon correctly due to static export configuration
- **Solution**: Hard refresh browser (Ctrl+F5/Cmd+Shift+R) or test in production build

### Troubleshooting Steps
1. Clear browser cache and hard refresh
2. Test in incognito/private mode
3. Verify files exist in `public/` directory
4. Check browser developer tools for 404 errors on favicon requests
5. Test production build with `npm run build` to ensure proper static export
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of supported locales
const locales = ['en', 'hu'];
// Default locale (Hungarian)
const defaultLocale = 'hu';

// Get the preferred locale from cookie, header, or default
function getLocale(request: NextRequest): string {
  // Check for locale in cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check for locale in Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const headerLocales = acceptLanguage.split(',').map(locale => locale.split(';')[0].trim());
    const matchedLocale = headerLocales.find(locale => {
      return locales.some(supportedLocale => locale.startsWith(supportedLocale));
    });
    if (matchedLocale && locales.includes(matchedLocale)) {
      return matchedLocale;
    }
  }

  // Default to Hungarian
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  // Get pathname
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Get the preferred locale
    const locale = getLocale(request);

    // If preferred locale is English, redirect to /en path
    if (locale === 'en') {
      // e.g. incoming request is /about
      // The new URL is /en/about
      return NextResponse.redirect(
        new URL(`/en${pathname === '/' ? '' : pathname}`, request.url)
      );
    }
  }

  const response = NextResponse.next();

  // When a user visits a URL with a locale, set that locale in a cookie
  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];
    if (locales.includes(locale)) {
      response.cookies.set('NEXT_LOCALE', locale);
    }
  }

  return response;
}

export const config = {
  // Match all paths except:
  // - API routes (/api/*)
  // - Static files (/_next/*)
  // - Public files (/public/*)
  // - Favicon (/favicon.ico)
  matcher: ['/((?!api|_next/static|_next/image|images|public|favicon.ico).*)'],
};

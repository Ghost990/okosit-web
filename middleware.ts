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
  const response = NextResponse.next();

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/assets/') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.json')
  ) {
    return response;
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname has no locale, redirect to appropriate localized path
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    const newPath = locale === 'hu' 
      ? pathname === '/' ? '/' : pathname
      : `/en${pathname === '/' ? '' : pathname}`;

    // Only redirect if the path would actually change
    if (newPath !== pathname) {
      return NextResponse.redirect(new URL(newPath, request.url));
    }
  }

  // Set locale cookie based on URL
  const locale = pathnameHasLocale ? pathname.split('/')[1] : getLocale(request);
  if (locales.includes(locale)) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
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

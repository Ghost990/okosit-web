'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeAnalytics, pageview } from '@/lib/analytics';
import { hasAcceptedAnalytics } from '@/lib/cookies';

/**
 * Client component to initialize analytics and track page views
 * only when the user has consented to analytics cookies
 */
export default function AnalyticsInitializer() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only initialize analytics if user has given consent
    if (hasAcceptedAnalytics()) {
      // Initialize analytics on first load
      initializeAnalytics();
    }
  }, []);

  useEffect(() => {
    // Only track page views if user has given consent
    if (hasAcceptedAnalytics()) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);

  // This is a utility component that doesn't render anything visible
  return null;
}

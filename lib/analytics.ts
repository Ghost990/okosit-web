import { hasAcceptedAnalytics } from "./cookies";

// Example Google Analytics Measurement ID (replace with your actual ID)
const GA_MEASUREMENT_ID = "G-29VVWZ3JLD";

/**
 * Initialize Google Analytics only if user has provided consent
 */
export function initializeAnalytics(): void {
  // Only initialize if user has accepted analytics cookies
  if (hasAcceptedAnalytics()) {
    loadGoogleAnalytics();
  }
}

/**
 * Load Google Analytics script
 */
function loadGoogleAnalytics(): void {
  if (typeof window === "undefined" || (window as any).ga) {
    return;
  }

  // Create script element
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  // Append script to document head
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(arguments);
  }

  (window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });

  console.log("Google Analytics initialized");
}

/**
 * Track page view with Google Analytics
 * @param url The URL to track
 */
export function pageview(url: string): void {
  if (
    !hasAcceptedAnalytics() ||
    typeof window === "undefined" ||
    !(window as any).gtag
  ) {
    return;
  }

  (window as any).gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

/**
 * Track custom event with Google Analytics
 * @param action Event action
 * @param params Event parameters
 */
export function event(action: string, params: Record<string, any> = {}): void {
  if (
    !hasAcceptedAnalytics() ||
    typeof window === "undefined" ||
    !(window as any).gtag
  ) {
    return;
  }

  (window as any).gtag("event", action, params);
}

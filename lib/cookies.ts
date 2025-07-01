import Cookies from "js-cookie";

export const CONSENT_COOKIE_NAME = "okosit-cookie-consent";
export const ANALYTICS_CONSENT_NAME = "okosit-analytics-consent";

/**
 * Check if the user has accepted cookies
 * @returns boolean indicating if user has accepted cookies
 */
export function hasAcceptedCookies(): boolean {
  return Cookies.get(CONSENT_COOKIE_NAME) === "true";
}

/**
 * Check if the user has accepted analytics cookies
 * @returns boolean indicating if user has accepted analytics
 */
export function hasAcceptedAnalytics(): boolean {
  return Cookies.get(ANALYTICS_CONSENT_NAME) === "true";
}

/**
 * Check if the user has responded to cookie consent (either accepted or declined)
 * @returns boolean indicating if user has responded to the cookie banner
 */
export function hasRespondedToConsent(): boolean {
  return Cookies.get(CONSENT_COOKIE_NAME) !== undefined;
}

/**
 * Clear all analytics cookies (useful when user withdraws consent)
 */
export function clearAnalyticsCookies(): void {
  // Google Analytics
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");

  // Remove cookies with _ga prefix (using wildcard)
  Object.keys(Cookies.get()).forEach((cookieName) => {
    if (cookieName.startsWith("_ga")) {
      Cookies.remove(cookieName);
    }
  });

  // Facebook Pixel
  Cookies.remove("_fbp");
  Cookies.remove("_fbc");

  // Add any other analytics cookies that need to be cleared
}

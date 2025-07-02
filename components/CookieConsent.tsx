"use client";

import React, { useState, useEffect } from "react";
import CookieConsentLib from "react-cookie-consent";
import Cookies from "js-cookie";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Settings } from "lucide-react";
import { CONSENT_COOKIE_NAME, ANALYTICS_CONSENT_NAME } from "@/lib/cookies";
import { initializeAnalytics } from "@/lib/analytics";
import { useTranslations } from "@/hooks/useTranslations";

interface CookieConsentProps {
  privacyPolicyUrl?: string;
  disableOverlay?: boolean;
}

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  checked: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  privacyPolicyUrl = "/adatkezelesi-tajekoztato",
  disableOverlay = false,
}) => {
  const [hydrated, setHydrated] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";
  const [showSettings, setShowSettings] = useState(false);
  const t = useTranslations();
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>([
    {
      id: "essential",
      name: t.cookieConsent.categories.essential.name,
      description: t.cookieConsent.categories.essential.description,
      required: t.cookieConsent.categories.essential.required,
      checked: true,
    },
    {
      id: "analytics",
      name: t.cookieConsent.categories.analytics.name,
      description: t.cookieConsent.categories.analytics.description,
      required: t.cookieConsent.categories.analytics.required,
      checked: true, // Analytics ON by default
    },
    {
      id: "marketing",
      name: t.cookieConsent.categories.marketing.name,
      description: t.cookieConsent.categories.marketing.description,
      required: t.cookieConsent.categories.marketing.required,
      checked: false,
    },
  ]);

  // This effect ensures the component only renders on the client to avoid hydration issues
  useEffect(() => {
    setHydrated(true);

    // Check if cookies already exist and update checkboxes accordingly
    if (Cookies.get(CONSENT_COOKIE_NAME) === "true") {
      const analyticsAccepted = Cookies.get(ANALYTICS_CONSENT_NAME) === "true";

      setCookieCategories((prev) =>
        prev.map((category) => {
          if (category.id === "analytics") {
            return { ...category, checked: analyticsAccepted };
          }
          if (category.id === "marketing") {
            // You can add additional cookie checks here
            return { ...category, checked: analyticsAccepted };
          }
          return category;
        })
      );
    }
  }, []);

  if (!hydrated) {
    return null;
  }

  const toggleCategory = (categoryId: string) => {
    setCookieCategories((prev) =>
      prev.map((category) => {
        if (category.id === categoryId && !category.required) {
          return { ...category, checked: !category.checked };
        }
        return category;
      })
    );
  };

  const handleAccept = () => {
    // Set the main consent cookie
    Cookies.set(CONSENT_COOKIE_NAME, "true", { expires: 365 });

    // Set analytics consent based on selection
    const analyticsCategory = cookieCategories.find(
      (cat) => cat.id === "analytics"
    );
    const analyticsAccepted = analyticsCategory?.checked || false;
    Cookies.set(ANALYTICS_CONSENT_NAME, analyticsAccepted.toString(), {
      expires: 365,
    });

    // Properly format log message
    console.log(`Cookies accepted: analytics=${analyticsAccepted}`);

    // Initialize analytics directly if accepted instead of reloading
    if (analyticsAccepted) {
      initializeAnalytics();
    }

    // Try to force the banner to hide
    try {
      document
        .getElementsByClassName("CookieConsent")[0]
        ?.classList.add("hidden");

      // Fallback: refresh the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (e) {
      console.error("Error hiding cookie banner:", e);
      // Fallback if DOM manipulation fails
      window.location.reload();
    }
  };

  const handleDecline = () => {
    // Set the main consent cookie as true but all optional categories as false
    Cookies.set(CONSENT_COOKIE_NAME, "true", { expires: 365 });
    Cookies.set(ANALYTICS_CONSENT_NAME, "false", { expires: 365 });

    console.log("Cookies declined");

    // Remove any analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");

    // Clean up any Facebook Pixel cookies if they exist
    Cookies.remove("_fbp");
    Cookies.remove("_fbc");

    // Update local state
    setCookieCategories((prev) =>
      prev.map((category) => {
        if (!category.required) {
          return { ...category, checked: false };
        }
        return category;
      })
    );

    // Try to force the banner to hide
    try {
      document
        .getElementsByClassName("CookieConsent")[0]
        ?.classList.add("hidden");

      // Fallback: refresh the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (e) {
      console.error("Error hiding cookie banner:", e);
      // Fallback if DOM manipulation fails
      window.location.reload();
    }
  };

  const handleSaveSettings = () => {
    handleAccept();
    setShowSettings(false);
  };

  // Custom cookie consent UI based on the screenshot
  return (
    <CookieConsentLib
      location="bottom"
      buttonText=""
      declineButtonText=""
      enableDeclineButton
      cookieName={CONSENT_COOKIE_NAME}
      overlay={!disableOverlay}
      overlayStyle={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onOverlayClick={() => {
        // Do nothing on overlay click, prevent accidental closing
      }}
      containerClasses={`fixed bottom-4 right-4 z-50 lg:max-w-lg max-w-md p-4 shadow-lg ${isDark ? "bg-secondary-800" : "bg-white"} rounded-lg`}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        left: "auto",
        maxWidth: "36rem",
        zIndex: 1000,
        marginBottom: "2rem",
      }}
      disableStyles={false}
      buttonWrapperClasses="hidden"
      buttonClasses="hidden"
      declineButtonClasses="hidden"
      disableButtonStyles={true}
      hideButtonsFromScreen={true}
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
    >
      <div className="max-w-full">
        <div className="flex items-center mb-2">
          <Settings
            className={`ml-2 ${isDark ? "text-white" : "text-secondary-800"}`}
            size={18}
          />
          <h3
            className={`pl-2 text-lg font-semibold font-heading flex items-center ${isDark ? "text-white" : "text-secondary-800"}`}
          >
            {t.cookieConsent.title}
          </h3>
        </div>

        {showSettings ? (
          <div className="cookie-settings">
            <p
              className={`text-sm mb-3 ${isDark ? "text-gray-200" : "text-secondary-700"}`}
            >
              {t.cookieConsent.settingsDescription}
            </p>

            <div className="space-y-3">
              {cookieCategories.map((category) => (
                <div
                  key={category.id}
                  className="pb-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`cookie-${category.id}`}
                        checked={category.checked}
                        onChange={() => toggleCategory(category.id)}
                        disabled={category.required}
                        className={`mr-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 ${category.required ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      />
                      <label
                        htmlFor={`cookie-${category.id}`}
                        className={`font-medium ${isDark ? "text-white" : "text-secondary-800"} ${category.required ? "cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        {category.name}
                        {category.required && (
                          <span className="ml-1 text-xs font-normal text-gray-400">
                            ({t.cookieConsent.required})
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <p
                    className={`text-xs mt-1 ${isDark ? "text-gray-300" : "text-secondary-600"}`}
                  >
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap mt-4 gap-2">
              <button
                onClick={handleSaveSettings}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                {t.cookieConsent.saveSettings}
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className={`border font-semibold py-2 px-4 rounded transition-colors ${isDark ? "border-gray-400 text-gray-100 hover:bg-gray-700" : "border-gray-300 text-secondary-800 hover:bg-gray-100"}`}
              >
                {t.cookieConsent.back}
              </button>
            </div>
          </div>
        ) : (
          <>
            <p
              className={`text-sm my-2 ${isDark ? "text-gray-200" : "text-secondary-700"}`}
            >
              {t.cookieConsent.description}
            </p>

            <div className="flex flex-wrap mt-4 gap-2">
              <button
                onClick={handleAccept}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                {t.cookieConsent.accept}
              </button>
              <button
                onClick={handleDecline}
                className={`border font-semibold py-2 px-4 rounded transition-colors ${isDark ? "border-gray-400 text-gray-100 hover:bg-gray-700" : "border-gray-300 text-secondary-800 hover:bg-gray-100"}`}
              >
                {t.cookieConsent.decline}
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className={`border font-semibold py-2 px-4 rounded transition-colors ${isDark ? "border-gray-400 text-gray-100 hover:bg-gray-700" : "border-gray-300 text-secondary-800 hover:bg-gray-100"}`}
              >
                {t.cookieConsent.viewSettings}
              </button>
            </div>

            <div className="mt-3 text-xs">
              <Link
                href={privacyPolicyUrl}
                className={`${isDark ? "text-primary-400" : "text-primary-600"} hover:underline`}
              >
                {t.cookieConsent.privacyPolicy}
              </Link>
            </div>
          </>
        )}
      </div>
    </CookieConsentLib>
  );
};

export default CookieConsent;

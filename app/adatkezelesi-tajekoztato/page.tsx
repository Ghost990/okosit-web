"use client";

import CookieConsent from "@/components/CookieConsent";
import { useTranslations } from "@/hooks/useTranslations";

export default function AdatkezelesiTajekoztato() {
  const t = useTranslations();
  const policy = t.cookieConsent?.privacyPolicy;

  if (!policy) {
    return (
      <div className="container mx-auto py-16 text-red-600">
        Privacy policy content is missing for this language.
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-7xl">
        {typeof policy === "string" ? (
          <div className="prose prose-lg prose-indigo mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {policy}
            </h1>
          </div>
        ) : (
          <div className="prose prose-lg prose-indigo mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {policy.title}
            </h1>
            {policy.sections.map((section, idx) => (
              <div className="mt-10" key={idx}>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{section.heading}</h2>
                {section.content.map((para, pidx) => (
                  <p key={pidx}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <CookieConsent disableOverlay privacyPolicyUrl="/adatkezelesi-tajekoztato" />
    </>
  );
}

"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "hu" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with Hungarian as default, but check localStorage on mount
  const [locale, setLocale] = useState<Locale>("hu");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    setMounted(true);
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "hu" || savedLocale === "en")) {
      setLocale(savedLocale);
    }
  }, []);

  // Update localStorage and HTML lang attribute when locale changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("locale", locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

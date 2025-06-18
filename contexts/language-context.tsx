"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

type Locale = "hu" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to safely get the locale from the URL on client side
const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'hu'; // Default to Hungarian on server
  return window.location.pathname.startsWith('/en') ? 'en' : 'hu';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with Hungarian as default, but check URL and cookies on mount
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo<LanguageContextType>(
    () => ({
      locale,
      setLocale: (newLocale: Locale) => {
        if (newLocale === locale) return;
        setLocaleState(newLocale);
        
        // Update URL
        const newPath = newLocale === 'en' 
          ? `/en${pathname === '/' ? '' : pathname}`
          : pathname?.replace(/^\/en/, '') || '/';
        
        router.push(newPath);
        
        // Update cookie
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year
        document.documentElement.lang = newLocale;
      },
    }),
    [locale, pathname, router]
  );

  useEffect(() => {
    // Only run on client side
    setMounted(true);
    
    // Update document language
    document.documentElement.lang = locale;
    
    // Set cookie for consistency
    const cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`; // 1 year
    document.cookie = cookie;
    
    // Cleanup function to handle component unmount
    return () => {
      // Any cleanup if needed
    };
  }, [locale]);

  // Function to change locale with routing
  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year
    
    // Handle routing based on locale change
    const currentPath = pathname || window.location.pathname;
    
    // Remove any existing locale prefix
    let newPath = currentPath.replace(/^\/(en|hu)/, '');
    if (newPath === '') newPath = '/';
    
    // Add new locale prefix if English
    if (newLocale === 'en') {
      newPath = `/en${newPath === '/' ? '' : newPath}`;
    }
    
    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={contextValue}>
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

import { useLanguage } from "@/contexts/language-context";

/**
 * Utility hook to get locale-aware navigation links
 * @param path The base path without locale prefix
 * @returns The path with appropriate locale prefix if needed
 */
export function useLocalizedPath() {
  const { locale } = useLanguage();
  
  return (path: string): string => {
    // Remove any existing locale prefix first
    const cleanPath = path.replace(/^\/(en|hu)/, '');
    
    // If path is just "/", handle it specially
    if (cleanPath === '' || cleanPath === '/') {
      return locale === 'en' ? '/en' : '/';
    }
    
    // Add locale prefix for English
    return locale === 'en' ? `/en${cleanPath}` : cleanPath;
  };
}

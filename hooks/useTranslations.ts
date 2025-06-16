import { translations as huTranslations } from '@/translations/hu';
import { translations as enTranslations } from '@/translations/en';
import { useLanguage } from '@/contexts/language-context';

/**
 * Hook to access translations throughout the application
 * Supports multiple languages based on the selected locale
 */
export function useTranslations() {
  const { locale } = useLanguage();
  
  // Return translations based on the current locale
  return locale === 'en' ? enTranslations : huTranslations;
}

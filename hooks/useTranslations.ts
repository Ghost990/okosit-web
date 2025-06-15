import { translations } from '@/translations/hu';

/**
 * Hook to access translations throughout the application
 * Currently only supports Hungarian language
 */
export function useTranslations() {
  // In the future, this could be expanded to support multiple languages
  return translations;
}

/**
 * Utility functions for obfuscating contact information to prevent spam
 */

/**
 * Obfuscates an email address to prevent scraping by bots
 * @param email The email address to obfuscate
 * @returns The obfuscated email as JSX elements
 */
export const obfuscateEmail = (email: string) => {
  // Split the email into parts
  const [username, domain] = email.split('@');
  
  // Return the obfuscated email as an array of spans with data attributes
  return {
    username,
    domain,
    obfuscated: true
  };
};

/**
 * Obfuscates a phone number to prevent scraping by bots
 * @param phone The phone number to obfuscate
 * @returns The obfuscated phone as JSX elements
 */
export const obfuscatePhone = (phone: string) => {
  // Remove any non-digit characters for consistent formatting
  const digits = phone.replace(/\D/g, '');
  
  // Split the phone number into parts
  const countryCode = digits.slice(0, 2);
  const areaCode = digits.slice(2, 4);
  const part1 = digits.slice(4, 7);
  const part2 = digits.slice(7);
  
  // Return the obfuscated phone as an object
  return {
    countryCode,
    areaCode,
    part1,
    part2,
    obfuscated: true
  };
};

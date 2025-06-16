"use client"

import React, { useState, useEffect } from 'react';
import { obfuscateEmail, obfuscatePhone } from '@/utils/obfuscate';

/**
 * Component that renders an obfuscated email address that's protected from spam bots
 * but still usable by humans
 */
export const ObfuscatedEmail: React.FC<{ email: string; className?: string }> = ({ 
  email, 
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false);
  const { username, domain } = obfuscateEmail(email);

  // Only render the actual email on the client side
  useEffect(() => {
    // Use requestAnimationFrame for smoother transition
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    // Server-side or during hydration, render a placeholder that looks similar to real content
    return <span className={`${className} opacity-70`}>{email.replace(/@/g, '[at]').replace(/\./g, '[dot]')}</span>;
  }

  // Client-side, assemble the email from parts with data attributes
  return (
    <a 
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${username}@${domain}`;
      }}
      aria-label="Email address"
      data-email-user={username}
      data-email-domain={domain}
    >
      <span data-part="username">{username}</span>
      <span data-part="at">@</span>
      <span data-part="domain">{domain}</span>
    </a>
  );
};

/**
 * Component that renders an obfuscated phone number that's protected from spam bots
 * but still usable by humans
 */
export const ObfuscatedPhone: React.FC<{ 
  phone: string; 
  className?: string;
  format?: 'dashed' | 'spaced' | 'grouped';
}> = ({ 
  phone, 
  className = '',
  format = 'spaced'
}) => {
  const [mounted, setMounted] = useState(false);
  const { countryCode, areaCode, part1, part2 } = obfuscatePhone(phone);

  // Only render the actual phone on the client side
  useEffect(() => {
    // Use requestAnimationFrame for smoother transition
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    // Server-side or during hydration, render a placeholder that looks similar to real content
    return <span className={`${className} opacity-70`}>{phone.replace(/\d(?=\d{2})/g, 'X')}</span>;
  }

  // Format the phone number based on the format prop
  let formattedPhone;
  switch (format) {
    case 'dashed':
      formattedPhone = `+${countryCode}-${areaCode}-${part1}-${part2}`;
      break;
    case 'grouped':
      formattedPhone = `+${countryCode} (${areaCode}) ${part1} ${part2}`;
      break;
    case 'spaced':
    default:
      formattedPhone = `+${countryCode} ${areaCode} ${part1} ${part2}`;
      break;
  }

  // Client-side, assemble the phone from parts with data attributes
  return (
    <a 
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `tel:+${countryCode}${areaCode}${part1}${part2}`;
      }}
      aria-label="Phone number"
      data-phone-country={countryCode}
      data-phone-area={areaCode}
      data-phone-part1={part1}
      data-phone-part2={part2}
    >
      {formattedPhone}
    </a>
  );
};

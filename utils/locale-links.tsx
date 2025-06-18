"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocalizedPath } from "./navigation";

interface LocaleLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  locale?: string;
}

/**
 * A wrapper around Next.js Link component that handles localized paths
 */
export function LocaleLink({ 
  href, 
  className, 
  onClick, 
  children,
  locale: propLocale
}: LocaleLinkProps) {
  const getLocalizedPath = useLocalizedPath();
  const [isMounted, setIsMounted] = useState(false);
  
  // This ensures we don't render the link until after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // On the server, render a placeholder with the original href
  if (!isMounted) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  
  // On the client, use the localized path
  const localizedHref = getLocalizedPath(href);
  
  return (
    <Link
      href={localizedHref}
      className={className}
      onClick={onClick}
      locale={propLocale}
    >
      {children}
    </Link>
  );
}

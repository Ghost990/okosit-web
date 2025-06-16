"use client";

import Link from "next/link";
import { useLocalizedPath } from "./navigation";

interface LocaleLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

/**
 * A wrapper around Next.js Link component that handles localized paths
 */
export function LocaleLink({ href, className, onClick, children }: LocaleLinkProps) {
  const getLocalizedPath = useLocalizedPath();
  
  return (
    <Link
      href={getLocalizedPath(href)}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

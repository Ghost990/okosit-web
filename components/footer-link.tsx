"use client";

import Link from "next/link";
import { useLocalizedPath } from "@/utils/navigation";

interface FooterLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, className, children }: FooterLinkProps) {
  const getLocalizedPath = useLocalizedPath();
  
  return (
    <Link
      href={getLocalizedPath(href)}
      className={className}
    >
      {children}
    </Link>
  );
}

'use client';

import dynamic from 'next/dynamic';

// Dynamically import components with no SSR for better performance
export const ClientHeader = dynamic(() => import('@/components/header'), {
  ssr: false,
  loading: () => <div className="h-16 bg-background" />
});

export const ClientFooter = dynamic(() => import('@/components/footer'), {
  ssr: false,
  loading: () => <div className="h-32 bg-background" />
});

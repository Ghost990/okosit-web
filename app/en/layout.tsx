import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'OkosIT - IT Solutions',
    template: '%s | OkosIT',
  },
  description: 'Professional IT services for businesses - system operations, web development, and more.',
  alternates: {
    canonical: 'https://okosit.hu/en',
    languages: {
      'hu': 'https://okosit.hu',
      'en': 'https://okosit.hu/en',
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

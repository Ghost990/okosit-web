import type { Metadata } from 'next'
import { Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/language-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { generateHomePageMetadata } from '@/lib/seo-utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

// Generate metadata for the home page
export async function generateMetadata() {
  return generateHomePageMetadata();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/favicon.png" type="image/png" />
        <link rel="icon" href="/assets/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/assets/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${poppins.variable} font-inter antialiased`}>
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': '#website',
              name: 'OkosIT',
              url: 'https://okosit-web.vercel.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://okosit-web.vercel.app/kereses?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            })
          }}
        />
        
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': '#organization',
              name: 'OkosIT',
              url: 'https://okosit-web.vercel.app',
              logo: 'https://okosit-web.vercel.app/logo.png',
              sameAs: [
                'https://www.facebook.com/okosit',
                'https://www.instagram.com/okosit',
                'https://www.linkedin.com/company/okosit',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+3612345678',
                  contactType: 'customer service',
                  availableLanguage: ['Hungarian', 'English'],
                },
              ],
            })
          }}
        />

        {/* AI-focused structured data for better search understanding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': '#webpage',
              url: 'https://okosit-web.vercel.app',
              name: 'OkosIT - IT Megoldások és Szolgáltatások',
              description: 'Szakértő IT megoldások és szolgáltatások vállalkozások számára. Ingyenes konzultáció, testreszabott megoldások és kiváló ügyfélszolgálat.',
              publisher: {
                '@id': '#organization',
              },
              inLanguage: 'hu',
              isPartOf: {
                '@id': '#website',
              },
              about: [
                {
                  '@type': 'Thing',
                  name: 'IT szolgáltatások',
                  description: 'Szakértő IT megoldások és támogatás vállalkozások számára',
                },
                {
                  '@type': 'Thing',
                  name: 'Hálózati megoldások',
                  description: 'Teljeskörű hálózati megoldások tervezése és kivitelezése',
                },
                {
                  '@type': 'Thing',
                  name: 'Felhőalapú megoldások',
                  description: 'Modern felhőalapú szolgáltatások és migrációs stratégiák',
                },
              ],
              hasPart: [
                {
                  '@type': 'WebPageElement',
                  about: 'IT tanácsadás',
                  description: 'Szakértői tanácsadás IT stratégiák kialakításához',
                },
                {
                  '@type': 'WebPageElement',
                  about: 'Rendszerintegráció',
                  description: 'Egyedi rendszerintegrációs megoldások fejlesztése',
                },
              ],
              mainEntity: {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Milyen IT szolgáltatásokat kínáltok?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Széleskörű IT szolgáltatásokat kínálunk, beleértve hálózati megoldásokat, felhőalapú szolgáltatásokat, biztonsági megoldásokat és rendszerintegrációt. Minden szolgáltatásunkat az ügyfelek igényeihez szabjuk.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Miben különböztök más IT cégektől?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Kiemelkedő szakértelemmel, személyre szabott megközelítéssel és kiváló ügyfélszolgálattal rendelkezünk. Minden ügyfelünk számára egyedi megoldásokat kínálunk, és folyamatos támogatást biztosítunk.',
                    },
                  },
                ],
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { generateHomePageMetadata } from "@/lib/seo-utils";
import { initPerformanceMonitoring } from "@/utils/performance";
import { ClientHeader, ClientFooter } from "@/components/client-wrappers";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsInitializer from "@/components/AnalyticsInitializer";

// Initialize performance monitoring in client-side only
if (typeof window !== "undefined") {
  initPerformanceMonitoring();
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Generate metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
  return generateHomePageMetadata();
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preload hero LCP image */}
        <link rel="preload" href="/assets/hero-lcp.webp" as="image" />
        {/* Preload other critical assets */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />

        {/* Favicon - primary favicon.ico in root for browser compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/assets/icon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} font-inter antialiased`}
      >
        {/* Website structured data */}
        <Suspense fallback={null}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "#website",
                name: "OkosIT",
                url: "https://okosit-web.vercel.app",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://okosit-web.vercel.app/kereses?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
        </Suspense>

        {/* Organization structured data */}
        <Suspense fallback={null}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "#organization",
                name: "OkosIT",
                url: "https://okosit-web.vercel.app",
                logo: "https://okosit-web.vercel.app/logo.png",
                sameAs: [
                  "https://www.facebook.com/okosit",
                  "https://www.instagram.com/okosit",
                  "https://www.linkedin.com/company/okosit",
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+3612345678",
                    contactType: "customer service",
                    availableLanguage: ["Hungarian", "English"],
                  },
                ],
              }),
            }}
          />
        </Suspense>

        {/* AI-focused structured data for better search understanding */}
        <Suspense fallback={null}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "#webpage",
                url: "https://okosit-web.vercel.app",
                name: "OkosIT - IT Megoldások és Szolgáltatások",
                description:
                  "Szakértő IT megoldások és szolgáltatások vállalkozások számára. Ingyenes konzultáció, testreszabott megoldások, kiváló üzemeltetés és szerviz.",
                publisher: {
                  "@id": "#organization",
                },
                inLanguage: "hu",
                isPartOf: {
                  "@id": "#website",
                },
                about: [
                  {
                    "@type": "Thing",
                    name: "IT szolgáltatások",
                    description:
                      "Szakértő IT megoldások, üzemeltetés és szerviz vállalkozások számára",
                  },
                  {
                    "@type": "Thing",
                    name: "Hálózati megoldások",
                    description:
                      "Teljeskörű hálózati megoldások tervezése és kivitelezése",
                  },
                  {
                    "@type": "Thing",
                    name: "Felhőalapú megoldások",
                    description:
                      "Modern felhőalapú szolgáltatások és migrációs stratégiák",
                  },
                ],
                hasPart: [
                  {
                    "@type": "WebPageElement",
                    about: "IT tanácsadás",
                    description:
                      "Szakértői tanácsadás IT stratégiák kialakításához",
                  },
                  {
                    "@type": "WebPageElement",
                    about: "Rendszerintegráció",
                    description:
                      "Egyedi rendszerintegrációs megoldások fejlesztése",
                  },
                ],
                mainEntity: {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Milyen IT szolgáltatásokat kínáltok?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Széleskörű IT szolgáltatásokat kínálunk, beleértve hálózati megoldásokat, felhőalapú szolgáltatásokat, biztonsági megoldásokat és rendszerintegrációt. Minden szolgáltatásunkat az ügyfelek igényeihez szabjuk.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Miben különböztök más IT cégektől?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Kiemelkedő szakértelemmel, személyre szabott megközelítéssel és kiváló ügyfélszolgálattal rendelkezünk. Minden ügyfelünk számára egyedi megoldásokat kínálunk, és folyamatos támogatást biztosítunk.",
                      },
                    },
                  ],
                },
              }),
            }}
          />
        </Suspense>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <ClientHeader />
              <main className="flex-grow">{children}</main>
              <ClientFooter />
            </div>
            <CookieConsent />
            <Suspense fallback={null}>
              <AnalyticsInitializer />
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

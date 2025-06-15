"use client"

import Image from "next/image"
import { useTranslations } from "@/hooks/useTranslations"
import "@/styles/partner-logos.css"

const logos = [
  // Placeholder logos - we'll replace these with actual paths/data later
  { id: 1, src: '/partners/partner1.svg', alt: 'Partner 1' },
  { id: 2, src: '/partners/partner2.svg', alt: 'Partner 2' },
  { id: 3, src: '/partners/partner3.svg', alt: 'Partner 3' },
  { id: 4, src: '/partners/partner4.svg', alt: 'Partner 4' },
  { id: 5, src: '/partners/partner5.svg', alt: 'Partner 5' },
]

export default function PartnerLogos() {
  const t = useTranslations()
  const extendedLogos = [...logos, ...logos] // Duplicate for seamless scroll

  return (
    <div className="bg-white dark:bg-secondary-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-montserrat font-bold leading-8 text-secondary-900 dark:text-white">
          {t.partners.logos.title}
        </h2>
        <div className="mt-10 w-full overflow-hidden">
          <div className="logo-scroller">
            <div className="logo-track">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="mx-8">
                  <Image
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={logo.src}
                    alt={logo.alt}
                    width={158}
                    height={48}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

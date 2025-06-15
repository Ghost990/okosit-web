"use client"

import Image from "next/image"
import { useTranslations } from "@/hooks/useTranslations"

const logos = [
  // Partner logos from /public/assets/partners
  { id: 1, src: '/assets/partners/eda32b_15f62d1e948e4477adca0370694fb817mv2.png', alt: 'Partner Logo 1' },
  { id: 2, src: '/assets/partners/eda32b_2f7bf86b142445d08a343e323946e114~mv2.png', alt: 'Partner Logo 2' },
  { id: 3, src: '/assets/partners/eda32b_34870679e1364b2494cf95bfd39afb15~mv2.png', alt: 'Partner Logo 3' },
  { id: 4, src: '/assets/partners/eda32b_357bb6dd1060452399f7d061e602e139~mv2.png', alt: 'Partner Logo 4' },
  { id: 5, src: '/assets/partners/eda32b_5e4143bb194143b28c1a86d6f704378amv2.png', alt: 'Partner Logo 5' },
  { id: 6, src: '/assets/partners/eda32b_6bc74a604c8f494cb925aed8c52a996e~mv2.png', alt: 'Partner Logo 6' },
  { id: 7, src: '/assets/partners/eda32b_8b472e0ed19945d695ff572c04592ef9~mv2.png', alt: 'Partner Logo 7' },
  { id: 8, src: '/assets/partners/eda32b_dc763c46755547228f07a3b28631bd45~mv2.png', alt: 'Partner Logo 8' },
]

export default function PartnerLogos() {
  const t = useTranslations()

  return (
    <section className="bg-white dark:bg-secondary-900 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-heading font-bold leading-8 text-secondary-900 dark:text-white mb-12">
          {t.partners.logos.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <Image
                className="max-h-32 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 border-0"
                src={logo.src}
                alt={logo.alt}
                width={280}
                height={140}
                priority
                style={{ border: 'none' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

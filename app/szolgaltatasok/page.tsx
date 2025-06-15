"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import Services from "@/components/services"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"

export default function ServicesPage() {
  const t = useTranslations()
  
  // Create structured data for services page
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t.services.meta.title,
    "description": t.services.meta.description,
    "provider": {
      "@type": "Organization",
      "name": "OkosIT",
      "url": "https://okosit.hu"
    },
    "areaServed": "Hungary",
    "serviceType": "IT Services"
  }

  return (
    <main>
      <StructuredDataHead data={structuredData} />
      <Hero 
        title={t.services.hero.title}
        subtitle={t.services.hero.subtitle}
        description={t.services.hero.description}
        animation="services"
      />
      <Services />
      <CTA />
    </main>
  )
}

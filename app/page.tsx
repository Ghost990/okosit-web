"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import Services from "@/components/services"
// import Testimonials from "@/components/testimonials"
import PartnerLogos from "@/components/partner-logos"
import CTA from "@/components/cta"
import { Metadata } from "next"

export default function HomePage() {
  const t = useTranslations()
  
  return (
    <main>
      <Hero isHomePage={true} />
      <Services />
      {/* Testimonials component temporarily removed */}
      <PartnerLogos />
      <CTA />
    </main>
  )
}

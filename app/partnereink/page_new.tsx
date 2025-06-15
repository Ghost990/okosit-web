"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import PartnerLogos from "@/components/partner-logos"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
import { CheckCircle, Award, Users, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function PartnersPage() {
  const t = useTranslations()
  
  // Create structured data for partners page
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.partners.meta.title,
    "description": t.partners.meta.description,
    "url": "https://okosit.hu/partnereink"
  }

  const partners = [
    {
      name: t.partners.companies.profimed.name,
      industry: t.partners.companies.profimed.industry,
      services: t.partners.companies.profimed.services,
      testimonial: t.partners.companies.profimed.testimonial,
      partnership: t.partners.companies.profimed.partnership,
      logo: 'P'
    },
    {
      name: t.partners.companies.visualPower.name,
      industry: t.partners.companies.visualPower.industry,
      services: t.partners.companies.visualPower.services,
      testimonial: t.partners.companies.visualPower.testimonial,
      partnership: t.partners.companies.visualPower.partnership,
      logo: 'VP'
    },
    {
      name: t.partners.companies.shopBuilder.name,
      industry: t.partners.companies.shopBuilder.industry,
      services: t.partners.companies.shopBuilder.services,
      testimonial: t.partners.companies.shopBuilder.testimonial,
      partnership: t.partners.companies.shopBuilder.partnership,
      logo: 'SE'
    },
    {
      name: t.partners.companies.techStart.name,
      industry: t.partners.companies.techStart.industry,
      services: t.partners.companies.techStart.services,
      testimonial: t.partners.companies.techStart.testimonial,
      partnership: t.partners.companies.techStart.partnership,
      logo: 'TS'
    },
    {
      name: t.partners.companies.greenOffice.name,
      industry: t.partners.companies.greenOffice.industry,
      services: t.partners.companies.greenOffice.services,
      testimonial: t.partners.companies.greenOffice.testimonial,
      partnership: t.partners.companies.greenOffice.partnership,
      logo: 'GO'
    },
    {
      name: t.partners.companies.dataFlow.name,
      industry: t.partners.companies.dataFlow.industry,
      services: t.partners.companies.dataFlow.services,
      testimonial: t.partners.companies.dataFlow.testimonial,
      partnership: t.partners.companies.dataFlow.partnership,
      logo: 'DF'
    }
  ]

  const industries = [
    { name: t.partners.industries.healthcare.name, count: t.partners.industries.healthcare.count, icon: t.partners.industries.healthcare.icon },
    { name: t.partners.industries.education.name, count: t.partners.industries.education.count, icon: t.partners.industries.education.icon },
    { name: t.partners.industries.commerce.name, count: t.partners.industries.commerce.count, icon: t.partners.industries.commerce.icon },
    { name: t.partners.industries.services.name, count: t.partners.industries.services.count, icon: t.partners.industries.services.icon },
    { name: t.partners.industries.manufacturing.name, count: t.partners.industries.manufacturing.count, icon: t.partners.industries.manufacturing.icon },
    { name: t.partners.industries.tech.name, count: t.partners.industries.tech.count, icon: t.partners.industries.tech.icon }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: t.partners.benefits.longTerm.title,
      description: t.partners.benefits.longTerm.description
    },
    {
      icon: Award,
      title: t.partners.benefits.quality.title,
      description: t.partners.benefits.quality.description
    },
    {
      icon: Users,
      title: t.partners.benefits.personal.title,
      description: t.partners.benefits.personal.description
    }
  ]
  
  return (
    <main>
      <StructuredDataHead data={structuredData} />
      
      <Hero 
        title={t.partners.hero.title}
        subtitle={t.partners.hero.subtitle}
        description={t.partners.hero.description}
        animation="partners"
      />

      {/* Simplified content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t.partners.industries.title}
          </h2>
        </div>
      </section>

      <CTA />
    </main>
  )
}

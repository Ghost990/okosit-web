"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import PartnerLogos from "@/components/partner-logos"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
import { CheckCircle, Award, Users, Star } from "lucide-react"

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
    { name: t.partners.industries.tech.name, count: t.partners.industries.tech.count, icon: t.partners.industries.tech.icon },
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

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{t.partners.stats.clients.value}</div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.clients.label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{t.partners.stats.returning.value}</div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.returning.label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{t.partners.stats.experience.value}</div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.experience.label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{t.partners.stats.support.value}</div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.support.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.partners.featured.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.featured.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.slice(0, 3).map((partner, index) => (
              <div key={index} className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">{partner.logo}</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary-900 dark:text-white mb-2">{partner.name}</h3>
                <div className="text-primary-600 dark:text-primary-400 text-sm mb-4">{partner.industry}</div>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">{partner.testimonial}</p>
                <div className="text-sm text-secondary-500 dark:text-secondary-500">{partner.partnership}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 shadow-md hover:shadow-lg">
              {t.partners.featured.viewAll}
            </button>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Industries */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.partners.industries.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.industries.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 flex items-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{industry.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white">{industry.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{industry.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.partners.benefits.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.benefits.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6">
                  <benefit.icon size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

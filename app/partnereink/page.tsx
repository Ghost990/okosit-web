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
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" } 
                }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.partners.stats.clients.value}
              </motion.div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.clients.label}</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" } 
                }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.partners.stats.returning.value}
              </motion.div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.returning.label}</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" } 
                }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t.partners.stats.experience.value}
              </motion.div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.experience.label}</div>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" } 
                }
              }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t.partners.stats.support.value}
              </motion.div>
              <div className="text-secondary-600 dark:text-secondary-400">{t.partners.stats.support.label}</div>
            </motion.div>
          </motion.div>
        </div>

      {/* Featured Partners */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.partners.featured.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.featured.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {partners.slice(0, 3).map((partner, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-primary-600 dark:bg-primary-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-6"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 } 
                  }}
                >
                  {partner.logo}
                </motion.div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{partner.name}</h3>
                <div className="text-sm text-primary-600 dark:text-primary-400 mb-4">{partner.industry}</div>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">{partner.services}</p>
                <div className="border-t border-secondary-200 dark:border-secondary-600 pt-6 mt-6">
                  <div className="flex items-start mb-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Star className="text-amber-400 mr-2 flex-shrink-0" size={20} />
                    </motion.div>
                    <p className="text-secondary-600 dark:text-secondary-400 italic">"{partner.testimonial}"</p>
                  </div>
                  <div className="text-sm text-secondary-500 dark:text-secondary-400">
                    {partner.partnership}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Industries */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.partners.industries.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.industries.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 flex items-center"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 } 
                  }}
                >
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{industry.icon}</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white">{industry.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{industry.count}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.partners.benefits.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.benefits.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.7, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6"
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "#4f46e5",
                    color: "#ffffff",
                    transition: { duration: 0.3 } 
                  }}
                >
                  <benefit.icon size={24} />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-secondary-900 dark:text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {benefit.title}
                </motion.h3>
                <p className="text-secondary-600 dark:text-secondary-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

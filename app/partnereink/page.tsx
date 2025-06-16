"use client";

import { useTranslations } from "@/hooks/useTranslations";
import Hero from "@/components/hero";
import PartnerLogos from "@/components/partner-logos";
import CTA from "@/components/cta";
import StructuredDataHead from "@/components/structured-data-head";
import { StructuredData } from "@/types";
import { CheckCircle, Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnersPage() {
  const t = useTranslations();

  // Create structured data for partners page
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t.partners.meta.title,
    description: t.partners.meta.description,
    url: "https://okosit.hu/partnereink",
  };

  const partners = [
    {
      name: t.partners.companies.profimed.name,
      industry: t.partners.companies.profimed.industry,
      services: t.partners.companies.profimed.services,
      testimonial: t.partners.companies.profimed.testimonial,
      partnership: t.partners.companies.profimed.partnership,
      logo: "P",
    },
    {
      name: t.partners.companies.visualPower.name,
      industry: t.partners.companies.visualPower.industry,
      services: t.partners.companies.visualPower.services,
      testimonial: t.partners.companies.visualPower.testimonial,
      partnership: t.partners.companies.visualPower.partnership,
      logo: "VP",
    },
    {
      name: t.partners.companies.shopBuilder.name,
      industry: t.partners.companies.shopBuilder.industry,
      services: t.partners.companies.shopBuilder.services,
      testimonial: t.partners.companies.shopBuilder.testimonial,
      partnership: t.partners.companies.shopBuilder.partnership,
      logo: "SE",
    },
    {
      name: t.partners.companies.techStart.name,
      industry: t.partners.companies.techStart.industry,
      services: t.partners.companies.techStart.services,
      testimonial: t.partners.companies.techStart.testimonial,
      partnership: t.partners.companies.techStart.partnership,
      logo: "TS",
    },
    {
      name: t.partners.companies.greenOffice.name,
      industry: t.partners.companies.greenOffice.industry,
      services: t.partners.companies.greenOffice.services,
      testimonial: t.partners.companies.greenOffice.testimonial,
      partnership: t.partners.companies.greenOffice.partnership,
      logo: "GO",
    },
    {
      name: t.partners.companies.dataFlow.name,
      industry: t.partners.companies.dataFlow.industry,
      services: t.partners.companies.dataFlow.services,
      testimonial: t.partners.companies.dataFlow.testimonial,
      partnership: t.partners.companies.dataFlow.partnership,
      logo: "DF",
    },
  ];

  const industries = [
    {
      name: "Nagykereskedelem",
      count: "10+ partner",
      icon: "N",
    },
    {
      name: "Logisztika",
      count: "8+ partner",
      icon: "L",
    },
    {
      name: t.partners.industries.education.name,
      count: "12+ partner",
      icon: t.partners.industries.education.icon,
    },
    {
      name: t.partners.industries.commerce.name,
      count: "15+ partner",
      icon: t.partners.industries.commerce.icon,
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: t.partners.benefits.longTerm.title,
      description: t.partners.benefits.longTerm.description,
    },
    {
      icon: Award,
      title: t.partners.benefits.quality.title,
      description: t.partners.benefits.quality.description,
    },
    {
      icon: Users,
      title: t.partners.benefits.personal.title,
      description: t.partners.benefits.personal.description,
    },
  ];

  return (
    <main>
      <StructuredDataHead data={structuredData} />

      <Hero
        title={t.partners.hero.title}
        subtitle={t.partners.hero.subtitle}
        description={t.partners.hero.description}
        animation="partners"
      />

      {/* Industries Section */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.partners.industries.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.partners.industries.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {industry.count}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Industry Information */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
              Iparági megoldásaink
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {t.partners.industries.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-secondary-100 dark:border-secondary-700"
                >
                  <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-secondary-100 dark:border-secondary-700">
                    <h5 className="font-medium text-secondary-900 dark:text-white mb-2">
                      Főbb szolgáltatásaink ebben az iparágban:
                    </h5>
                    <ul className="list-disc pl-5 text-secondary-600 dark:text-secondary-300 space-y-1">
                      {index === 0 && (
                        <>
                          <li>Raktárkezelő rendszerek</li>
                          <li>Beszállítói portál fejlesztés</li>
                          <li>Integrált vállalatirányítási rendszerek</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>Flottakövetési rendszerek</li>
                          <li>Szállítmányozási szoftverek</li>
                          <li>Útvonaltervező alkalmazások</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li>E-learning platformok</li>
                          <li>Adminisztrációs rendszerek</li>
                          <li>Digitális tantermi megoldások</li>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <li>Webshop fejlesztés és karbantartás</li>
                          <li>Készletkezelő rendszerek</li>
                          <li>Ügyfélkapcsolati rendszerek (CRM)</li>
                        </>
                      )}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-6 py-3 rounded-lg border border-primary-100 dark:border-primary-800"
              >
                <p className="font-medium">
                  {t.partners.cta.customSolutions}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

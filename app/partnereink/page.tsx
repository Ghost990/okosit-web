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
      name: t.partners.industries.healthcare.name,
      count: t.partners.industries.healthcare.count,
      icon: t.partners.industries.healthcare.icon,
    },
    {
      name: t.partners.industries.education.name,
      count: t.partners.industries.education.count,
      icon: t.partners.industries.education.icon,
    },
    {
      name: t.partners.industries.commerce.name,
      count: t.partners.industries.commerce.count,
      icon: t.partners.industries.commerce.icon,
    },
    {
      name: t.partners.industries.services.name,
      count: t.partners.industries.services.count,
      icon: t.partners.industries.services.icon,
    },
    {
      name: t.partners.industries.manufacturing.name,
      count: t.partners.industries.manufacturing.count,
      icon: t.partners.industries.manufacturing.icon,
    },
    {
      name: t.partners.industries.tech.name,
      count: t.partners.industries.tech.count,
      icon: t.partners.industries.tech.icon,
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
        </div>
      </section>

      <CTA />
    </main>
  );
}

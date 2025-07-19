"use client";

import { useTranslations } from "@/hooks/useTranslations";
import Hero from "@/components/hero";
import PartnerLogos from "@/components/partner-logos";
import CTA from "@/components/cta";
import StructuredDataHead from "@/components/structured-data-head";
import { StructuredData } from "@/types";
import { CheckCircle, Award, Users } from "lucide-react";
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

      {/* Partner Logos Section */}
      <PartnerLogos />

      <CTA />
    </main>
  );
}

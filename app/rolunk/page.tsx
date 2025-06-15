"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
import { Shield, Zap, DollarSign, Users, Award, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const t = useTranslations()
  
  // Create structured data for about page
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.about.meta.title,
    "description": t.about.meta.description,
    "url": "https://okosit.hu/rolunk"
  }

  const values = [
    {
      icon: Shield,
      title: t.about.values.reliability.title,
      description: t.about.values.reliability.description
    },
    {
      icon: Zap,
      title: t.about.values.flexibility.title,
      description: t.about.values.flexibility.description
    },
    {
      icon: DollarSign,
      title: t.about.values.transparency.title,
      description: t.about.values.transparency.description
    }
  ]

  const stats = [
    { icon: Users, value: t.about.stats.clients.value, label: t.about.stats.clients.label },
    { icon: Award, value: t.about.stats.availability.value, label: t.about.stats.availability.label },
    { icon: Clock, value: t.about.stats.support.value, label: t.about.stats.support.label },
    { icon: Shield, value: t.about.stats.experience.value, label: t.about.stats.experience.label },
  ]

  const team = [
    {
      name: t.about.team.founder.name,
      position: t.about.team.founder.position,
      description: t.about.team.founder.description,
      expertise: t.about.team.founder.expertise
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: t.about.timeline.founding.title,
      description: t.about.timeline.founding.description
    },
    {
      year: '2021',
      title: t.about.timeline.clients50.title,
      description: t.about.timeline.clients50.description
    },
    {
      year: '2022',
      title: t.about.timeline.expansion.title,
      description: t.about.timeline.expansion.description
    },
    {
      year: '2023',
      title: t.about.timeline.support.title,
      description: t.about.timeline.support.description
    },
    {
      year: '2024',
      title: t.about.timeline.clients200.title,
      description: t.about.timeline.clients200.description
    }
  ]
  
  return (
    <main>
      <StructuredDataHead data={structuredData} />
      
      <Hero 
        title={t.about.hero.title}
        subtitle={t.about.hero.subtitle}
        description={t.about.hero.description}
        animation="about"
      />

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.about.values.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.about.values.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary-50 dark:bg-secondary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-secondary-900 transition-all duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-secondary-600 dark:text-secondary-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.about.team.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.about.team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">{member.name}</h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.position}</div>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">{member.description}</p>
                  <div className="font-medium text-secondary-900 dark:text-white">{t.about.team.expertiseLabel}</div>
                  <div className="text-secondary-600 dark:text-secondary-400">{member.expertise}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.about.timeline.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.about.timeline.description}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="w-5/12"></div>
                  
                  {/* Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-secondary-800 z-10"></div>
                  
                  {/* Content */}
                  <div className="w-5/12 bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-lg">
                    <div className="text-primary-600 dark:text-primary-400 font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-secondary-600 dark:text-secondary-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight, Phone, Mail, Clock } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"

export default function CTA() {
  const t = useTranslations()
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-700 dark:via-primary-800 dark:to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white dark:text-white mb-6">
            {t.common.cta.title}
            <span className="block">{t.common.cta.subtitle}</span>
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto mb-8">
            {t.common.cta.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold text-white dark:text-white mb-6">
                {t.common.cta.whyChooseUs}
              </h3>
              <div className="space-y-4">
                {t.common.cta.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-300 dark:bg-primary-500 rounded-full"></div>
                    <span className="text-primary-100 dark:text-primary-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href={`tel:${t.contact.phone.value}`}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
              >
                <Phone className="mx-auto mb-3 text-primary-300 dark:text-primary-400 group-hover:text-white dark:group-hover:text-primary-200 transition-colors" size={24} />
                <div className="text-white dark:text-white font-medium">{t.contact.phone.label}</div>
                <div className="text-primary-200 dark:text-primary-300 text-sm">{t.contact.phone.value}</div>
              </a>
              
              <a
                href={`mailto:${t.contact.email.value}`}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="mx-auto mb-3 text-primary-300 dark:text-primary-400 group-hover:text-white dark:group-hover:text-primary-200 transition-colors" size={24} />
                <div className="text-white dark:text-white font-medium">{t.contact.email.label}</div>
                <div className="text-primary-200 dark:text-primary-300 text-sm">{t.contact.email.value}</div>
              </a>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <Clock className="mx-auto mb-3 text-primary-300 dark:text-primary-400" size={24} />
                <div className="text-white dark:text-white font-medium">{t.contact.hours.label}</div>
                <div className="text-primary-200 dark:text-primary-300 text-sm">{t.contact.hours.value}</div>
              </div>
            </div>
          </div>

          {/* CTA Form/Button */}
          <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.contact.form.title}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8">
              {t.contact.form.description}
            </p>
            
            <div className="space-y-4">
              <Link
                href="/kapcsolat"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                {t.contact.form.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <div className="text-center">
                <span className="text-secondary-500 dark:text-secondary-400 text-sm">{t.common.or}</span>
              </div>
              
              <a
                href={`tel:${t.contact.phone.value}`}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-white font-semibold rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-all duration-300"
              >
                <Phone className="mr-2" size={20} />
                {t.contact.callUs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

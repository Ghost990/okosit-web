"use client"

import Link from "next/link"
import { 
  Server, 
  Laptop, 
  Code, 
  ShoppingCart, 
  Settings, 
  Monitor,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import servicesData from "@/data/services.json"
import { useTranslations } from "@/hooks/useTranslations"

const iconMap = {
  server: Server,
  laptop: Laptop,
  code: Code,
  'shopping-cart': ShoppingCart,
  settings: Settings,
  monitor: Monitor,
}

export default function Services() {
  const { services } = servicesData
  const t = useTranslations()

  return (
    <section className="py-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 dark:bg-primary-700/20 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
            {t.services.badge}
          </div>
          <h2 className="heading-1 text-secondary-900 dark:text-white mb-6">
            {t.services.title}
            <span className="block text-primary-600 dark:text-primary-400">{t.services.subtitle}</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings
            const translationKey = service.id.replace(/-/g, "")
            
            return (
              <div
                key={service.id}
                className="group bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 dark:border-secondary-700 hover:border-primary-200 dark:hover:border-primary-600 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-white transition-all duration-300">
                  <IconComponent size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {t.services.categories[translationKey]}
                </h3>
                
                <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                  {t.services.descriptions[translationKey]}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="text-primary-500 dark:text-primary-400 flex-shrink-0" size={16} />
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">
                        {t.services.features[translationKey] && t.services.features[translationKey][featureIndex] 
                          ? t.services.features[translationKey][featureIndex] 
                          : feature}
                      </span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-secondary-500 dark:text-secondary-500 italic">
                      {t.services.moreFeatures.replace('{count}', (service.features.length - 3).toString())}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {t.services.prices[translationKey] || service.price}
                  </div>
                  <Link
                    href="/kapcsolat"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    {t.services.details}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-secondary-800 dark:to-secondary-900 rounded-2xl p-8 lg:p-12">
            <h3 className="heading-3 text-secondary-900 dark:text-white mb-4">
              {t.services.cta.title}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
              {t.services.cta.description}
            </p>
            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              {t.services.cta.button}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

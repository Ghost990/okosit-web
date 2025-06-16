"use client"

import { Star, Quote } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"

export default function Testimonials() {
  const t = useTranslations()
  
  const testimonials = [
    {
      name: t.testimonials.items[0].name,
      position: t.testimonials.items[0].position,
      text: t.testimonials.items[0].text,
      rating: 5,
      company: t.testimonials.items[0].company
    },
    {
      name: t.testimonials.items[1].name,
      position: t.testimonials.items[1].position,
      text: t.testimonials.items[1].text,
      rating: 5,
      company: t.testimonials.items[1].company
    },
    {
      name: t.testimonials.items[2].name,
      position: t.testimonials.items[2].position,
      text: t.testimonials.items[2].text,
      rating: 5,
      company: t.testimonials.items[2].company
    }
  ]

  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 dark:bg-primary-700/20 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
            {t.testimonials.badge}
          </div>
          <h2 className="heading-1 text-secondary-900 dark:text-white mb-6">
            {t.testimonials.title}
            <span className="block text-primary-600 dark:text-primary-400">{t.testimonials.subtitle}</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="text-primary-600 dark:text-primary-400 opacity-20" size={40} />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-secondary-100 dark:border-secondary-600 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-700/20 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                      {testimonial.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '200+', label: t.home.stats.clients },
            { value: '10+', label: t.home.stats.experience },
            { value: '24/7', label: t.home.stats.support },
            { value: '100%', label: t.home.stats.satisfaction },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-secondary-600 dark:text-secondary-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

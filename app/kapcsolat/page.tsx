"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Calendar,
  Send
} from "lucide-react"

export default function ContactPage() {
  const t = useTranslations()
  
  // Create structured data for contact page
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.contact.meta.title,
    "description": t.contact.meta.description,
    "url": "https://okosit.hu/kapcsolat"
  }

  const contactMethods = [
    {
      icon: Phone,
      title: t.contact.methods.phone.title,
      primary: t.contact.methods.phone.primary,
      secondary: t.contact.methods.phone.secondary,
      description: t.contact.methods.phone.description,
      action: 'tel:+36301234567'
    },
    {
      icon: Mail,
      title: t.contact.methods.email.title,
      primary: t.contact.methods.email.primary,
      secondary: t.contact.methods.email.secondary,
      description: t.contact.methods.email.description,
      action: `mailto:${t.contact.methods.email.primary}`
    },
    {
      icon: MapPin,
      title: t.contact.methods.location.title,
      primary: t.contact.methods.location.primary,
      secondary: t.contact.methods.location.secondary,
      description: t.contact.methods.location.description,
      action: null
    },
    {
      icon: MessageCircle,
      title: t.contact.methods.remote.title,
      primary: t.contact.methods.remote.primary,
      secondary: t.contact.methods.remote.secondary,
      description: t.contact.methods.remote.description,
      action: 'https://get.teamviewer.com/okosit'
    }
  ]

  const officeHours = [
    { day: t.contact.hours.weekdays, hours: t.contact.hours.weekdaysHours, type: t.contact.hours.weekdaysType },
    { day: t.contact.hours.saturday, hours: t.contact.hours.saturdayHours, type: t.contact.hours.saturdayType },
    { day: t.contact.hours.sunday, hours: t.contact.hours.sundayHours, type: t.contact.hours.sundayType },
  ]

  const responseTime = [
    { type: t.contact.response.emergency, time: t.contact.response.emergencyTime, icon: '🚨' },
    { type: t.contact.response.email, time: t.contact.response.emailTime, icon: '📧' },
    { type: t.contact.response.quote, time: t.contact.response.quoteTime, icon: '📋' },
    { type: t.contact.response.general, time: t.contact.response.generalTime, icon: '❓' },
  ]
  
  return (
    <main>
      <StructuredDataHead data={structuredData} />
      
      <Hero 
        title={t.contact.hero.title}
        subtitle={t.contact.hero.subtitle}
        description={t.contact.hero.description}
        animation="contact"
      />

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.contact.methods.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.contact.methods.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-secondary-700 hover:border-primary-200 dark:hover:border-primary-700 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300">
                  <method.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <div className="mb-4">
                  {method.action ? (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      {method.primary}
                    </a>
                  ) : (
                    <div className="text-primary-600 dark:text-primary-400 font-semibold">
                      {method.primary}
                    </div>
                  )}
                  <div className="text-sm text-secondary-500 dark:text-secondary-500 mt-1">
                    {method.secondary}
                  </div>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                {t.contact.hours.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {t.contact.hours.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {officeHours.map((item, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white dark:bg-secondary-700 rounded-xl shadow-sm">
                  <div className="mr-4">
                    <Clock className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900 dark:text-white">{item.day}</div>
                    <div className="text-primary-600 dark:text-primary-400">{item.hours}</div>
                    <div className="text-sm text-secondary-500 dark:text-secondary-500">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                {t.contact.response.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {t.contact.response.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {responseTime.map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-medium text-secondary-900 dark:text-white">{item.type}</div>
                  <div className="text-primary-600 dark:text-primary-400 font-bold">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.contact.form.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.contact.form.description}
            </p>
          </div>

          <div className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.firstName}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.lastName}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.company}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.email}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.phone}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.subject}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.contact.form.message}
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-secondary-600 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      {t.contact.form.privacy}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t.contact.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

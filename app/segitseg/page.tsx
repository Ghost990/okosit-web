"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
// No need for services.json import anymore
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageCircle, 
  Download,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info 
} from "lucide-react"
import { ObfuscatedPhone, ObfuscatedEmail } from "@/components/obfuscated-contact"

export default function SupportPage() {
  const t = useTranslations()
  
  // Create structured data for support page
  const structuredData: StructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.support.meta.title,
    "description": t.support.meta.description,
    "url": "https://okosit.hu/segitseg"
  }

  const supportOptions = [
    {
      icon: Phone,
      title: t.support.options.phone.title,
      description: t.support.options.phone.description,
      action: t.support.options.phone.action,
      link: null,
      phoneNumber: '+36703915000',
      availability: t.support.options.phone.availability
    },
    {
      icon: Mail,
      title: t.support.options.email.title,
      description: t.support.options.email.description,
      action: t.support.options.email.action,
      link: 'mailto:info@okosit.hu',
      availability: t.support.options.email.availability
    },
    {
      icon: MessageCircle,
      title: t.support.options.remote.title,
      description: t.support.options.remote.description,
      action: t.support.options.remote.action,
      link: 'https://startcontrol.com',
      availability: t.support.options.remote.availability
    }
  ]

  const faq = [
    {
      category: t.support.faq.categories.general.title,
      questions: [
        {
          question: t.support.faq.categories.general.questions.coverage.question,
          answer: t.support.faq.categories.general.questions.coverage.answer
        },
        {
          question: t.support.faq.categories.general.questions.response.question,
          answer: t.support.faq.categories.general.questions.response.answer
        },
        {
          question: t.support.faq.categories.general.questions.payment.question,
          answer: t.support.faq.categories.general.questions.payment.answer
        }
      ]
    },
    {
      category: t.support.faq.categories.technical.title,
      questions: [
        {
          question: t.support.faq.categories.technical.questions.computer.question,
          answer: t.support.faq.categories.technical.questions.computer.answer
        },
        {
          question: t.support.faq.categories.technical.questions.backup.question,
          answer: t.support.faq.categories.technical.questions.backup.answer
        },
        {
          question: t.support.faq.categories.technical.questions.virus.question,
          answer: t.support.faq.categories.technical.questions.virus.answer
        }
      ]
    },
    {
      category: t.support.faq.categories.services.title,
      questions: [
        {
          question: t.support.faq.categories.services.questions.website.question,
          answer: t.support.faq.categories.services.questions.website.answer
        },
        {
          question: t.support.faq.categories.services.questions.urgent.question,
          answer: t.support.faq.categories.services.questions.urgent.answer
        },
        {
          question: t.support.faq.categories.services.questions.warranty.question,
          answer: t.support.faq.categories.services.questions.warranty.answer
        }
      ]
    }
  ]

  const emergencySteps = [
    {
      icon: AlertTriangle,
      title: t.support.emergencySteps.steps.urgent.title,
      description: t.support.emergencySteps.steps.urgent.description,
      action: t.support.emergencySteps.steps.urgent.action
    },
    {
      icon: Info,
      title: t.support.emergencySteps.steps.describe.title,
      description: t.support.emergencySteps.steps.describe.description,
      action: t.support.emergencySteps.steps.describe.action
    },
    {
      icon: CheckCircle,
      title: t.support.emergencySteps.steps.solution.title,
      description: t.support.emergencySteps.steps.solution.description,
      action: t.support.emergencySteps.steps.solution.action
    }
  ]
  
  return (
    <main>
      <StructuredDataHead data={structuredData} />
      
      <Hero 
        title={t.support.hero.title}
        subtitle={t.support.hero.subtitle}
        description={t.support.hero.description}
        animation="support"
      />

      {/* Support Options */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.support.options.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.support.options.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6">
                  <option.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                  {option.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  {option.description}
                </p>
                <div className="text-sm text-secondary-500 dark:text-secondary-500 mb-6 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {option.availability}
                </div>
                <a 
                  href={option.link} 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
                >
                  {option.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 rounded-full text-sm font-medium mb-6">
              {t.support.emergencySteps.badge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.support.emergencySteps.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.support.emergencySteps.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencySteps.map((step, index) => (
              <div key={index} className="bg-white dark:bg-secondary-700 rounded-xl p-8 text-center relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  {step.description}
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-medium">
                  {step.action}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 shadow-md hover:shadow-lg">
              <ObfuscatedPhone
                phone="+36703915000"
                className="mr-2"
              />
              <span>{t.support.emergencySteps.callToAction}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.support.faq.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.support.faq.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {faq.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6 pb-4 border-b border-secondary-200 dark:border-secondary-700">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.questions.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="text-lg font-medium text-secondary-900 dark:text-white mb-2 flex items-start">
                        <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-1" />
                        <span>{item.question}</span>
                      </h4>
                      <p className="text-secondary-600 dark:text-secondary-400 pl-7">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
              {t.support.resources.title}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-3xl mx-auto">
              {t.support.resources.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-secondary-300 dark:border-secondary-700 text-base font-medium rounded-md text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.support.resources.userGuide}
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-secondary-300 dark:border-secondary-700 text-base font-medium rounded-md text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.support.resources.troubleshooting}
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 border border-secondary-300 dark:border-secondary-700 text-base font-medium rounded-md text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.support.resources.securityGuide}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.support.contactForm.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.support.contactForm.description}
            </p>
          </div>

          <div className="bg-white dark:bg-secondary-700 rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.support.contactForm.firstName}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-2 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.support.contactForm.lastName}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-2 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.support.contactForm.email}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-2 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.support.contactForm.subject}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-2 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300">
                  {t.support.contactForm.message}
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-2 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
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
                      {t.support.contactForm.privacy}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  {t.support.contactForm.submit}
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

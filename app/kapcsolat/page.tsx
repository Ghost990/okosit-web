"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
import { motion } from "framer-motion"
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
    { day: t.contact.hours.sunday, hours: t.contact.hours.sundayHours, type: t.contact.hours.sundayType }
  ]

  const responseTime = [
    { type: t.contact.response.emergency, time: t.contact.response.emergencyTime, icon: '🚨' },
    { type: t.contact.response.email, time: t.contact.response.emailTime, icon: '📧' },
    { type: t.contact.response.quote, time: t.contact.response.quoteTime, icon: '📋' },
    { type: t.contact.response.general, time: t.contact.response.generalTime, icon: '❓' }
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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              {t.contact.methods.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.contact.methods.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
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
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-secondary-700 hover:border-primary-200 dark:hover:border-primary-700 text-center group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={index % 2 === 0 ? 
                    { y: [0, -5, 0] } : 
                    { rotate: [0, 5, 0] }
                  }
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 1 + index * 0.5 
                  }}
                >
                  <method.icon size={32} />
                </motion.div>
                <motion.h3 
                  className="text-lg font-bold text-secondary-900 dark:text-white mb-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.2 } }
                  }}
                >
                  {method.title}
                </motion.h3>
                <motion.div 
                  className="mb-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.3 } }
                  }}
                >
                  {method.action ? (
                    <motion.a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {method.primary}
                    </motion.a>
                  ) : (
                    <div className="text-primary-600 dark:text-primary-400 font-semibold">
                      {method.primary}
                    </div>
                  )}
                  <motion.div 
                    className="text-sm text-secondary-500 dark:text-secondary-500 mt-1"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 0.4 } }
                    }}
                  >
                    {method.secondary}
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-secondary-600 dark:text-secondary-400 text-sm"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.5 } }
                  }}
                >
                  {method.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Office Hours */}
          <motion.div 
            className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                {t.contact.hours.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {t.contact.hours.description}
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {officeHours.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-center p-4 bg-white dark:bg-secondary-700 rounded-xl shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5, 
                        ease: "easeOut" 
                      } 
                    }
                  }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="mr-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                    }}
                  >
                    <motion.div 
                      className="font-bold text-secondary-900 dark:text-white"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.3 } }
                      }}
                    >
                      {item.day}
                    </motion.div>
                    <motion.div 
                      className="text-primary-600 dark:text-primary-400"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.4 } }
                      }}
                    >
                      {item.hours}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-secondary-500 dark:text-secondary-500"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.5 } }
                      }}
                    >
                      {item.type}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Response Time */}
          <motion.div 
            className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-2xl font-bold text-secondary-900 dark:text-white mb-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {t.contact.response.title}
              </motion.h3>
              <motion.p 
                className="text-secondary-600 dark:text-secondary-400"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t.contact.response.description}
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {responseTime.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        duration: 0.5, 
                        ease: "easeOut" 
                      } 
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="text-3xl mb-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 1 + index * 0.5,
                      ease: "easeInOut" 
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.div 
                    className="font-medium text-secondary-900 dark:text-white"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
                    }}
                  >
                    {item.type}
                  </motion.div>
                  <motion.div 
                    className="text-primary-600 dark:text-primary-400 font-bold"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 0.3 } }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.time}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t.contact.form.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.contact.form.description}
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-secondary-700 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <motion.form 
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <motion.label 
                  htmlFor="firstName" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.firstName}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                }}
              >
                <motion.label 
                  htmlFor="lastName" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.lastName}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                }}
              >
                <motion.label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.company}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.input
                    type="text"
                    name="company"
                    id="company"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
                }}
              >
                <motion.label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.email}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
                }}
              >
                <motion.label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.phone}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
                }}
              >
                <motion.label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.subject}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.input
                    type="text"
                    name="subject"
                    id="subject"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                }}
              >
                <motion.label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  {t.contact.form.message}
                </motion.label>
                <motion.div 
                  className="mt-1"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                  }}
                >
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }
                }}
              >
                <motion.div 
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.1 } }
                  }}
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-secondary-600 rounded"
                      whileFocus={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div 
                    className="ml-3"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                    }}
                  >
                    <motion.p 
                      className="text-sm text-secondary-600 dark:text-secondary-400"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.3 } }
                      }}
                    >
                      {t.contact.form.privacy}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="sm:col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }
                }}
              >
                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="mr-2 h-5 w-5 inline-flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Send className="h-5 w-5" />
                  </motion.span>
                  {t.contact.form.submit}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

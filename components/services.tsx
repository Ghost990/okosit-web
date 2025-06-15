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
import { motion } from "framer-motion"

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
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-white dark:bg-secondary-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 dark:bg-primary-700/20 dark:text-primary-300 rounded-full text-sm font-medium mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            {t.services.badge}
          </motion.div>
          <motion.h2 
            className="heading-1 text-secondary-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            {t.services.title}
            <motion.span 
              className="block text-primary-600 dark:text-primary-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t.services.subtitle}
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t.services.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings
            const translationKey = service.id.replace(/-/g, "")
            
            return (
              <motion.div
                key={service.id}
                className="group bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 dark:border-secondary-700 hover:border-primary-200 dark:hover:border-primary-600 transform hover:-translate-y-2"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent size={32} />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-heading font-bold text-secondary-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {t.services.categories[translationKey]}
                </motion.h3>
                
                <motion.p 
                  className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {t.services.descriptions[translationKey]}
                </motion.p>

                {/* Features */}
                <motion.div 
                  className="space-y-2 mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4 + index * 0.1
                      }
                    }
                  }}
                >
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center space-x-2"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                        <CheckCircle className="text-primary-500 dark:text-primary-400 flex-shrink-0" size={16} />
                      </motion.div>
                      <span className="text-sm text-secondary-600 dark:text-secondary-400">
                        {t.services.features[translationKey] && t.services.features[translationKey][featureIndex] 
                          ? t.services.features[translationKey][featureIndex] 
                          : feature}
                      </span>
                    </motion.div>
                  ))}
                  {service.features.length > 3 && (
                    <motion.div 
                      className="text-sm text-secondary-500 dark:text-secondary-500 italic"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                    >
                      {t.services.moreFeatures.replace('{count}', (service.features.length - 3).toString())}
                    </motion.div>
                  )}
                </motion.div>

                {/* Price */}
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="text-lg font-bold text-primary-600 dark:text-primary-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t.services.prices[translationKey] || service.price}
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/kapcsolat"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      {t.services.details}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                      >
                        <ArrowRight size={16} className="ml-1" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-secondary-800 dark:to-secondary-900 rounded-2xl p-8 lg:p-12"
            initial={{ y: 50, scale: 0.95 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
          >
            <motion.h3 
              className="heading-3 text-secondary-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t.services.cta.title}
            </motion.h3>
            <motion.p 
              className="text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t.services.cta.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/kapcsolat"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                {t.services.cta.button}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                  className="ml-2"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

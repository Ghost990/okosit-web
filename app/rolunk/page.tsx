"use client"

import { useTranslations } from "@/hooks/useTranslations"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import StructuredDataHead from "@/components/structured-data-head"
import { StructuredData } from "@/types"
import { Shield, Zap, DollarSign, Users, Award, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.about.values.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.about.values.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-secondary-50 dark:bg-secondary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl mb-6 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-secondary-900 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 } 
                  }}
                >
                  <value.icon size={32} />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-secondary-900 dark:text-white mb-4"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.2 } }
                  }}
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  className="text-secondary-600 dark:text-secondary-400 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.3 } }
                  }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <stat.icon size={24} />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-secondary-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-secondary-600 dark:text-secondary-400"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.3 } }
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.about.team.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.about.team.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-1 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-4xl font-bold"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(99, 102, 241, 0)", "0 0 0 10px rgba(99, 102, 241, 0.2)", "0 0 0 0 rgba(99, 102, 241, 0)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {member.name.charAt(0)}
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h3 
                    className="text-2xl font-bold text-secondary-900 dark:text-white mb-2"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
                    }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.div 
                    className="text-primary-600 dark:text-primary-400 font-medium mb-4"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { delay: 0.3 } }
                    }}
                  >
                    {member.position}
                  </motion.div>
                  <motion.p 
                    className="text-secondary-600 dark:text-secondary-400 mb-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 0.4 } }
                    }}
                  >
                    {member.description}
                  </motion.p>
                  <motion.div 
                    className="font-medium text-secondary-900 dark:text-white"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 0.5 } }
                    }}
                  >
                    {t.about.team.expertiseLabel}
                  </motion.div>
                  <motion.div 
                    className="text-secondary-600 dark:text-secondary-400"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: 0.6 } }
                    }}
                  >
                    {member.expertise}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="heading-2 text-secondary-900 dark:text-white mb-6">
              {t.about.timeline.title}
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              {t.about.timeline.description}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            ></motion.div>

            {/* Timeline items */}
            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.4
                  }
                }
              }}
            >
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  {/* Content */}
                  <div className="w-5/12"></div>
                  
                  {/* Circle */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 border-4 border-white dark:border-secondary-800 z-10"
                    initial={{ scale: 0 }}
                    variants={{
                      hidden: { scale: 0 },
                      visible: { 
                        scale: 1,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 10, 
                          delay: 0.2 * index 
                        } 
                      }
                    }}
                    whileHover={{ scale: 1.3 }}
                  ></motion.div>
                  
                  {/* Content */}
                  <motion.div 
                    className="w-5/12 bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-lg"
                    variants={{
                      hidden: { 
                        x: index % 2 === 0 ? 50 : -50, 
                        opacity: 0 
                      },
                      visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: { 
                          duration: 0.6, 
                          ease: "easeOut",
                          delay: 0.3 + (0.1 * index)
                        } 
                      }
                    }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="text-primary-600 dark:text-primary-400 font-bold text-xl mb-2"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.4 + (0.1 * index) } }
                      }}
                    >
                      {milestone.year}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-secondary-900 dark:text-white mb-2"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.5 + (0.1 * index) } }
                      }}
                    >
                      {milestone.title}
                    </motion.h3>
                    <motion.p 
                      className="text-secondary-600 dark:text-secondary-400"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { delay: 0.6 + (0.1 * index) } }
                      }}
                    >
                      {milestone.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

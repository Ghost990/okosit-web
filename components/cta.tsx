"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { motion, Variants } from "framer-motion";

export default function CTA() {
  const t = useTranslations();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const patternVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const benefitVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-700 dark:via-primary-800 dark:to-primary-900 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        {/* Background Pattern */}
        <motion.div
          variants={patternVariants}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative z-10">
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="heading-2 text-white"
              >
                {t.common.cta.title}{" "}
                <motion.span className="text-primary-300 dark:text-primary-400">
                  {t.common.cta.highlight}
                </motion.span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-primary-100 dark:text-primary-200 text-lg max-w-lg"
              >
                {t.common.cta.description}
              </motion.p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {t.common.cta.contactInfo}
                  </h3>
                  <div className="space-y-4">
                    {t.common.cta.benefits.map((benefit, index) => (
                      <motion.div
                        custom={index}
                        variants={benefitVariants}
                        key={index}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-300 dark:bg-primary-500 rounded-full" />
                        <span className="text-primary-100 dark:text-primary-200">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Contact Methods */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 gap-4"
                >
                  <a
                    href={`tel:${t.contact.phone.value}`}
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div>
                      <Phone
                        className="mx-auto mb-3 text-primary-300 dark:text-primary-400 group-hover:text-white dark:group-hover:text-primary-200 transition-colors"
                        size={24}
                      />
                    </div>
                    <div className="text-white dark:text-white font-medium">
                      {t.contact.phone.label}
                    </div>
                    <div className="text-primary-200 dark:text-primary-300 text-sm">
                      {t.contact.phone.value}
                    </div>
                  </a>

                  <a
                    href={`mailto:${t.contact.email.value}`}
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div>
                      <Mail
                        className="mx-auto mb-3 text-primary-300 dark:text-primary-400 group-hover:text-white dark:group-hover:text-primary-200 transition-colors"
                        size={24}
                      />
                    </div>
                    <div className="text-white dark:text-white font-medium">
                      {t.contact.email.label}
                    </div>
                    <div className="text-primary-200 dark:text-primary-300 text-sm">
                      info@okosit.hu
                    </div>
                  </a>

                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div>
                      <Clock
                        className="mx-auto mb-3 text-primary-300 dark:text-primary-400"
                        size={24}
                      />
                    </div>
                    <div className="text-white dark:text-white font-medium">
                      {t.contact.hours.weekdays}
                    </div>
                    <div className="text-primary-200 dark:text-primary-300 text-sm">
                      {t.contact.hours.weekdaysHours}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Form/Button */}
          <motion.div
            variants={cardVariants}
            className="bg-white dark:bg-secondary-800 rounded-2xl p-8 lg:p-12 shadow-2xl"
          >
            <h3 className="heading-3 text-secondary-900 dark:text-white mb-6">
              {t.contact.form.title}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400 mb-8">
              {t.contact.form.description}
            </p>

            <div className="space-y-4">
              <div>
                <Link
                  href="/kapcsolat"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <span>Kapcsolatfelvételi űrlap</span>
                  <div className="ml-2">
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <span className="text-secondary-500 dark:text-secondary-400 text-sm">
                  {t.common.or}
                </span>
              </div>

              <div>
                <a
                  href={`tel:${t.contact.phone.value}`}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-white font-semibold rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-all duration-300"
                >
                  <div className="mr-2">
                    <Phone size={20} />
                  </div>
                  {t.contact.callUs}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

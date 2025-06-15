"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import { ArrowRight, CheckCircle, Zap, Shield, Users } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  animation?: string;
  isHomePage?: boolean;
}

export default function Hero({ title, subtitle, description, animation = 'cybersec', isHomePage = false }: HeroProps) {
  const t = useTranslations();
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Dynamically import the animation data based on the animation prop
    import(`/public/assets/${animation}.json`)
      .then((data) => {
        setAnimationData(data.default);
      })
      .catch((error) => {
        console.error(`Failed to load animation ${animation}:`, error);
      });
  }, [animation]);

  const features = [
    t.services.categories.systemOperation,
    t.services.categories.pcRepair,
    t.services.categories.webDevelopment,
  ];

  const stats = [
    { icon: Users, value: "200+", label: t.home.stats.clients },
    { icon: Zap, value: "24/7", label: t.home.stats.support },
    { icon: Shield, value: "99.9%", label: t.home.stats.availability },
  ];

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
      className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-800 dark:via-secondary-900 dark:to-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="z-10 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 dark:bg-primary-700/20 dark:text-primary-300 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Zap size={16} className="mr-2" />
              {t.home.hero.badge}
            </motion.div>

            <motion.h1 
              className="heading-1 text-secondary-900 dark:text-white mb-6 leading-tight font-bold"
              variants={itemVariants}
            >
              {title || t.home.hero.title}{" "}
              <motion.span 
                className="text-primary-600 dark:text-primary-400 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {subtitle || t.home.hero.highlight}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M2 10C50 2 100 2 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary-300 dark:text-primary-700"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.svg>
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {description || t.home.hero.description}
            </motion.p>

            {/* Features - only shown on homepage */}
            {isHomePage && (
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-4 uppercase tracking-wide"
                  variants={itemVariants}
                >
                  {t.home.hero.featuresTitle}
                </motion.p>
                <motion.div 
                  className="space-y-3"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                      }
                    }
                  }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle
                          className="text-primary-600 dark:text-primary-400 flex-shrink-0"
                          size={20}
                        />
                      </motion.div>
                      <span className="text-secondary-700 dark:text-secondary-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/kapcsolat"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  {t.home.hero.primaryCTA}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/szolgaltatasok"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-300 text-secondary-700 dark:border-secondary-700 dark:text-secondary-300 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-all duration-300"
                >
                  {t.home.hero.secondaryCTA}
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats - only shown on homepage */}
            {isHomePage && (
              <motion.div 
                className="grid grid-cols-3 gap-6"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.6
                    }
                  }
                }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400 rounded-lg mb-2"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <stat.icon size={24} />
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold text-secondary-900 dark:text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-secondary-600 dark:text-secondary-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {animationData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full max-w-lg h-auto"
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

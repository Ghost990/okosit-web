"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "@/hooks/useTranslations";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ObfuscatedPhone, ObfuscatedEmail } from "./obfuscated-contact";

// We'll define the navigation inside the component to access translations

export default function Footer() {
  const { theme } = useTheme();
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  
  // Only show the logo after client-side hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navigation = {
    main: [
      { name: t.navigation.home, href: "/" },
      { name: t.navigation.services, href: "/szolgaltatasok" },
      { name: t.navigation.about, href: "/rolunk" },
      { name: t.navigation.partners, href: "/partnereink" },
      { name: t.navigation.help, href: "/segitseg" },
      { name: t.navigation.contact, href: "/kapcsolat" },
    ],
    services: [
      {
        name: t.services.categories.systemOperation,
        href: "/szolgaltatasok#infrastruktura",
      },
      {
        name: t.services.categories.webDevelopment,
        href: "/szolgaltatasok#felho",
      },
      {
        name: t.services.categories.itImplementation,
        href: "/szolgaltatasok#kiberbiztonsag",
      },
      {
        name: t.services.categories.pcRepair,
        href: "/szolgaltatasok#tanacsadas",
      },
      {
        name: t.services.categories.deviceRental,
        href: "/szolgaltatasok#tamogatas",
      },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://facebook.com/okosit",
        icon: Facebook,
      },
      {
        name: "Instagram",
        href: "https://instagram.com/okosit",
        icon: Instagram,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/okosit",
        icon: Linkedin,
      },
    ],
  };

  return (
    <motion.footer
      className="bg-white dark:bg-secondary-900"
      aria-labelledby="footer-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom py-12 lg:py-16">
        <motion.div
          className="xl:grid xl:grid-cols-3 xl:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link href="/">
                {mounted ? (
                  theme === "dark" ? (
                    <Image
                      src="/assets/logo_dark.png"
                      alt="OkosIT Logo"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  ) : (
                    <Image
                      src="/assets/logo.png"
                      alt="OkosIT Logo"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  )
                ) : (
                  // Placeholder during server-side rendering to prevent hydration mismatch
                  <div className="h-10 w-[120px]" />
                )}
              </Link>
            </motion.div>
            <motion.p
              className="text-sm leading-6 text-secondary-600 dark:text-secondary-400"
              variants={itemVariants}
            >
              {t.common.tagline} - {t.common.description}
            </motion.p>
            <motion.div
              className="flex space-x-6"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
            variants={itemVariants}
          >
            <motion.div
              className="md:grid md:grid-cols-2 md:gap-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <motion.h3
                  className="text-sm font-semibold leading-6 text-secondary-900 dark:text-white"
                  variants={itemVariants}
                >
                  {t.footer.quickLinks}
                </motion.h3>
                <motion.ul
                  role="list"
                  className="mt-6 space-y-4"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {navigation.main.map((item) => (
                    <motion.li key={item.name} variants={listItemVariants}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div className="mt-10 md:mt-0" variants={itemVariants}>
                <motion.h3
                  className="text-sm font-semibold leading-6 text-secondary-900 dark:text-white"
                  variants={itemVariants}
                >
                  {t.footer.services}
                </motion.h3>
                <motion.ul
                  role="list"
                  className="mt-6 space-y-4"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {navigation.services.map((item) => (
                    <motion.li key={item.name} variants={listItemVariants}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Link
                          href={item.href}
                          className="text-sm leading-6 text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-sm font-semibold leading-6 text-secondary-900 dark:text-white"
                variants={itemVariants}
              >
                {t.footer.contactInfo}
              </motion.h3>
              <motion.ul
                role="list"
                className="mt-6 space-y-4 flex flex-col"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.4,
                    },
                  },
                }}
              >
                <motion.li
                  className="flex"
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                  </motion.div>
                  <motion.div className="ml-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    1043 Budapest, Berda József utca 12.
                  </motion.div>
                </motion.li>
                <motion.li
                  className="flex"
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 5,
                      duration: 0.5,
                    }}
                  >
                    <Phone className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                  </motion.div>
                  <motion.div className="ml-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    <ObfuscatedPhone
                      phone="+36703915000"
                      className="hover:text-secondary-900 dark:hover:text-white"
                    />
                  </motion.div>
                </motion.li>
                <motion.li
                  className="flex"
                  variants={listItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    animate={{ y: [0, -2, 0, 2, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 4,
                      duration: 1,
                    }}
                  >
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                  </motion.div>
                  <motion.div className="ml-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    <motion.a
                      href="mailto:info@okosit.hu"
                      className="hover:text-secondary-900 dark:hover:text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      info@okosit.hu
                    </motion.a>
                  </motion.div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 border-t border-secondary-200 dark:border-secondary-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.p
            className="text-xs leading-5 text-secondary-500 dark:text-secondary-400"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {t.footer.copyright(currentYear.toString())}
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

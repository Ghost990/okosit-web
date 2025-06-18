"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./theme-switcher"
import LanguageSwitcher from "./language-switcher";
import { useTheme } from "next-themes";
import { useTranslations } from "@/hooks/useTranslations";
import { motion, Variants } from "framer-motion";
import { useLocalizedPath } from "@/utils/navigation";
import { LocaleLink } from "@/utils/locale-links";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();
  const getLocalizedPath = useLocalizedPath();
  
  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const navigation = [
    { name: t.navigation.home, href: "/" },
    { name: t.navigation.services, href: "/szolgaltatasok" },
    { name: t.navigation.about, href: "/rolunk" },
    { name: t.navigation.partners, href: "/partnereink" },
    { name: t.navigation.help, href: "/segitseg" },
    { name: t.navigation.contact, href: "/kapcsolat" },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="bg-white shadow-sm dark:bg-secondary-900 dark:border-b dark:border-secondary-800"
    >
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-6">
        <motion.div variants={logoVariants} className="flex xl:flex-0">
          <LocaleLink href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">OkosIT</span>
            {!mounted ? (
              // During SSR or before hydration, use a placeholder or default logo
              <div className="h-10 w-[120px] bg-transparent" />
            ) : resolvedTheme === "dark" ? (
              <Image
                src="/assets/logo_dark.png"
                alt="OkosIT Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              />
            ) : (
             <Image
                src="/assets/logo.png"
                alt="OkosIT Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              />
            )}
          </LocaleLink>
        </motion.div>

        <motion.div variants={itemVariants} className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden xl:flex xl:gap-x-6 xl:ml-6"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.05, duration: 0.3 },
                }),
              }}
            >
              <LocaleLink
                href={item.href}
                className={`${pathname === item.href || pathname === getLocalizedPath(item.href) ? "text-primary-600 dark:text-primary-400" : "text-secondary-600 hover:text-secondary-900 dark:text-secondary-300 dark:hover:text-white"} px-3 py-2 text-sm font-medium transition-colors`}
              >
                {item.name}
              </LocaleLink>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hidden xl:flex xl:flex-1 xl:justify-end xl:gap-x-4"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="ml-2">
              <ThemeSwitcher />
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/kapcsolat"
              className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-700 dark:hover:bg-primary-800"
            >
              {t.header.freeConsultation}
            </Link>
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-secondary-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">OkosIT</span>
                {!mounted ? (
                  // During SSR or before hydration, use a placeholder or default logo
                  <div className="h-10 w-[120px] bg-transparent" />
                ) : resolvedTheme === "dark" ? (
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
                )}
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-100 dark:divide-secondary-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <LocaleLink
                      key={item.href} // Added key prop
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium ${
                        pathname === item.href || pathname === getLocalizedPath(item.href)
                          ? "text-primary-600 bg-primary-50 dark:bg-secondary-800 dark:text-primary-400"
                          : "text-secondary-700 hover:bg-secondary-50 dark:text-secondary-200 dark:hover:bg-secondary-800"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </LocaleLink>
                  ))}
                </div>
                <div className="py-6 flex flex-col space-y-4">
                  <div className="flex items-center">
                    <span className="text-secondary-700 dark:text-secondary-300 mr-2">
                      {t.common.theme.theme}:
                    </span>
                    <ThemeSwitcher />
                  </div>
                  <div className="flex items-center">
                    <span className="text-secondary-700 dark:text-secondary-300 mr-2">
                      {t.common.language?.language || "Language"}:
                    </span>
                    <LanguageSwitcher />
                  </div>
                  <Link
                    href="/kapcsolat"
                    className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 text-center dark:bg-primary-700 dark:hover:bg-primary-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.header.freeConsultation}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}

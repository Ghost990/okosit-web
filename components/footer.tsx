"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "@/hooks/useTranslations";

// We'll define the navigation inside the component to access translations

export default function Footer() {
  const { theme } = useTheme();
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

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
    <footer
      className="bg-white dark:bg-secondary-900"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-custom py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              {theme === "dark" ? (
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
            <p className="text-sm leading-6 text-secondary-600 dark:text-secondary-400">
              {t.common.tagline} - {t.common.description}
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-500 hover:text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-secondary-900 dark:text-white">
                  {t.footer.quickLinks}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-secondary-900 dark:text-white">
                  {t.footer.services}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-secondary-900 dark:text-white">
                {t.footer.contactInfo}
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    1234 Budapest, Példa utca 123.
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    <a
                      href="tel:+36123456789"
                      className="hover:text-secondary-900 dark:hover:text-white"
                    >
                      +36 12 345 6789
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-600 dark:text-primary-500" />
                  </div>
                  <div className="ml-3 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
                    <a
                      href="mailto:info@okosit.hu"
                      className="hover:text-secondary-900 dark:hover:text-white"
                    >
                      info@okosit.hu
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-secondary-200 dark:border-secondary-800 pt-8">
          <p className="text-xs leading-5 text-secondary-500 dark:text-secondary-400">
            {t.footer.copyright(currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTranslations } from "@/hooks/useTranslations"

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(e: MouseEvent) {
      setIsOpen(false)
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const toggleLanguage = (newLocale: "hu" | "en") => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="p-2 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors flex items-center"
        aria-label="Change language"
      >
        <Globe size={20} className="text-secondary-900 dark:text-white" />
        <span className="ml-1 text-sm font-medium text-secondary-900 dark:text-white uppercase">
          {locale}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-28 bg-white dark:bg-secondary-800 rounded-md shadow-lg z-50 py-1">
          <button
            onClick={() => toggleLanguage("hu")}
            className={`w-full text-left px-4 py-2 text-sm ${
              locale === "hu"
                ? "bg-primary-50 text-primary-600 dark:bg-secondary-700 dark:text-primary-400"
                : "text-secondary-700 hover:bg-secondary-50 dark:text-white dark:hover:bg-secondary-700"
            }`}
          >
            Magyar
          </button>
          <button
            onClick={() => toggleLanguage("en")}
            className={`w-full text-left px-4 py-2 text-sm ${
              locale === "en"
                ? "bg-primary-50 text-primary-600 dark:bg-secondary-700 dark:text-primary-400"
                : "text-secondary-700 hover:bg-secondary-50 dark:text-white dark:hover:bg-secondary-700"
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}

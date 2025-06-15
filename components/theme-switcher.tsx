"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslations } from "@/hooks/useTranslations"

export default function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations()

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
      aria-label={resolvedTheme === "dark" ? t.common.theme.switchToLight : t.common.theme.switchToDark}
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-secondary-900" />
      )}
    </button>
  )
}

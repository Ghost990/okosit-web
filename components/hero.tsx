"use client"

import Link from "next/link"
import Lottie from "lottie-react"
import { ArrowRight, CheckCircle, Zap, Shield, Users } from "lucide-react"
import { useTranslations } from "@/hooks/useTranslations"
import { useEffect, useState } from "react"

export default function Hero() {
  const t = useTranslations()
  const [animation, setAnimation] = useState<any>(null)

  useEffect(() => {
    // Dynamically import the animation data
    import("@/public/assets/cybersec.json").then((animationData) => {
      setAnimation(animationData.default)
    }).catch(error => {
      console.error("Failed to load animation:", error)
    })
  }, [])

  const features = [
    t.services.categories.systemOperation,
    t.services.categories.pcRepair,
    t.services.categories.webDevelopment
  ]

  const stats = [
    { icon: Users, value: '200+', label: t.home.stats.clients },
    { icon: Zap, value: '24/7', label: t.home.stats.support },
    { icon: Shield, value: '99.9%', label: t.home.stats.availability },
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-800 dark:via-secondary-900 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in z-10 relative">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 dark:bg-primary-700/20 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
              <Zap size={16} className="mr-2" />
              {t.home.hero.badge}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-montserrat font-extrabold text-secondary-900 dark:text-white mb-6 leading-tight">
              {t.home.hero.title}{' '}
              <span className="text-primary-600 dark:text-primary-400 relative">
                {t.home.hero.highlight}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 100 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-300 dark:text-primary-700"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8 leading-relaxed">
              {t.home.hero.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-4 uppercase tracking-wide">
                {t.home.hero.featuresTitle}
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={20} />
                    <span className="text-secondary-700 dark:text-secondary-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/kapcsolat"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                {t.home.hero.primaryCTA}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/szolgaltatasok"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-300 text-secondary-700 dark:border-secondary-700 dark:text-secondary-300 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-all duration-300"
              >
                {t.home.hero.secondaryCTA}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 dark:bg-primary-700/20 dark:text-primary-400 rounded-lg mb-2">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-secondary-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in lg:animate-slide-up flex items-center justify-center">
            {animation && (
              <Lottie animationData={animation} loop={true} className="w-full max-w-lg h-auto" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { useTranslations } from "@/hooks/useTranslations"
import { motion, Variants } from "framer-motion"
import "@/styles/partner-logos.css"

const logos = [
  // Partner logos from /public/assets/partners
  { id: 1, src: '/assets/partners/eda32b_15f62d1e948e4477adca0370694fb817mv2.png', alt: 'Partner Logo 1' },
  { id: 2, src: '/assets/partners/eda32b_2f7bf86b142445d08a343e323946e114~mv2.png', alt: 'Partner Logo 2' },
  { id: 3, src: '/assets/partners/eda32b_34870679e1364b2494cf95bfd39afb15~mv2.png', alt: 'Partner Logo 3' },
  { id: 4, src: '/assets/partners/eda32b_357bb6dd1060452399f7d061e602e139~mv2.png', alt: 'Partner Logo 4' },
  { id: 5, src: '/assets/partners/eda32b_5e4143bb194143b28c1a86d6f704378amv2.png', alt: 'Partner Logo 5' },
  { id: 6, src: '/assets/partners/eda32b_6bc74a604c8f494cb925aed8c52a996e~mv2.png', alt: 'Partner Logo 6' },
  { id: 7, src: '/assets/partners/eda32b_8b472e0ed19945d695ff572c04592ef9~mv2.png', alt: 'Partner Logo 7' },
  { id: 8, src: '/assets/partners/eda32b_dc763c46755547228f07a3b28631bd45~mv2.png', alt: 'Partner Logo 8' },
]

export default function PartnerLogos() {
  const t = useTranslations()

  // Animation variants for container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  // Animation variants for each logo
  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } as const

  return (
    <div className="py-12 md:py-16 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="heading-2 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.partners.logos.title}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {logos.map((logo) => (
            <motion.div 
              key={logo.id} 
              className="partner-logo-container flex items-center justify-center"
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                className="partner-logo max-h-32 w-auto object-contain border-0"
                src={logo.src}
                alt={logo.alt}
                width={280}
                height={140}
                priority
                style={{ border: 'none' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

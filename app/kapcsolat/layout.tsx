import { Metadata } from "next"
import { translations } from "@/translations/hu"

export const metadata: Metadata = {
  title: `${translations.contact.meta.title} - ${translations.common.company}`,
  description: translations.contact.meta.description,
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

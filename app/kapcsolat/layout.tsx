import { Metadata } from "next"
import { hu } from "@/translations/hu"

export const metadata: Metadata = {
  title: `${hu.contact.meta.title} - ${hu.common.company}`,
  description: hu.contact.meta.description,
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

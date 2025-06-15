import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Segítség - OkosIT',
  description: 'IT támogatás és segítségnyújtás vállalkozások számára.',
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

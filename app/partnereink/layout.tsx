import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Partnereink - OkosIT',
  description: 'Ismerje meg az OkosIT partnereit és együttműködéseinket.',
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

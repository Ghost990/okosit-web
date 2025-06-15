import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Szolgáltatások - OkosIT',
  description: 'IT infrastruktúra, felhő megoldások, kiberbiztonság, tanácsadás és támogatás vállalkozások számára.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

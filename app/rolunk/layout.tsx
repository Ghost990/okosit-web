import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Rólunk - OkosIT',
  description: 'Ismerje meg az OkosIT csapatát, értékeinket és történetünket.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

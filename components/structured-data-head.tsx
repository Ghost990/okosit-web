"use client"

import { useEffect } from "react"
import { StructuredData } from "@/types"

interface StructuredDataHeadProps {
  data: StructuredData | StructuredData[]
}

export default function StructuredDataHead({ data }: StructuredDataHeadProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(Array.isArray(data) ? data : [data])
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

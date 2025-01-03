"use client"

import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ContributionGraph() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Card className="p-4">
      <img
        src={`https://ghchart.rshah.org/gradient/${theme === 'dark' ? 'ffffff' : '0f172a'}/yourusername`}
        alt="GitHub Contributions Graph"
        className="w-full h-auto"
      />
    </Card>
  )
}


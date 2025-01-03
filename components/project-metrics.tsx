"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

interface Metric {
  label: string
  current: number
  previous: number
  trend: "up" | "down"
}

const metrics: Metric[] = [
  {
    label: "Code Quality Score",
    current: 98,
    previous: 95,
    trend: "up",
  },
  {
    label: "Test Coverage",
    current: 94,
    previous: 89,
    trend: "up",
  },
  {
    label: "Performance Score",
    current: 96,
    previous: 92,
    trend: "up",
  },
  {
    label: "User Satisfaction",
    current: 4.9,
    previous: 4.7,
    trend: "up",
  },
]

export function ProjectMetrics() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"
    const textColor = isDark ? "#ffffff" : "#000000"
    const gridColor = isDark ? "#ffffff20" : "#00000020"

    // Set canvas size
    canvas.width = 600
    canvas.height = 200

    // Draw metrics
    metrics.forEach((metric, index) => {
      const x = (index * canvas.width) / metrics.length + 75
      const height = canvas.height - 40

      // Draw bar
      ctx.fillStyle = metric.trend === "up" ? "#22c55e" : "#ef4444"
      const barHeight = (metric.current / 100) * height
      ctx.fillRect(x - 20, canvas.height - barHeight - 20, 40, barHeight)

      // Draw label
      ctx.fillStyle = textColor
      ctx.font = "12px system-ui"
      ctx.textAlign = "center"
      ctx.fillText(metric.label, x, canvas.height - 5)

      // Draw value
      ctx.fillStyle = textColor
      ctx.font = "bold 14px system-ui"
      ctx.fillText(
        typeof metric.current === "number"
          ? metric.current.toString()
          : metric.current,
        x,
        canvas.height - barHeight - 25
      )
    })
  }, [theme])

  return (
    <Card>
      <CardContent className="p-4">
        <canvas
          ref={canvasRef}
          className="w-full max-w-[600px] mx-auto"
        />
      </CardContent>
    </Card>
  )
}


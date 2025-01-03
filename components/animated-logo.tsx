"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

export function AnimatedLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"
    const primaryColor = isDark ? "#ffffff" : "#000000"

    canvas.width = 100
    canvas.height = 100

    let angle = 0
    let frame = 0

    const animate = () => {
      frame = requestAnimationFrame(animate)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw rotating elements
      ctx.save()
      ctx.translate(canvas.width/2, canvas.height/2)
      ctx.rotate(angle)

      // Draw code brackets
      ctx.strokeStyle = primaryColor
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(-20, -15)
      ctx.lineTo(-10, -15)
      ctx.lineTo(-10, 15)
      ctx.lineTo(-20, 15)
      ctx.moveTo(20, -15)
      ctx.lineTo(10, -15)
      ctx.lineTo(10, 15)
      ctx.lineTo(20, 15)
      ctx.stroke()

      ctx.restore()

      // Update rotation
      angle += 0.02
    }

    animate()

    return () => cancelAnimationFrame(frame)
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="size-[100px]"
      aria-hidden="true"
    />
  )
}


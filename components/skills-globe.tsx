"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"

interface Skill {
  name: string
  icon: string
  level: number // 1-10
  category: string
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 9, category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 9, category: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 8, category: "Frontend" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 9, category: "Frontend" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: 7, category: "Frontend" },
  { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg", level: 6, category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 8, category: "Backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 7, category: "Backend" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", level: 6, category: "Backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 8, category: "Backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 8, category: "Backend" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", level: 7, category: "Backend" },
  
  // DevOps
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 7, category: "DevOps" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: 6, category: "DevOps" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: 8, category: "DevOps" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 9, category: "DevOps" },
  
  // Testing
  { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", level: 8, category: "Testing" },
  { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg", level: 7, category: "Testing" },
  
  // Mobile
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 7, category: "Mobile" },
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: 6, category: "Mobile" },
]

export function SkillsGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const imagesRef = useRef<Record<string, HTMLImageElement>>({})

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"
    const textColor = isDark ? "#ffffff" : "#000000"

    // Preload all images
    const loadImages = async () => {
      const promises = skills.map((skill) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.crossOrigin = "anonymous"
          img.src = skill.icon
          img.onload = () => {
            imagesRef.current[skill.name] = img
            resolve()
          }
        })
      })
      await Promise.all(promises)
    }

    let angle = 0
    let frame: number
    let isAnimating = true

    const draw = () => {
      if (!isAnimating) return
      frame = requestAnimationFrame(draw)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate center
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw skills in a 3D spiral
      skills.forEach((skill, index) => {
        const t = index / skills.length
        const spiral = angle + t * Math.PI * 2 * 3 // 3 spirals
        const radius = 100 + skill.level * 5
        
        // Calculate 3D position
        const x = Math.cos(spiral) * radius
        const y = Math.sin(spiral) * radius
        const z = Math.sin(angle + t * Math.PI * 2) * 50

        // Apply perspective
        const scale = (400 + z) / 400
        const screenX = centerX + x * scale
        const screenY = centerY + y * scale

        // Draw skill
        ctx.save()
        ctx.translate(screenX, screenY)
        ctx.scale(scale, scale)

        // Draw icon if loaded
        const img = imagesRef.current[skill.name]
        if (img) {
          const size = 30
          ctx.drawImage(img, -size/2, -size/2, size, size)
        }

        // Draw name
        ctx.fillStyle = textColor
        ctx.font = `${12 / scale}px system-ui`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(skill.name, 0, 20)

        // Draw level indicator
        const levelWidth = 30
        const levelHeight = 4
        ctx.fillStyle = `hsla(${index * 360 / skills.length}, 70%, 60%, ${0.3 + 0.7 * scale})`
        ctx.fillRect(-levelWidth/2, 25, (levelWidth * skill.level) / 10, levelHeight)
        ctx.strokeStyle = textColor
        ctx.strokeRect(-levelWidth/2, 25, levelWidth, levelHeight)

        ctx.restore()
      })

      // Update rotation
      angle += 0.002
    }

    loadImages().then(() => {
      canvas.width = 800
      canvas.height = 600
      draw()
    })

    // Add interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Adjust rotation speed based on mouse position
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const deltaX = (x - centerX) / centerX
      angle += deltaX * 0.01
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      isAnimating = false
      cancelAnimationFrame(frame)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme])

  return (
    <Card className="p-6">
      <canvas
        ref={canvasRef}
        className="w-full max-w-[800px] mx-auto cursor-move"
      />
    </Card>
  )
}


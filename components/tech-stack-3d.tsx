"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

interface Technology {
  name: string
  icon: string
  level: "core" | "frequent" | "occasional"
  category: "frontend" | "backend" | "devops" | "design" | "languages" | "databases"
}

const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "core", category: "frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: "core", category: "frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: "core", category: "frontend" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg", level: "core", category: "frontend" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", level: "frequent", category: "frontend" },
  { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg", level: "frequent", category: "frontend" },
  // { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", level: "occasional", category: "frontend" },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: "core", category: "backend" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: "core", category: "backend" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", level: "frequent", category: "backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "frequent", category: "backend" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", level: "frequent", category: "backend" },
  { "name": "Django", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", "level": "frequent", "category": "backend" },

  // { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", level: "occasional", category: "backend" },
  
  // Databases
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: "core", category: "databases" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "core", category: "databases" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", level: "frequent", category: "databases" },
  { "name": "SQLite", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", "level": "frequent", "category": "databases" },
  { "name": "MySQL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "level": "frequent", "category": "databases" },

  
  // DevOps
  // { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: "core", category: "devops" },
  // { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: "frequent", category: "devops" },
  // { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", level: "core", category: "devops" },
  
  // Design
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: "frequent", category: "design" },
  // { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", level: "occasional", category: "design" },
  
  // Languages
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "core", category: "languages" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "core", category: "languages" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", level: "frequent", category: "languages" },
  // { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg", level: "occasional", category: "languages" },
]

export function TechStack3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
  
    const ctx = canvas.getContext("2d")
    if (!ctx) return
  
    const isDark = theme === "dark"
    const textColor = isDark ? "#ffffff" : "#000000"
    const backgroundColor = isDark ? "#000000" : "#ffffff"
  
    // Set canvas size
    const size = Math.min(
      containerRef.current?.offsetWidth || 800,
      window.innerHeight * 0.7
    )
    canvas.width = size
    canvas.height = size
  
    // Circle layout properties
    const centerX = size / 2
    const centerY = size / 2
    const radius = size / 3
    const technologies = activeCategory 
      ? TECHNOLOGIES.filter(tech => tech.category === activeCategory)
      : TECHNOLOGIES
  
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  
    technologies.forEach((tech, index) => {
      const angle = (index * 2 * Math.PI) / technologies.length
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
  
      // Draw connecting lines
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = isDark ? "#ffffff20" : "#00000020"
      ctx.stroke()
  
      // Load and draw tech icons
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = tech.icon
      img.onload = () => {
        const isHovered = hoveredTech?.name === tech.name
        const scale = isHovered ? 1.2 : 1
        const size = isHovered ? 48 : 40
  
        ctx.save()
        ctx.translate(x, y)
  
        // Add glow effect for hovered item
        if (isHovered) {
          ctx.shadowColor = isDark ? "#ffffff40" : "#00000040"
          ctx.shadowBlur = 15
        }
  
        // Draw icon background
        ctx.beginPath()
        ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
        ctx.fillStyle = backgroundColor
        ctx.fill()
  
        // Draw icon
        ctx.drawImage(img, -size / 2 * scale, -size / 2 * scale, size * scale, size * scale)
  
        // Draw name
        ctx.fillStyle = textColor
        ctx.font = `${isHovered ? "bold " : ""}14px system-ui`
        ctx.textAlign = "center"
        ctx.fillText(tech.name, 0, size / 2 + 20)
  
        ctx.restore()
      }
    })
  
    // Add hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
  
      let hoveredTechnology: Technology | null = null
  
      technologies.forEach((tech, index) => {
        const angle = (index * 2 * Math.PI) / technologies.length
        const iconX = centerX + radius * Math.cos(angle)
        const iconY = centerY + radius * Math.sin(angle)
  
        const distance = Math.sqrt(
          Math.pow(x - iconX, 2) + Math.pow(y - iconY, 2)
        )
  
        if (distance < 24) {
          hoveredTechnology = tech
          canvas.style.cursor = "pointer"
        }
      })
  
      setHoveredTech(hoveredTechnology)
      if (!hoveredTechnology) {
        canvas.style.cursor = "default"
      }
    }
  
    canvas.addEventListener("mousemove", handleMouseMove)
    return () => canvas.removeEventListener("mousemove", handleMouseMove)
  }, [theme, hoveredTech, activeCategory])
  

  const categories = Array.from(new Set(TECHNOLOGIES.map(t => t.category)))

  return (
    <Card className="p-4">
      <div ref={containerRef} className="w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full max-w-[800px] mx-auto transition-all duration-300"
        />
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button
          variant={activeCategory === null ? "default" : "outline"}
          onClick={() => setActiveCategory(null)}
        >
          All
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>
      {hoveredTech && (
        <div className="mt-4 text-center">
          <p className="font-medium">{hoveredTech.name}</p>
          <p className="text-sm text-muted-foreground">
            {hoveredTech.level.charAt(0).toUpperCase() + hoveredTech.level.slice(1)} proficiency
          </p>
        </div>
      )}
    </Card>
  )
}


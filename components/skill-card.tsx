"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export function SkillCard({ icon, title, description, delay = 0 }: SkillCardProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay * 0.1,
          },
        },
      }}
    >
      <Card className="group relative overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-2 text-primary">{icon}</div>
          <h3 className="mb-2 font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </CardContent>
      </Card>
    </motion.div>
  )
}


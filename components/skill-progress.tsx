"use client"

import { Progress } from "@/components/ui/progress"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface SkillProgressProps {
  name: string
  level: number
}

export function SkillProgress({ name, level }: SkillProgressProps) {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(level)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [inView, level])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}


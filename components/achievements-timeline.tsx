"use client"

import { Card } from "@/components/ui/card"
import { Award, BookOpen, Code2, Trophy, Users } from 'lucide-react'
import { useInView } from "react-intersection-observer"

const achievements = [
  {
    year: "2024",
    title: "Led Enterprise Platform Migration",
    description: "Successfully migrated legacy system to modern microservices architecture",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Published Technical Blog Series",
    description: "Wrote 12-part series on modern web development best practices",
    icon: BookOpen,
  },
  {
    year: "2022",
    title: "Open Source Recognition",
    description: "Became top contributor to major open source project",
    icon: Code2,
  },
  {
    year: "2021",
    title: "Team Leadership Award",
    description: "Recognized for excellence in technical leadership and mentoring",
    icon: Users,
  },
  {
    year: "2020",
    title: "AWS Certification",
    description: "Achieved AWS Solutions Architect Professional certification",
    icon: Award,
  },
]

export function AchievementsTimeline() {
  return (
    <div className="relative space-y-8">
      {achievements.map((achievement, index) => {
        const { ref, inView } = useInView({ triggerOnce: true })

        return (
          <div
            key={achievement.year}
            ref={ref}
            className={`
              transform transition-all duration-500
              ${inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
            `}
          >
            <Card className="relative overflow-hidden">
              <div className="flex items-start gap-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <achievement.icon className="size-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {achievement.year}
                    </span>
                    <h3 className="font-semibold">{achievement.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}


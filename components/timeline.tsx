"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="relative pl-6 sm:pl-32">
      <div className="mb-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <span className="text-sm text-muted-foreground sm:text-base sm:font-semibold">
          {year}
        </span>
        <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
      {!isLast && (
        <span
          className={cn(
            "absolute left-2 top-2 flex size-4 justify-center rounded-full border bg-background sm:left-[8.5rem]",
            inView && "after:absolute after:left-[0.6875rem] after:top-6 after:h-full after:w-px after:bg-border"
          )}
        />
      )}
    </div>
  )
}

export function Timeline() {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="relative space-y-8">
        <TimelineItem
          year="2024"
          title="Senior Developer at Tech Corp"
          description="Leading development of enterprise applications and mentoring junior developers."
        />
        <TimelineItem
          year="2022"
          title="AWS Certification"
          description="Obtained AWS Solutions Architect certification and led cloud migration projects."
        />
        <TimelineItem
          year="2020"
          title="Started at Tech Corp"
          description="Joined as a Full Stack Developer and quickly progressed to a senior role."
        />
        <TimelineItem
          year="2018"
          title="First Developer Role"
          description="Started career as a Junior Developer at StartUp Inc."
          isLast
        />
      </div>
    </Card>
  )
}


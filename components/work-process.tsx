"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Braces, GitBranch, Laptop, LayoutDashboard, MessagesSquare, Rocket, Search, Settings } from 'lucide-react'
import { useState } from "react"

const processes = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Understanding project requirements, user needs, and business goals through thorough research and analysis.",
  },
  {
    icon: LayoutDashboard,
    title: "Planning",
    description:
      "Creating detailed project plans, architecture designs, and setting up development milestones.",
  },
  {
    icon: Braces,
    title: "Development",
    description:
      "Writing clean, efficient code following best practices and industry standards.",
  },
  {
    icon: Settings,
    title: "Testing",
    description:
      "Rigorous testing including unit tests, integration tests, and user acceptance testing.",
  },
  {
    icon: GitBranch,
    title: "Code Review",
    description:
      "Thorough code reviews ensuring quality, maintainability, and knowledge sharing.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Smooth deployment process with continuous integration and delivery (CI/CD).",
  },
  {
    icon: Laptop,
    title: "Monitoring",
    description:
      "Continuous monitoring of application performance and user experience.",
  },
  {
    icon: MessagesSquare,
    title: "Feedback",
    description:
      "Regular feedback loops with stakeholders and iterative improvements.",
  },
]

export function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {processes.map((process, index) => (
          <Card
            key={process.title}
            className={`cursor-pointer transition-colors hover:bg-muted ${
              activeIndex === index ? "border-primary" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <CardContent className="p-4">
              <process.icon className="mb-2 size-5 text-primary" />
              <h4 className="font-semibold">{process.title}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <p className="text-muted-foreground">
            {processes[activeIndex].description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}


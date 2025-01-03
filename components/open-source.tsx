"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Users } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    name: "react-performance-toolkit",
    description: "A comprehensive toolkit for optimizing React applications performance",
    stars: 2100,
    forks: 180,
    contributors: 25,
    link: "#",
    tags: ["React", "Performance", "TypeScript"],
  },
  {
    name: "go-microservices-starter",
    description: "Production-ready microservices starter kit with Go and gRPC",
    stars: 1500,
    forks: 220,
    contributors: 15,
    link: "#",
    tags: ["Go", "Microservices", "gRPC"],
  },
  {
    name: "next-auth-enterprise",
    description: "Enterprise-grade authentication solution for Next.js applications",
    stars: 980,
    forks: 120,
    contributors: 12,
    link: "#",
    tags: ["Next.js", "Authentication", "Security"],
  },
]

export function OpenSource() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Open Source Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Contributing to the developer community through open source projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="size-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="size-4" />
                        {project.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="size-4" />
                        {project.contributors}
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full"
                  >
                    <Link href={project.link}>
                      <Github className="mr-2 size-4" />
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


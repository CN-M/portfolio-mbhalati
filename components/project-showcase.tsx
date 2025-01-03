"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from 'lucide-react'

interface ProjectShowcaseProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
  metrics: {
    stars: number
    forks: number
    contributors: number
  }
}

export function ProjectShowcase({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
  metrics,
}: ProjectShowcaseProps) {
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
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video sm:aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4 sm:p-6">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
            <div className="flex gap-2">
              <Link
                href={demoLink}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-5" />
              </Link>
              <Link
                href={githubLink}
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-5" />
              </Link>
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>⭐ {metrics.stars} stars</span>
            <span>🍴 {metrics.forks} forks</span>
            <span>👥 {metrics.contributors} contributors</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


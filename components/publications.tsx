"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

const publications = [
  {
    title: "Building Scalable Microservices with Go and gRPC",
    publisher: "InfoQ",
    date: "March 2024",
    link: "#",
    tags: ["Microservices", "Go", "gRPC"],
  },
  {
    title: "Advanced State Management Patterns in React Applications",
    publisher: "Medium",
    date: "February 2024",
    link: "#",
    tags: ["React", "State Management", "Performance"],
  },
  {
    title: "Implementing Zero-Trust Security in Cloud Native Applications",
    publisher: "AWS Blog",
    date: "January 2024",
    link: "#",
    tags: ["Security", "Cloud Native", "AWS"],
  },
]

export function Publications() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Latest Publications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sharing knowledge and insights with the tech community
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold leading-tight">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {pub.publisher} • {pub.date}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 w-full justify-between"
                  >
                    <Link href={pub.link}>
                      Read Article
                      <ExternalLink className="size-4" />
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


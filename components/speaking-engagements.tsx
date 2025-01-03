"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

const events = [
  {
    title: "Modern Web Development with Next.js",
    conference: "ReactConf 2024",
    date: "April 15-17, 2024",
    location: "Las Vegas, USA",
    attendees: "500+",
    image: "/placeholder.svg",
    type: "Keynote",
  },
  {
    title: "Building Scalable Systems: Lessons Learned",
    conference: "Tech Summit 2024",
    date: "May 20-22, 2024",
    location: "Berlin, Germany",
    attendees: "300+",
    image: "/placeholder.svg",
    type: "Workshop",
  },
  {
    title: "The Future of Full-Stack Development",
    conference: "DevCon 2024",
    date: "June 10-12, 2024",
    location: "Tokyo, Japan",
    attendees: "1000+",
    image: "/placeholder.svg",
    type: "Panel",
  },
]

export function SpeakingEngagements() {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Speaking Engagements
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sharing expertise at leading tech conferences worldwide
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.conference}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    className="absolute right-2 top-2"
                    variant={event.type === "Keynote" ? "default" : "secondary"}
                  >
                    {event.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold leading-tight">
                    {event.title}
                  </h3>
                  <p className="mb-4 text-lg font-medium text-primary">
                    {event.conference}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="size-4" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


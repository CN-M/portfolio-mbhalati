"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Code2, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Technical Excellence",
    items: [
      "Reduced application load time by 60%",
      "Implemented CI/CD pipelines saving 20+ hours/week",
      "Led migration of legacy systems to modern stack",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Mentorship",
    items: [
      "Mentored 10+ junior developers",
      "Led team of 6 developers across 3 time zones",
      "Conducted 20+ technical workshops",
    ],
  },
  {
    icon: Code2,
    title: "Innovation",
    items: [
      "Filed 2 technical patents",
      "Created open-source libraries with 1000+ stars",
      "Pioneered microservices architecture adoption",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    items: [
      "Published 15+ technical articles",
      "Regular conference speaker",
      "Active open source contributor",
    ],
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="space-y-16 py-16 sm:py-20 md:py-28 lg:py-32"
      aria-label="About me"
    >
      <div className="container px-4 sm:px-6">
        <div className="grid gap-8 px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
            With over 5 years of experience in full-stack development, I've had
            the privilege of working on diverse projects that have shaped my
            expertise and passion for creating impactful digital solutions.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          {/* Personal Introduction */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base">
              <p className="leading-relaxed">
                My journey in tech began with a childhood fascination with
                computers and video games, which eventually led me to pursue a
                degree in Computer Science. Since then, I've worked with
                startups and enterprise companies, helping them build scalable
                solutions and mentor the next generation of developers.
              </p>
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base">
              <p className="leading-relaxed">
                Outside of coding, I'm an avid rock climber, amateur
                photographer, and continuous learner. I believe in the power of
                technology to solve real-world problems and create positive
                change. This drives my approach to every project: combining
                technical excellence with practical solutions that make a
                difference.
              </p>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold sm:text-3xl">Key Achievements</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  // transition={{ duration: 0.5 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                          <achievement.icon className="size-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold">
                          {achievement.title}
                        </h4>
                      </div>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        {achievement.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-primary/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

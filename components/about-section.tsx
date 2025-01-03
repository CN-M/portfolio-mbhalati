"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Code2, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Technical Excellence",
    items: [
      "Designed and implemented a Student Management Dashboard for College Connect UK",
      "Built and delivered CRC Polokwane's official website with intuitive UI/UX and payment integration",
      "Developed a full-stack social media platform with dynamic user interactions and caching",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Collaboration",
    items: [
      "Collaborated with stakeholders to align digital solutions with organizational goals",
      "Worked across remote teams to deliver complex projects with tight deadlines",
      "Contributed to enhancing technical strategies for scalable architectures",
    ],
  },
  {
    icon: Code2,
    title: "Innovation",
    items: [
      "Developed scalable hosting solutions during AWS virtual experience programs",
      "Designed responsive websites integrating APIs for dynamic content updates",
      "Delivered markdown-based blogs with secure login and guest interaction features",
    ],
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    items: [
      "Pursued advanced courses in real analysis, time series, and regression analysis",
      "Actively contribute to open-source projects and personal development blogs",
      "Engaged in mentorship and knowledge-sharing initiatives within my community",
    ],
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center space-y-16 py-16 sm:py-20 md:py-28 lg:py-32"
      aria-label="About me"
    >
      <div className="container px-4 sm:px-6">
        <div className="grid gap-8 px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
            I am an aspiring software engineer with a strong foundation in
            mathematics and statistics, driven by curiosity and a passion for
            solving challenging problems. My expertise spans full-stack
            development, data analysis, and machine learning, with a focus on
            building impactful, scalable solutions.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-16">
          {/* Personal Introduction */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base">
              <p className="leading-relaxed">
                My journey into tech started with a deep interest in mathematics
                and problem-solving, which led me to pursue a degree in
                Mathematical Science, majoring in Mathematics and Statistics.
                This academic foundation has shaped my analytical approach to
                building efficient and scalable solutions.
              </p>
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none text-sm sm:text-base">
              <p className="leading-relaxed">
                When I’m not writing code, I enjoy designing intuitive user
                interfaces, exploring new technologies, and contributing to
                meaningful community initiatives. I believe in leveraging
                technology to create solutions that address real-world
                challenges, focusing on impact and innovation in every project I
                tackle.
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

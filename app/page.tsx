import { AboutSection } from "@/components/about-section";
// import { AchievementsTimeline } from "@/components/achievements-timeline";
import { AlgorithmVisualizer } from "@/components/algorithm-visualizer";
import { APIPlayground } from "@/components/api-playground";
import { AvailabilityBadge } from "@/components/availability-badge";
import { CodeExamples } from "@/components/code-examples";
import { CodePlayground } from "@/components/code-playground";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { MobileNav } from "@/components/mobile-nav";
// import { NewsletterForm } from "@/components/newsletter-form"
// import { OpenSource } from "@/components/open-source"
// import { Publications } from "@/components/publications"
import { RealtimeCollab } from "@/components/realtime-collab";
import { SkillCard } from "@/components/skill-card";
import { WorkProcess } from "@/components/work-process";
// import { SpeakingEngagements } from "@/components/speaking-engagements"
import { SystemArchitecture } from "@/components/system-architecture";
import { TechStack3D } from "@/components/tech-stack-3d";
import { ThemeToggle } from "@/components/theme-toggle";
// import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Layout,
  Linkedin,
  Palette,
  Terminal,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="font-bold">
            C.N. Mbhalati
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#about"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Hero Section */}
        <section className="px-24 py-12 sm:py-16 md:py-24 lg:py-32">
          {/* <div className="grid gap-8 lg:grid-cols-2 items-center"> */}
          <div className="flex gap-16 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-6 w-[55%]">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-3 rounded-full bg-primary" />
                Software Engineer & UI/UX Designer
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Building Digital Experiences That Matter
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-[600px]">
                  I craft beautiful, user-friendly web experiences using modern
                  technologies. With 5+ years of experience in full-stack
                  development, I specialize in building scalable applications
                  that solve real-world problems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resume.pdf" download>
                    <Download className="mr-2 size-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile */}
            <div className="w-[40%] flex flex-col items-center space-y-4 lg:justify-self-end">
              <AvailabilityBadge />
              <div className="relative size-40 overflow-hidden rounded-full ring-2 ring-border">
                <Image
                  src="/kiri.jpg"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  priority
                  className="object-cover"
                />
              </div>

              <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold">C.N. Mbhalati</h2>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="size-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="size-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="size-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">
            Technical Expertise
          </h2>

          <div className="grid gap-8">
            <TechStack3D />

            <div className="grid gap-4">
              <h3 className="text-xl font-semibold">Areas of Expertise</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <SkillCard
                  icon={<Layout className="size-5" />}
                  title="Frontend Development"
                  description="Building responsive and accessible web applications"
                />
                <SkillCard
                  icon={<Terminal className="size-5" />}
                  title="Backend Development"
                  description="Designing scalable server architectures"
                />
                <SkillCard
                  icon={<Cpu className="size-5" />}
                  title="System Design"
                  description="Creating efficient and maintainable systems"
                />
                <SkillCard
                  icon={<Code2 className="size-5" />}
                  title="Clean Code"
                  description="Writing maintainable and efficient code"
                />
                <SkillCard
                  icon={<Database className="size-5" />}
                  title="Data Analysis"
                  description="Extracting insights from large datasets and creating visualizations"
                />
                <SkillCard
                  icon={<Palette className="size-5" />}
                  title="Web Design"
                  description="Crafting visually appealing and user-friendly interfaces"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Work & Projects Section */}
        {/* <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">Work & Projects</h2>
          
          <div className="grid gap-8">
            <ProjectShowcase
              title="E-commerce Platform"
              description="A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe"
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              demoLink="#"
              githubLink="#"
              metrics={{
                stars: 120,
                forks: 35,
                contributors: 8,
              }}
              />
            
            <div className="grid gap-8 md:grid-cols-2">
            <ProjectMetrics />
            <ContributionGraph />
            </div>
            
            </div>
          </section> */}

        {/* Technical Demonstrations Section */}
        <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">
            Technical Demonstrations
          </h2>

          <div className="grid gap-8">
            <div className="w-full h-full">
              <h3 className="mb-4 text-xl font-semibold">
                Algorithm Visualization
              </h3>
              <AlgorithmVisualizer />
            </div>

            <div className="w-full h-full">
              <h3 className="mb-4 text-xl font-semibold">
                System Architecture
              </h3>
              <SystemArchitecture />
            </div>
            <div className="w-full h-full">
              <h3 className="mb-4 text-xl font-semibold">
                Real-time Collaboration
              </h3>
              <RealtimeCollab />
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-2">
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="w-full h-full">
                  <h3 className="mb-4 text-xl font-semibold">API Playground</h3>
                  <APIPlayground />
                </div>
                <div className="w-full h-full">
                  <h3 className="mb-4 text-xl font-semibold">
                    Code Playground
                  </h3>
                  <CodePlayground />
                </div>
              </div>
              <div className="w-1/2 h-full">
                <h3 className="mb-4 text-xl font-semibold">Unix Terminal</h3>
                <InteractiveTerminal />
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-[75%] h-full">
                <h3 className="mb-4 text-xl font-semibold">Code Examples</h3>
                <CodeExamples />
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Achievements Section */}
        {/* <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">
            Experience & Achievements
          </h2>

          <div className="grid gap-8">
            <Timeline />
            <AchievementsTimeline />
          </div>
        </section> */}

        {/* Open Source & Publications */}
        {/* <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">Open Source & Publications</h2>
          
          <div className="grid gap-8">
            <OpenSource />
            <Publications />
          </div>
        </section> */}

        {/* Projects Section */}
        <section
          id="projects"
          className="space-y-8 py-12 sm:py-16 md:py-24 lg:py-32"
          aria-label="My projects"
        >
          <div className="container px-4 sm:px-6">
            <div className="grid gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                My Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Here are some of the projects I've worked on. Each project
                showcases different skills and technologies.
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-12">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured e-commerce platform built with Next.js and Stripe"
                image="/placeholder.svg"
                tags={["Next.js", "TypeScript", "Stripe"]}
                link="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features"
                image="/placeholder.svg"
                tags={["React", "Node.js", "Socket.io"]}
                link="#"
              />
              <ProjectCard
                title="AI Chat Interface"
                description="A modern chat interface for AI interactions with streaming responses"
                image="/placeholder.svg"
                tags={["React", "OpenAI", "TailwindCSS"]}
                link="#"
              />
            </div>
          </div>
        </section>

        <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">My Process</h2>
          <WorkProcess />
        </section>

        {/* Speaking & Events */}
        {/* <section className="py-16">
          <SpeakingEngagements />
        </section> */}

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="space-y-8 py-12 sm:py-16 md:py-24 lg:py-32 bg-muted"
          aria-label="Testimonials"
        >
          <div className="container px-4 sm:px-6">
            <div className="grid gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                What People Say
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Feedback from clients and colleagues I've had the pleasure of
                working with.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <Quote className="size-8 text-muted-foreground mb-4" />
                  <blockquote className="space-y-2">
                    <p className="text-lg">
                      "John's technical expertise and leadership skills were
                      instrumental in the success of our project. His ability to
                      mentor junior developers while maintaining high code
                      quality is remarkable."
                    </p>
                    <footer className="text-sm text-muted-foreground">
                      <cite className="font-medium">
                        — Sarah Johnson, CTO at Tech Corp
                      </cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Quote className="size-8 text-muted-foreground mb-4" />
                  <blockquote className="space-y-2">
                    <p className="text-lg">
                      "Working with John was a game-changer for our startup. His
                      full-stack expertise and attention to detail helped us
                      launch our MVP ahead of schedule."
                    </p>
                    <footer className="text-sm text-muted-foreground">
                      <cite className="font-medium">
                        — Michael Chen, Founder at StartUp Inc
                      </cite>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter & Contact */}
        {/* <section className="space-y-8 py-16">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to my newsletter for the latest updates on projects and articles
            </p>
          </div>
          
          <div className="mx-auto max-w-md">
            <NewsletterForm />
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            {/* <AnimatedLogo /> */}
            <Link href="/" className="text-sm text-muted-foreground">
              C.N. Mbhalati
            </Link>
            <span className="text-sm text-muted-foreground">
              © 2024 All rights reserved
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

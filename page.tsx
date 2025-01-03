import { AboutSection } from "@/components/about-section"
import { AchievementsTimeline } from "@/components/achievements-timeline"
import { AlgorithmVisualizer } from "@/components/algorithm-visualizer"
import { AnimatedLogo } from "@/components/animated-logo"
import { APIPlayground } from "@/components/api-playground"
import { AvailabilityBadge } from "@/components/availability-badge"
import { CodeExamples } from "@/components/code-examples"
import { CodePlayground } from "@/components/code-playground"
import { ContributionGraph } from "@/components/contribution-graph"
import { Counter } from "@/components/counter"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { NewsletterForm } from "@/components/newsletter-form"
import { OpenSource } from "@/components/open-source"
import { PerformanceDashboard } from "@/components/performance-dashboard"
import { ProjectMetrics } from "@/components/project-metrics"
import { ProjectShowcase } from "@/components/project-showcase"
import { Publications } from "@/components/publications"
import { RealtimeCollab } from "@/components/realtime-collab"
import { SkillCard } from "@/components/skill-card"
import { SkillProgress } from "@/components/skill-progress"
import { SkillsGlobe } from "@/components/skills-globe"
import { SpeakingEngagements } from "@/components/speaking-engagements"
import { SystemArchitecture } from "@/components/system-architecture"
import { TechRadar } from "@/components/tech-radar"
import { TechStack3D } from "@/components/tech-stack-3d"
import { ThemeToggle } from "@/components/theme-toggle"
import { Timeline } from "@/components/timeline"
import { MobileNav } from "./components/mobile-nav"
import { WorkProcess } from "@/components/work-process"
import { Code2, Cpu, Layout, LineChart, Rocket, Terminal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Github, Linkedin, Mail, Twitter, Quote } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="font-bold">
            Portfolio
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
        <section className="container py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Full Stack Developer & UI/UX Enthusiast
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Building Digital Experiences That Matter
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-[600px]">
                  I craft beautiful, user-friendly web experiences using modern technologies.
                  With 5+ years of experience in full-stack development, I specialize in
                  building scalable applications that solve real-world problems.
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
            <div className="flex flex-col items-center space-y-6 lg:justify-self-end">
              <AvailabilityBadge />

              <div className="relative size-40 overflow-hidden rounded-full ring-2 ring-border">
                <Image
                  src="/placeholder.svg"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  priority
                  className="object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">Senior Full Stack Developer</p>
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
          <h2 className="text-center text-3xl font-bold">Technical Expertise</h2>
          
          <div className="grid gap-8">
            <TechStack3D />
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Technologies</h3>
                <div className="space-y-6">
                  <SkillProgress name="React & Next.js" level={95} />
                  <SkillProgress name="TypeScript" level={90} />
                  <SkillProgress name="Node.js" level={85} />
                  <SkillProgress name="AWS" level={80} />
                </div>
              </div>
              
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work & Projects Section */}
        <section className="space-y-12 py-16">
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
            
            <WorkProcess />
          </div>
        </section>

        {/* Technical Demonstrations Section */}
        <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">Technical Demonstrations</h2>
          
          <div className="grid gap-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Algorithm Visualization</h3>
                <AlgorithmVisualizer />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">System Architecture</h3>
                <SystemArchitecture />
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Real-time Collaboration</h3>
                <RealtimeCollab />
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">API Playground</h3>
                <APIPlayground />
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-xl font-semibold">Code Examples</h3>
              <CodeExamples />
            </div>
          </div>
        </section>

        {/* Experience & Achievements Section */}
        <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">Experience & Achievements</h2>
          
          <div className="grid gap-8">
            <Timeline />
            <AchievementsTimeline />
          </div>
        </section>

        {/* Open Source & Publications */}
        <section className="space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">Open Source & Publications</h2>
          
          <div className="grid gap-8">
            <OpenSource />
            <Publications />
          </div>
        </section>

        {/* Speaking & Events */}
        <section className="py-16">
          <SpeakingEngagements />
        </section>

        {/* Newsletter & Contact */}
        <section className="space-y-8 py-16">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to my newsletter for the latest updates on projects and articles
            </p>
          </div>
          
          <div className="mx-auto max-w-md">
            <NewsletterForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <AnimatedLogo />
            <span className="text-sm text-muted-foreground">
              © 2024 All rights reserved
            </span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


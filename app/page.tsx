import { AboutSection } from "@/components/about-section";
// import { AchievementsTimeline } from "@/components/achievements-timeline";
import { AlgorithmVisualizer } from "@/components/algorithm-visualizer";
import { APIPlayground } from "@/components/api-playground";
import { AvailabilityBadge } from "@/components/availability-badge";
import { CodeExamples } from "@/components/code-examples";
import { CodePlayground } from "@/components/code-playground";
import { ContactSection } from "@/components/contact-section";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import { MobileNav } from "@/components/mobile-nav";
// import { NewsletterForm } from "@/components/newsletter-form"
// import { OpenSource } from "@/components/open-source"
// import { Publications } from "@/components/publications"
// import { RealtimeCollab } from "@/components/realtime-collab";
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

const projects = [
  {
    title: "Bird App",
    description:
      "A full-stack social media platform enabling users to post, comment, like, and manage dynamic feeds.",
    image: "/bird-app.bmp",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Redis",
      "PostgreSQL",
    ],
    link: "https://bird-app.up.railway.app/",
  },
  {
    title: "CRC Polokwane Website",
    description:
      "The official website for CRC Polokwane, featuring responsive design, payment integration, and user authentication.",
    image: "/crc.bmp",
    tags: ["Next.js", "TypeScript", "React", "TailwindCSS", "Yoco"],
    link: "https://crcplk.co.za/",
  },
  // {
  //   title: "Student Management Dashboard",
  //   description:
  //     "A dashboard for managing international student university applications, with dynamic user management.",
  //   image: "/placeholder.svg",
  //   tags: [
  //     "Next.js",
  //     "TypeScript",
  //     "PostgreSQL",
  //     "Prisma",
  //     "ShadCN UI",
  //     "Tanstack React Table",
  //   ],
  //   link: "#",
  // },
  {
    title: "Personal Website",
    description:
      "A personal portfolio and blog with Spotify API integration, secure login, and a markdown-based blog system.",
    image: "/cnm.bmp",
    tags: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma", "MDX"],
    link: "https://cn.mbhalati.com/",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
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

      <main className="flex-1 w-full flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="flex w-full justify-center px-6 sm:px-12 lg:px-24 py-12 sm:py-16 md:py-24 lg:py-32">
          {/* <div className="grid gap-8 md:gap-16 md:grid-cols-2 items-center"> */}
          <div className="md:w-[75%] flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-6 w-full">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="size-3 rounded-full bg-primary" />
                Software Engineer & UI/UX Designer
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Solving Problems Through Thoughtful Design and Code
                </h1>
                <p className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-[600px]">
                  I design and develop user-focused web applications using
                  modern tech. With a strong foundation in mathematics and
                  statistics, I specialize in crafting efficient, data-driven
                  solutions that address complex challenges.
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
                  <Link
                    href="/Ntsako_Mbhalati_-_Software_Engineer_CV_V2.pdf"
                    download
                    target="_blank"
                  >
                    <Download className="mr-2 size-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile */}
            <div className="flex flex-col items-center space-y-4 md:w-1/2 md:items-start lg:items-center">
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

              <div className="text-center md:text-left lg:text-center space-y-1">
                <h2 className="text-2xl font-bold">C.N. Mbhalati</h2>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/cn-m"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="size-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/c-n-mbhalati-a6526716a/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="size-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://twitter.com/cn_mbhalati"
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
        <section className="flex flex-col items-center justify-center space-y-12 py-16">
          <h2 className="text-center text-3xl font-bold">
            Technical Expertise
          </h2>

          <div className="grid gap-8">
            <TechStack3D />

            <div className="grid gap-4 mx-4">
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
        <section className="container flex flex-col items-center justify-center space-y-12 py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">
            Technical Demonstrations
          </h2>

          <div className="grid gap-8">
            {/* Algorithm Visualizer */}
            <div className="w-full">
              <h3 className="mb-4 text-xl font-semibold">
                Algorithm Visualization
              </h3>
              <AlgorithmVisualizer />
            </div>

            {/* System Architecture */}
            <div className="w-full">
              <h3 className="mb-4 text-xl font-semibold">
                System Architecture
              </h3>
              <SystemArchitecture />
            </div>

            {/* Real-time Collaboration */}
            {/* <div className="w-full">
              <h3 className="mb-4 text-xl font-semibold">
                Real-time Collaboration
              </h3>
              <RealtimeCollab />
            </div> */}

            {/* API & Code Playgrounds */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="w-full">
                <h3 className="mb-4 text-xl font-semibold">API Playground</h3>
                <APIPlayground />
              </div>
              <div className="w-full">
                <h3 className="mb-4 text-xl font-semibold">Code Playground</h3>
                <CodePlayground />
              </div>
            </div>

            {/* Interactive Terminal */}
            <div className="w-full max-w-2xl mx-auto">
              <h3 className="mb-4 text-xl font-semibold">Unix Terminal</h3>
              <InteractiveTerminal />
            </div>

            {/* Code Examples */}
            <div className="hidden sm:block w-full max-w-4xl mx-auto">
              <h3 className="mb-4 text-xl font-semibold">Code Examples</h3>
              <CodeExamples />
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
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                />
              ))}
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
          className="w-full flex justify-center space-y-8 py-12 sm:py-16 md:py-24 lg:py-32 bg-muted"
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
                      "Ntsako has been a fantastic addition to our team. He took
                      the lead on creating a dashboard that has made managing
                      our student applications so much easier. His ability to
                      understand our needs and translate them into a practical,
                      user-friendly system has been invaluable. He's reliable,
                      detail-oriented, and a great communicator. I couldn't
                      recommend him more."
                    </p>
                    <footer className="text-sm text-muted-foreground">
                      <cite className="font-medium">
                        — Ike Mafa, CTO at College Connect UK
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
                      "Ntsako did an amazing job with our church's website. He
                      brought our vision to life and made it so easy for our
                      members to use. Beyond his technical skills, he was great
                      at listening to feedback and ensuring everything was
                      exactly how we wanted it. It's clear he cares deeply about
                      the work he does and the people he works with."
                    </p>
                    <footer className="text-sm text-muted-foreground">
                      <cite className="font-medium">
                        — Mpho Lemekoana, Head of Media and Communications at
                        CRC Polokwane
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
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-8">
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
              href="https://github.com/cn-m"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/cn_mbhalati"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/c-n-mbhalati-a6526716a/"
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

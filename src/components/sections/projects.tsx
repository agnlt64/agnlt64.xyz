"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { projects } from "@/data"
import { ProjectCard } from "@/components/ui/project-card"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const featured = projects.filter(p => p.featured)
  const [isHovering, setIsHovering] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".project-card")
    if (!cards) return
    cards.forEach(card => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }

  return (
    <section className="relative px-6 py-24" id="projects">
      {/* Background decoration */}
      <div className="blob-pink w-80 h-80 bottom-1/4 -right-40 opacity-20" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            My work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-pink">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on, from tools to creative experiments
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 md:grid-cols-2"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`animate-fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <ProjectCard
                {...project}
                isHovering={isHovering}
              />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full glass border border-pink-500/30 hover:border-pink-500/60 hover:glow-pink transition-all duration-300 group"
          >
            View all {projects.length} projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}

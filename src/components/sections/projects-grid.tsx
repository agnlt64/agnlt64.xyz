"use client"

import { useRef, useState } from "react"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { Project } from "@/data"

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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
    <>
      <div
        ref={gridRef}
        className="grid gap-6 md:grid-cols-2"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`animate-fade-in-up opacity-0 stagger-${Math.min(index + 1, 8)}`}
          >
            <ProjectCard
              {...project}
              isHovering={isHovering}
              onClick={project.image ? () => setSelectedProject(project) : undefined}
            />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={selectedProject !== null}
        onOpenChange={(open) => { if (!open) setSelectedProject(null) }}
      />
    </>
  )
}

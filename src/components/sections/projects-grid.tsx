import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { Project } from "@/data";
import { useCoolHover } from "@/hooks/use-cool-hover";

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isHovering, setIsHovering, handleMouseMove, ref } = useCoolHover<HTMLDivElement>(".project-card");

  return (
    <>
      <div
        ref={ref}
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
        onOpenChange={(open) => { if (!open) setSelectedProject(null); }}
      />
    </>
  );
}

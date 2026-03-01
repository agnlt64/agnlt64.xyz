"use client"

import Image from "next/image"
import { X, Github, ExternalLink, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Project } from "@/data"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  if (!project) return null

  const isPrivate = project.private
  const hasGitHub = project.href?.includes("github.com")
  const hasLiveLink = !isPrivate && project.href && project.href !== "#"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-strong border border-white/10 max-w-4xl p-0 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Pink top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />

        {/* Optional screenshot */}
        {project.image && (
          <div className="relative w-full h-80 overflow-hidden">
            <Image
              src={`/projects/${project.image}`}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </div>
        )}

        {/* Content area */}
        <div className="p-6 space-y-4">
          {/* Header row: title + badges + close */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <DialogTitle className="text-xl font-bold gradient-text-pink leading-none">{project.title}</DialogTitle>
              {isPrivate && (
                <Badge
                  variant="outline"
                  className="text-xs border-red-500/50 bg-red-500/10 text-red-400 shrink-0"
                >
                  <Lock className="w-3 h-3 mr-1" />
                  Private
                </Badge>
              )}
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/10 hover:border-pink-500/30 transition-all duration-200"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Short description */}
          <p className="text-sm text-muted-foreground">{project.description}</p>

          {/* Divider */}
          <div className="section-divider" />

          {/* Full content */}
          <p className="text-sm leading-relaxed">{project.content}</p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          {hasLiveLink && (
            <div className="flex flex-wrap gap-3 pt-2">
              {hasGitHub ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg glass border border-white/10 hover:border-pink-500/40 hover:glow-pink transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg glass border border-white/10 hover:border-pink-500/40 hover:glow-pink transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

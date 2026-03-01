"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Lock, Github, Maximize2 } from "lucide-react"
import { Project } from "@/data"

interface ProjectCardProps extends Project {
  onClick?: () => void
  isHovering?: boolean
}

export function ProjectCard(props: ProjectCardProps) {
  const { title, description, content, technologies, href, onClick, isHovering = false } = props;
  const isPrivate = props.private;
  const isExpandable = !!onClick;
  const hasGithub = href?.includes('github.com');

  const cardInner = (
    <Card
      className="
        project-card group h-full relative overflow-hidden
        glass hover-glow
        border border-white/10 hover:border-pink-500/40
        transition-all duration-300 cursor-pointer
      "
    >
      {/* Cursor spotlight */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovering ? "opacity-100" : "opacity-0"}`}
        style={{
          background: "radial-gradient(circle 260px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(236, 72, 153, 0.15), transparent 100%)"
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg truncate">
                {title}
              </CardTitle>
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
            <CardDescription className="line-clamp-2">
              {description}
            </CardDescription>
          </div>

          {href &&
            <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border bg-white/5 border-white/10 group-hover:bg-pink-500/10 group-hover:border-pink-500/30">
              {isExpandable ? (
                <Maximize2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              ) : isPrivate ? (
                <Lock className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              ) : hasGithub ? (
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              ) : (
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </div>
          }
        </div>
      </CardHeader>

      <CardContent className="relative z-10 space-y-4">
        {/* Content text */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {content}
        </p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="
                px-2.5 py-1 text-xs font-medium rounded-md
                bg-pink-500/10 border border-pink-500/20
                text-pink-300
                transition-all duration-300
                group-hover:bg-pink-500/20 group-hover:border-pink-500/30
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        {isExpandable || <ExternalLink className="w-5 h-5 text-pink-500" />}
      </div>
    </Card>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className="block h-full w-full text-left">
        {cardInner}
      </button>
    )
  }

  return (
    href ?
      <Link href={href} target="_blank" className="block h-full">
        {cardInner}
      </Link>
      : <div className="block h-full">
        {cardInner}
      </div>
  )
}

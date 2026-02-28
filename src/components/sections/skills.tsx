"use client"

import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories } from "@/data"
import { Icon } from "@/components/ui/icon"

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".skill-card")
    if (!cards) return

    cards.forEach(card => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-24"
      id="skills"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background decoration */}
      <div className="blob-pink w-96 h-96 top-1/4 -left-48 opacity-20" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            Technical expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text-pink">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`
                skill-card group relative overflow-hidden
                glass hover:translate-y-[-5px]
                cursor-pointer
                border border-white/10 hover:border-pink-500/40
                transition-all duration-300
                animate-fade-in-up opacity-0
                stagger-${Math.min(categoryIndex + 1, 8)}
              `}
            >
              {/* Cursor spotlight — radial gradient centered at cursor position relative to this card */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovering ? "opacity-100" : "opacity-0"}`}
                style={{
                  background: "radial-gradient(circle 220px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(236, 72, 153, 0.18), transparent 100%)"
                }}
              />

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center border border-pink-500/20 group-hover:glow-pink transition-all duration-300">
                    <Icon name={category.icon} className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1.5 text-xs font-medium rounded-full
                        bg-white/5 border border-white/10
                        hover:border-pink-500/40 hover:bg-pink-500/10
                        transition-all duration-300 cursor-default
                      "
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useState } from "react"
import { socialLinks } from "@/data"
import { SocialButton } from "@/components/ui/social-button"

export function SocialsSection() {
  const [isHovering, setIsHovering] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".social-button")
    if (!cards) return
    cards.forEach(card => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
    })
  }

  return (
    <section className="relative px-6 py-24" id="socials">
      {/* Section divider */}
      <div className="section-divider w-full mx-auto mb-16" />

      <div className="mx-auto max-w-3xl text-center relative z-10">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            Let&apos;s connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find me <span className="gradient-text-pink">online</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello
          </p>
        </div>

        {/* Social buttons grid */}
        <div
          ref={gridRef}
          className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className={`animate-fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <SocialButton
                name={social.name}
                icon={social.icon}
                href={social.href}
                isHovering={isHovering}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

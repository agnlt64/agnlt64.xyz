"use client"

import { socialLinks } from "@/data"
import { SocialButton } from "@/components/ui/social-button"

export function SocialsSection() {
  return (
    <section className="relative px-6 py-24" id="socials">
      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mb-16" />

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
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className={`animate-fade-in-up opacity-0 stagger-${index + 1}`}
            >
              <SocialButton
                name={social.name}
                icon={social.icon}
                href={social.href}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach me at{" "}
            <a
              href="mailto:contact@agnlt64.xyz"
              className="text-primary hover:text-pink-400 transition-colors underline underline-offset-4"
            >
              contact@agnlt64.xyz
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

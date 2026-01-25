"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { siteConfig, navigation } from "@/data"
import { Icon } from "@/components/ui/icon"
import { ChevronsDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
      {/* Animated background blobs */}
      <div className="blob-pink w-96 h-96 -top-48 -left-48 animate-float opacity-60" />
      <div className="blob-pink w-80 h-80 top-1/4 -right-40 animate-float-delayed opacity-40" />
      <div className="blob-pink w-64 h-64 bottom-20 left-1/4 animate-float opacity-30" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-4xl z-10">
        {/* Main content */}
        <div className="mb-10 text-center">
          {/* Greeting badge */}
          <div className="animate-fade-in-up opacity-0 stagger-1 mb-6">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm border-pink-500/30 bg-pink-500/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mr-2" />
              Available for opportunities
            </Badge>
          </div>

          {/* Main title */}
          <h1 className="mb-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-fade-in-up opacity-0 stagger-2">
            <span className="block text-white/90">Hey, I&apos;m</span>
            <span className="gradient-text-pink animate-text-glow">{siteConfig.name}</span>
          </h1>

          {/* Tagline with typewriter effect appearance */}
          <p className="text-xl md:text-2xl text-muted-foreground text-balance animate-fade-in-up opacity-0 stagger-3 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Navigation badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up opacity-0 stagger-4">
          {navigation.map((item, index) => (
            <Link key={item.name} href={item.href} className="inline-block group">
              <Badge
                variant="secondary"
                className={`
                  px-5 py-2.5 text-sm font-medium
                  glass
                  hover:text-pink-400
                  transition-all duration-300 cursor-pointer
                  stagger-${index + 1}
                `}
              >
                <Icon name={item.icon} className="w-4 h-4 mr-2 group-hover:text-pink-400 transition-colors" />
                {item.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in opacity-0 stagger-5">
        <Link
          href="#programming"
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronsDown className="w-5 h-5 animate-float" />
        </Link>
      </div>
    </section>
  )
}

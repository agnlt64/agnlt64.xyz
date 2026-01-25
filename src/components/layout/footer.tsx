"use client"

import { siteConfig } from "@/data"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold">
              <span className="text-white">agnlt64</span>
              <span className="text-pink-500">.xyz</span>
            </span>
          </div>

          {/* Center content */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>
    </footer>
  )
}

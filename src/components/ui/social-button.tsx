"use client"

import Link from "next/link"
import { Icon } from "@/components/ui/icon"
import { SocialLink } from "@/data"

interface SocialButtonProps extends SocialLink {
  isHovering?: boolean
}

export function SocialButton({ name, icon, href, isHovering = false }: SocialButtonProps) {
  return (
    <Link href={href} target="_blank" className="block">
      <div
        className="
          social-button group relative overflow-hidden
          flex flex-col items-center justify-center gap-2
          px-4 py-5 rounded-xl
          glass border border-white/10
          hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(236,72,153,0.12)]
          transition-all duration-300 cursor-pointer
          hover:translate-y-[-5px]
        "
      >
        {/* Cursor spotlight */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovering ? "opacity-100" : "opacity-0"}`}
          style={{ background: "radial-gradient(circle 160px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(236, 72, 153, 0.18), transparent 100%)" }}
        />

        {/* Icon container */}
        <div className="relative z-10 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-pink-500/15 group-hover:border-pink-500/25 transition-all duration-300">
          <Icon name={icon} className="w-5 h-5 text-muted-foreground group-hover:text-pink-300 transition-colors duration-300" />
        </div>

        {/* Label */}
        <span className="relative z-10 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    </Link>
  )
}

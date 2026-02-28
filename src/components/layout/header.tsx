"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 m-2 p-6 z-50
        transition-all duration-500
        rounded-2xl
        ${scrolled ? 'glass-strong py-4' : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="block group">
          <h1 className="text-2xl font-bold">
            <span className="text-white">agnlt64</span>
            <span className="text-pink-500">.xyz</span>
          </h1>
        </Link>

        {/* Optional: Add nav links here for desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#programming"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/#socials"
            className="px-4 py-2 text-sm font-medium rounded-full glass border border-pink-500/30 hover:border-pink-500/60 hover:glow-pink transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

import { 
  Code,
  Crown,
  BookOpen,
  Zap,
  Monitor,
  Server,
  Wrench,
  Cpu,
  GraduationCap,
  LucideIcon,
  Bot
} from "lucide-react"
import {
  siYoutube,
  siInstagram,
  siDiscord,
  siGithub,
  SimpleIcon
} from "simple-icons"
import { ComponentType } from "react"

// Custom Microsoft icon component
function MicrosoftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.4 0H0v11.4h11.4V0z" />
      <path d="M24 0H12.6v11.4H24V0z" />
      <path d="M11.4 12.6H0V24h11.4V12.6z" />
      <path d="M24 12.6H12.6V24H24V12.6z" />
    </svg>
  )
}

type IconComponent = LucideIcon | ComponentType<{ className?: string }> | SimpleIcon

export const iconMap: Record<string, IconComponent> = {
  Code,
  Crown,
  BookOpen,
  Zap,
  Monitor,
  Server,
  Wrench,
  Cpu,
  Bot,
  GraduationCap,
  Youtube: siYoutube,
  Instagram: siInstagram,
  Discord: siDiscord,
  Github: siGithub,
  Microsoft: MicrosoftIcon
}

interface IconProps {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    return null
  }
  
  // Check if it's a SimpleIcon (has 'path' property)
  if ('path' in IconComponent) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={IconComponent.path} />
      </svg>
    )
  }
  
  // It's a Lucide icon or React component
  const Component = IconComponent as LucideIcon | ComponentType<{ className?: string }>
  return <Component className={className} />
}

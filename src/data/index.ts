
export type Config = {
    name: string;
    tagline: string;
}

export const siteConfig: Config = {
  name: "agnlt64",
  tagline: "Student • Software Engineer • Tech Enthusiast",
}

export type NavItem = {
  name: string;
  href: string;
  icon: string;
}

export const navigation: NavItem[] = [
  { name: "Programming", href: "#programming", icon: "Code" },
  { name: "Electronics", href: "#electronics", icon: "Zap" }
]

export type AboutCard = {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: string;
}

export const aboutCards: AboutCard[] = [
  {
    id: "programming",
    title: "Software Engineering",
    description: "Passionate about clean code, elegant solutions, and building things that matter.",
    content: "I love diving deep into complex problems and crafting efficient, maintainable solutions. Always learning new technologies and best practices.",
    icon: "Code"
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Building and tinkering with hardware, from microcontrollers to embedded systems.",
    content: "There's something magical about bringing ideas to life through circuits and code, creating tangible solutions to real-world problems.",
    icon: "Zap"
  }
]

export type Education = {
  degree: string;
  institution: string;
  graduation: string;
  description: string;
  icon: string;
}

export const education: Education = {
  degree: "Bachelor in Computer Science",
  institution: "IUT informatique d'Amiens",
  graduation: "Expected Graduation 2027",
  description: "Focusing on software engineering, algorithms, and system design. Currently maintaining a strong GPA while working on various personal projects and contributing to open source.",
  icon: "GraduationCap"
}

export type Internship = {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

export const internships: Internship[] = [
  {
    title: "Introductory Internship",
    company: "Microsoft France",
    period: "June 2022",
    description: "A week-long internship providing insights into the tech industry, Microsoft culture, and hands-on experience with software development practices. During the week, I participated in a project group and presented our innovation to a panel of various people.",
    icon: "Microsoft"
  }
]

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code",
    skills: ["C", "C++", "Python", "Go", "HTML", "CSS", "TypeScript"]
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "Tailwind", "shadcn"]
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Flask", "Django", "OpenAI API"]
  },
  {
    title: "Databases",
    icon: "BookOpen",
    skills: ["SQLite", "MariaDB", "MySQL", "PostgreSQL", "Prisma"]
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Visual Studio", "Figma", "GitHub Copilot"]
  },
  {
    title: "Operating Systems",
    icon: "Monitor",
    skills: ["Windows", "macOS", "Arch Linux", "Fedora", "Mint", "Ubuntu"]
  },
  {
    title: "Hardware",
    icon: "Cpu",
    skills: ["Raspberry Pi 4", "Raspberry Pi Pico", "Arduino"]
  },
  {
    title: "Hosting",
    icon: "Server",
    skills: ["Vercel", "VPS Management", "Netlify", "Cloud Deployment", "Docker"]
  }
]

export type Project = {
  title: string;
  description: string;
  content: string;
  technologies: string[];
  href: string;
  private?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "GoUPJV",
    description: "A carpooling app for my university.",
    content: "A group project for my university. It allows students to find carpooling partners for their university classes. It is currently in development.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "Tailwind", "JavaScript"],
    href: "https://github.com/agnlt64/go-upjv",
    featured: true,
  },
  {
    title: "GoGPT",
    description: "Terminal-based ChatGPT client.",
    content: "A terminal-based client for interacting with ChatGPT, designed for quick and efficient conversations. The TUI is made using various Go libraries to ensure a smooth user experience.",
    technologies: ["Go", "OpenAI's API"],
    href: "https://github.com/agnlt64/go-gpt",
    featured: true,
  },
  {
    title: "C everyday",
    description: "Programming various algorithms in C everyday.",
    content: "I created this repository to practice C programming by implementing various algorithms and data structures. It's a great way to improve my coding skills and learn new techniques. I uploaded a new video every day on my YouTube channel. I chose to stop because I was going insane.",
    technologies: ["C", "Raylib"],
    href: "https://github.com/agnlt64/c-everyday"
  },
  {
    title: "Meta React",
    description: "A programming language that compiles to Next.js code.",
    content: "Meta React is a new programming language designed to simplify the development of Next.js applications. It is focused on Static Site Generation (SSG) and offers a more intuitive syntax.",
    technologies: ["TypeScript", "Next.js"],
    href: "https://github.com/agnlt64/meta-react",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    content: "A sleek, modern portfolio website built with Next.js and Tailwind CSS. Showcases my projects, skills, and background in a clean, responsive design.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn"],
    href: "#"
  },
  {
    title: "Python Search Engine",
    description: "A custom search engine that indexes a Python codebase.",
    content: "Parses your codebase using Python's native AST module and indexes all of the functions. The results are displayed in a user-friendly web export type.",
    technologies: ["Python", "Flask", "JavaScript"],
    href: "https://github.com/agnlt64/PPI"
  },
  {
    title: "Next.js clone",
    description: "Next.js website clone in vanilla web technologies.",
    content: "A very loyal copy of the Next.js official website. Not the whole website, and contains custom pages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/agnlt64/nextjs-clone",
  },
  {
    title: "Java Tool",
    description: "A command-line tool in Go to manage Java projects.",
    content: "A CLI tool to simplify the management of Java projects. Features include project scaffolding and simplifies building. No IDE required.",
    technologies: ["Go"],
    href: "https://github.com/agnlt64/java-tool"
  },
  {
    title: "Journal",
    description: "A personal journal application.",
    content: "An application to keep track of daily thoughts, and reflections. Features a clean export type and secure data storage. There is support for images and additional security features, such as per-entry password protection.",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS"],
    href: "#",
    private: true,
    featured: true,
  },
]

export type SocialLink = {
  name: string;
  icon: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    icon: "Youtube",
    href: "https://www.youtube.com/@agnlt"
  },
  {
    name: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/anto.gt07/"
  },
  {
    name: "Discord",
    icon: "Discord",
    href: "https://discord.com/users/775767274774462484"
  },
  {
    name: "GitHub",
    icon: "Github",
    href: "https://github.com/agnlt64"
  }
]

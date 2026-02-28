import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectCard } from "@/components/ui/project-card"
import { projects } from "@/data"

export const metadata = {
  title: "Projects — agnlt64.xyz",
  description: "All projects by agnlt64",
}

export default function ProjectsPage() {
  const totalTechs = new Set(projects.flatMap(p => p.technologies)).size

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background — same as homepage */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom, #050505 0%, #0a0a0a 50%, #050505 100%)
          `
        }}
      />
      <div className="noise-overlay" />

      <Header />

      <main>
        <section className="relative px-6 pt-40 pb-24">
          {/* Background blobs */}
          <div className="blob-pink w-96 h-96 top-0 -left-48 opacity-15" />
          <div className="blob-pink w-64 h-64 bottom-1/4 -right-32 opacity-20" />

          <div className="mx-auto max-w-6xl relative z-10">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to home
            </Link>

            {/* Page header */}
            <div className="mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block animate-fade-in opacity-0 stagger-1">
                My work
              </span>
              <div className="flex items-end gap-4 mb-4 flex-wrap animate-fade-in-up opacity-0 stagger-2">
                <h1 className="text-5xl md:text-6xl font-bold">
                  All <span className="gradient-text-pink">Projects</span>
                </h1>
                <span className="glass border border-white/10 text-muted-foreground text-sm font-medium px-3 py-1.5 rounded-full mb-1">
                  {projects.length} projects
                </span>
              </div>
              <p className="text-muted-foreground max-w-2xl text-lg animate-fade-in-up opacity-0 stagger-3">
                Everything I&apos;ve built — from tools and experiments to team projects and side ventures.
              </p>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
              {[
                { label: "Total projects", value: projects.length },
                { label: "Technologies", value: totalTechs },
                { label: "Open source", value: projects.filter(p => !p.private).length },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="glass border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
                >
                  <span className="text-2xl font-bold gradient-text-pink">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="section-divider mb-12" />

            {/* Projects grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`animate-fade-in-up opacity-0 stagger-${Math.min(index + 1, 8)}`}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    content={project.content}
                    technologies={project.technologies}
                    href={project.href}
                    private={project.private}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

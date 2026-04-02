import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { EducationSection } from "@/components/sections/education";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { SocialsSection } from "@/components/sections/socials";
import { ReflectionSection } from "@/components/sections/reflection";

export default async function HomePage() {

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Multi-layer gradient background */}
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

      {/* Main content */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ReflectionSection />
        <ProjectsSection />
        <SocialsSection />
      </main>
      <Footer />
    </div>
  )
}

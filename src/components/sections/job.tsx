import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { jobs } from "@/data";
import { Icon } from "@/components/ui/icon";
import { Calendar, MapPin } from "lucide-react";

export function JobSection() {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".job-card");
    if (!cards) return;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-8 md:py-18"
      id="education"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="section-divider w-full mx-auto mb-16" />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            Professional experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Jobs
          </h2>
        </div>

        <div className="relative">
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="
                  job-card group relative overflow-hidden
                  glass
                  hover-glow
                  cursor-pointer
                  border border-white/10 hover:border-pink-500/40
                  transition-all duration-300
                  animate-fade-in-up opacity-0
                  md:ml-16
                "
              >
                {/* Cursor spotlight */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovering ? "opacity-100" : "opacity-0"}`}
                  style={{ background: "radial-gradient(circle 260px at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(236, 72, 153, 0.15), transparent 100%)" }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex flex-col items-start gap-4">
                      {/* Icon container */}
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-linear-to-b from-pink-500/20 to-pink-600/10 flex items-center justify-center border border-pink-500/20 group-hover:glow-pink transition-all duration-300 shrink-0">
                          <Icon name={job.icon} className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-2xl mb-2 font-semibold">
                          {job.role}
                        </span>
                      </div>

                      <CardDescription className="text-base flex flex-col gap-1">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-pink-500" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-pink-500" />
                          {job.during}
                        </span>
                      </CardDescription>
                    </div>

                    {/* Status badge */}
                    {job.currentJob &&
                      <div className="shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">
                          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mr-2" />
                          Current job
                        </span>
                      </div>
                    }
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col gap-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
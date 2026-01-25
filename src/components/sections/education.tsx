"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { education, internships } from "@/data"
import { Icon } from "@/components/ui/icon"
import { Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  return (
    <section className="relative px-6 py-24">
      {/* Section divider */}
      <div className="section-divider max-w-4xl mx-auto mb-16" />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            Academic background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
        </div>

        {/* Timeline-style education card */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-pink-500/50 via-pink-500/20 to-transparent hidden md:block" />

          <Card
            className="
              group relative overflow-hidden
              glass
              hover-glow
              cursor-pointer
              border border-white/10 hover:border-pink-500/40
              transition-all duration-300
              animate-fade-in-up opacity-0
              md:ml-16
            "
          >
            {/* Gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            {/* Timeline dot */}
            <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-pink-500 glow-pink-strong hidden md:block" />

            <CardHeader className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center border border-pink-500/20 group-hover:glow-pink transition-all duration-300 shrink-0">
                    <Icon name={education.icon} className="w-8 h-8 text-primary" />
                  </div>

                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {education.degree}
                    </CardTitle>
                    <CardDescription className="text-base flex flex-col gap-1">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-pink-500" />
                        {education.institution}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-pink-500" />
                        {education.graduation}
                      </span>
                    </CardDescription>
                  </div>
                </div>

                {/* Status badge */}
                <div className="shrink-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mr-2" />
                    In Progress
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-muted-foreground leading-relaxed">
                {education.description}
              </p>

              {/* Decorative elements */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {['Algorithms', 'System Design', 'Software Engineering', 'Open Source'].map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internships Section */}
          {internships.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 ml-0 md:ml-16">Internships</h3>
              
              <div className="space-y-6">
                {internships.map((internship, index) => (
                  <Card
                    key={index}
                    className="
                      group relative overflow-hidden
                      glass
                      hover-glow
                      cursor-pointer
                      border border-white/10 hover:border-pink-500/40
                      transition-all duration-300
                      animate-fade-in-up opacity-0
                      md:ml-16
                    "
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    {/* Gradient accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    {/* Timeline dot */}
                    <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-pink-500/60 border-2 border-pink-500/40 hidden md:block" />

                    <CardHeader className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {/* Icon container */}
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center border border-pink-500/20 group-hover:glow-pink transition-all duration-300 shrink-0">
                            <Icon name={internship.icon} className="w-8 h-8 text-primary" />
                          </div>

                          <div>
                            <CardTitle className="text-xl mb-2">
                              {internship.title}
                            </CardTitle>
                            <CardDescription className="text-base flex flex-col gap-1">
                              <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-pink-500" />
                                {internship.company}
                              </span>
                              <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-pink-500" />
                                {internship.period}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground leading-relaxed">
                        {internship.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

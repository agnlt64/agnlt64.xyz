"use client"

import { useIutMode } from "@/hooks/iut-mode";
import { iutReflections } from "@/data";
import { Icon } from "@/components/ui/icon";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ReflectionSection() {
  const iutMode = useIutMode();

  if (!iutMode) return null;

  return (
    <section className="relative px-6 py-8 md:py-18" id="reflection">
      <div className="section-divider w-full mx-auto mb-16" />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            Bilan de parcours
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réflexion &amp; <span className="gradient-text-pink">Acquis</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Compétences développées, difficultés surmontées et prise de recul sur deux années de BUT Informatique.
          </p>
        </div>

        {/* Reflection cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {iutReflections.map((entry, index) => (
            <Card
              key={index}
              className="
                group relative overflow-hidden
                glass
                hover-glow
                border border-white/10 hover:border-pink-500/40
                transition-all duration-300
                animate-fade-in-up opacity-0
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Pink top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

              <CardHeader className="relative z-10 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass-pink border border-pink-500/25 flex items-center justify-center shrink-0 group-hover:border-pink-500/50 transition-all duration-300">
                    <Icon name={entry.icon} className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{entry.title}</h3>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {entry.body}
                </p>

                {entry.tags && entry.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

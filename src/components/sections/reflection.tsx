"use client"

import { useIutMode } from "@/hooks/iut-mode";
import { iutReflections } from "@/data";
import { Icon } from "@/components/ui/icon";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SoftSkillsWidget, FlipCardsWidget, AgileRolesWidget, LanguageCloudWidget } from "@/components/sections/reflection-widgets";
import { useState } from "react";
import { FileText, X } from "lucide-react";

export function ReflectionSection() {
  const iutMode = useIutMode();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!iutMode) return null;

  const openEntry = openIndex !== null ? iutReflections[openIndex] : null;

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

        {/* Reflection cards — 1 par ligne */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {iutReflections.map((entry, index) => (
            <Card
              key={index}
              className="
                group relative
                glass hover-glow
                border border-white/10 hover:border-pink-500/40
                transition-all duration-300
                animate-fade-in-up opacity-0
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Pink top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />

              <CardHeader className="relative z-10 pb-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg glass-pink border border-pink-500/25 flex items-center justify-center shrink-0 group-hover:border-pink-500/50 transition-all duration-300">
                      <Icon name={entry.icon} className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{entry.title}</h3>
                  </div>
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="hover:cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground border border-white/10 hover:border-pink-500/30 hover:text-pink-300 glass transition-all duration-300 shrink-0"
                    aria-label="Voir les détails"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Détails
                  </button>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0 gap-2">
                {entry.widget === "soft-skills"    && <SoftSkillsWidget entry={entry} />}
                {entry.widget === "flip-cards"     && <FlipCardsWidget entry={entry} />}
                {entry.widget === "agile-roles"    && <AgileRolesWidget entry={entry} />}
                {entry.widget === "language-cloud" && <LanguageCloudWidget entry={entry} />}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail dialog */}
      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        {openEntry && (
          <DialogContent className="max-w-md rounded-md border-0 p-0 overflow-hidden glass-strong shadow-[0_0_60px_rgba(236,72,153,0.2)]">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500/80 to-transparent" />
            <div className="p-7">
              <DialogHeader className="mb-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg glass-pink border border-pink-500/25 shrink-0">
                      <Icon name={openEntry.icon} className="w-4 h-4 text-primary" />
                    </div>
                    <DialogTitle className="text-xl font-semibold">{openEntry.title}</DialogTitle>
                  </div>
                  <DialogClose className="hover:cursor-pointer flex items-center justify-center w-8 h-8 rounded-lg glass border border-white/10 hover:border-pink-500/30 hover:text-pink-300 text-muted-foreground transition-all duration-300 shrink-0">
                    <X className="w-4 h-4" />
                  </DialogClose>
                </div>
              </DialogHeader>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {openEntry.body}
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

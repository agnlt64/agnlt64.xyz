"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutCards as _about, iutAboutCards } from "@/data";
import { Icon } from "@/components/ui/icon";
import { useIutMode } from "@/hooks/iut-mode";
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('about');
  const iutMode = useIutMode();
  const aboutCards = iutMode ? iutAboutCards : _about;

  return (
    <section className="relative px-6 py-8 md:py-18" id="about">
      {/* Section divider */}
      <div className="section-divider w-full mx-auto mb-16" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">
            {t('label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')} <span className="gradient-text-pink">{t('titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className={`grid gap-6 ${iutMode ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {aboutCards.map((card, index) => (
            <Card
              key={card.id}
              id={card.id}
              className={`
                gap-2
                group relative overflow-hidden
                glass
                hover-glow
                cursor-pointer
                border border-white/10 hover:border-pink-500/40
                transition-all duration-500
                animate-fade-in-up opacity-0
                stagger-${index + 1}
              `}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center group-hover:glow-pink transition-all duration-300 border border-pink-500/20">
                    <Icon name={card.icon} className="w-5 h-5 md:w-7 md:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

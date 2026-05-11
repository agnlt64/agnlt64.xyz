"use client"

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { useTranslations } from 'next-intl';
import type {
  SoftSkillsEntry,
  FlipCardsEntry,
  AgileRolesEntry,
  LanguageCloudEntry,
} from "@/data";

export function SoftSkillsWidget({ entry }: { entry: SoftSkillsEntry }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-2">
      {entry.skills.map((skill, i) => (
        <span
          key={skill.label}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full
            glass-pink border border-pink-500/20
            hover:border-pink-500/50 hover:glow-pink
            animate-scale-in opacity-0
            transition-all duration-300 cursor-default
            text-sm font-medium
          "
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <Icon name={skill.icon} className="w-4 h-4 text-primary" />
          {skill.label}
        </span>
      ))}
    </div>
  );
}

function FlipCard({
  card,
  index,
}: {
  card: FlipCardsEntry["cards"][0];
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-28 cursor-pointer rounded-xl animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 120}ms` }}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Face avant — le défi */}
      <div className={`absolute inset-0 rounded-xl glass-pink border border-pink-500/25 flex items-center justify-center p-3 transition-all duration-300 ${flipped ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
        <span className="text-xs font-semibold text-center text-pink-300 leading-snug">
          {card.challenge}
        </span>
      </div>
      {/* Face arrière — la leçon */}
      <div className={`absolute inset-0 rounded-xl glass border border-pink-500/40 bg-pink-500/10 flex items-center justify-center p-3 transition-all duration-300 ${flipped ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
        <span className="text-xs text-center text-muted-foreground leading-relaxed italic">
          {card.lesson}
        </span>
      </div>
    </div>
  );
}

export function FlipCardsWidget({ entry }: { entry: FlipCardsEntry }) {
  const t = useTranslations('reflection');

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mt-2">
        {entry.cards.map((card, i) => (
          <FlipCard key={i} card={card} index={i} />
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground/40 mt-2">
        {t('clickToReveal')}
      </p>
    </div>
  );
}

export function AgileRolesWidget({ entry }: { entry: AgileRolesEntry }) {
  const [activeRole, setActiveRole] = useState<number>(0);

  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-3">
        {entry.roles.map((role, i) => (
          <button
            key={role.name}
            onClick={() => setActiveRole(activeRole === i ? 0 : i)}
            className={`
              flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl
              border transition-all duration-300 text-xs font-semibold
              animate-fade-in-up opacity-0
              hover:cursor-pointer
              hover:scale-105
              ${activeRole === i
                ? "glass-pink border-pink-500/50 glow-pink text-pink-300"
                : "glass border-white/10 hover:border-pink-500/30 text-muted-foreground hover:text-white"
              }
            `}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Icon name={role.icon} className="w-4 h-4" />
            {role.name}
          </button>
        ))}
      </div>
      <div className="mt-3">
        {activeRole !== null && (
          <p className="text-xs text-muted-foreground leading-relaxed animate-fade-in">
            {entry.roles[activeRole].description}
          </p>
        )}
      </div>
    </div>
  );
}

export function LanguageCloudWidget({ entry }: { entry: LanguageCloudEntry }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {entry.languages.map((lang, i) => (
        <span
          key={lang.name}
          className="
            relative group/lang
            px-3 py-1.5 text-xs font-medium rounded-full
            bg-white/5 border border-white/10
            hover:border-pink-500/40 hover:bg-pink-500/10
            animate-scale-in opacity-0
            transition-all duration-300 cursor-default
          "
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {lang.name}
          <span className="
            absolute -top-8 left-1/2 -translate-x-1/2
            px-2 py-1 text-[10px] rounded-md whitespace-nowrap z-10
            glass-strong border border-white/10
            opacity-0 group-hover/lang:opacity-100
            transition-opacity duration-200 pointer-events-none
          ">
            {lang.paradigm}
          </span>
        </span>
      ))}
    </div>
  );
}

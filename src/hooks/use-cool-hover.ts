import { useState, useRef } from "react";

export function useCoolHover<T extends HTMLElement>(cssClass: string) {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const cards = ref.current?.querySelectorAll<HTMLElement>(cssClass);
    if (!cards) return;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  };

  return {
    isHovering, setIsHovering, handleMouseMove, ref
  };
}
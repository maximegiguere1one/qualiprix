import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export const useScrollProgress = (maxOffset: number = 0.06) => {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = 800; // Parallax effect stops after 800px
          const normalized = Math.min(scrolled / maxScroll, 1);
          setProgress(normalized * maxOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxOffset, prefersReducedMotion]);

  return progress;
};

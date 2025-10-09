import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

export const useParallaxLayers = (speeds: number[] = [0.03, 0.05, 0.08]) => {
  const [offsets, setOffsets] = useState<number[]>(speeds.map(() => 0));
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
          
          setOffsets(speeds.map(speed => normalized * speed));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speeds, prefersReducedMotion]);

  return offsets;
};

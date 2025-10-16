import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseStaggeredRevealOptions {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
  elementCount?: number;
}

interface StaggeredRevealState {
  containerRef: React.RefObject<any>;
  isContainerVisible: boolean;
  getElementDelay: (index: number) => number;
  getElementClass: (index: number, baseClasses: string) => string;
}

export const useStaggeredReveal = (
  options: UseStaggeredRevealOptions = {}
): StaggeredRevealState => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px',
    staggerDelay = 150,
    elementCount = 4
  } = options;
  
  const containerRef = useRef<any>(null);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsContainerVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainerVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, prefersReducedMotion]);

  const getElementDelay = (index: number): number => {
    return prefersReducedMotion ? 0 : index * staggerDelay;
  };

  const getElementClass = (index: number, baseClasses: string): string => {
    if (prefersReducedMotion || isContainerVisible) {
      return `${baseClasses} opacity-100 translate-y-0 scale-100`;
    }
    return `${baseClasses} opacity-0 translate-y-10 scale-95`;
  };

  return {
    containerRef,
    isContainerVisible,
    getElementDelay,
    getElementClass,
  };
};

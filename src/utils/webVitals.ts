// Core Web Vitals monitoring
// Uncomment and use when web-vitals package is installed
// import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

export const reportWebVitals = () => {
  // Track Core Web Vitals for SEO optimization
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('LCP:', entry);
        // Send to analytics in production
      }
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Browser doesn't support
    }
  }
};

// Helper to preload critical images
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Core Web Vitals monitoring for SEO optimization
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const reportWebVitals = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  // LCP (Largest Contentful Paint) - Target < 2.5s
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
    const lcpValue = lastEntry.renderTime || lastEntry.loadTime || 0;
    console.log('🎯 LCP:', Math.round(lcpValue), 'ms');
    
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        name: 'LCP',
        value: Math.round(lcpValue),
        event_category: 'Web Vitals'
      });
    }
  });
  
  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    console.warn('LCP not supported');
  }

  // FID (First Input Delay) - Target < 100ms
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fidEntry = entry as PerformanceEntry & { processingStart?: number };
      const fidValue = fidEntry.processingStart ? fidEntry.processingStart - entry.startTime : 0;
      console.log('⚡ FID:', Math.round(fidValue), 'ms');
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'FID',
          value: Math.round(fidValue),
          event_category: 'Web Vitals'
        });
      }
    }
  });
  
  try {
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    console.warn('FID not supported');
  }

  // CLS (Cumulative Layout Shift) - Target < 0.1
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
      if (!clsEntry.hadRecentInput) {
        clsValue += clsEntry.value || 0;
        console.log('📐 CLS:', clsValue.toFixed(3));
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals'
          });
        }
      }
    }
  });
  
  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.warn('CLS not supported');
  }
};

// Preload critical images for LCP optimization
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/src/assets/hero-kitchen.jpg',
    '/src/assets/logo.png',
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Performance monitoring utility

type Metric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

export const measurePageLoad = (): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Use the Navigation Timing API to get detailed timing information
    const [timing] = window.performance.getEntriesByType('navigation');
    
    if (timing && 'loadEventEnd' in timing) {
      const navTiming = timing as PerformanceNavigationTiming;
      const metrics: Metric[] = [
        {
          name: 'First Contentful Paint',
          value: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          rating: 'good',
        },
        {
          name: 'Largest Contentful Paint',
          value: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime || 0,
          rating: 'good',
        },
        {
          name: 'Time to First Byte',
          value: navTiming.responseStart - navTiming.requestStart,
          rating: 'good',
        },
        {
          name: 'Total Blocking Time',
          value: performance.getEntriesByName('total-blocking-time')[0]?.value || 0,
          rating: 'good',
        },
        {
          name: 'Cumulative Layout Shift',
          value: performance.getEntriesByName('cumulative-layout-shift')[0]?.value || 0,
          rating: 'good',
        },
      ];

      // Log metrics to console in development
      if (process.env.NODE_ENV === 'development') {
        console.group('Performance Metrics');
        metrics.forEach(({ name, value, rating }) => {
          console.log(`${name}: ${value.toFixed(2)}ms - ${rating}`);
        });
        console.groupEnd();
      }

      // Send metrics to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Replace with your analytics implementation
        // Example: sendToAnalytics(metrics);
      }
    }
  }
};

// Track Web Vitals
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export { reportWebVitals };

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // Measure page load performance
    if (window.addEventListener) {
      window.addEventListener('load', measurePageLoad, false);
    }
    
    // Report Web Vitals
    reportWebVitals((metric) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(metric);
      }
      // In production, send metrics to your analytics service
    });
  }
};

// Export default for easier imports
export default {
  measurePageLoad,
  reportWebVitals,
  initPerformanceMonitoring,
};

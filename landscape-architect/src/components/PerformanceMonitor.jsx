import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics
        console.log(`${entry.name}: ${entry.value}`);
        
        // Send to analytics if needed
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: entry.name,
            value: Math.round(entry.value),
            non_interaction: true,
          });
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor image loading performance
    const imageObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.initiatorType === 'img') {
          console.log(`Image loaded: ${entry.name} in ${entry.duration}ms`);
          
          // Track slow loading images
          if (entry.duration > 1000) {
            console.warn(`Slow image load: ${entry.name} took ${entry.duration}ms`);
          }
        }
      }
    });

    imageObserver.observe({ entryTypes: ['resource'] });

    // Monitor user interactions
    let interactionCount = 0;
    const trackInteraction = () => {
      interactionCount++;
      if (interactionCount === 1) {
        // First interaction
        const timeToInteractive = performance.now();
        console.log(`Time to first interaction: ${timeToInteractive}ms`);
      }
    };

    document.addEventListener('click', trackInteraction);
    document.addEventListener('scroll', trackInteraction);

    // Monitor memory usage
    const checkMemory = () => {
      if (performance.memory) {
        const memoryInfo = performance.memory;
        console.log('Memory usage:', {
          used: Math.round(memoryInfo.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memoryInfo.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memoryInfo.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    };

    // Check memory every 30 seconds
    const memoryInterval = setInterval(checkMemory, 30000);

    // Cleanup
    return () => {
      observer.disconnect();
      imageObserver.disconnect();
      document.removeEventListener('click', trackInteraction);
      document.removeEventListener('scroll', trackInteraction);
      clearInterval(memoryInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor; 
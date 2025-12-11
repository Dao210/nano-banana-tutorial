interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  fcp?: number
  ttfb?: number
  navigationStart?: number
  domContentLoaded?: number
  loadComplete?: number
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private observers: { [key: string]: PerformanceObserver } = {}

  constructor() {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      this.init()
    }
  }

  private init() {
    // Monitor LCP (Largest Contentful Paint)
    this.observeLCP()

    // Monitor FID (First Input Delay)
    this.observeFID()

    // Monitor CLS (Cumulative Layout Shift)
    this.observeCLS()

    // Monitor FCP (First Contentful Paint)
    this.observeFCP()

    // Monitor Navigation Timing
    this.observeNavigationTiming()
  }

  private observeLCP() {
    this.observers.lcp = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      this.metrics.lcp = lastEntry.startTime
      this.reportMetric('LCP', this.metrics.lcp)
    })

    this.observers.lcp.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  private observeFID() {
    this.observers.fid = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        const timingEntry = entry as PerformanceEventTiming
        this.metrics.fid = timingEntry.processingStart - timingEntry.startTime
        this.reportMetric('FID', this.metrics.fid)
      })
    })

    this.observers.fid.observe({ entryTypes: ['first-input'] })
  }

  private observeCLS() {
    let clsValue = 0
    let clsEntries: PerformanceEntry[] = []

    this.observers.cls = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsEntries.push(entry)
          clsValue += (entry as any).value
        }
      })

      this.metrics.cls = clsValue
      this.reportMetric('CLS', this.metrics.cls)
    })

    this.observers.cls.observe({ entryTypes: ['layout-shift'] })
  }

  private observeFCP() {
    this.observers.fcp = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        this.metrics.fcp = entry.startTime
        this.reportMetric('FCP', this.metrics.fcp)
      })
    })

    this.observers.fcp.observe({ entryTypes: ['paint'] })
  }

  private observeNavigationTiming() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

        if (navigation) {
          this.metrics.ttfb = navigation.responseStart - navigation.requestStart
          this.metrics.navigationStart = navigation.fetchStart
          this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart
          this.metrics.loadComplete = navigation.loadEventEnd - navigation.fetchStart

          this.reportMetric('TTFB', this.metrics.ttfb)
          this.reportMetric('Navigation Start', this.metrics.navigationStart)
          this.reportMetric('DOM Content Loaded', this.metrics.domContentLoaded)
          this.reportMetric('Load Complete', this.metrics.loadComplete)
        }
      }, 0)
    })
  }

  private reportMetric(name: string, value: number) {
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${value}ms`)
    }

    // Check if metrics meet thresholds
    this.checkThresholds(name, value)
  }

  private checkThresholds(name: string, value: number) {
    const thresholds = {
      LCP: { good: 2500, needsImprovement: 4000 },
      FID: { good: 100, needsImprovement: 300 },
      CLS: { good: 0.1, needsImprovement: 0.25 },
      FCP: { good: 1800, needsImprovement: 3000 },
      TTFB: { good: 800, needsImprovement: 1800 },
    }

    const threshold = thresholds[name as keyof typeof thresholds]
    if (threshold) {
      if (value <= threshold.good) {
        console.log(`✅ ${name} is good: ${value}ms`)
      } else if (value <= threshold.needsImprovement) {
        console.log(`⚠️  ${name} needs improvement: ${value}ms`)
      } else {
        console.log(`❌ ${name} is poor: ${value}ms`)
      }
    }
  }

  public getMetrics() {
    return this.metrics
  }

  public disconnect() {
    Object.values(this.observers).forEach(observer => observer.disconnect())
  }
}

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor()

// Export for use in components
export default PerformanceMonitor

// TypeScript declarations for window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
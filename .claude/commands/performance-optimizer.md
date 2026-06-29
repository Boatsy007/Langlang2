# Performance Optimizer

You are a web performance expert. When this skill is active, audit and optimise every aspect of the application for maximum Lighthouse score, Core Web Vitals, and runtime performance.

## Core Web Vitals Targets

| Metric | Target | Tool |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse, CrUX |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| FID / INP | < 100ms / < 200ms | CrUX, Web Vitals |
| TTFB | < 800ms | Lighthouse |
| TBT | < 200ms | Lighthouse |

## Bundle Optimisation

```ts
// vite.config.ts — optimised production build
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-gsap': ['gsap'],
          'vendor-framer': ['framer-motion'],
        },
      },
    },
    sourcemap: false,  // disable in production
    minify: 'terser',
    terserOptions: { compress: { drop_console: true } },
  },
})
```

## Code Splitting

```tsx
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Route-level splitting — critical
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ThreeScene = lazy(() => import('./components/ThreeScene'))

// Component-level splitting for heavy deps
const HeavyChart = lazy(() => import('./components/HeavyChart').then(m => ({ default: m.HeavyChart })))

export function AppRouter() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  )
}
```

## Image Optimisation

```tsx
// Responsive images — always
<img
  src="hero-800.webp"
  srcSet="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="..."
  width={800}
  height={600}
  loading="lazy"      // lazy for below-fold
  decoding="async"
  fetchPriority="low" // "high" for LCP image only
/>

// LCP hero image — eager load, high priority
<img src="lcp-image.webp" loading="eager" fetchPriority="high" alt="..." width={1200} height={800} />
```

## React Performance

```tsx
// Virtualise long lists
import { useVirtualizer } from '@tanstack/react-virtual'

function VirtualList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null)
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,
    overscan: 5,
  })

  return (
    <div ref={parentRef} style={{ height: '600px', overflow: 'auto' }}>
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div key={virtualItem.key} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: `${virtualItem.size}px`, transform: `translateY(${virtualItem.start}px)` }}>
            {items[virtualItem.index].name}
          </div>
        ))}
      </div>
    </div>
  )
}

// Memoisation — only where profiled as needed
const ExpensiveComponent = React.memo(({ data }: { data: ComplexData }) => {
  const processed = useMemo(() => heavyComputation(data), [data])
  const handleClick = useCallback(() => doSomething(data.id), [data.id])
  return <div onClick={handleClick}>{processed}</div>
})
```

## Font Loading

```html
<!-- Preconnect to font CDN -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Preload key fonts -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />
```

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;  /* prevent invisible text */
  font-weight: 100 900;
}
```

## CSS Performance

```css
/* GPU-accelerated animations only */
.will-animate {
  will-change: transform, opacity; /* set before animation, remove after */
}

/* Avoid layout-triggering properties in animation */
/* BAD: width, height, top, left, margin, padding */
/* GOOD: transform: translate/scale/rotate, opacity */

/* Contain paint for isolated sections */
.card {
  contain: content; /* layout + paint + style containment */
}
```

## Audit Checklist

- [ ] Lighthouse score ≥ 95 (mobile and desktop)
- [ ] LCP image has `fetchPriority="high"`, no lazy loading
- [ ] No layout shift from images (explicit width/height)
- [ ] Fonts use `font-display: swap`
- [ ] Routes are code-split with `React.lazy`
- [ ] Heavy dependencies in separate chunks
- [ ] Console logs stripped in production
- [ ] No unused CSS (Tailwind purge configured)
- [ ] Service worker for repeat visits (if PWA)
- [ ] HTTP/2 or HTTP/3 server push for critical assets
- [ ] Brotli/gzip compression enabled
- [ ] Long lists virtualised
- [ ] Animations only on `transform`/`opacity`

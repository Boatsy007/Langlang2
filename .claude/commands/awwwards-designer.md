# Awwwards-Level Designer

You are a designer building for Awwwards, FWA, and CSS Design Awards recognition. When this skill is active, every interface should feel like a SOTD-worthy interactive experience: editorial, immersive, technically refined.

## What Separates Awwwards Sites

1. **Concept with vision** — not a template, a distinct point of view
2. **Custom cursor** — replaces the default, reacts to context
3. **Smooth scroll** — native scroll feels archaic; Lenis or GSAP ScrollSmoother
4. **Loading screen** — a moment of brand expression before content
5. **Typography as hero** — large-scale, expressive, kinetic type
6. **Micro-interactions everywhere** — every hover, click, and transition considered
7. **WebGL / canvas accent** — particle system, 3D object, or shader background
8. **Sound design** — optional but increasingly standard (always optional for user)
9. **Seamless page transitions** — Barba.js or View Transitions API

## Design System for Award-Level Work

### Typographic Scale (Editorial)
```css
:root {
  --text-display-xl: clamp(80px, 12vw, 200px);
  --text-display-lg: clamp(56px, 8vw, 140px);
  --text-display-md: clamp(40px, 5vw, 96px);
  --text-display-sm: clamp(28px, 3.5vw, 64px);
  --text-heading: clamp(20px, 2.5vw, 40px);
  --text-body: clamp(15px, 1.5vw, 18px);
  --text-caption: clamp(11px, 1vw, 13px);

  /* Tracking for display */
  --tracking-tight: -0.04em;
  --tracking-normal: -0.01em;
  --tracking-wide: 0.12em; /* caps labels */
}
```

### Custom Cursor
```tsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current!
    const follower = followerRef.current!

    const moveCursor = (e: MouseEvent) => {
      gsap.set(cursor, { x: e.clientX, y: e.clientY })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' })
    }

    const onHover = () => gsap.to(follower, { scale: 3, duration: 0.3 })
    const onLeave = () => gsap.to(follower, { scale: 1, duration: 0.3 })

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
      <div ref={followerRef} className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
    </>
  )
}
```

### Smooth Scroll (Lenis)
```ts
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  wheelMultiplier: 0.8,
  touchMultiplier: 2,
})

gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
lenis.on('scroll', ScrollTrigger.update)
```

### Page Loader
```tsx
export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete })

    tl.from('.loader-count', { textContent: 0, duration: 1.5, snap: { textContent: 1 }, ease: 'power2.out' })
      .to('.loader-bar', { scaleX: 1, duration: 1.5, ease: 'power3.inOut' }, 0)
      .to(loaderRef.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '+=0.2')
  }, { scope: loaderRef })

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-black flex items-end p-12">
      <div>
        <span className="loader-count text-white text-8xl font-bold tabular-nums">0</span>
        <span className="text-white text-8xl font-bold">%</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
        <div className="loader-bar h-full bg-white origin-left scale-x-0" />
      </div>
    </div>
  )
}
```

### Magnetic Button
```tsx
export function MagneticButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = btnRef.current!.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(btnRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
  }

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <button ref={btnRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </button>
  )
}
```

### Marquee / Scrolling Text
```tsx
export function Marquee({ text, speed = 40 }: { text: string; speed?: number }) {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(trackRef.current, {
      xPercent: -50,
      duration: speed,
      ease: 'none',
      repeat: -1,
    })
  })

  const repeated = Array(6).fill(text).join(' — ')

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={trackRef} className="inline-block">
        <span>{repeated}</span>
        <span aria-hidden>{repeated}</span>
      </div>
    </div>
  )
}
```

## Awwwards Checklist

- [ ] Custom cursor with hover states
- [ ] Smooth scroll (Lenis / ScrollSmoother)
- [ ] Animated page loader
- [ ] Kinetic typography (large-scale, animated)
- [ ] WebGL element (even subtle — particle system, shader background)
- [ ] Horizontal scroll section or parallax
- [ ] Magnetic interaction on CTA buttons
- [ ] Image distortion on hover (displacement shader)
- [ ] Page transition on navigation
- [ ] Scroll-triggered reveals on every section
- [ ] Mobile: touch-optimised equivalents (no hover-only features)
- [ ] Performance: 90+ Lighthouse despite effects (lazy-load 3D)
- [ ] No cookie banner obstructing the experience (handle gracefully)

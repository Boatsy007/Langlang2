# GSAP Master

You are a GSAP animation master. When this skill is active, produce production-quality GSAP timelines, ScrollTrigger experiences, and premium animation sequences following GSAP best practices.

## Setup

```bash
npm install gsap
```

```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { Flip } from 'gsap/Flip'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip, DrawSVGPlugin)
```

## React Integration Pattern

```tsx
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // All GSAP code here is automatically cleaned up on unmount
    const tl = gsap.timeline()
    tl.from('.hero-title', { y: 80, opacity: 0, duration: 1, ease: 'power4.out' })
      .from('.hero-subtitle', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
  }, { scope: containerRef }) // scoped selectors — best practice

  return (
    <div ref={containerRef}>
      <h1 className="hero-title">...</h1>
      <p className="hero-subtitle">...</p>
      <button className="hero-cta">...</button>
    </div>
  )
}
```

## ScrollTrigger Patterns

### Pin & Scrub Section
```ts
gsap.to('.panel', {
  xPercent: -100 * (panels.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container',
    pin: true,
    scrub: 1,             // smooth scrub (1 = 1 second lag)
    snap: 1 / (panels.length - 1),
    end: () => `+=${containerWidth}`,
  },
})
```

### Parallax
```ts
gsap.to('.parallax-bg', {
  yPercent: -30,
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
})
```

### Text Reveal with SplitText
```ts
const split = new SplitText('.headline', { type: 'lines,words,chars' })

gsap.from(split.chars, {
  y: 100,
  opacity: 0,
  rotationX: -90,
  stagger: 0.02,
  duration: 0.8,
  ease: 'back.out(1.7)',
  scrollTrigger: {
    trigger: '.headline',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
})
```

### Counter Animation
```ts
gsap.to('.counter', {
  textContent: 2847,
  duration: 2,
  ease: 'power1.out',
  snap: { textContent: 1 },
  scrollTrigger: { trigger: '.counter', start: 'top 85%', once: true },
})
```

## Timeline Mastery

```ts
const masterTL = gsap.timeline({
  defaults: { ease: 'power3.out', duration: 0.9 },
  onComplete: () => console.log('intro done'),
})

masterTL
  .from('.nav', { y: -60, opacity: 0 })
  .from('.hero-image', { scale: 1.1, opacity: 0, duration: 1.2 }, '<')    // same time
  .from('.hero-text > *', { y: 60, opacity: 0, stagger: 0.12 }, '-=0.6') // 0.6s overlap
  .from('.scroll-hint', { opacity: 0, y: 10, repeat: -1, yoyo: true, duration: 0.8 }, '+=0.3')
```

## Easing Cheat-Sheet

| Effect | Ease |
|---|---|
| Snappy entrance | `power4.out` |
| Natural bounce | `back.out(1.7)` |
| Elastic wobble | `elastic.out(1, 0.3)` |
| Smooth scroll scrub | `none` |
| Decelerate | `power2.out` |
| Cinematic | `expo.out` |
| Springy UI | `back.inOut(2)` |

## Performance Rules

- Animate `transform` and `opacity` only — never `width`, `height`, `top`, `left`
- Use `gsap.set()` for instant initial states, not CSS (avoids flash)
- `will-change: transform` on animated elements (GSAP sets `translateZ(0)` automatically)
- `ScrollTrigger.refresh()` after dynamic content changes
- Kill timelines and ScrollTriggers on unmount — `useGSAP` handles this automatically
- `gsap.ticker.lagSmoothing(0)` for video or canvas-synced animations
- Batch DOM reads: `ScrollTrigger.batch()` for lists of elements

## Smooth Scroll Setup

```ts
const smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 1.5,
  effects: true,    // enables data-speed attributes
})
```

```html
<div id="smooth-wrapper">
  <div id="smooth-content">
    <!-- data-speed="0.5" = parallax at half scroll speed -->
    <img data-speed="0.5" src="..." />
  </div>
</div>
```

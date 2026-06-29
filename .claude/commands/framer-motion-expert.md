# Framer Motion Expert

You are a Framer Motion expert. When this skill is active, produce modern, fluid React animations using Framer Motion's full feature set — layout animations, shared transitions, gestures, and micro-interactions.

## Setup

```bash
npm install framer-motion
```

## Core Patterns

### Entrance Animations
```tsx
import { motion } from 'framer-motion'

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export function AnimatedList({ items }: { items: string[] }) {
  return (
    <motion.ul variants={staggerContainer} initial="hidden" animate="visible">
      {items.map((item) => (
        <motion.li key={item} variants={fadeInUp}>{item}</motion.li>
      ))}
    </motion.ul>
  )
}
```

### Layout Animations (Magic Motion)
```tsx
// Animate between different DOM positions automatically
<motion.div layoutId="shared-hero-image" />

// Tab indicator that slides between tabs
function Tabs() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="flex gap-4 relative">
      {tabs.map((tab, i) => (
        <button key={tab} onClick={() => setActiveTab(i)} className="relative px-4 py-2">
          {tab}
          {activeTab === i && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-white rounded-lg"
              style={{ zIndex: -1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
```

### Page Transitions
```tsx
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, Outlet } from 'react-router-dom'

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, filter: 'blur(8px)', transition: { duration: 0.3 } },
}

export function PageTransition() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
```

### Gesture Animations
```tsx
// Drag
<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
  dragElastic={0.1}
  whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
/>

// Hover & tap with spring
<motion.button
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  Click me
</motion.button>
```

### useMotionValue & useTransform
```tsx
import { useMotionValue, useTransform, useSpring, motion } from 'framer-motion'

function TiltCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1000 }}
    >
      <slot />
    </motion.div>
  )
}
```

### Scroll Animations
```tsx
import { useScroll, useTransform, motion } from 'framer-motion'

function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y, opacity }}>
        <img src="..." />
      </motion.div>
    </div>
  )
}
```

## Custom Easing

```ts
// Cubic bezier eases — replicate Apple/Google motion curves
const ease = {
  out: [0.22, 1, 0.36, 1],          // expo out — fast open, gentle settle
  inOut: [0.87, 0, 0.13, 1],        // strong in-out
  spring: { type: 'spring', stiffness: 400, damping: 30 },
  bouncySpring: { type: 'spring', stiffness: 600, damping: 15 },
}
```

## Reduced Motion

```tsx
import { useReducedMotion, motion } from 'framer-motion'

function AccessibleMotion({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0.01 : 0.6 }}
    >
      {children}
    </motion.div>
  )
}
```

# Langlang2 — Claude Code Workspace

## Default Technology Stack

Always use these technologies unless explicitly instructed otherwise:

- **Framework**: React + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **3D / WebGL**: React Three Fiber + Three.js
- **Animation**: GSAP (ScrollTrigger, timelines) + Framer Motion
- **Linting**: ESLint + Prettier

## Default Quality Standards

Every project must meet these standards automatically:

### Architecture
- Production-ready, modular component architecture
- Clean folder structure (`components/`, `hooks/`, `utils/`, `types/`, `scenes/`, `animations/`)
- Strict TypeScript — no `any`, explicit return types, typed props
- Minimal technical debt — refactor as you go
- Scalable and maintainable codebase

### Performance
- 95+ Lighthouse score target
- 60fps animations — GPU-accelerated transforms only (`transform`, `opacity`, never layout properties)
- Core Web Vitals green (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- Lazy loading for routes, heavy components, 3D scenes
- Code splitting via dynamic imports
- Optimised images (WebP, AVIF, responsive `srcset`)
- Bundle size monitored — tree-shake aggressively

### UI / UX
- Fully responsive (mobile-first)
- WCAG 2.1 AA accessibility compliant
- SEO friendly (semantic HTML, meta tags, Open Graph)
- Premium, elegant visual design
- Smooth, purposeful motion — no gratuitous animation

### Code Quality
- Reusable, single-responsibility components
- Custom hooks for shared logic
- No prop drilling — context or state management where appropriate
- ESLint + Prettier enforced — zero warnings committed

## Available Skills (Slash Commands)

| Command | Purpose |
|---|---|
| `/ui-ux-pro-max` | Advanced UI/UX systems, layout, typography, design systems, premium interfaces |
| `/impeccable` | Code quality, architecture, refactoring, maintainability, best practices |
| `/threejs-expert` | Three.js scenes, lighting, materials, shaders, animation, optimisation |
| `/r3f-expert` | React Three Fiber architecture, components, rendering, lighting, animation |
| `/gsap-master` | GSAP timelines, ScrollTrigger, transitions, sequencing, scroll experiences |
| `/framer-motion-expert` | React animations, layout transitions, page transitions, micro-interactions |
| `/performance-optimizer` | Lighthouse, Core Web Vitals, lazy loading, bundle optimisation |
| `/creative-director` | Creative direction, visual storytelling, layout, branding, award-level concepts |
| `/awwwards-designer` | World-class design systems, editorial layouts, immersive interactions |

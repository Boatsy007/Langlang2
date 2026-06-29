import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { business } from '@/data/siteContent'

// ─── Particle system ──────────────────────────────────────────────────────────

interface Dust {
  x: number; y: number; vx: number; vy: number
  r: number; life: number; maxLife: number; maxOpacity: number
}

function spawnDust(w: number, h: number, scatter = false): Dust {
  const maxLife = 240 + Math.random() * 200
  return {
    x: Math.random() * w,
    y: scatter ? Math.random() * h : h + 8,
    vx: (Math.random() - 0.5) * 0.2,
    vy: -(0.15 + Math.random() * 0.3),
    r: 0.35 + Math.random() * 1.1,
    life: scatter ? Math.random() * maxLife : 0,
    maxLife,
    maxOpacity: 0.15 + Math.random() * 0.28,
  }
}

function useParticles(ref: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let dust: Dust[] = []
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2)
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    dust = Array.from({ length: 60 }, () => spawnDust(w, h, true))

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      dust = dust.map((p) => {
        const life = p.life + 1
        if (life >= p.maxLife) return spawnDust(w, h)

        const t = life / p.maxLife
        let o = p.maxOpacity
        if (t < 0.1) o *= t / 0.1
        else if (t > 0.7) o *= (1 - t) / 0.3

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        // Warm amber-gold particles — like dust in sunlight
        ctx.fillStyle = `rgba(255,235,180,${Math.max(0, o)})`
        ctx.fill()

        return { ...p, x: p.x + p.vx, y: p.y + p.vy, life }
      })

      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [ref])
}

// ─── Mouse parallax ───────────────────────────────────────────────────────────

function useParallax(
  container: React.RefObject<HTMLElement | null>,
  target: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const el = container.current
    const tgt = target.current
    if (!el || !tgt) return

    let raf = 0
    let ox = 0, oy = 0, tx = 0, ty = 0
    let active = false

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      tx = ((e.clientX - r.left) / r.width - 0.5) * 18
      ty = ((e.clientY - r.top) / r.height - 0.5) * 11
      active = true
    }

    const onLeave = () => { tx = 0; ty = 0 }

    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave)

    const loop = () => {
      if (active || Math.abs(ox) > 0.01 || Math.abs(oy) > 0.01) {
        ox += (tx - ox) * 0.048
        oy += (ty - oy) * 0.048
        tgt.style.transform = `translate3d(${ox.toFixed(3)}px,${oy.toFixed(3)}px,0)`
      }
      raf = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [container, target])
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CinematicHero({ src }: { src: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useParticles(canvasRef)
  useParallax(sectionRef, parallaxRef)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end pb-[18vh] sm:pb-[22vh] overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Image system ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-zinc-950">

        {/* Parallax outer — JS-driven translate, provides extra canvas for movement */}
        <div ref={parallaxRef} className="absolute inset-0" style={{ willChange: 'transform' }}>

          {/* Zoom inner — CSS-animated scale, independent of parallax layer */}
          <div className="hero-zoom absolute -inset-[6%]" style={{ transformOrigin: '50% 50%' }}>
            <img
              src={src}
              alt="Restored Yamaha YZ250 — Lang Restorations, Traralgon Victoria"
              className="hero-img w-full h-full object-cover select-none"
              draggable={false}
              fetchPriority="high"
              decoding="async"
              style={{
                filter: 'contrast(1.08) brightness(0.82) saturate(1.15)',
              }}
            />
          </div>
        </div>

        {/* ── LAYER 1: Edge vignette ───────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(9,9,11,0.55) 72%, rgba(9,9,11,0.88) 100%)',
          }}
        />

        {/* ── LAYER 2: Bottom gradient — text base ─────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,0.92) 18%, rgba(9,9,11,0.4) 42%, transparent 68%)',
          }}
        />

        {/* ── LAYER 3: Left text panel ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(9,9,11,0.88) 0%, rgba(9,9,11,0.62) 28%, rgba(9,9,11,0.18) 48%, transparent 62%)',
          }}
        />

        {/* ── LAYER 4: Top fade ────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(9,9,11,0.72) 0%, rgba(9,9,11,0.2) 22%, transparent 44%)',
          }}
        />

        {/* ── LAYER 5: Ferrari red ambient — corner glow ───────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 52% at 4% 96%, rgba(220,38,38,0.42) 0%, rgba(220,38,38,0.12) 48%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 45% 38% at 97% 92%, rgba(220,38,38,0.28) 0%, rgba(220,38,38,0.06) 55%, transparent 72%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* ── LAYER 10: Cinematic light rays ───────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="hero-ray"
            style={
              {
                '--ray-left': '35%',
                '--ray-w': '100px',
                '--ray-dur': '18s',
                '--ray-delay': '1s',
              } as React.CSSProperties
            }
          />
          <div
            className="hero-ray"
            style={
              {
                '--ray-left': '54%',
                '--ray-w': '65px',
                '--ray-dur': '24s',
                '--ray-delay': '7s',
              } as React.CSSProperties
            }
          />
          <div
            className="hero-ray"
            style={
              {
                '--ray-left': '68%',
                '--ray-w': '48px',
                '--ray-dur': '20s',
                '--ray-delay': '14s',
              } as React.CSSProperties
            }
          />
        </div>

        {/* ── LAYER 11: Floating dust particles ────────────────────────────────── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ mixBlendMode: 'screen', opacity: 0.6 }}
          aria-hidden="true"
        />

        {/* ── LAYER 12: Film grain — subtle texture depth ───────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E\")",
            backgroundSize: '300px 300px',
            opacity: 0.028,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* ── Hero content ──────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
          {business.name} · {business.suburb}, {business.state} · Est.{' '}
          {business.established}
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-none mb-8 max-w-5xl">
          Motorcycle
          <br />
          Restorations
          <br />
          <span className="text-zinc-400">Without Compromise.</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-12">
          Collector-quality restorations of vintage motocross, classic road motorcycles and iconic
          minibikes, meticulously rebuilt in Traralgon, Victoria.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/builds"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors"
          >
            View Featured Builds
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to="/for-sale"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent text-white text-sm font-semibold ring-1 ring-white/30 hover:ring-white/60 hover:bg-white/5 transition-all"
          >
            Motorcycles For Sale
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-zinc-600 uppercase tracking-widest font-medium">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M10 4v12M10 16L5 11M10 16L15 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-600"
          />
        </svg>
      </div>
    </section>
  )
}

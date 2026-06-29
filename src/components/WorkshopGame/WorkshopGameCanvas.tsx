import { useEffect, useRef, useCallback } from 'react'
import { GameEngine } from './gameEngine'
import type { GameSnapshot, Obstacle } from './gameEngine'

// ─── Pixel art drawers ────────────────────────────────────────────────────────

function drawBike(ctx: CanvasRenderingContext2D, x: number, y: number, frame: number) {
  const t = Math.floor(frame / 6) % 2 // wheel animation frame

  // Body
  ctx.fillStyle = '#DC2626' // Ferrari red
  ctx.fillRect(x + 10, y + 10, 28, 14)

  // Seat
  ctx.fillStyle = '#1c1917'
  ctx.fillRect(x + 16, y + 6, 16, 6)

  // Handlebars
  ctx.fillStyle = '#a1a1aa'
  ctx.fillRect(x + 36, y + 4, 4, 10)

  // Forks
  ctx.fillStyle = '#71717a'
  ctx.fillRect(x + 32, y + 10, 4, 16)

  // Exhaust
  ctx.fillStyle = '#78716c'
  ctx.fillRect(x + 8, y + 20, 14, 4)
  ctx.fillRect(x + 4, y + 22, 6, 2)

  // Front wheel
  const fwx = x + 34 + (t ? 1 : 0)
  ctx.fillStyle = '#27272a'
  ctx.beginPath()
  ctx.arc(fwx, y + 28, 8, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#52525b'
  ctx.beginPath()
  ctx.arc(fwx, y + 28, 4, 0, Math.PI * 2)
  ctx.fill()

  // Rear wheel
  const rwx = x + 10 + (t ? -1 : 0)
  ctx.fillStyle = '#27272a'
  ctx.beginPath()
  ctx.arc(rwx, y + 28, 8, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#52525b'
  ctx.beginPath()
  ctx.arc(rwx, y + 28, 4, 0, Math.PI * 2)
  ctx.fill()

  // Rider helmet
  ctx.fillStyle = '#DC2626'
  ctx.fillRect(x + 20, y + 0, 12, 8)
  ctx.fillStyle = '#fcd34d'
  ctx.fillRect(x + 22, y + 2, 8, 3)
}

function drawObstacle(ctx: CanvasRenderingContext2D, obs: Obstacle) {
  const { x, y, w, h } = obs.rect
  switch (obs.type) {
    case 'tyre':
      ctx.fillStyle = '#27272a'
      ctx.beginPath()
      ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = '#3f3f46'
      ctx.beginPath()
      ctx.arc(x + w / 2, y + h / 2, w / 4, 0, Math.PI * 2)
      ctx.fill()
      break

    case 'toolbox':
      ctx.fillStyle = '#b45309'
      ctx.fillRect(x, y, w, h)
      ctx.fillStyle = '#92400e'
      ctx.fillRect(x, y + h - 6, w, 6)
      ctx.fillStyle = '#fbbf24'
      ctx.fillRect(x + w / 2 - 4, y + h / 2 - 2, 8, 4)
      break

    case 'engine':
      ctx.fillStyle = '#3f3f46'
      ctx.fillRect(x, y, w, h)
      ctx.fillStyle = '#71717a'
      ctx.fillRect(x + 4, y + 4, 12, 8)
      ctx.fillRect(x + w - 16, y + 4, 12, 8)
      ctx.fillStyle = '#a1a1aa'
      ctx.fillRect(x + 8, y + h - 10, w - 16, 6)
      break

    case 'oilcan':
      ctx.fillStyle = '#1e3a5f'
      ctx.fillRect(x + 2, y + 8, w - 4, h - 8)
      ctx.fillStyle = '#1e40af'
      ctx.fillRect(x + 4, y + 4, w - 8, 6)
      ctx.fillStyle = '#93c5fd'
      ctx.fillRect(x + w / 2 - 2, y, 4, 6)
      ctx.fillStyle = '#bfdbfe'
      ctx.fillRect(x + 4, y + 10, 6, 3)
      break

    case 'crate':
      ctx.fillStyle = '#92400e'
      ctx.fillRect(x, y, w, h)
      ctx.fillStyle = '#78350f'
      ctx.fillRect(x, y, w, 4)
      ctx.fillRect(x, y + h - 4, w, 4)
      ctx.fillRect(x, y, 4, h)
      ctx.fillRect(x + w - 4, y, 4, h)
      ctx.fillRect(x + w / 2 - 2, y, 4, h)
      ctx.fillRect(x, y + h / 2 - 2, w, 4)
      break

    case 'stand':
      ctx.fillStyle = '#52525b'
      ctx.fillRect(x + w / 2 - 3, y, 6, h - 8)
      ctx.fillRect(x, y + h - 10, w, 4)
      ctx.fillRect(x + 2, y + h - 6, 6, 6)
      ctx.fillRect(x + w - 8, y + h - 6, 6, 6)
      break
  }
}

function drawGround(
  ctx: CanvasRenderingContext2D,
  groundY: number,
  w: number,
  offset: number,
) {
  // Ground line
  ctx.fillStyle = '#3f3f46'
  ctx.fillRect(0, groundY, w, 2)

  // Dashed floor detail
  ctx.fillStyle = '#27272a'
  const dashW = 40
  const gap = 20
  const total = dashW + gap
  const start = -(offset % total)
  for (let dx = start; dx < w; dx += total) {
    ctx.fillRect(dx, groundY + 3, dashW, 2)
  }

  // Workshop floor
  ctx.fillStyle = '#18181b'
  ctx.fillRect(0, groundY + 5, w, 200)
}

function drawBackground(ctx: CanvasRenderingContext2D, w: number, groundY: number) {
  // Sky / wall
  const grad = ctx.createLinearGradient(0, 0, 0, groundY)
  grad.addColorStop(0, '#09090b')
  grad.addColorStop(1, '#18181b')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, groundY)

  // Workshop shelves silhouette
  ctx.fillStyle = '#1c1917'
  ctx.fillRect(0, groundY * 0.2, w, 6)
  ctx.fillRect(0, groundY * 0.5, w, 6)

  // Tool outlines on shelves (static decor)
  ctx.fillStyle = '#27272a'
  for (let i = 0; i < 8; i++) {
    const bx = i * (w / 7) + 10
    ctx.fillRect(bx, groundY * 0.2 - 18, 10, 18)
    ctx.fillRect(bx + 16, groundY * 0.5 - 14, 8, 14)
  }

  // Hanging light
  ctx.fillStyle = '#fef08a'
  ctx.globalAlpha = 0.06
  ctx.beginPath()
  ctx.arc(w / 2, 0, w * 0.6, 0, Math.PI)
  ctx.fill()
  ctx.globalAlpha = 1
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  score: number,
  best: number,
  w: number,
) {
  ctx.fillStyle = '#a1a1aa'
  ctx.font = 'bold 14px monospace'
  ctx.textAlign = 'right'
  ctx.fillText(`HI ${String(best).padStart(5, '0')}  ${String(score).padStart(5, '0')}`, w - 16, 28)
}

function drawStartScreen(ctx: CanvasRenderingContext2D, w: number, h: number, best: number) {
  ctx.fillStyle = 'rgba(0,0,0,0.55)'
  ctx.fillRect(0, 0, w, h)

  ctx.fillStyle = '#DC2626'
  ctx.font = 'bold 28px monospace'
  ctx.textAlign = 'center'
  ctx.fillText('WORKSHOP RUNNER', w / 2, h / 2 - 40)

  ctx.fillStyle = '#e4e4e7'
  ctx.font = '16px monospace'
  ctx.fillText('SPACE / TAP to start', w / 2, h / 2 + 4)

  if (best > 0) {
    ctx.fillStyle = '#71717a'
    ctx.font = '13px monospace'
    ctx.fillText(`Best: ${best}`, w / 2, h / 2 + 32)
  }
}

function drawDeadScreen(ctx: CanvasRenderingContext2D, w: number, h: number, score: number, best: number) {
  ctx.fillStyle = 'rgba(0,0,0,0.6)'
  ctx.fillRect(0, 0, w, h)

  ctx.fillStyle = '#DC2626'
  ctx.font = 'bold 22px monospace'
  ctx.textAlign = 'center'
  ctx.fillText('GAME OVER', w / 2, h / 2 - 40)

  ctx.fillStyle = '#e4e4e7'
  ctx.font = '15px monospace'
  ctx.fillText(`Score: ${score}`, w / 2, h / 2 - 8)
  ctx.fillText(`Best: ${best}`, w / 2, h / 2 + 16)

  ctx.fillStyle = '#a1a1aa'
  ctx.font = '13px monospace'
  ctx.fillText('SPACE / TAP to restart', w / 2, h / 2 + 48)
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  active: boolean
}

export function WorkshopGameCanvas({ active }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef(new GameEngine())
  const rafRef = useRef<number>(0)
  const frameRef = useRef(0)
  const groundOffsetRef = useRef(0)
  const lastSnapshotRef = useRef<GameSnapshot | null>(null)

  const draw = useCallback((snap: GameSnapshot) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { w, h } = { w: canvas.width, h: canvas.height }

    if (snap.state === 'playing') {
      groundOffsetRef.current += snap.speed
    }

    drawBackground(ctx, w, snap.groundY)
    drawGround(ctx, snap.groundY, w, groundOffsetRef.current)

    for (const obs of snap.obstacles) {
      drawObstacle(ctx, obs)
    }

    drawBike(ctx, snap.bike.x, snap.bike.y, frameRef.current)
    drawHUD(ctx, snap.score, snap.best, w)

    if (snap.state === 'idle') drawStartScreen(ctx, w, h, snap.best)
    if (snap.state === 'dead') drawDeadScreen(ctx, w, h, snap.score, snap.best)
  }, [])

  const loop = useCallback(() => {
    if (!active) return
    frameRef.current++
    const snap = engineRef.current.tick()
    lastSnapshotRef.current = snap
    draw(snap)
    rafRef.current = requestAnimationFrame(loop)
  }, [active, draw])

  // Start/stop loop when active changes
  useEffect(() => {
    if (active) {
      rafRef.current = requestAnimationFrame(loop)
    } else {
      cancelAnimationFrame(rafRef.current)
    }
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, loop])

  // Resize observer
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ro = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      engineRef.current.resize(rect.width, rect.height)
      // Redraw immediately if not playing
      if (lastSnapshotRef.current) {
        draw(engineRef.current.tick())
      }
    })
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [draw])

  // Keyboard + touch controls
  useEffect(() => {
    if (!active) return

    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        engineRef.current.jump()
      }
    }

    const onTouch = (e: TouchEvent) => {
      e.preventDefault()
      engineRef.current.jump()
    }

    window.addEventListener('keydown', onKey)
    canvasRef.current?.addEventListener('touchstart', onTouch, { passive: false })
    return () => {
      window.removeEventListener('keydown', onKey)
      canvasRef.current?.removeEventListener('touchstart', onTouch)
    }
  }, [active])

  const handleClick = () => engineRef.current.jump()

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-pointer select-none"
      onClick={handleClick}
      style={{ display: 'block', imageRendering: 'pixelated' }}
    />
  )
}

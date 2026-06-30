export type GameState = 'idle' | 'playing' | 'dead'

export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export interface Obstacle {
  rect: Rect
  type: 'tyre' | 'toolbox' | 'engine' | 'oilcan' | 'crate' | 'stand'
}

export interface GameSnapshot {
  state: GameState
  score: number
  best: number
  bike: Rect
  obstacles: Obstacle[]
  groundY: number
  speed: number
}

const BEST_KEY = 'workshop-runner-best'
const GRAVITY = 0.5
const JUMP_VEL = -13
const INITIAL_SPEED = 3.5
const SPEED_INCREMENT = 0.0004
const FLOOR_RATIO = 0.75
const BIKE_W = 52
const BIKE_H = 36
const MIN_GAP = 100
const MAX_GAP = 280

const OBSTACLE_TYPES: Obstacle['type'][] = [
  'tyre', 'toolbox', 'engine', 'oilcan', 'crate', 'stand',
]

const OBSTACLE_SIZES: Record<Obstacle['type'], { w: number; h: number }> = {
  tyre:    { w: 28, h: 28 },
  toolbox: { w: 36, h: 26 },
  engine:  { w: 40, h: 32 },
  oilcan:  { w: 18, h: 30 },
  crate:   { w: 32, h: 32 },
  stand:   { w: 20, h: 38 },
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function overlaps(a: Rect, b: Rect): boolean {
  const pad = 6
  return (
    a.x + pad < b.x + b.w - pad &&
    a.x + a.w - pad > b.x + pad &&
    a.y + pad < b.y + b.h - pad &&
    a.y + a.h - pad > b.y + pad
  )
}

export class GameEngine {
  private bikeX = 80
  private bikeY = 0
  private bikeVY = 0
  private onGround = false
  private groundY = 0
  private canvasW = 0
  private obstacles: Obstacle[] = []
  private nextObstacleX = 0
  private score = 0
  private speed = INITIAL_SPEED
  private best = 0
  private state: GameState = 'idle'
  private frameCount = 0

  constructor() {
    this.best = parseInt(localStorage.getItem(BEST_KEY) ?? '0', 10) || 0
  }

  resize(w: number, h: number) {
    this.canvasW = w
    this.groundY = h * FLOOR_RATIO
    this.bikeY = this.groundY - BIKE_H
    if (this.nextObstacleX === 0) {
      this.nextObstacleX = w + rand(80, 200)
    }
  }

  start() {
    this.state = 'playing'
    this.score = 0
    this.speed = INITIAL_SPEED
    this.frameCount = 0
    this.obstacles = []
    this.bikeY = this.groundY - BIKE_H
    this.bikeVY = 0
    this.onGround = true
    this.nextObstacleX = this.canvasW + rand(MIN_GAP, MAX_GAP)
  }

  jump() {
    if (this.state === 'idle' || this.state === 'dead') {
      this.start()
      return
    }
    if (this.onGround) {
      this.bikeVY = JUMP_VEL
      this.onGround = false
    }
  }

  tick(): GameSnapshot {
    if (this.state !== 'playing') {
      return this.snapshot()
    }

    this.frameCount++
    this.score = Math.floor(this.frameCount / 6)
    this.speed = INITIAL_SPEED + this.frameCount * SPEED_INCREMENT

    // Physics
    this.bikeVY += GRAVITY
    this.bikeY += this.bikeVY

    if (this.bikeY >= this.groundY - BIKE_H) {
      this.bikeY = this.groundY - BIKE_H
      this.bikeVY = 0
      this.onGround = true
    }

    // Spawn obstacle
    const lastX = this.obstacles.length > 0
      ? this.obstacles[this.obstacles.length - 1].rect.x
      : -Infinity

    if (lastX <= this.nextObstacleX - rand(MIN_GAP, MAX_GAP) || this.obstacles.length === 0) {
      if (this.nextObstacleX < this.canvasW) {
        const type = OBSTACLE_TYPES[Math.floor(Math.random() * OBSTACLE_TYPES.length)]
        const { w, h } = OBSTACLE_SIZES[type]
        this.obstacles.push({
          type,
          rect: {
            x: this.canvasW + 20,
            y: this.groundY - h,
            w,
            h,
          },
        })
        this.nextObstacleX = this.canvasW + rand(MIN_GAP + this.speed * 10, MAX_GAP + this.speed * 15)
      } else {
        this.nextObstacleX -= this.speed
      }
    }

    // Move + cull obstacles
    this.obstacles = this.obstacles
      .map((o) => ({ ...o, rect: { ...o.rect, x: o.rect.x - this.speed } }))
      .filter((o) => o.rect.x + o.rect.w > -20)

    // Collision
    const bikeRect: Rect = { x: this.bikeX, y: this.bikeY, w: BIKE_W, h: BIKE_H }
    for (const obs of this.obstacles) {
      if (overlaps(bikeRect, obs.rect)) {
        this.state = 'dead'
        if (this.score > this.best) {
          this.best = this.score
          localStorage.setItem(BEST_KEY, String(this.best))
        }
        break
      }
    }

    return this.snapshot()
  }

  private snapshot(): GameSnapshot {
    return {
      state: this.state,
      score: this.score,
      best: this.best,
      bike: { x: this.bikeX, y: this.bikeY, w: BIKE_W, h: BIKE_H },
      obstacles: this.obstacles,
      groundY: this.groundY,
      speed: this.speed,
    }
  }
}

import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { clsx } from 'clsx'
import { HomePage } from '@/pages/HomePage'

const WorkshopGame = lazy(() =>
  import('@/components/WorkshopGame/WorkshopGame').then((m) => ({ default: m.WorkshopGame }))
)
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ForSalePage } from '@/pages/ForSalePage'
import { ForSaleDetailPage } from '@/pages/ForSaleDetailPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'

// Priority links shown on mobile (short labels, horizontally scrollable)
const mobileLinks = [
  { to: '/builds', label: 'Builds', end: false },
  { to: '/for-sale', label: 'For Sale', end: false },
  { to: '/services', label: 'Services', end: false },
]

// Full link list for desktop
const desktopLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/builds', label: 'Featured Builds', end: false },
  { to: '/for-sale', label: 'For Sale', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

const linkBase = 'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap block'
const linkActive = 'text-red-400 bg-red-950/60'
const linkInactive = 'text-zinc-400 hover:text-white hover:bg-zinc-900'

function BikeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="8" y="6" width="16" height="8" fill="#DC2626" />
      {/* Seat */}
      <rect x="11" y="3" width="9" height="4" fill="#18181b" />
      {/* Handlebars */}
      <rect x="22" y="2" width="2" height="6" fill="#a1a1aa" />
      {/* Forks */}
      <rect x="20" y="6" width="2" height="8" fill="#71717a" />
      {/* Exhaust */}
      <rect x="5" y="12" width="8" height="2" fill="#78716c" />
      {/* Front wheel */}
      <circle cx="22" cy="16" r="4" fill="#27272a" />
      <circle cx="22" cy="16" r="2" fill="#52525b" />
      {/* Rear wheel */}
      <circle cx="8" cy="16" r="4" fill="#27272a" />
      <circle cx="8" cy="16" r="2" fill="#52525b" />
      {/* Rider */}
      <rect x="13" y="0" width="7" height="5" fill="#DC2626" />
      <rect x="14" y="1" width="5" height="2" fill="#fcd34d" />
    </svg>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [gameOpen, setGameOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-zinc-950 border-b border-zinc-900' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-3">

        {/* Logo — links to home, always visible */}
        <NavLink to="/" className="shrink-0" aria-label="Lang Restorations — Home">
          <img
            src="/images/logo.png"
            alt="Lang Restorations"
            className="h-20 w-auto"
            draggable={false}
          />
        </NavLink>

        {/* Easter egg — Workshop Runner */}
        <button
          onClick={() => setGameOpen(true)}
          className="shrink-0 p-1.5 rounded-md opacity-30 hover:opacity-100 transition-opacity duration-300 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Open Workshop Game"
          title="Workshop Runner"
        >
          <BikeIcon className="w-8 h-5" />
        </button>

        {/* Mobile nav — horizontally scrollable, priority links on the right */}
        <nav className="md:hidden flex-1 overflow-x-auto scrollbar-none min-w-0">
          <ul className="flex items-center gap-1 list-none m-0 p-0 w-max ml-auto">
            {mobileLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => clsx(linkBase, isActive ? linkActive : linkInactive)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop nav — full link list aligned right */}
        <nav className="hidden md:block flex-1">
          <ul className="flex items-center justify-end gap-0.5 list-none m-0 p-0">
            {desktopLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    clsx(
                      'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap block',
                      isActive ? 'text-red-400 bg-red-950/60' : linkInactive,
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>

    {gameOpen && (
      <Suspense fallback={null}>
        <WorkshopGame onClose={() => setGameOpen(false)} />
      </Suspense>
    )}
  </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builds" element={<ProjectsPage />} />
          <Route path="/builds/:slug" element={<ProjectDetailPage />} />
          <Route path="/for-sale" element={<ForSalePage />} />
          <Route path="/for-sale/:slug" element={<ForSaleDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

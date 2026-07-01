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
import { NotFoundPage } from '@/pages/NotFoundPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogDetailPage } from '@/pages/BlogDetailPage'

// Priority links shown on mobile (short labels, horizontally scrollable)
const mobileLinks = [
  { to: '/builds', label: 'Builds', end: false },
  { to: '/for-sale', label: 'For Sale', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

// Full link list for desktop
const desktopLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/builds', label: 'Featured Builds', end: false },
  { to: '/for-sale', label: 'For Sale', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

const linkBase = 'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap block'
const linkActive = 'text-red-400 bg-red-950/60'
const linkInactive = 'text-zinc-400 hover:text-white hover:bg-zinc-900'

const SOCIAL = [
  {
    href: 'https://www.instagram.com/langrestorations/',
    label: 'Lang Restorations on Instagram',
    title: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: 'https://www.facebook.com/langrestorations/',
    label: 'Lang Restorations on Facebook',
    title: 'Facebook',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0z" />
      </svg>
    ),
  },
]

function SocialIcons({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const btn = size === 'sm'
    ? 'w-7 h-7 flex items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors'
    : 'w-8 h-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors'

  return (
    <div className="flex items-center gap-1" role="list" aria-label="Social media profiles">
      {SOCIAL.map(({ href, label, title, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={title}
          className={btn}
          role="listitem"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-zinc-950 border-b border-zinc-900' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-3">

        {/* Logo — links to home, always visible */}
        <NavLink to="/" className="shrink-0" aria-label="Lang Restorations — Home">
          <picture>
            <source type="image/webp" srcSet="/images/logo.webp" />
            <img
              src="/images/logo.png"
              alt="Lang Restorations"
              className="h-20 w-auto"
              draggable={false}
              width="80"
              height="80"
              fetchPriority="high"
            />
          </picture>
        </NavLink>

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

        {/* Desktop nav — full link list + social icons aligned right */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          <nav>
            <ul className="flex items-center gap-0.5 list-none m-0 p-0">
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
          <div className="pl-2 border-l border-zinc-800">
            <SocialIcons size="sm" />
          </div>
        </div>

      </div>
    </header>
  )
}

function Footer({ onOpenGame }: { onOpenGame: () => void }) {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Lang Restorations. All rights reserved.
        </p>
        <SocialIcons />
        <button
          onClick={onOpenGame}
          className="p-1.5 rounded-md opacity-25 hover:opacity-100 transition-opacity duration-300 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Open Workshop Game"
          title="Workshop Runner"
        >
          <BikeIcon className="w-8 h-5" />
        </button>
      </div>
    </footer>
  )
}

export default function App() {
  const [gameOpen, setGameOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 flex flex-col">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builds" element={<ProjectsPage />} />
            <Route path="/builds/:slug" element={<ProjectDetailPage />} />
            <Route path="/for-sale" element={<ForSalePage />} />
            <Route path="/for-sale/:slug" element={<ForSaleDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer onOpenGame={() => setGameOpen(true)} />
        {gameOpen && (
          <Suspense fallback={null}>
            <WorkshopGame onClose={() => setGameOpen(false)} />
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  )
}

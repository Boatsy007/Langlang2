import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { clsx } from 'clsx'
import { HomePage } from '@/pages/HomePage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ForSalePage } from '@/pages/ForSalePage'
import { ForSaleDetailPage } from '@/pages/ForSaleDetailPage'
import { ServicesPage } from '@/pages/ServicesPage'
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
const linkActive = 'text-red-500 bg-zinc-800'
const linkInactive = 'text-zinc-400 hover:text-white hover:bg-zinc-900'

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-3">

        {/* Logo — links to home, always visible */}
        <NavLink to="/" className="shrink-0 text-sm font-bold text-white tracking-tight">
          Lang Restorations
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
                      isActive ? linkActive : linkInactive,
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

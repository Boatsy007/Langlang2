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

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/builds', label: 'Featured Builds', end: false },
  { to: '/for-sale', label: 'For Sale', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <NavLink to="/" className="text-base font-bold text-white tracking-tight shrink-0">
          Lang Restorations
        </NavLink>
        <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  clsx(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap',
                    isActive ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-900',
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile: just the contact link as a CTA */}
        <NavLink
          to="/contact"
          className="md:hidden inline-flex items-center px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          Contact
        </NavLink>
      </nav>
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

import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { clsx } from 'clsx'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { ForSalePage } from '@/pages/ForSalePage'
import { ForSaleDetailPage } from '@/pages/ForSaleDetailPage'
import { ServicesPage } from '@/pages/ServicesPage'

const navLinks = [
  { to: '/builds', label: 'Builds' },
  { to: '/for-sale', label: 'For Sale' },
  { to: '/services', label: 'Services' },
]

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-white tracking-tight">
          Langlang
        </NavLink>
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  clsx(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive ? 'text-white bg-zinc-800' : 'text-zinc-400 hover:text-white hover:bg-zinc-900',
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
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
          <Route path="/" element={<Navigate to="/builds" replace />} />
          <Route path="/builds" element={<ProjectsPage />} />
          <Route path="/builds/:slug" element={<ProjectDetailPage />} />
          <Route path="/for-sale" element={<ForSalePage />} />
          <Route path="/for-sale/:slug" element={<ForSaleDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

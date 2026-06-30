import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">

      <Seo
        title="Page Not Found | Lang Restorations"
        description="The page you're looking for doesn't exist. Return to Lang Restorations — vintage motorcycle restoration specialists in Traralgon, Gippsland, Victoria."
        canonical="https://langrestorations.com.au/404"
        noindex
      />

      <div className="max-w-lg w-full text-center">
        <p className="text-8xl font-black text-zinc-800 mb-6 select-none" aria-hidden="true">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-zinc-400 mb-10 leading-relaxed">
          The page you're looking for has moved or doesn't exist. Head back to the workshop.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            to="/builds"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            View Restorations
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { BLOG_AUTHOR } from '@/data/blog'

export function AuthorCard() {
  return (
    <aside className="mt-16 pt-14 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-6 sm:p-8">
        <div className="shrink-0">
          <picture>
            <source type="image/webp" srcSet={BLOG_AUTHOR.imageWebp} />
            <img
              src={BLOG_AUTHOR.image}
              alt={BLOG_AUTHOR.name}
              className="w-16 h-16 rounded-xl object-contain bg-zinc-800 p-1"
              width={64}
              height={64}
              loading="lazy"
            />
          </picture>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">
            Written by
          </p>
          <p className="text-base font-bold text-white mb-0.5">{BLOG_AUTHOR.name}</p>
          <p className="text-sm text-red-400 mb-3">{BLOG_AUTHOR.title}</p>
          <p className="text-sm text-zinc-400 leading-relaxed mb-4">{BLOG_AUTHOR.bio}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {BLOG_AUTHOR.expertise.map((skill) => (
              <span
                key={skill}
                className="text-xs text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/about"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
            >
              About the workshop
            </Link>
            <span className="text-zinc-700">·</span>
            <Link
              to="/contact"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

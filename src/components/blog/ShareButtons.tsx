const BASE_URL = 'https://langrestorations.com.au'

interface ShareButtonsProps {
  slug: string
  title: string
}

export function ShareButtons({ slug, title }: ShareButtonsProps) {
  const url = `${BASE_URL}/blog/${slug}`
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex items-center gap-3 mt-8">
      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Share</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0z" />
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url)
          } catch {
            // fallback: do nothing silently
          }
        }}
        aria-label="Copy link"
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 ring-1 ring-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10.5 5.5H12a3 3 0 010 6H10M5.5 10.5H4a3 3 0 010-6H6M6 8h4" />
        </svg>
      </button>
    </div>
  )
}

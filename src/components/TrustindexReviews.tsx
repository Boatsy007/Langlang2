import { useEffect, useRef } from 'react'

/**
 * Live Google reviews via the Trustindex widget.
 *
 * The Trustindex loader inserts its rendered widget immediately before the
 * <script> element that loaded it, so we inject the script into our own
 * container to control placement. A per-container guard prevents the script
 * from being injected twice (e.g. under React StrictMode's double effect).
 */
const TRUSTINDEX_SRC =
  'https://cdn.trustindex.io/loader.js?9c08f1f82889055e54864f2d2dc'

export function TrustindexReviews() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (container.querySelector('script[data-trustindex]')) return

    const script = document.createElement('script')
    script.src = TRUSTINDEX_SRC
    script.async = true
    script.defer = true
    script.setAttribute('data-trustindex', '')
    container.appendChild(script)
  }, [])

  return <div ref={containerRef} className="w-full max-w-full overflow-hidden" />
}

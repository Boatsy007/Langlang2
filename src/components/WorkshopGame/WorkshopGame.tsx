import { useEffect, useCallback } from 'react'
import { WorkshopGameCanvas } from './WorkshopGameCanvas'

interface Props {
  onClose: () => void
}

export function WorkshopGame({ onClose }: Props) {
  const close = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-zinc-950"
      role="dialog"
      aria-modal="true"
      aria-label="Workshop Runner Game"
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 shrink-0">
        <span className="text-sm font-semibold text-red-400 tracking-widest uppercase">
          Workshop Runner
        </span>
        <button
          onClick={close}
          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-zinc-800"
          aria-label="Close game"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          ESC
        </button>
      </div>

      {/* Canvas area */}
      <div className="flex-1 relative overflow-hidden">
        <WorkshopGameCanvas active={true} />
      </div>

      {/* Footer hint */}
      <div className="text-center py-2 shrink-0">
        <p className="text-xs text-zinc-700">SPACE / TAP to jump &nbsp;·&nbsp; ESC to close</p>
      </div>
    </div>
  )
}

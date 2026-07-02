import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': '/src' },
  },
  server: {
    // In local dev, run `vercel dev` (port 3000) instead of `vite`.
    // This proxy lets `vite dev` work standalone for UI-only work
    // by forwarding /api calls to vercel dev if it's running.
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})

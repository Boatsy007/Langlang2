import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Lang Restorations'
const BASE_URL = 'https://langrestorations.com.au'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/hero.jpg`
const DEFAULT_OG_IMAGE_W = 1200
const DEFAULT_OG_IMAGE_H = 800

export interface SeoProps {
  title: string
  description: string
  /** Absolute canonical URL */
  canonical: string
  ogTitle?: string
  ogDescription?: string
  /** Absolute URL to OG image (1200×630 ideal) */
  ogImage?: string
  ogType?: 'website' | 'article'
  /** JSON-LD object(s) to inject as <script type="application/ld+json"> */
  jsonLd?: object | object[]
  /** Noindex if page should not be indexed (e.g. filtered states) */
  noindex?: boolean
}

export function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
  noindex = false,
}: SeoProps) {
  const resolvedOgTitle = ogTitle ?? title
  const resolvedOgDesc = ogDescription ?? description
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []

  return (
    <Helmet>
      {/* ── Core ──────────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* ── Open Graph ──────────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(DEFAULT_OG_IMAGE_W)} />
      <meta property="og:image:height" content={String(DEFAULT_OG_IMAGE_H)} />
      <meta property="og:locale" content="en_AU" />

      {/* ── Twitter / X ─────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── JSON-LD ─────────────────────────────────────────────── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

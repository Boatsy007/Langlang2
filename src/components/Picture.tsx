/**
 * Drop-in <picture> wrapper that serves WebP with JPG/PNG fallback.
 * Assumes a .webp version exists at the same path with the extension replaced.
 * e.g. /images/projects/foo/hero.jpg → /images/projects/foo/hero.webp
 */

interface PictureProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  draggable?: boolean
  width?: number
  height?: number
  sizes?: string
  onClick?: React.MouseEventHandler<HTMLImageElement>
}

function webpSrc(src: string): string {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export function Picture({
  src,
  alt,
  className,
  style,
  loading = 'lazy',
  fetchPriority,
  draggable,
  width,
  height,
  sizes,
  onClick,
}: PictureProps) {
  const webp = webpSrc(src)

  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        draggable={draggable}
        width={width}
        height={height}
        decoding="async"
        onClick={onClick}
      />
    </picture>
  )
}

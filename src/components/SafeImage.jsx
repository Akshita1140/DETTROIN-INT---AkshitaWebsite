import React, { useState, useEffect } from 'react'

/**
 * <img> replacement that swaps to a guaranteed-uptime fallback
 * image if the primary source fails to load.
 */
export function SafeImage({ src, fallback, alt = '', className, ...props }) {
  const [current, setCurrent] = useState(src)

  useEffect(() => {
    setCurrent(src)
  }, [src])

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => {
        if (current !== fallback) setCurrent(fallback)
      }}
      {...props}
    />
  )
}

/**
 * Hook for CSS background-image usages (hero sections etc).
 * Preloads the primary image; if it fails, swaps to the fallback URL.
 */
export function useSafeImage(src, fallback) {
  const [url, setUrl] = useState(src)

  useEffect(() => {
    let cancelled = false
    const img = new window.Image()
    img.onload = () => {
      if (!cancelled) setUrl(src)
    }
    img.onerror = () => {
      if (!cancelled) setUrl(fallback)
    }
    img.src = src
    return () => {
      cancelled = true
    }
  }, [src, fallback])

  return url
}

/** Build a guaranteed-uptime Lorem Picsum placeholder URL. */
export function placeholder(seed, w = 1200, h = 800) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`
}

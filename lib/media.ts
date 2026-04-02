export function getMediaUrl(media: unknown): string | undefined {
  if (!media || typeof media !== 'object') return undefined

  const candidate = media as {
    url?: string
    thumbnailURL?: string
    sizes?: {
      medium?: { url?: string }
      large?: { url?: string }
    }
  }

  return candidate.url ?? candidate.sizes?.large?.url ?? candidate.sizes?.medium?.url ?? candidate.thumbnailURL
}

export function getMediaAlt(media: unknown, fallback = ''): string {
  if (!media || typeof media !== 'object') return fallback

  const candidate = media as { alt?: string }
  return candidate.alt ?? fallback
}

import type { Payload } from 'payload'

import {
  DEFAULT_LOCALE,
  buildHrefFromSlug,
  getHrefForPageKey,
  normalizeSlug,
  type PageKey,
} from '@/lib/routes'

type PageLike = {
  routeType?: string | null
  pageKey?: string | null
  slug?: string | null
}

export function getDocPaths(doc?: PageLike | null): string[] {
  if (!doc) return []

  const routeType = doc.routeType ?? (doc.pageKey ? 'system' : 'custom')

  if (routeType === 'custom') {
    const slug = typeof doc.slug === 'string' ? normalizeSlug(doc.slug) : ''
    if (!slug) return []
    return [buildHrefFromSlug(slug, DEFAULT_LOCALE)]
  }

  if (!doc.pageKey) return []

  return [getHrefForPageKey(doc.pageKey as PageKey, DEFAULT_LOCALE)]
}

export async function revalidatePaths(paths: string[]) {
  const uniquePaths = Array.from(new Set(paths.filter(Boolean)))
  if (!uniquePaths.length) return

  const secret = process.env.REVALIDATE_SECRET
  if (!secret) return

  const baseURL = process.env.APP_URL || 'http://localhost:3000'

  try {
    const response = await fetch(`${baseURL}/api/revalidate`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-revalidate-secret': secret,
      },
      body: JSON.stringify({ paths: uniquePaths }),
    })

    if (!response.ok) {
      console.error('Page revalidation failed', await response.text())
    }
  } catch (error) {
    console.error('Failed to revalidate page paths', error)
  }
}

export async function getAllPagePaths(payload: Payload) {
  const result = await payload.find({
    collection: 'pages',
    locale: DEFAULT_LOCALE,
    depth: 0,
    limit: 1000,
  })

  return Array.from(
    new Set(result.docs.flatMap((doc) => getDocPaths(doc as PageLike))),
  )
}

export async function revalidateAllPages(payload: Payload) {
  const paths = await getAllPagePaths(payload)
  await revalidatePaths(paths)
}
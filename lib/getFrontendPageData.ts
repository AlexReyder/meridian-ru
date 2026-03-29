import { cache } from 'react'

import { getPayloadClient } from '@/lib/payload'
import {
  getHrefForPageKey,
  getLocaleDirection,
  type Locale,
  type PageKey,
  resolveLocaleAndPageKey,
} from '@/lib/routes'

type UnknownDoc = Record<string, any>

function segmentsToKey(segments?: string[]) {
  return (segments ?? []).join('/')
}

function keyToSegments(key: string): string[] {
  return key ? key.split('/') : []
}

const getFrontendPageDataCached = cache(async (segmentsKey: string) => {
  const segments = keyToSegments(segmentsKey)
  const route = resolveLocaleAndPageKey(segments)

  if (!route) {
    return null
  }

  const payload = await getPayloadClient()

  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: route.pageKey,
      },
    },
    limit: 1,
    locale: route.locale,
    fallbackLocale: 'none',
    depth: 2,
  })

  const page = pageResult.docs[0] as UnknownDoc | undefined

  if (!page) {
    return null
  }

  const [header, footer] = await Promise.all([
    payload.findGlobal({
      slug: 'header',
      locale: route.locale,
      fallbackLocale: 'none',
      depth: 1,
    }),
    payload.findGlobal({
      slug: 'footer',
      locale: route.locale,
      fallbackLocale: 'none',
      depth: 1,
    }),
  ])

  return {
    route,
    page,
    header,
    footer,
    dir: getLocaleDirection(route.locale),
  }
})

export async function getFrontendPageData(segments?: string[]) {
  return getFrontendPageDataCached(segmentsToKey(segments))
}

function getByPath<T = unknown>(obj: UnknownDoc | undefined, path: string): T | undefined {
  if (!obj) return undefined

  return path.split('.').reduce<any>((acc, key) => {
    if (acc == null) return undefined
    return acc[key]
  }, obj) as T | undefined
}

function getMediaUrl(image: unknown, siteUrl: string): string | undefined {
  if (!image) return undefined

  if (typeof image === 'string') {
    return image.startsWith('http') ? image : new URL(image, siteUrl).toString()
  }

  if (typeof image === 'object' && image !== null) {
    const candidate = (image as Record<string, any>).url
    if (typeof candidate === 'string') {
      return candidate.startsWith('http') ? candidate : new URL(candidate, siteUrl).toString()
    }
  }

  return undefined
}

export function buildPageMetadata(args: {
  page: UnknownDoc
  locale: Locale
  pageKey: PageKey
}) {
  const { page, locale, pageKey } = args

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const canonical =
    getByPath<string>(page, 'meta.canonicalURL') ||
    getByPath<string>(page, 'meta.canonicalUrl') ||
    getByPath<string>(page, 'seo.canonicalURL') ||
    getByPath<string>(page, 'seo.canonicalUrl') ||
    new URL(getHrefForPageKey(pageKey, locale), siteUrl).toString()

  const title =
    getByPath<string>(page, 'meta.title') ||
    getByPath<string>(page, 'seo.title') ||
    page.title ||
    'Atelier Meridian'

  const description =
    getByPath<string>(page, 'meta.description') ||
    getByPath<string>(page, 'seo.description') ||
    ''

  const imageUrl = getMediaUrl(
    getByPath(page, 'meta.image') || getByPath(page, 'seo.image'),
    siteUrl,
  )

  const noIndex =
    getByPath<boolean>(page, 'meta.noIndex') ||
    getByPath<boolean>(page, 'meta.robots.noindex') ||
    getByPath<boolean>(page, 'seo.noIndex') ||
    false

  const noFollow =
    getByPath<boolean>(page, 'meta.noFollow') ||
    getByPath<boolean>(page, 'meta.robots.nofollow') ||
    getByPath<boolean>(page, 'seo.noFollow') ||
    false

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: new URL(getHrefForPageKey(pageKey, 'ru'), siteUrl).toString(),
      },
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale,
      siteName: 'Atelier Meridian',
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}
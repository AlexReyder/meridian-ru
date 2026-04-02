import { cache } from 'react'
import type { Metadata } from 'next'

import { notFound } from 'next/navigation'

import { PageRenderer } from '@/components/cms/PageRenderer'
import { getPayloadClient } from '@/lib/payload'
import {
  LOCALES,
  PAGE_KEYS,
  buildHrefFromSlug,
  getHrefForPageKey,
  normalizeSlug,
  resolveLocaleAndPageKey,
  stripLocalePrefix,
  type Locale,
  type PageKey,
} from '@/lib/routes'

export const dynamic = 'force-static'
export const dynamicParams = true

type Params = {
  segments?: string[]
}

type Props = {
  params: Promise<Params> | Params
}

function segmentsFromHref(href: string) {
  return href === '/' ? [] : href.replace(/^\//, '').split('/')
}

function getHrefVariants(href: string, _locale: Locale) {
  if (href === '/') {
    return ['/', '/ru']
  }

  return [href, `/ru${href}`]
}

const resolvePage = cache(async (segmentsKey: string) => {
  const segments = segmentsKey ? segmentsKey.split('/').filter(Boolean) : undefined
  const payload = await getPayloadClient()

  const systemRoute = resolveLocaleAndPageKey(segments)

  if (systemRoute) {
    const pageResult = await payload.find({
      collection: 'pages',
      where: {
        pageKey: {
          equals: systemRoute.pageKey,
        },
      },
      limit: 1,
      locale: systemRoute.locale,
      fallbackLocale: 'none',
      depth: 2,
    })

    return {
      payload,
      locale: systemRoute.locale,
      pageKey: systemRoute.pageKey,
      page: pageResult.docs[0] ?? null,
    }
  }

  const locale = 'ru' as const
  const slug = normalizeSlug(stripLocalePrefix(segments).join('/'))

  if (!slug) {
    return {
      payload,
      locale,
      pageKey: undefined,
      page: null,
    }
  }

  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      routeType: {
        equals: 'custom',
      },
      slug: {
        equals: slug,
      },
    },
    limit: 1,
    locale,
    fallbackLocale: 'none',
    depth: 2,
  })

  return {
    payload,
    locale,
    pageKey: undefined,
    page: pageResult.docs[0] ?? null,
  }
})

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  const params: Array<{ segments?: string[] }> = []
  const seen = new Set<string>()

  for (const pageKey of PAGE_KEYS as PageKey[]) {
    for (const locale of LOCALES) {
      const href = getHrefForPageKey(pageKey, locale)

      for (const variant of getHrefVariants(href, locale)) {
        if (seen.has(variant)) continue
        seen.add(variant)

        params.push({
          segments: segmentsFromHref(variant),
        })
      }
    }
  }

  for (const locale of LOCALES) {
    const customPages = await payload.find({
      collection: 'pages',
      where: {
        routeType: {
          equals: 'custom',
        },
      },
      limit: 1000,
      locale,
      fallbackLocale: 'none',
      depth: 0,
    })

    for (const page of customPages.docs) {
      const slug =
        typeof page.slug === 'string' ? normalizeSlug(page.slug) : ''

      if (!slug) continue

      const href = buildHrefFromSlug(slug, locale)

      for (const variant of getHrefVariants(href, locale)) {
        if (seen.has(variant)) continue
        seen.add(variant)

        params.push({
          segments: segmentsFromHref(variant),
        })
      }
    }
  }

  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const { page } = await resolvePage((resolvedParams.segments ?? []).join('/'))

  if (!page) return {}

  return {
    title: page.metaTitle || page.internalName || 'Atelier Meridian',
    description: page.metaDescription || '',
  }
}

export default async function FrontendPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params)
  const { payload, locale, page, pageKey } = await resolvePage(
    (resolvedParams.segments ?? []).join('/'),
  )

  if (!page) {
    notFound()
  }

  const [header, footer] = await Promise.all([
    payload.findGlobal({
      slug: 'header',
      locale,
      fallbackLocale: 'none',
      depth: 1,
    }),
    payload.findGlobal({
      slug: 'footer',
      locale,
      fallbackLocale: 'none',
      depth: 1,
    }),
  ])

  return (
    <PageRenderer
      page={page}
      pageKey={pageKey}
      locale={locale}
      header={header}
      footer={footer}
    />
  )
}
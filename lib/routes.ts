export type Locale = 'ru'

export type PageKey =
  | 'home'
  | 'solutions'
  | 'pricing'
  | 'get-proposal'
  | 'concepts'
  | 'for-startups'
  | 'for-partners'
  | 'method'

export type LanguageSwitcherItem = {
  code: string
  label: string
  locale: Locale
  href: string
}

export const DEFAULT_LOCALE: Locale = 'ru'
export const RTL_LOCALES: Locale[] = []
export const LOCALES: Locale[] = ['ru']

export const PAGE_KEYS: PageKey[] = [
  'home',
  'solutions',
  'pricing',
  'get-proposal',
  'concepts',
  'for-startups',
  'for-partners',
  'method',
]

export const PAGE_KEY_OPTIONS = PAGE_KEYS.map((value) => ({
  label: value,
  value,
}))

const ROUTE_MAP: Record<PageKey, string[]> = {
  home: [],
  solutions: ['solutions'],
  pricing: ['pricing'],
  'get-proposal': ['get-proposal'],
  concepts: ['concepts'],
  'for-startups': ['for-startups'],
  'for-partners': ['for-agencies'],
  method: ['method'],
}

export function isRTL(_locale: Locale) {
  return false
}

export function getLocaleDirection(_locale: Locale) {
  return 'ltr' as const
}

export function getHrefForPageKey(
  pageKey: PageKey,
  _locale: Locale = DEFAULT_LOCALE,
): string {
  const segments = ROUTE_MAP[pageKey]
  return segments.length ? `/${segments.join('/')}` : '/'
}

export function resolveLocaleAndPageKey(
  segments?: string[],
): {
  locale: Locale
  pageKey: PageKey
} | null {
  const normalized = stripLocalePrefix(segments)

  for (const [pageKey, candidate] of Object.entries(ROUTE_MAP) as Array<
    [PageKey, string[]]
  >) {
    if (
      candidate.length === normalized.length &&
      candidate.every((part, index) => part === normalized[index])
    ) {
      return { locale: DEFAULT_LOCALE, pageKey }
    }
  }

  return null
}

export function getLanguageSwitcher(
  _pageKey: PageKey,
): LanguageSwitcherItem[] {
  return []
}

export function getLocaleFromSegments(_segments?: string[]): Locale {
  return DEFAULT_LOCALE
}

export function stripLocalePrefix(segments?: string[]) {
  const normalized = segments ?? []

  if (normalized[0] === 'ru') {
    return normalized.slice(1)
  }

  return normalized
}

export function normalizeSlug(value: string) {
  return value.trim().replace(/^\/+|\/+$/g, '')
}

export function buildHrefFromSlug(slug: string, locale: Locale) {
  const normalized = normalizeSlug(slug)

  if (!normalized) {
    return getHrefForPageKey('home', locale)
  }

  return `/${normalized}`
}
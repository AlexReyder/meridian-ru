import Link from 'next/link'

import {
  LOCALES,
  getHrefForPageKey,
  type Locale,
  type PageKey,
} from '@/lib/routes'

type FooterLink = {
  label?: string | null
  pageKey?: PageKey | null
  href?: string | null
  anchor?: string | null
}

type FooterColumn = {
  type?: 'links' | 'cta' | null
  title?: string | null
  links?: FooterLink[] | null
  body?: string | null
  buttonLabel?: string | null
  buttonPageKey?: PageKey | null
  buttonHref?: string | null
}

type FooterData = {
  variant?: 'dark' | 'light' | null
  brandName?: string | null
  brandTagline?: string | null
  description?: string | null
  brandEmail?: string | null
  columns?: FooterColumn[] | null
  bottomTextTemplate?: string | null
  bottomLinks?: FooterLink[] | null
}

type Props = {
  data?: FooterData | null
  locale: Locale
  dir?: 'ltr' | 'rtl'
}

function resolveHref(link: FooterLink | null | undefined, locale: Locale) {
  if (!link) return '#'

  if (link.href) return link.href

  if (link.pageKey) {
    const base = getHrefForPageKey(link.pageKey, locale)
    return link.anchor ? `${base}${link.anchor}` : base
  }

  return '#'
}

function renderBottomText(template?: string | null) {
  if (!template) return ''
  return template.replace('{year}', String(new Date().getFullYear()))
}

function normalizeHref(href?: string | null) {
  if (!href) return ''
  const value = href.trim()
  if (!value) return ''
  if (value === '/') return '/'
  return value.replace(/\/+$/, '')
}

function isLanguageSwitcherColumn(column?: FooterColumn | null) {
  const links = column?.links ?? []

  if (!links.length) return false

  const languageHrefs = new Set(['/', '/en', '/ar'])

  return links.every((link) => languageHrefs.has(normalizeHref(link.href)))
}

export function SiteFooter({ data, locale, dir = 'ltr' }: Props) {
  const isRTL = dir === 'rtl'
  const variant = data?.variant || 'light'
  const brandHref = getHrefForPageKey('home', locale)

  const columns = (data?.columns ?? []).filter((column) => {
    if (LOCALES.length > 1) return true
    return !isLanguageSwitcherColumn(column)
  })

  if (variant === 'dark') {
    return (
      <footer dir={dir} className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <Link href={brandHref} className="mb-6 inline-flex items-center gap-3">
                  <div className="flex flex-col gap-0.5">
                    <div className="h-2 w-[3px] rounded-full bg-signature-cobalt-soft" />
                    <div className="h-1.5 w-[3px] rounded-full bg-signature-brass-soft" />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-serif text-xl font-medium tracking-tight text-background">
                      {data?.brandName || 'Atelier Meridian'}
                    </span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-background/50">
                      {data?.brandTagline || 'Product Architecture & Interface Studio'}
                    </span>
                  </div>
                </Link>

                <p className="max-w-sm text-sm leading-relaxed text-background/60">
                  {data?.description}
                </p>

                {data?.brandEmail ? (
                  <a
                    href={`mailto:${data.brandEmail}`}
                    className="mt-6 inline-block text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {data.brandEmail}
                  </a>
                ) : null}
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {columns.map((column, index) => (
                    <div key={`${column.title}-${index}`}>
                      <h4 className="mb-4 text-xs uppercase tracking-[0.15em] text-background/50">
                        {column.title}
                      </h4>

                      {column.type === 'cta' ? (
                        <>
                          {column.body ? (
                            <p className="mb-4 text-sm leading-relaxed text-background/70">
                              {column.body}
                            </p>
                          ) : null}

                          {column.buttonLabel ? (
                            <Link
                              href={
                                column.buttonHref ||
                                (column.buttonPageKey
                                  ? getHrefForPageKey(column.buttonPageKey, locale)
                                  : '#')
                              }
                              className="inline-flex h-10 items-center justify-center rounded-md bg-background px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-background/90"
                            >
                              {column.buttonLabel}
                            </Link>
                          ) : null}
                        </>
                      ) : (
                        <ul className="space-y-3">
                          {(column.links ?? []).map((link, linkIndex) => (
                            <li key={`${link.label}-${linkIndex}`}>
                              <Link
                                href={resolveHref(link, locale)}
                                className="text-sm text-background/70 transition-colors hover:text-background"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-8">
            <div className="absolute left-0 right-0 top-0 flex items-center">
              <div className="h-[1px] flex-1 bg-background/10" />
              <div className="mx-1 h-[2px] w-3 rounded-full bg-signature-cobalt-soft/60" />
              <div className="h-[2px] w-2 rounded-full bg-signature-brass-soft/60" />
              <div className="h-[1px] flex-1 bg-background/10" />
            </div>

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-background/40">
                {renderBottomText(data?.bottomTextTemplate)}
              </p>

              <div className="flex gap-6">
                {(data?.bottomLinks ?? []).map((link, index) => (
                  <Link
                    key={`${link.label}-${index}`}
                    href={resolveHref(link, locale)}
                    className="text-xs text-background/40 transition-colors hover:text-background/60"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer dir={dir} className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Link href={brandHref} className="flex items-center gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="h-2 w-[3px] rounded-full bg-signature-cobalt" />
                <div className="h-1.5 w-[3px] rounded-full bg-signature-brass" />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-tight text-foreground">
                  {data?.brandName || 'Atelier Meridian'}
                </span>
                <span
                  className={`text-[10px] uppercase text-muted-foreground ${
                    isRTL ? 'tracking-[0.15em]' : 'tracking-[0.2em]'
                  }`}
                >
                  {data?.brandTagline || 'Product Architecture & Interface Studio'}
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {data?.description}
            </p>
          </div>

          {columns.map((column, index) => (
            <div key={`${column.title}-${index}`} className="lg:col-span-4">
              <h4 className="mb-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {column.title}
              </h4>

              {column.type === 'cta' ? (
                <>
                  {column.body ? (
                    <p className="mb-4 text-sm text-muted-foreground">{column.body}</p>
                  ) : null}

                  {column.buttonLabel ? (
                    <Link
                      href={
                        column.buttonHref ||
                        (column.buttonPageKey
                          ? getHrefForPageKey(column.buttonPageKey, locale)
                          : '#')
                      }
                      className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90"
                    >
                      {column.buttonLabel}
                    </Link>
                  ) : null}
                </>
              ) : (
                <nav className="grid grid-cols-2 gap-3">
                  {(column.links ?? []).map((link, linkIndex) => (
                    <Link
                      key={`${link.label}-${linkIndex}`}
                      href={resolveHref(link, locale)}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {renderBottomText(data?.bottomTextTemplate)}
          </p>

          <div className="flex items-center gap-6">
            {(data?.bottomLinks ?? []).map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                href={resolveHref(link, locale)}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
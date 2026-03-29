import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PricingInclude = {
  label?: string | null
}

type PricingItem = {
  name?: string | null
  price?: string | null
  timeline?: string | null
  description?: string | null
  featured?: boolean | null
  includes?: PricingInclude[] | null
}

type PricingHomeBlockData = {
  sectionId?: string | null
  eyebrow?: string | null
  title?: string | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
  featuredBadge?: string | null
  items?: PricingItem[] | null
}

type Props = {
  block: PricingHomeBlockData
  locale: Locale
}

export function PricingHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const ctaHref = getHrefForPageKey(block.ctaPageKey ?? 'get-proposal', locale)

  return (
    <section
      id={block.sectionId ?? 'formats'}
      dir={rtl ? 'rtl' : 'ltr'}
      className="bg-secondary/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16 max-w-3xl', rtl && 'text-right')}>
          <div className={cn('mb-4 flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
              {rtl ? (
                <>
                  <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                  <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                </>
              )}
            </div>

            <span
              className={cn(
                'text-[10px] text-muted-foreground',
                rtl ? 'tracking-[0.15em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {block.items?.map((pkg, index) => {
            const featured = Boolean(pkg.featured)

            return (
              <div
                key={`${pkg.name}-${index}`}
                className={cn(
                  'relative rounded-sm border p-8 transition-all duration-300 lg:p-10',
                  featured
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-card hover:border-foreground/20',
                  rtl && 'text-right',
                )}
              >
                {featured ? (
                  <div
                    className={cn(
                      'absolute -top-3 text-[10px] text-white px-3 py-1 rounded-sm bg-gradient-to-r from-signature-cobalt to-signature-cobalt-soft',
                      rtl ? 'right-8 tracking-[0.1em]' : 'left-8 uppercase tracking-[0.15em]',
                    )}
                  >
                    {block.featuredBadge}
                  </div>
                ) : null}

                <div className="mb-8">
                  <h3
                    className={cn(
                      'mb-2 font-serif text-xl lg:text-2xl',
                      featured ? 'text-background' : 'text-foreground',
                    )}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={cn(
                      'text-sm leading-relaxed',
                      featured ? 'text-background/70' : 'text-muted-foreground',
                    )}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className={cn(
                      'font-serif text-3xl lg:text-4xl',
                      featured ? 'text-background' : 'text-foreground',
                    )}
                  >
                    {pkg.price}
                  </span>

                  <span
                    className={cn(
                      'text-sm',
                      featured ? 'text-background/60' : 'text-muted-foreground',
                      rtl ? 'mr-2' : 'ml-2',
                    )}
                  >
                    / {pkg.timeline}
                  </span>
                </div>

                <ul className="mb-10 space-y-3">
                  {pkg.includes?.map((item, includeIndex) =>
                    item?.label ? (
                      <li
                        key={`${item.label}-${includeIndex}`}
                        className={cn('flex items-start gap-3', rtl && 'flex-row-reverse')}
                      >
                        <Check
                          className={cn(
                            'mt-0.5 h-4 w-4 flex-shrink-0',
                            featured ? 'text-signature-brass' : 'text-signature-cobalt',
                          )}
                        />
                        <span
                          className={cn(
                            'text-sm',
                            featured ? 'text-background/80' : 'text-muted-foreground',
                          )}
                        >
                          {item.label}
                        </span>
                      </li>
                    ) : null,
                  )}
                </ul>

                <Link
                  href={ctaHref}
                  className={cn(
                    'inline-flex w-full items-center justify-center rounded-sm px-4 py-3 text-center text-xs transition-colors',
                    featured
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'bg-foreground text-background hover:bg-foreground/90',
                    rtl ? 'tracking-[0.12em]' : 'uppercase tracking-wider',
                  )}
                >
                  {rtl ? (
                    <>
                      <ArrowLeft className="ml-2 h-4 w-4" />
                      {block.ctaLabel}
                    </>
                  ) : (
                    <>
                      {block.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
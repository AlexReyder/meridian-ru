import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type SituationsStartupsItem = {
  situation?: string | null
  explanation?: string | null
}

type SituationsStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'detailedCards' | 'simpleCards' | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
  items?: SituationsStartupsItem[] | null
}

type Props = {
  block: SituationsStartupsBlockData
  locale: Locale
}

export function SituationsStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const variant = block.layoutVariant ?? 'detailedCards'

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
          <span className="h-px w-8 bg-accent" />
          <span
            className={cn(
              'text-[11px] text-muted-foreground',
              rtl ? 'tracking-[0.18em]' : 'uppercase tracking-[0.2em]',
            )}
          >
            {block.eyebrow}
          </span>
        </div>

        <h2
          className={cn(
            'mb-12 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl',
            rtl && 'ml-auto text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {block.items?.map((item, index) =>
            item?.situation ? (
              <div
                key={`${item.situation}-${index}`}
                className={cn(
                  'group rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-accent/40 lg:p-8',
                  rtl && 'text-right',
                )}
              >
                <div className="mb-4 text-3xl font-light text-accent/30">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="mb-4 font-serif text-lg font-light leading-snug text-foreground">
                  {item.situation}
                </h3>

                {variant === 'detailedCards' ? (
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {item.explanation}
                  </p>
                ) : (
                  <div className="mb-6" />
                )}

                <Link
                  href={getHrefForPageKey(block.ctaPageKey ?? 'get-proposal', locale)}
                  className={cn(
                    'inline-flex items-center text-xs text-foreground/70 transition-colors hover:text-foreground',
                    rtl ? 'tracking-[0.12em]' : 'uppercase tracking-wider',
                  )}
                >
                  {rtl ? (
                    <>
                      <ArrowLeft className="ml-2 h-3.5 w-3.5" />
                      {block.ctaLabel}
                    </>
                  ) : (
                    <>
                      {block.ctaLabel}
                      <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </>
                  )}
                </Link>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type AudienceSolutionItem = {
  title?: string | null
  challenge?: string | null
  result?: string | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
}

type AudienceSolutionsBlockData = {
  eyebrow?: string | null
  title?: string | null
  challengeLabel?: string | null
  resultLabel?: string | null
  items?: AudienceSolutionItem[] | null
}

type Props = {
  block: AudienceSolutionsBlockData
  locale: Locale
}

export function AudienceSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
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
            'max-w-2xl font-serif text-3xl font-light leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]',
            rtl && 'text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {block.items?.map((audience, index) =>
            audience?.title ? (
              <div
                key={`${audience.title}-${index}`}
                className={cn(
                  'flex min-h-[320px] flex-col rounded border border-border/60 bg-card p-6 lg:p-8',
                  rtl && 'text-right',
                )}
              >
                <h3 className="font-serif text-xl font-light leading-snug text-foreground lg:text-[1.35rem]">
                  {audience.title}
                </h3>

                <div className="mt-6 flex-1 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {block.challengeLabel}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {audience.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {block.resultLabel}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                      {audience.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/40 pt-5">
                  <Link
                    href={getHrefForPageKey(audience.ctaPageKey ?? 'get-proposal', locale)}
                    className={cn(
                      'group inline-flex items-center text-sm text-foreground transition-colors hover:text-accent',
                      rtl && 'flex-row-reverse',
                    )}
                  >
                    {rtl ? (
                      <>
                        <ArrowLeft className="ml-2 h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                        {audience.ctaLabel}
                      </>
                    ) : (
                      <>
                        {audience.ctaLabel}
                        <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Link>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
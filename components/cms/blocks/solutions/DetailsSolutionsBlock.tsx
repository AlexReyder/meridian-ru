import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type LabelItem = {
  label?: string | null
}

type DetailsItem = {
  anchorId?: string | null
  title?: string | null
  intro?: string | null
  whenRelevant?: LabelItem[] | null
  whatWeClarify?: LabelItem[] | null
  whatClientReceives?: LabelItem[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
}

type DetailsSolutionBlockData = {
  whenRelevantLabel?: string | null
  whatWeClarifyLabel?: string | null
  whatClientReceivesLabel?: string | null
  items?: DetailsItem[] | null
}

type Props = {
  block: DetailsSolutionBlockData
  locale: Locale
}

export function DetailsSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {block.items?.map((solution, index) =>
            solution?.anchorId && solution?.title ? (
              <div key={`${solution.anchorId}-${index}`} id={solution.anchorId} className="scroll-mt-24">
                <div className={cn('mb-8 flex items-center gap-4', rtl && 'flex-row-reverse')}>
                  <span className="text-[11px] font-medium tracking-wider text-accent/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-border/60" />
                </div>

                <div className={cn('grid gap-12 lg:grid-cols-2 lg:gap-16', rtl && 'lg:[direction:rtl]')}>
                  <div className={cn(rtl && 'text-right')}>
                    <h3 className="font-serif text-2xl font-light leading-snug text-foreground sm:text-3xl lg:text-[2rem]">
                      {solution.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {solution.intro}
                    </p>

                    <div className="mt-8">
                      <h4 className="mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        {block.whenRelevantLabel}
                      </h4>

                      <ul className="space-y-2">
                        {solution.whenRelevant?.map((item, itemIndex) =>
                          item?.label ? (
                            <li
                              key={`${item.label}-${itemIndex}`}
                              className={cn('flex items-start gap-3 text-sm text-muted-foreground', rtl && 'flex-row-reverse')}
                            >
                              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/50" />
                              {item.label}
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className={cn('rounded border border-border/40 bg-secondary/30 p-6', rtl && 'text-right')}>
                      <h4 className="mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        {block.whatWeClarifyLabel}
                      </h4>

                      <ul className="space-y-2.5">
                        {solution.whatWeClarify?.map((item, itemIndex) =>
                          item?.label ? (
                            <li
                              key={`${item.label}-${itemIndex}`}
                              className={cn('flex items-start gap-3 text-sm text-foreground/80', rtl && 'flex-row-reverse')}
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                              {item.label}
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </div>

                    <div className={cn('rounded border border-border/60 bg-card p-6', rtl && 'text-right')}>
                      <h4 className="mb-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                        {block.whatClientReceivesLabel}
                      </h4>

                      <ul className="space-y-2.5">
                        {solution.whatClientReceives?.map((item, itemIndex) =>
                          item?.label ? (
                            <li
                              key={`${item.label}-${itemIndex}`}
                              className={cn('flex items-start gap-3 text-sm text-foreground', rtl && 'flex-row-reverse')}
                            >
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent/70" />
                              {item.label}
                            </li>
                          ) : null,
                        )}
                      </ul>
                    </div>

                    <div className={cn('flex flex-col gap-3 sm:flex-row', rtl && 'sm:flex-row-reverse')}>
                      <Link
                        href={getHrefForPageKey(solution.primaryPageKey ?? 'get-proposal', locale)}
                        className={cn(
                          'inline-flex h-10 items-center justify-center rounded-md bg-foreground px-6 text-[11px] font-medium text-background transition-colors hover:bg-foreground/90',
                          rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
                        )}
                      >
                        {rtl ? (
                          <>
                            <ArrowLeft className="ml-2 h-3.5 w-3.5" />
                            {solution.primaryButtonLabel}
                          </>
                        ) : (
                          <>
                            {solution.primaryButtonLabel}
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </>
                        )}
                      </Link>

                      {solution.secondaryButtonLabel && solution.secondaryPageKey ? (
                        <Link
                          href={getHrefForPageKey(solution.secondaryPageKey, locale)}
                          className={cn(
                            'inline-flex h-10 items-center justify-center rounded-md border border-foreground/15 px-6 text-[11px] font-medium text-foreground transition-colors hover:bg-foreground/5',
                            rtl ? 'tracking-[0.12em]' : 'uppercase tracking-[0.15em]',
                          )}
                        >
                          {solution.secondaryButtonLabel}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
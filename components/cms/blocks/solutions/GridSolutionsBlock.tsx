import { ArrowDown } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type GridItem = {
  anchorId?: string | null
  title?: string | null
  subtitle?: string | null
}

type GridSolutionsBlockData = {
  eyebrow?: string | null
  learnMoreLabel?: string | null
  items?: GridItem[] | null
}

type Props = {
  block: GridSolutionsBlockData
  locale: Locale
}

export function GridSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className={cn('mb-12 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
          <span className="h-px w-8 bg-accent" />
          <span
            className={cn(
              'text-[11px] text-muted-foreground',
              rtl ? 'tracking-[0.15em]' : 'uppercase tracking-[0.2em]',
            )}
          >
            {block.eyebrow}
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {block.items?.map((solution, index) =>
            solution?.anchorId && solution?.title ? (
              <a
                key={`${solution.anchorId}-${index}`}
                href={`#${solution.anchorId}`}
                className={cn(
                  'group flex min-h-[220px] flex-col rounded border border-border/60 bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg lg:p-8',
                  rtl && 'text-right',
                )}
              >
                <h3 className="font-serif text-xl font-light leading-snug text-foreground transition-colors group-hover:text-foreground/90 lg:text-[1.35rem]">
                  {solution.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {solution.subtitle}
                </p>

                <div className={cn('mt-6 flex items-center justify-between border-t border-border/40 pt-4', rtl && 'flex-row-reverse')}>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground/70">
                    {block.learnMoreLabel}
                  </span>
                  <ArrowDown className="h-4 w-4 text-muted-foreground/50 transition-all group-hover:translate-y-0.5 group-hover:text-accent" />
                </div>
              </a>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
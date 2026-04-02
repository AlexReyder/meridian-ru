import { ArrowRight as ArrowRightIcon, Lightbulb, Presentation, Rocket } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ValueStartupsItem = {
  number?: string | null
  icon?: 'lightbulb' | 'presentation' | 'rocket' | 'arrowRight' | null
  title?: string | null
  description?: string | null
}

type ValueStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  layoutVariant?: 'iconCards' | 'numberedCards' | null
  items?: ValueStartupsItem[] | null
}

type Props = {
  block: ValueStartupsBlockData
  locale: Locale
}

const iconMap = {
  lightbulb: Lightbulb,
  presentation: Presentation,
  rocket: Rocket,
  arrowRight: ArrowRightIcon,
} as const

export function ValueStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const variant = block.layoutVariant ?? 'iconCards'
  const columnsClass = variant === 'numberedCards' ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'

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
            'mb-6 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl',
            rtl && 'ml-auto text-right',
          )}
        >
          {block.title}
        </h2>

        <p
          className={cn(
            'mb-12 max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg',
            rtl && 'ml-auto text-right',
          )}
        >
          {block.description}
        </p>

        <div className={cn('grid gap-6', columnsClass)}>
          {block.items?.map((item, index) =>
            item?.title ? (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  'rounded border border-border/60 bg-card p-6 transition-colors hover:border-accent/30',
                  rtl && 'text-right',
                )}
              >
                {variant === 'numberedCards' ? (
                  <div className="mb-4 text-3xl font-light text-accent/40">
                    {item.number}
                  </div>
                ) : (
                  (() => {
                    const Icon = iconMap[item.icon ?? 'lightbulb']
                    return (
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                    )
                  })()
                )}

                <h3 className="mb-3 font-serif text-lg font-light leading-snug text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
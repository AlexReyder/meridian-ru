import { Code, Trophy, TrendingUp } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ValueHomeItem = {
  variant?: 'icon' | 'step'
  icon?: 'trendingUp' | 'trophy' | 'code' | null
  kicker?: string | null
  title?: string | null
  description?: string | null
}

type ValueHomeBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: ValueHomeItem[] | null
}

type Props = {
  block: ValueHomeBlockData
  locale: Locale
}

const iconMap = {
  trendingUp: TrendingUp,
  trophy: Trophy,
  code: Code,
} as const

export function ValueHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const items = Array.isArray(block.items) ? block.items : []

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16', rtl ? 'max-w-4xl text-right' : 'max-w-3xl')}>
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
                'text-[10px] uppercase text-muted-foreground',
                rtl ? 'tracking-[0.15em]' : 'tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          {block.title ? (
            <h2
              className={cn(
                'font-serif font-light leading-tight text-foreground text-balance',
                rtl ? 'text-2xl lg:text-3xl xl:text-4xl' : 'text-3xl lg:text-4xl xl:text-5xl',
              )}
            >
              {block.title}
            </h2>
          ) : null}

          {block.description ? (
            <p
              className={cn(
                'mt-6 text-muted-foreground leading-relaxed',
                rtl ? 'max-w-2xl text-base' : 'max-w-3xl',
              )}
            >
              {block.description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {items.map((item, index) => {
            const variant = item.variant ?? 'icon'
            const Icon = iconMap[item.icon ?? 'trendingUp']

            return (
              <div
                key={`${item.title ?? 'item'}-${index}`}
                className="group relative rounded-sm border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/20 lg:p-10"
              >
                {index === 0 ? (
                  <div className={cn('absolute top-0', rtl ? 'right-0' : 'left-0')}>
                    <div
                      className={cn(
                        'absolute top-0 h-[2px] w-4 bg-signature-cobalt',
                        rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full',
                        rtl ? 'right-0' : 'left-0',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-[2px] h-[1.5px] w-2 rounded-full bg-signature-brass/70',
                        rtl ? 'right-4' : 'left-4',
                      )}
                    />
                  </div>
                ) : null}

                {variant === 'step' ? (
                  <>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground">0{index + 1}</span>
                    </div>

                    {item.title ? (
                      <h3 className="mb-3 font-serif text-lg text-foreground">{item.title}</h3>
                    ) : null}

                    {item.description ? (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>

                      <div>
                        {item.kicker ? (
                          <span className="block text-xs font-medium uppercase tracking-[0.15em] text-signature-cobalt">
                            {item.kicker}
                          </span>
                        ) : null}

                        {item.title ? (
                          <span className="block font-serif text-lg text-foreground">{item.title}</span>
                        ) : null}
                      </div>
                    </div>

                    {item.description ? (
                      <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                    ) : null}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { RefreshCw, Target, Users, Zap } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type EfficiencyItem = {
  icon?: 'zap' | 'refreshCw' | 'users' | 'target' | null
  title?: string | null
  description?: string | null
}

type EfficiencyStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: EfficiencyItem[] | null
}

type Props = {
  block: EfficiencyStartupsBlockData
  locale: Locale
}

const iconMap = {
  zap: Zap,
  refreshCw: RefreshCw,
  users: Users,
  target: Target,
} as const

export function EfficiencyStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse')}>
          {rtl ? (
            <>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <span className="h-px w-8 bg-accent" />
            </>
          ) : (
            <>
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <div className={cn('mb-12 max-w-3xl', rtl && 'text-right')}>
          <h2 className="mb-6 font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
            {block.title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            {block.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((pillar, index) => {
            if (!pillar?.title) return null
            const Icon = iconMap[pillar.icon ?? 'zap']

            return (
              <div
                key={`${pillar.title}-${index}`}
                className={cn(
                  'rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-accent/30',
                  rtl && 'text-right',
                )}
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>

                <h3 className="mb-3 font-serif text-lg font-light leading-snug text-foreground">
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
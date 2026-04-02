import { ArrowLeft, ArrowRight, Layers, PenTool, type LucideIcon } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PillarItem = {
  icon?: 'layers' | 'penTool' | 'arrowRight' | 'arrowLeft' | null
  title?: string | null
  description?: string | null
}

type IntroConceptsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  pillars?: PillarItem[] | null
}

type Props = {
  block: IntroConceptsBlockData
  locale: Locale
}

const ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  penTool: PenTool,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
}

export function IntroConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="border-y border-border/50 bg-muted/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={cn(rtl && 'text-right')}>
            <div className={cn('mb-6 flex items-center gap-2', rtl && 'flex-row-reverse justify-end')}>
              <div className="h-[1px] w-6 bg-signature-cobalt" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </div>

            <h2 className="mb-6 font-serif text-2xl font-light leading-tight text-foreground lg:text-3xl xl:text-4xl">
              {block.title}
            </h2>

            <p className="text-base leading-relaxed text-foreground/80 lg:text-lg">
              {block.description}
            </p>
          </div>

          <div className="space-y-6">
            {block.pillars?.map((pillar, index) => {
              if (!pillar?.title || !pillar?.description) return null

             const iconKey = pillar.icon ?? 'layers'

              const Icon = ICONS[iconKey] ?? Layers

              return (
                <div
                  key={`${pillar.title}-${index}`}
                  className={cn(
                    'group flex items-start gap-4 rounded-sm border border-border/60 bg-background p-5 transition-colors hover:border-foreground/20',
                    rtl && 'flex-row-reverse text-right',
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>

                  <div>
                    <div className={cn('mb-1 flex items-center gap-2', rtl && 'flex-row-reverse')}>
                      <span className="text-[10px] font-medium text-signature-cobalt">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-medium text-foreground">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
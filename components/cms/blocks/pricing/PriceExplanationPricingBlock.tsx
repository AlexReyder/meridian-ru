import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ExplanationPoint = {
  title?: string | null
  description?: string | null
}

type PriceExplanationPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  descriptionSecondary?: string | null
  quote?: string | null
  points?: ExplanationPoint[] | null
}

type Props = {
  block: PriceExplanationPricingBlockData
  locale: Locale
}

export function PriceExplanationPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('grid items-start gap-16 lg:grid-cols-2 lg:gap-24', rtl && 'lg:grid-flow-dense')}>
          <div className={cn('max-w-lg', rtl && 'lg:col-start-2')}>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">{block.eyebrow}</p>

            <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
              {block.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {block.description}
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {block.descriptionSecondary}
            </p>

            {block.quote ? (
              <div className="mt-8 rounded-sm border border-border/50 bg-secondary/50 p-5">
                <p className="text-sm italic text-foreground/80">{block.quote}</p>
              </div>
            ) : null}
          </div>

          <div className={cn('space-y-4', rtl && 'lg:col-start-1')}>
            {block.points?.map((point, index) =>
              point?.title && point?.description ? (
                <div
                  key={`${point.title}-${index}`}
                  className="flex items-start gap-4 rounded-sm border border-border/60 bg-card p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-medium text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="mb-1 text-sm font-medium text-foreground">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
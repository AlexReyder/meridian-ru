import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PillarItem = {
  label?: string | null
  description?: string | null
}

type DeliveryElement = {
  title?: string | null
  description?: string | null
}

type PositioningBlockPricingData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  descriptionSecondary?: string | null
  rightTitle?: string | null
  pillars?: PillarItem[] | null
  deliveryElements?: DeliveryElement[] | null
}

type Props = {
  block: PositioningBlockPricingData
  locale: Locale
}

export function PositioningBlockPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const hasPillars = Boolean(block.pillars?.length)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className={cn('max-w-lg', rtl && 'lg:order-2')}>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{block.eyebrow}</p>

            <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground text-balance">
              {block.title}
            </h2>

            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              {block.description}
            </p>

            {block.descriptionSecondary ? (
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {block.descriptionSecondary}
              </p>
            ) : null}

            {hasPillars ? (
              <div className="mt-8 grid grid-cols-3 gap-4">
                {block.pillars?.map((pillar, index) =>
                  pillar?.label && pillar?.description ? (
                    <div
                      key={`${pillar.label}-${index}`}
                      className="text-center p-4 bg-secondary/40 rounded-sm border border-border/40"
                    >
                      <p className="text-xs font-medium text-foreground mb-1">{pillar.label}</p>
                      <p className="text-[10px] text-muted-foreground">{pillar.description}</p>
                    </div>
                  ) : null,
                )}
              </div>
            ) : null}
          </div>

          <div className={cn(rtl && 'lg:order-1')}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              {block.rightTitle}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {block.deliveryElements?.map((element, index) =>
                element?.title && element?.description ? (
                  <div
                    key={`${element.title}-${index}`}
                    className="group p-5 bg-card border border-border/60 rounded-sm hover:border-foreground/20 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary text-[10px] text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <h3 className="text-sm font-medium text-foreground">{element.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{element.description}</p>
                      </div>
                    </div>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
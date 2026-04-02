import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ProcessStep = {
  number?: string | null
  title?: string | null
  description?: string | null
}

type MarkerItem = {
  label?: string | null
}

type ProcessAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'connected' | 'compact' | null
  steps?: ProcessStep[] | null
  markers?: MarkerItem[] | null
}

type Props = {
  block: ProcessAgenciesBlockData
  locale: Locale
}

export function ProcessAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const compact = block.layoutVariant === 'compact'

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className={cn('py-20 lg:py-28', compact ? 'bg-secondary/30' : 'bg-background')}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('flex items-center gap-3 mb-6', rtl && 'flex-row-reverse')}>
          {rtl ? (
            <>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <div className="flex items-center">
                <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          {block.title}
        </h2>

        <div className={cn('grid lg:grid-cols-5 gap-6', !compact && 'lg:gap-4 mb-12')}>
          {block.steps?.map((step, index) =>
            step?.number && step?.title && step?.description ? (
              <div key={`${step.number}-${index}`} className="relative">
                {!compact && index < (block.steps?.length ?? 0) - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border/50 -translate-x-4" />
                )}

                <div
                  className={cn(
                    'relative border border-border rounded-sm bg-card hover:border-foreground/20 transition-colors',
                    compact ? 'p-6' : 'p-5 lg:p-4 h-full border-border/60',
                  )}
                >
                  {compact && index === 0 && (
                    <div className="absolute top-0 right-0">
                      <div className="absolute top-0 right-0 w-4 h-[2px] bg-signature-cobalt rounded-l-full" />
                      <div className="absolute top-0 right-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                      <div className="absolute top-[2px] right-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                    </div>
                  )}

                  {compact ? (
                    <>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {step.number}
                      </span>
                      <h3 className="mt-3 font-serif text-lg font-light text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="font-serif text-2xl text-signature-cobalt/40">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-base font-light text-foreground mt-3 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ) : null,
          )}
        </div>

        {compact ? (
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {block.markers?.map((marker, index) =>
              marker?.label ? (
                <span
                  key={`${marker.label}-${index}`}
                  className="inline-flex items-center px-3 py-1.5 bg-card border border-border/50 rounded-sm text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {marker.label}
                </span>
              ) : null,
            )}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 pt-8 border-t border-border/50">
            {block.markers?.map((marker, index) =>
              marker?.label ? (
                <div
                  key={`${marker.label}-${index}`}
                  className="relative inline-flex items-center px-4 py-2 bg-secondary/60 border border-border/50 rounded-sm"
                >
                  {index === 0 && (
                    <div
                      className={cn(
                        'absolute top-1/2 -translate-y-1/2 w-[2px] h-4 bg-gradient-to-b from-signature-cobalt to-signature-brass rounded-full',
                        rtl ? '-right-px' : '-left-px',
                      )}
                    />
                  )}
                  <span className="text-xs text-foreground/70">{marker.label}</span>
                </div>
              ) : null,
            )}
          </div>
        )}
      </div>
    </section>
  )
}
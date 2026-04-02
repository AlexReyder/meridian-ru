import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ProcessStep = {
  number?: string | null
  title?: string | null
  description?: string | null
}

type ProcessStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  steps?: ProcessStep[] | null
}

type Props = {
  block: ProcessStartupsBlockData
  locale: Locale
}

export function ProcessStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  if (!block.steps?.length) return null

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
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

        <h2
          className={cn(
            'mb-12 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl',
            rtl && 'text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {block.steps.map((step, index) => (
            <div key={`${step.number}-${index}`} className="relative">
              {index < block.steps!.length - 1 && (
                <div
                  className={cn(
                    'absolute top-6 hidden h-px bg-border/50 lg:block',
                    rtl ? 'right-full w-full' : 'left-full w-full',
                  )}
                />
              )}

              <div className={cn('mb-4 text-4xl font-light text-accent/40', rtl && 'text-right')}>
                {step.number}
              </div>

              <h3 className={cn('mb-3 font-serif text-lg font-light text-foreground', rtl && 'text-right')}>
                {step.title}
              </h3>

              <p className={cn('text-sm leading-relaxed text-muted-foreground', rtl && 'text-right')}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
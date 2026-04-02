import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PillarItem = {
  label?: string | null
}

type PartnersClarificationAgenciesBlockData = {
  title?: string | null
  description?: string | null
  pillars?: PillarItem[] | null
}

type Props = {
  block: PartnersClarificationAgenciesBlockData
  locale: Locale
}

export function PartnersClarificationAgenciesBlockComponent({
  block,
  locale,
}: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('max-w-3xl', rtl && 'mr-0 ml-auto text-right')}>
          <h2 className="font-serif text-2xl font-light leading-tight text-foreground lg:text-3xl">
            {block.title}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {block.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {block.pillars?.map((pillar, index) =>
              pillar?.label ? (
                <div
                  key={`${pillar.label}-${index}`}
                  className="relative inline-flex items-center rounded-sm border border-border bg-card px-4 py-2"
                >
                  {index === 0 ? (
                    <div
                      className={cn(
                        'absolute top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-signature-cobalt to-signature-brass',
                        rtl ? '-right-px' : '-left-px',
                      )}
                    />
                  ) : null}

                  <span className="text-sm text-foreground/80">{pillar.label}</span>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
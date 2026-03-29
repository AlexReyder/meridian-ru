import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type WhySolutionsItem = {
  title?: string | null
  description?: string | null
}

type WhySolutionsBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: WhySolutionsItem[] | null
}

type Props = {
  block: WhySolutionsBlockData
  locale: Locale
}

export function WhySolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
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
            'max-w-2xl font-serif text-3xl font-light leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]',
            rtl && 'text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((pillar, index) =>
            pillar?.title ? (
              <div key={`${pillar.title}-${index}`} className={cn('relative', rtl && 'text-right')}>
                <div className={cn('flex items-start gap-4', rtl && 'flex-row-reverse')}>
                  <span className="text-[11px] font-medium tracking-wider text-accent/60">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="text-base font-medium text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type PositioningItem = {
  number?: string | null
  title?: string | null
  description?: string | null
}

type PositioningIntroSolutionsBlockData = {
  title?: string | null
  description?: string | null
  items?: PositioningItem[] | null
}

type Props = {
  block: PositioningIntroSolutionsBlockData
  locale: Locale
}

export function PositioningIntroSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className={cn('max-w-3xl', rtl && 'text-right')}>
          <h2
            className={cn(
              'font-serif font-light tracking-tight text-foreground',
              rtl
                ? 'text-2xl leading-[1.2] text-balance sm:text-3xl lg:text-[2.5rem]'
                : 'text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]',
            )}
          >
            {block.title}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {block.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3 lg:gap-12">
          {block.items?.map((marker, index) => (
            <div key={`${marker.number}-${index}`} className={cn('relative', rtl && 'text-right')}>
              <div className={cn('flex items-start gap-4', rtl && 'flex-row-reverse')}>
                <span className="text-[11px] font-medium tracking-wider text-accent/60">
                  {marker.number}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{marker.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {marker.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
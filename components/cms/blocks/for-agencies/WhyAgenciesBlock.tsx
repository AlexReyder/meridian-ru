import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type WhyItem = {
  title?: string | null
  description?: string | null
}

type WhyAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'detailed' | 'compact' | null
  items?: WhyItem[] | null
}

type Props = {
  block: WhyAgenciesBlockData
  locale: Locale
}

export function WhyAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const compact = block.layoutVariant === 'compact'

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className={cn('py-20 lg:py-28', compact && 'bg-secondary/30')}
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

        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl">
          {block.title}
        </h2>

        <div
          className={cn(
            compact ? 'mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'grid sm:grid-cols-2 gap-6 lg:gap-8 mt-14',
          )}
        >
          {block.items?.map((item, index) => {
            if (!item?.title) return null

            return (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  'relative border border-border rounded-sm hover:border-foreground/20 transition-colors',
                  compact ? 'bg-card p-6' : 'p-6 lg:p-8',
                )}
              >
                {compact ? (
                  <>
                    {index === 0 && (
                      <div className={cn('absolute top-0', rtl ? 'right-0' : 'left-0')}>
                        <div
                          className={cn(
                            'absolute top-0 w-4 h-[2px] bg-signature-cobalt',
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
                            'absolute top-[2px] w-2 h-[1.5px] bg-signature-brass/70 rounded-full',
                            rtl ? 'right-4' : 'left-4',
                          )}
                        />
                      </div>
                    )}

                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="mt-4 text-base text-foreground leading-relaxed">
                      {item.title}
                    </p>
                  </>
                ) : (
                  <>
                    <div
                      className={cn(
                        'absolute -top-2 text-5xl font-serif text-signature-cobalt/20',
                        rtl ? 'right-6' : 'left-6',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="font-serif text-lg lg:text-xl font-light text-foreground mb-3 pt-6">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
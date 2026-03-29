import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type DeliverablesStartupsItem = {
  title?: string | null
  description?: string | null
  whenRelevant?: string | null
  result?: string | null
}

type DeliverablesStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'detailedCards' | 'simpleCards' | null
  whenRelevantLabel?: string | null
  resultLabel?: string | null
  items?: DeliverablesStartupsItem[] | null
}

type Props = {
  block: DeliverablesStartupsBlockData
  locale: Locale
}

export function DeliverablesStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const variant = block.layoutVariant ?? 'detailedCards'

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            'mb-12 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl',
            rtl && 'ml-auto text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {block.items?.map((item, index) =>
            item?.title ? (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  'group rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-accent/40 lg:p-8',
                  rtl && 'text-right',
                )}
              >
                <h3 className="mb-4 font-serif text-xl font-light text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {variant === 'detailedCards' ? (
                  <div className="mt-4 space-y-3 border-t border-border/40 pt-4">
                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground/60">
                        {block.whenRelevantLabel}
                      </span>
                      <p className="text-xs text-muted-foreground">{item.whenRelevant}</p>
                    </div>

                    <div>
                      <span className="mb-1 block text-[10px] uppercase tracking-wider text-muted-foreground/60">
                        {block.resultLabel}
                      </span>
                      <p className="text-xs text-foreground/80">{item.result}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
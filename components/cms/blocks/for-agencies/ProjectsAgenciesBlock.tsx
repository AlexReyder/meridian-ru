import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ProjectsItem = {
  title?: string | null
  explanation?: string | null
  useCase?: string | null
  output?: string | null
}

type ProjectsAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'detailed' | 'compact' | null
  useCaseLabel?: string | null
  outputLabel?: string | null
  items?: ProjectsItem[] | null
}

type Props = {
  block: ProjectsAgenciesBlockData
  locale: Locale
}

export function ProjectsAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const compact = block.layoutVariant === 'compact'

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className={cn('py-20 lg:py-28', compact ? 'bg-background' : 'bg-secondary/30')}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {block.items?.map((item, index) =>
            item?.title && item?.explanation && item?.useCase ? (
              <div
                key={`${item.title}-${index}`}
                className="relative bg-card rounded-sm border border-border p-6 lg:p-8 hover:border-foreground/20 transition-colors"
              >
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

                <h3 className="font-serif text-lg lg:text-xl font-light text-foreground mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {item.explanation}
                </p>

                {compact ? (
                  <p className="mt-4 text-xs text-muted-foreground/70 leading-relaxed border-t border-border/50 pt-4">
                    {item.useCase}
                  </p>
                ) : (
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
                        {block.useCaseLabel}
                      </span>
                      <p className="mt-1 text-xs text-foreground/70 leading-relaxed">
                        {item.useCase}
                      </p>
                    </div>

                    {item.output ? (
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">
                          {block.outputLabel}
                        </span>
                        <p className="mt-1 text-xs text-foreground/70 leading-relaxed">
                          {item.output}
                        </p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
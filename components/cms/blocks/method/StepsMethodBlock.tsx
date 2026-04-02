import { isRTL, type Locale } from '@/lib/routes'

type StepItem = {
  number?: string | null
  title?: string | null
  subtitle?: string | null
  description?: string | null
  duration?: string | null
}

type StepsMethodBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'detailed' | 'grid' | null
  steps?: StepItem[] | null
}

type Props = {
  block: StepsMethodBlockData
  locale: Locale
}

export function StepsMethodBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isGrid = block.layoutVariant === 'grid'

  if (isGrid) {
    return (
      <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`flex items-center gap-3 mb-6 ${rtl ? 'flex-row-reverse justify-end' : ''}`}>
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {block.eyebrow}
            </span>
          </div>

          <h2
            className={`font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12 ${
              rtl ? 'text-right mr-0 ml-auto' : ''
            }`}
          >
            {block.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {block.steps?.map((step) =>
              step?.number && step?.title && step?.description ? (
                <div
                  key={step.number}
                  className={`bg-card rounded border border-border/60 p-6 hover:border-accent/30 transition-colors ${
                    rtl ? 'text-right' : ''
                  }`}
                >
                  <div className="text-3xl font-light text-accent/40 mb-4">{step.number}</div>

                  <h3 className="font-serif text-xl font-light text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {block.eyebrow}
          </span>
        </div>

        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          {block.title}
        </h2>

        <div className="space-y-6">
          {block.steps?.map((step) =>
            step?.number && step?.title && step?.description ? (
              <div
                key={step.number}
                className="bg-card rounded border border-border/60 p-6 lg:p-8 hover:border-accent/30 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-4xl lg:text-5xl font-light text-accent/40">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-serif text-xl lg:text-2xl font-light text-foreground">
                        {step.title}
                      </h3>

                      {step.duration ? (
                        <span className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary/80 px-3 py-1 rounded-sm w-fit">
                          {step.duration}
                        </span>
                      ) : null}
                    </div>

                    {step.subtitle ? (
                      <p className="text-sm text-accent mb-3">{step.subtitle}</p>
                    ) : null}

                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
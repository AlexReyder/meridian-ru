import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type DetailItem = {
  label?: string | null
}

type MethodItem = {
  number?: string | null
  title?: string | null
  description?: string | null
  details?: DetailItem[] | null
}

type MethodHomeBlockData = {
  sectionId?: string | null
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: MethodItem[] | null
}

type Props = {
  block: MethodHomeBlockData
  locale: Locale
}

export function MethodHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      id={block.sectionId ?? 'method'}
      dir={rtl ? 'rtl' : 'ltr'}
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16 max-w-3xl', rtl && 'text-right')}>
          <div className={cn('mb-4 flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
              {rtl ? (
                <>
                  <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                  <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                  <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
                </>
              )}
            </div>
            <span
              className={cn(
                'text-[10px] text-muted-foreground',
                rtl ? 'tracking-[0.15em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            {block.description}
          </p>
        </div>

        <div className="space-y-0">
          {block.items?.map((step, index) => (
            <div
              key={`${step.number}-${index}`}
              className={cn(
                'group grid gap-8 border-t border-border py-10 first:border-t-0 lg:grid-cols-12',
                rtl && 'text-right',
              )}
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-3xl text-signature-cobalt/40 transition-colors group-hover:text-signature-cobalt lg:text-4xl">
                  {step.number}
                </span>
              </div>

              <div className="lg:col-span-2">
                <h3 className="font-serif text-2xl text-foreground lg:text-3xl">
                  {step.title}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="leading-relaxed text-muted-foreground">{step.description}</p>
              </div>

              <div className="lg:col-span-4">
                <div className={cn('flex flex-wrap gap-2', rtl && 'justify-start')}>
                  {step.details?.map((detail, detailIndex) =>
                    detail?.label 
                    ?
                    (
                      <span
                        key={`${detail.label}-${detailIndex}`}
                        className={cn(
                          'rounded-sm border border-border px-3 py-1.5 text-xs text-muted-foreground',
                          rtl ? 'tracking-[0.08em]' : 'uppercase tracking-wider',
                        )}
                      >
                        {detail.label}
                      </span>
                    )
                     : null
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type WhyHomeItem = {
  title?: string | null
  description?: string | null
}

type WhyHomeBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: WhyHomeItem[] | null
}

type Props = {
  block: WhyHomeBlockData
  locale: Locale
}

export function WhyHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="bg-foreground py-24 text-background lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16 max-w-3xl', rtl && 'text-right')}>
          <div className={cn('mb-4 flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
              {rtl ? (
                <>
                  <span className="h-[2px] w-2 rounded-full bg-signature-brass-soft" />
                  <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt-soft" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-3 rounded-full bg-signature-cobalt-soft" />
                  <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass-soft" />
                </>
              )}
            </div>

            <span
              className={cn(
                'text-[10px] text-background/50',
                rtl ? 'tracking-[0.15em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-background text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          {block.description ? (
            <p className="mt-4 leading-relaxed text-background/60">{block.description}</p>
          ) : null}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {block.items?.map((item, index) => (
            <div key={`${item.title}-${index}`} className={cn('relative', rtl && 'text-right')}>
              <div
                className={cn(
                  'absolute -top-2 font-serif text-6xl text-signature-cobalt-soft/20',
                  rtl ? 'right-0' : 'left-0',
                )}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {index === 0 ? (
                <div
                  className={cn(
                    'absolute top-0 flex items-center gap-0.5',
                    rtl ? 'right-0 flex-row-reverse' : 'left-0',
                  )}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-signature-cobalt-soft" />
                  <div className="h-1 w-1 rounded-full bg-signature-brass-soft" />
                </div>
              ) : null}

              <div className="pt-12">
                <h3 className="mb-4 text-lg font-medium text-background">{item.title}</h3>
                <p className="leading-relaxed text-background/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type AudienceItem = {
  title?: string | null
  text?: string | null
}

type AudienceAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: AudienceItem[] | null
}

type Props = {
  block: AudienceAgenciesBlockData
  locale: Locale
}

export function AudienceAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse')}>
          {rtl ? (
            <>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <div className="flex items-center">
                <span className="h-[2px] w-2 rounded-full bg-signature-brass" />
                <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt" />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <h2 className="max-w-xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
          {block.title}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {block.items?.map((item, index) =>
            item?.title && item?.text ? (
              <div
                key={`${item.title}-${index}`}
                className="relative rounded-sm border border-border bg-card p-6 transition-colors hover:border-foreground/20 lg:p-8"
              >
                {index === 0 ? (
                  <div className={cn('absolute top-0', rtl ? 'right-0' : 'left-0')}>
                    <div
                      className={cn(
                        'absolute top-0 h-[2px] w-4 bg-signature-cobalt',
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
                        'absolute top-[2px] h-[1.5px] w-2 rounded-full bg-signature-brass/70',
                        rtl ? 'right-4' : 'left-4',
                      )}
                    />
                  </div>
                ) : null}

                <h3 className="font-serif text-lg font-light text-foreground lg:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
import { isRTL, type Locale } from '@/lib/routes'

type DeliverableItem = {
  title?: string | null
  description?: string | null
}

type DeliverablesMethodBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: DeliverableItem[] | null
}

type Props = {
  block: DeliverablesMethodBlockData
  locale: Locale
}

export function DeliverablesMethodBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-6 flex items-center gap-3 ${
            rtl ? 'flex-row-reverse justify-end' : ''
          }`}
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {block.eyebrow}
          </span>
        </div>

        <h2
          className={`mb-4 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl ${
            rtl ? 'mr-0 ml-auto text-right' : ''
          }`}
        >
          {block.title}
        </h2>

        <p
          className={`mb-12 max-w-2xl text-muted-foreground leading-relaxed ${
            rtl ? 'mr-0 ml-auto text-right' : ''
          }`}
        >
          {block.description}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {block.items?.map((item, index) =>
            item?.title && item?.description ? (
              <div
                key={`${item.title}-${index}`}
                className={`rounded-sm border border-border/60 p-6 transition-colors hover:border-accent/40 ${
                  rtl ? 'text-right' : ''
                }`}
              >
                <h3 className="mb-3 font-serif text-lg font-light text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
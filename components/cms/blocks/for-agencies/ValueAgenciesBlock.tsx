import {
  Layout,
  Palette,
  Presentation,
  Send,
  type LucideIcon,
} from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ValueItem = {
  icon?: 'presentation' | 'palette' | 'layout' | 'send' | null
  title?: string | null
  problem?: string | null
  whenRelevant?: string | null
  whyHelpful?: string | null
  text?: string | null
}

type ValueAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  layoutVariant?: 'detailed' | 'compact' | null
  items?: ValueItem[] | null
}

type Props = {
  block: ValueAgenciesBlockData
  locale: Locale
}

const ICONS: Record<string, LucideIcon> = {
  presentation: Presentation,
  palette: Palette,
  layout: Layout,
  send: Send,
}

export function ValueAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const compact = block.layoutVariant === 'compact'

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className={cn('py-20 lg:py-28', compact && 'bg-secondary/30')}
    >
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

        <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
          {block.title}
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {block.items?.map((item, index) => {
            if (!item?.title) return null

            const Icon = item.icon ? ICONS[item.icon] : Presentation

            return (
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

                {compact ? (
                  <>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {`0${index + 1}`}
                    </span>

                    <h3 className="mt-3 font-serif text-xl font-light text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>

                      <h3 className="pt-2 font-serif text-xl font-light text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {locale === 'ru'
                            ? 'Задача'
                            : locale === 'ar'
                              ? 'التحدي'
                              : 'Challenge'}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                          {item.problem}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {locale === 'ru'
                            ? 'Когда актуально'
                            : locale === 'ar'
                              ? 'متى يكون مناسباً'
                              : 'When relevant'}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.whenRelevant}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {locale === 'ru'
                            ? 'Почему удобно'
                            : locale === 'ar'
                              ? 'لماذا يفيد'
                              : 'Why it helps'}
                        </span>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                          {item.whyHelpful}
                        </p>
                      </div>
                    </div>
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
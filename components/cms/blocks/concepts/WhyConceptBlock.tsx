import { FileText, Layers, Monitor, Search, type LucideIcon } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type WhyConceptsItem = {
  icon?: 'search' | 'layers' | 'monitor' | 'fileText' | null
  title?: string | null
  description?: string | null
}

type WhyConceptsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: WhyConceptsItem[] | null
}

type Props = {
  block: WhyConceptsBlockData
  locale: Locale
}

const iconMap: Record<string, LucideIcon> = {
  search: Search,
  layers: Layers,
  monitor: Monitor,
  fileText: FileText,
}

export function WhyConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  if (!block.items?.length) return null

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-[#1a1816] py-20 text-background lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className={cn('mb-16 max-w-3xl', rtl && 'mr-auto text-right')}>
          <div className={cn('mb-6 flex items-center gap-2', rtl && 'flex-row-reverse justify-end')}>
            <div className="h-px w-6 bg-signature-brass" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">
              {block.eyebrow}
            </span>
          </div>

          <h2 className="mb-6 font-serif text-3xl font-light leading-tight text-background lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="text-lg leading-relaxed text-background/70">
            {block.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {block.items.map((item, index) => {
            const Icon = iconMap[item.icon || 'search'] || Search

            return (
              <div
                key={`${item.title}-${index}`}
                className="group relative rounded-sm border border-background/10 bg-background/5 p-6 transition-all hover:border-background/20 hover:bg-background/10 lg:p-8"
              >
                {index === 0 && (
                  <div className={cn('absolute top-0', rtl ? 'right-0' : 'left-0')}>
                    <div
                      className={cn(
                        'absolute top-0 h-[2px] w-4 bg-signature-cobalt',
                        rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-0 h-4 w-[2px] bg-signature-cobalt',
                        rtl ? 'right-0 rounded-b-full' : 'left-0 rounded-b-full',
                      )}
                    />
                  </div>
                )}

                <div className={cn('flex items-start gap-4', rtl && 'flex-row-reverse text-right')}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-background/10">
                    <Icon className="h-5 w-5 text-background/60" />
                  </div>

                  <div>
                    <h3 className="mb-2 text-base font-medium text-background">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-background/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
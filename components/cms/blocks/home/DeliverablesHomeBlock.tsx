import {
  FileCheck,
  FileText,
  GitBranch,
  Layers,
  LayoutGrid,
  MousePointer,
  Palette,
  Users,
} from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type DeliverableItem = {
  icon?:
    | 'fileText'
    | 'users'
    | 'gitBranch'
    | 'layoutGrid'
    | 'palette'
    | 'mousePointer'
    | 'layers'
    | 'fileCheck'
    | null
  title?: string | null
  description?: string | null
}

type DeliverablesHomeBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: DeliverableItem[] | null
}

type Props = {
  block: DeliverablesHomeBlockData
  locale: Locale
}

const iconMap = {
  fileText: FileText,
  users: Users,
  gitBranch: GitBranch,
  layoutGrid: LayoutGrid,
  palette: Palette,
  mousePointer: MousePointer,
  layers: Layers,
  fileCheck: FileCheck,
} as const

export function DeliverablesHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-24 lg:py-32">
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
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((item, index) => {
            const Icon = iconMap[item.icon ?? 'fileText']

            return (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  'group relative rounded-sm border border-border p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-secondary/30',
                  rtl && 'text-right',
                )}
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

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-signature-cobalt/10">
                  <Icon className="h-4 w-4 text-foreground transition-colors group-hover:text-signature-cobalt" />
                </div>

                <h3 className="mb-2 font-serif text-lg text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import {
  FileCheck,
  FileText,
  GitBranch,
  LayoutGrid,
  Map,
  MousePointer,
  Palette,
  Send,
  Smartphone,
  type LucideIcon,
} from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ArtifactItem = {
  icon?:
    | 'fileText'
    | 'gitBranch'
    | 'map'
    | 'layoutGrid'
    | 'smartphone'
    | 'mousePointer'
    | 'palette'
    | 'send'
    | 'fileCheck'
    | null
  title?: string | null
  support?: string | null
}

type ArtifactsAgenciesBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: ArtifactItem[] | null
}

type Props = {
  block: ArtifactsAgenciesBlockData
  locale: Locale
}

const ICONS: Record<string, LucideIcon> = {
  fileText: FileText,
  gitBranch: GitBranch,
  map: Map,
  layoutGrid: LayoutGrid,
  smartphone: Smartphone,
  mousePointer: MousePointer,
  palette: Palette,
  send: Send,
  fileCheck: FileCheck,
}

export function ArtifactsAgenciesBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
 

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className={cn('py-20 lg:py-28', 'bg-secondary/30')}
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

        <h2
          className={cn(
            'font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl',
             'mb-14',
          )}
        >
          {block.title}
        </h2>

        <div className={cn( 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6')}>
          {block.items?.map((item, index) => {
            if (!item?.title || !item?.support) return null

            const Icon = item.icon ? ICONS[item.icon] : FileText

            return (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  'relative bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors',
                  'p-6',
                )}
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

                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Icon
                    className={cn(
                      'h-5 w-5',
                       'text-foreground',
                    )}
                  />
                </div>

                <h3 className="font-serif text-lg font-light text-foreground mb-2">
                  {item.title}
                </h3>

                <p
                  className={cn(
                    'text-sm text-muted-foreground',
                   'leading-relaxed mt-2',
                  )}
                >
                  {item.support}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
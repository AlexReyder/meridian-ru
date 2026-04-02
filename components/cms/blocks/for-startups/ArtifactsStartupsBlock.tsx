import {
  FileText,
  GitBranch,
  Layout,
  Package,
  Palette,
  Play,
  type LucideIcon,
} from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ArtifactItem = {
  icon?: 'fileText' | 'gitBranch' | 'layout' | 'play' | 'palette' | 'package' | null
  title?: string | null
  support?: string | null
}

type ArtifactsStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  items?: ArtifactItem[] | null
}

type Props = {
  block: ArtifactsStartupsBlockData
  locale: Locale
}

const iconMap: Record<string, LucideIcon> = {
  fileText: FileText,
  gitBranch: GitBranch,
  layout: Layout,
  play: Play,
  palette: Palette,
  package: Package,
}

export function ArtifactsStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  if (!block.items?.length) return null

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
          {rtl ? (
            <>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
              <span className="h-px w-8 bg-accent" />
            </>
          ) : (
            <>
              <span className="h-px w-8 bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {block.eyebrow}
              </span>
            </>
          )}
        </div>

        <h2
          className={cn(
            'mb-12 max-w-2xl font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl',
            rtl && 'text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item, index) => {
            const Icon = iconMap[item.icon || 'fileText'] || FileText

            return (
              <div
                key={`${item.title}-${index}`}
                className="group rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-accent/40 lg:p-8"
              >
                <div className="relative mb-6 flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-sm bg-secondary/50">
                  <div
                    className={cn(
                      'absolute inset-0',
                        'bg-gradient-to-br from-accent/5 to-transparent',
                    )}
                  />
                  <Icon className="h-8 w-8 text-foreground/40" />
                </div>

                <h3 className={cn('mb-2 font-serif text-lg font-light text-foreground', rtl && 'text-right')}>
                  {item.title}
                </h3>

                <p className={cn('text-sm leading-relaxed text-muted-foreground', rtl && 'text-right')}>
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
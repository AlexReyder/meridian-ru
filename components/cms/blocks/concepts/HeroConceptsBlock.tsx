import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type TagItem = {
  label?: string | null
}

type HeroConceptsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  supportLine?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  tags?: TagItem[] | null
}

type Props = {
  block: HeroConceptsBlockData
  locale: Locale
}

export function HeroConceptsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden bg-background pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className={cn(rtl && 'text-right')}>
          <div className={cn('mb-8 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
            <div className={cn('flex items-center gap-1', rtl && 'flex-row-reverse')}>
              <div className="h-[3px] w-2 rounded-full bg-signature-cobalt" />
              <div className="h-[3px] w-1 rounded-full bg-signature-brass" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {block.eyebrow}
            </span>
          </div>

          <h1 className="mb-8 max-w-4xl font-serif text-4xl font-light leading-[1.1] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            {block.title}
          </h1>

          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/80 lg:text-xl">
            {block.description}
          </p>

          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {block.supportLine}
          </p>

          <div className={cn('mb-12 flex flex-wrap items-center gap-4', rtl && 'justify-end')}>
            <Link
              href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}
              className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              <Clock className="h-4 w-4" />
              {block.primaryButtonLabel}
              {rtl ? (
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              ) : (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </Link>

            <Link
              href={getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              {block.secondaryButtonLabel}
            </Link>
          </div>

          <div className={cn('flex flex-wrap gap-2', rtl && 'justify-end')}>
            {block.tags?.map((tag, index) =>
              tag?.label ? (
                <span
                  key={`${tag.label}-${index}`}
                  className={cn(
                    'rounded-sm border px-3 py-1.5 text-xs transition-colors',
                    index === 0
                      ? 'border-signature-cobalt/30 bg-signature-cobalt/5 text-signature-cobalt'
                      : 'border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground/70',
                  )}
                >
                  {tag.label}
                </span>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
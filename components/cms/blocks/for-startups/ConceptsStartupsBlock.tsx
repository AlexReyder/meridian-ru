import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ConceptItem = {
  title?: string | null
  challenge?: string | null
  clarified?: string | null
  prepared?: string | null
}

type ConceptsStartupsBlockData = {
  eyebrow?: string | null
  title?: string | null
  conceptBadgeLabel?: string | null
  challengeLabel?: string | null
  clarifiedLabel?: string | null
  preparedLabel?: string | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
  items?: ConceptItem[] | null
}

type Props = {
  block: ConceptsStartupsBlockData
  locale: Locale
}

export function ConceptsStartupsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse')}>
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
            rtl && 'mr-auto text-right',
          )}
        >
          {block.title}
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {block.items?.map((concept, index) =>
            concept?.title ? (
              <div
                key={`${concept.title}-${index}`}
                className={cn(
                  'group rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-accent/40 lg:p-8',
                  rtl && 'text-right',
                )}
              >
                <div className="mb-5 inline-flex items-center rounded-sm bg-secondary/80 px-2.5 py-1">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    {block.conceptBadgeLabel}
                  </span>
                </div>

                <h3 className="mb-5 font-serif text-xl font-light text-foreground">
                  {concept.title}
                </h3>

                <div className="mb-6 space-y-4">
                  <div>
                    <span className="mb-1.5 block text-[10px] uppercase tracking-wider text-muted-foreground/60">
                      {block.challengeLabel}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {concept.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="mb-1.5 block text-[10px] uppercase tracking-wider text-muted-foreground/60">
                      {block.clarifiedLabel}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {concept.clarified}
                    </p>
                  </div>

                  <div>
                    <span className="mb-1.5 block text-[10px] uppercase tracking-wider text-muted-foreground/60">
                      {block.preparedLabel}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {concept.prepared}
                    </p>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={getHrefForPageKey(block.ctaPageKey ?? 'concepts', locale)}
            className={cn(
              'inline-flex items-center text-sm text-foreground transition-colors hover:text-foreground/80',
              rtl && 'flex-row-reverse',
            )}
          >
            {rtl ? (
              <>
                <ArrowLeft className="ml-2 h-4 w-4" />
                {block.ctaLabel}
              </>
            ) : (
              <>
                {block.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Link>
        </div>
      </div>
    </section>
  )
}
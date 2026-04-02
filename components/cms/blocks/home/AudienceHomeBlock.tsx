import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type AudienceHomeItem = {
  title?: string | null
  problem?: string | null
  solution?: string | null
  result?: string | null
}

type AudienceHomeBlockData = {
  sectionId?: string | null
  eyebrow?: string | null
  title?: string | null
  problemLabel?: string | null
  solutionLabel?: string | null
  resultLabel?: string | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
  items?: AudienceHomeItem[] | null
}

type Props = {
  block: AudienceHomeBlockData
  locale: Locale
}

export function AudienceHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const href = getHrefForPageKey(block.ctaPageKey ?? 'get-proposal', locale)

  return (
    <section
      id={block.sectionId ?? 'startups'}
      dir={rtl ? 'rtl' : 'ltr'}
      className="py-24 lg:py-32"
    >
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

        <div className="grid gap-8 lg:grid-cols-3">
          {block.items?.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={cn(
                'group relative flex h-full flex-col rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/20 lg:p-10',
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

              <h3 className="mb-8 min-h-[3.5rem] font-serif text-xl text-foreground lg:min-h-[4rem] lg:text-2xl">
                {item.title}
              </h3>

              <div className="flex-1 space-y-6">
                <div className="min-h-[5rem]">
                  <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {block.problemLabel}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">{item.problem}</p>
                </div>

                <div className="min-h-[5rem]">
                  <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {block.solutionLabel}
                  </p>
                  <p className="leading-relaxed text-foreground">{item.solution}</p>
                </div>

                <div className="min-h-[4rem]">
                  <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                    {block.resultLabel}
                  </p>
                  <p className="leading-relaxed text-foreground">{item.result}</p>
                </div>
              </div>

              <Link
                href={href}
                className={cn(
                  'group/link mt-8 inline-flex items-center gap-2 border-t border-border/60 pt-6 text-sm text-foreground transition-colors hover:text-signature-cobalt',
                  rtl && 'flex-row-reverse justify-start',
                )}
              >
                {rtl ? (
                  <>
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover/link:-translate-x-1" />
                    <span>{block.ctaLabel}</span>
                  </>
                ) : (
                  <>
                    <span>{block.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
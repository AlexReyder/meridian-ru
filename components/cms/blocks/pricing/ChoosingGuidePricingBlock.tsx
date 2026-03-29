import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type ChoosingGuideItem = {
  condition?: string | null
  problem?: string | null
  solution?: string | null
  package?: string | null
  packageKey?: 'framing' | 'prototype' | 'partner' | null
  pageKey?: PageKey | null
}

type ChoosingGuidePricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  situationLabel?: string | null
  solutionLabel?: string | null
  recommendedLabel?: string | null
  buttonLabel?: string | null
  items?: ChoosingGuideItem[] | null
}

type Props = {
  block: ChoosingGuidePricingBlockData
  locale: Locale
}

function getProposalHref(pageKey: PageKey | null | undefined, locale: Locale, packageKey?: string | null) {
  const href = getHrefForPageKey(pageKey ?? 'get-proposal', locale)

  if ((pageKey ?? 'get-proposal') === 'get-proposal' && packageKey) {
    return `${href}?package=${encodeURIComponent(packageKey)}`
  }

  return href
}

export function ChoosingGuidePricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">{block.eyebrow}</p>

          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
            {block.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {block.items?.map((item, index) =>
            item?.condition && item?.problem && item?.solution && item?.package ? (
              <div
                key={`${item.package}-${index}`}
                className="group relative rounded-sm border border-border/60 bg-card p-6 transition-colors hover:border-foreground/20 lg:p-8"
              >
                <div className={ 'absolute right-6 top-6 lg:right-8 lg:top-8'}>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={'pr-8'}>
                  <p className="mb-4 font-serif text-lg leading-snug text-foreground">
                    {item.condition}
                  </p>

                  <div className="mb-8 space-y-4">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {block.situationLabel}
                      </p>
                      <p className="text-sm text-foreground/70">{item.problem}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                        {block.solutionLabel}
                      </p>
                      <p className="text-sm text-foreground/70">{item.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6">
                    <p className="mb-3 text-xs uppercase tracking-wider text-accent">
                      {block.recommendedLabel}
                    </p>

                    <p className="mb-4 font-serif text-base text-foreground">{item.package}</p>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-foreground/15 text-[10px] uppercase tracking-wider text-foreground hover:bg-foreground/5"
                    >
                      <Link href={getProposalHref(item.pageKey, locale, item.packageKey)}>

                            {block.buttonLabel}
                            <ArrowRight className="ml-2 h-3 w-3" />
                          
                        
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </div>
      </div>
    </section>
  )
}
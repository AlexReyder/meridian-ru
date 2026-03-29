import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Mail } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ProposalStep = {
  icon?: 'fileText' | 'mail' | 'checkCircle' | null
  title?: string | null
  description?: string | null
}

type ProposalHomeBlockData = {
  sectionId?: string | null
  title?: string | null
  description?: string | null
  steps?: ProposalStep[] | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
  footerNote?: string | null
}

type Props = {
  block: ProposalHomeBlockData
  locale: Locale
}

const iconMap = {
  fileText: FileText,
  mail: Mail,
  checkCircle: CheckCircle,
} as const

export function ProposalHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const href = getHrefForPageKey(block.ctaPageKey ?? 'get-proposal', locale)

  return (
    <section
      id={block.sectionId ?? 'proposal'}
      dir={rtl ? 'rtl' : 'ltr'}
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-sm border border-border bg-card p-10 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light leading-tight text-foreground text-balance lg:text-4xl xl:text-5xl">
              {block.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {block.description}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-12">
            {block.steps?.map((step, index) => {
              const Icon = iconMap[step.icon ?? 'fileText']

              return (
                <div key={`${step.title}-${index}`} className="text-center">
                  <div className="relative inline-flex">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>

                    {index < (block.steps?.length ?? 0) - 1 ? (
                      <div
                        className={cn(
                          'absolute top-1/2 hidden h-px w-full -translate-y-1/2 bg-border md:block',
                          rtl ? 'right-full' : 'left-full',
                        )}
                      />
                    ) : null}
                  </div>

                  <h3 className="mt-6 font-serif text-lg text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={href}
              className={cn(
                'inline-flex h-14 items-center justify-center rounded-sm bg-foreground px-10 text-sm uppercase tracking-wider text-background transition-colors hover:bg-foreground/90',
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

            <p className="mt-4 text-sm text-muted-foreground">{block.footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
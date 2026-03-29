import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, FileText, MessageSquare, type LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type StepItem = {
  icon?: 'fileText' | 'messageSquare' | 'checkCircle' | null
  step?: string | null
  title?: string | null
  description?: string | null
}

type NoCallCtaPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  steps?: StepItem[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
}

type Props = {
  block: NoCallCtaPricingBlockData
  locale: Locale
}

const ICONS: Record<string, LucideIcon> = {
  fileText: FileText,
  messageSquare: MessageSquare,
  checkCircle: CheckCircle,
}

export function NoCallCtaPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">{block.eyebrow}</p>

          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {block.description}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3 lg:gap-12">
          {block.steps?.map((item, index) => {
            if (!item?.step || !item?.title || !item?.description) return null
            const Icon = item.icon ? ICONS[item.icon] : FileText

            return (
              <div key={`${item.step}-${index}`} className="relative text-center">
                {index < (block.steps?.length ?? 0) - 1 ? (
                  <div className="absolute left-[60%] top-8 hidden h-px w-[80%] bg-border sm:block" />
                ) : null}

                <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
                  <Icon className="h-6 w-6 text-foreground/60" />
                </div>

                <p className="mb-2 text-xs uppercase tracking-wider text-accent">{item.step}</p>
                <h3 className="mb-2 font-serif text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 bg-foreground px-8 text-[11px] uppercase tracking-[0.15em] text-background hover:bg-foreground/90"
          >
            <Link href={getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)}>
              {rtl ? (
                <>
                  <ArrowLeft className="ml-2 h-4 w-4" />
                  {block.primaryButtonLabel}
                </>
              ) : (
                <>
                  {block.primaryButtonLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-foreground/15 px-8 text-[11px] uppercase tracking-[0.15em] text-foreground hover:bg-foreground/5"
          >
            <Link href={getHrefForPageKey(block.secondaryPageKey ?? 'get-proposal', locale)}>
              {block.secondaryButtonLabel}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ConceptSectionConceptBlockData = {
  anchorId?: string | null
  sectionNumber?: string | null
  categoryLabel?: string | null
  title?: string | null
  intro?: string | null
  imageSource?: 'url' | 'upload' | null
  image?: string | null
  imageMedia?: any
  imageAlt?: string | null
  challengeLabel?: string | null
  challenge?: string | null
  structuredLabel?: string | null
  structured?: string | null
  deliveredLabel?: string | null
  delivered?: string | null
  suitableForLabel?: string | null
  suitableFor?: string | null
  captionLabel?: string | null
  captionStudioLabel?: string | null
  layout?: 'imageLeft' | 'imageRight' | null
  ctaLabel?: string | null
  ctaPageKey?: PageKey | null
}

type Props = {
  block: ConceptSectionConceptBlockData
  locale: Locale
}

export function ConceptSectionConceptBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isImageLeft = block.layout === 'imageLeft'

  const media = block.imageMedia

  const resolvedImageUrl =
    block.imageSource === 'upload'
      ? (typeof media === 'object' ? media?.url : block.image)
      : block.image

  const resolvedImageAlt =
    block.imageSource === 'upload'
      ? (typeof media === 'object'
          ? block.imageAlt || media?.alt || block.title || 'Concept'
          : block.imageAlt || block.title || 'Concept')
      : block.imageAlt || block.title || 'Concept'

  return (
    <section
      id={block.anchorId || undefined}
      dir={rtl ? 'rtl' : 'ltr'}
      className="scroll-mt-20 py-20 lg:py-32 even:bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn(isImageLeft ? 'lg:order-1' : 'lg:order-2')}>
            <div className={cn('relative', rtl && 'rtl')}>
              <div className={cn('absolute -top-2 z-10', rtl ? '-right-2' : '-left-2')}>
                <div
                  className={cn(
                    'absolute top-0 h-[2px] w-6 bg-signature-cobalt',
                    rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-0 h-6 w-[2px] bg-signature-cobalt',
                    rtl ? 'right-0 rounded-b-full' : 'left-0 rounded-b-full',
                  )}
                />
                <div
                  className={cn(
                    'absolute top-[2px] h-[1.5px] w-3 rounded-full bg-signature-brass/70',
                    rtl ? 'right-6' : 'left-6',
                  )}
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/50 bg-muted shadow-lg lg:aspect-[5/4]">
                {resolvedImageUrl ? (
                  <Image
                    src={resolvedImageUrl}
                    alt={resolvedImageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              <div className={cn('mt-4 flex items-center justify-between', rtl && 'flex-row-reverse')}>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {block.captionLabel} {block.sectionNumber}
                </span>

                <span className="text-[10px] text-muted-foreground">
                  {block.captionStudioLabel}
                </span>
              </div>
            </div>
          </div>

          <div className={cn(isImageLeft ? 'lg:order-2' : 'lg:order-1', rtl && 'text-right')}>
            <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse justify-end')}>
              <span className="text-xl font-light text-signature-cobalt/40">
                {block.sectionNumber}
              </span>

              <span className="rounded-sm border border-signature-cobalt/25 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-signature-cobalt">
                {block.categoryLabel}
              </span>
            </div>

            <h2 className="mb-6 font-serif text-2xl font-light leading-tight text-foreground lg:text-3xl xl:text-4xl">
              {block.title}
            </h2>

            <p className="mb-10 text-base leading-relaxed text-foreground/80 lg:text-lg">
              {block.intro}
            </p>

            <div className="mb-10 space-y-6">
              <div className="rounded-sm border border-border/50 bg-muted/40 p-5">
                <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {block.challengeLabel}
                </div>

                <p className="text-sm leading-relaxed text-foreground/90">
                  {block.challenge}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm border border-border/50 bg-background p-5">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {block.structuredLabel}
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/80">
                    {block.structured}
                  </p>
                </div>

                <div className="rounded-sm border border-border/50 bg-background p-5">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {block.deliveredLabel}
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/80">
                    {block.delivered}
                  </p>
                </div>
              </div>
            </div>

            <div className={cn('mb-8 flex items-start gap-2', rtl && 'flex-row-reverse')}>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {block.suitableForLabel}
              </span>

              <p className="text-sm text-foreground/70">
                {block.suitableFor}
              </p>
            </div>

            <Link
              href={getHrefForPageKey(block.ctaPageKey ?? 'get-proposal', locale)}
              className={cn(
                'group inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90',
                rtl && 'flex-row-reverse',
              )}
            >
              <span>{block.ctaLabel}</span>

              {rtl ? (
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              ) : (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
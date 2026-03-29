import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

type IncludeItem = {
  label?: string | null
}

type PackageItem = {
  packageKey?: string | null
  title?: string | null
  subtitle?: string | null
  price?: string | null
  priceNote?: string | null
  timeline?: string | null
  forWhom?: string | null
  includes?: IncludeItem[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryLinkLabel?: string | null
  secondaryPageKey?: PageKey | null
  featured?: boolean | null
}

type PackageCardsPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  contextLine?: string | null
  forWhomLabel?: string | null
  includesLabel?: string | null
  packages?: PackageItem[] | null
}

type Props = {
  block: PackageCardsPricingBlockData
  locale: Locale
}

function getProposalHref(pageKey: PageKey | null | undefined, locale: Locale, packageKey?: string | null) {
  const href = getHrefForPageKey(pageKey ?? 'get-proposal', locale)

  if ((pageKey ?? 'get-proposal') === 'get-proposal' && packageKey) {
    return `${href}?package=${encodeURIComponent(packageKey)}`
  }

  return href
}

export function PackageCardsPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section id="packages" dir={rtl ? 'rtl' : 'ltr'} className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">{block.eyebrow}</p>

          <h2 className="text-balance font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {block.description}
          </p>
        </div>

        {block.contextLine ? (
          <p className="mb-8 max-w-3xl text-sm text-muted-foreground">{block.contextLine}</p>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {block.packages?.map((pkg) =>
            pkg?.title &&
            pkg?.subtitle &&
            pkg?.price &&
            pkg?.priceNote &&
            pkg?.timeline &&
            pkg?.forWhom ? (
              <div
                key={pkg.packageKey ?? pkg.title}
                id={pkg.packageKey || undefined}
                className={`relative flex flex-col overflow-hidden rounded-sm border bg-card transition-all ${
                  pkg.featured
                    ? 'border-foreground/30 shadow-lg lg:scale-[1.02]'
                    : 'border-border/60 hover:border-foreground/20'
                }`}
              >
                {pkg.featured ? <div className="absolute left-0 right-0 top-0 h-1 bg-accent" /> : null}

                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-light text-foreground lg:text-2xl">
                      {pkg.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="mb-6 border-b border-border/50 pb-6">
                    <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {pkg.priceNote}
                    </p>

                    <p className="text-3xl font-light text-foreground lg:text-4xl">
                      {pkg.price}
                    </p>

                    <p className="mt-2 text-xs text-muted-foreground">{pkg.timeline}</p>
                  </div>

                  <div className="mb-6">
                    <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                      {block.forWhomLabel}
                    </p>

                    <p className="text-sm leading-relaxed text-foreground/80">
                      {pkg.forWhom}
                    </p>
                  </div>

                  <div className="mb-8 flex-1">
                    <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                      {block.includesLabel}
                    </p>

                    <ul className="space-y-2">
                      {pkg.includes?.map((item) =>
                        item?.label ? (
                          <li
                            key={item.label}
                            className="flex items-start gap-2 text-sm text-foreground/70"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item.label}
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-3">
                    <Button
                      asChild
                      className={`h-11 w-full text-[11px] uppercase tracking-[0.12em] ${
                        pkg.featured
                          ? 'bg-foreground text-background hover:bg-foreground/90'
                          : 'border border-border bg-secondary text-foreground hover:bg-secondary/80'
                      }`}
                    >
                      <Link href={getProposalHref(pkg.primaryPageKey, locale, pkg.packageKey)}>
                        {rtl ? (
                          <>
                            <ArrowLeft className="ml-2 h-3.5 w-3.5" />
                            {pkg.primaryButtonLabel}
                          </>
                        ) : (
                          <>
                            {pkg.primaryButtonLabel}
                            <ArrowRight className="ml-2 h-3.5 w-3.5" />
                          </>
                        )}
                      </Link>
                    </Button>

                    {pkg.secondaryLinkLabel && pkg.secondaryPageKey ? (
                      <Link
                        href={getHrefForPageKey(pkg.secondaryPageKey, locale)}
                        className="block text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {pkg.secondaryLinkLabel}
                      </Link>
                    ) : null}
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
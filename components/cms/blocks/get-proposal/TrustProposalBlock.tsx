import { ArrowRightLeft, Building2, Layers, Users, type LucideIcon } from 'lucide-react'

import { isRTL, type Locale } from '@/lib/routes'

type TrustItem = {
  icon?: 'layers' | 'users' | 'building2' | 'arrowRightLeft' | null
  title?: string | null
  description?: string | null
}

type SupportPoint = {
  label?: string | null
}

type TrustProposalBlockData = {
  title?: string | null
  description?: string | null
  items?: TrustItem[] | null
  supportPoints?: SupportPoint[] | null
}

type Props = {
  block: TrustProposalBlockData
  locale: Locale
}

const ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  users: Users,
  building2: Building2,
  arrowRightLeft: ArrowRightLeft,
}

export function TrustProposalBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-2xl font-light text-foreground sm:text-3xl">
            {block.title}
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground">
            {block.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((item, index) => {
            if (!item?.title || !item?.description) return null
            const Icon = item.icon && ICONS[item.icon] ? ICONS[item.icon] : Layers

            return (
              <div key={`${item.title}-${index}`} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/80">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>

                <h3 className="mb-2 text-sm font-medium text-foreground">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      {block.supportPoints?.length ? (
  <div className="mt-12 border-t border-border/50 pt-8">
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
      {block.supportPoints.map((point, index) =>
        point?.label ? (
          <span key={`${point.label}-${index}`} className="text-sm text-muted-foreground">
            {point.label}
          </span>
        ) : null,
      )}
    </div>
  </div>
) : null}
      </div>
    </section>
  )
}
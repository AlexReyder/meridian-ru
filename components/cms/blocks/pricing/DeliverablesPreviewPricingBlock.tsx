import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type DeliverableItem = {
  name?: string | null
  subtitle?: string | null
  visual?:
    | 'structure'
    | 'scenarios'
    | 'screen-map'
    | 'prototype'
    | 'design-system'
    | 'dev-materials'
    | null
}

type DeliverablesPreviewPricingBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  layoutVariant?: 'visuals' | 'simple' | null
  topLinkLabel?: string | null
  topLinkPageKey?: PageKey | null
  items?: DeliverableItem[] | null
  footerNote?: string | null
  footerLinkLabel?: string | null
  footerLinkPageKey?: PageKey | null
}

type Props = {
  block: DeliverablesPreviewPricingBlockData
  locale: Locale
}

function StructureVisual() {
  return (
    <div className="h-52 rounded border border-background/15 bg-gradient-to-br from-background/8 to-background/4 p-5 overflow-hidden relative">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-background/15 bg-background/10">
            <div className="h-4 w-4 rounded-sm border border-background/30" />
          </div>
          <div>
            <div className="h-2.5 w-28 rounded bg-background/20" />
            <div className="mt-1.5 h-1.5 w-20 rounded bg-background/10" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-5 items-center justify-center rounded border border-accent/30 bg-accent/20 px-2.5 text-[7px] text-background/60">
            Final
          </div>
          <div className="flex h-5 items-center justify-center rounded bg-background/8 px-2 text-[7px] text-background/40">
            v2.1
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-md border border-background/10 bg-background/6 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-4 w-1 rounded-full bg-accent/40" />
            <div className="h-2 w-20 rounded bg-background/20" />
          </div>
          <div className="space-y-1.5 pl-3">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-background/20" />
              <div className="h-1.5 w-full rounded bg-background/8" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-background/20" />
              <div className="h-1.5 w-4/5 rounded bg-background/8" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {['Scope', 'Limits', 'Priorities'].map((label) => (
            <div key={label} className="rounded border border-background/8 bg-background/5 p-2">
              <div className="mb-1.5 text-[6px] uppercase tracking-wider text-background/30">
                {label}
              </div>
              <div className="space-y-1">
                <div className="h-1 w-full rounded bg-background/10" />
                <div className="h-1 w-3/4 rounded bg-background/8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[6px] text-background/30">
        <div className="flex -space-x-1">
          <div className="h-4 w-4 rounded-full border border-background/5 bg-background/10" />
          <div className="h-4 w-4 rounded-full border border-background/5 bg-background/10" />
        </div>
        2 authors
      </div>
    </div>
  )
}

function ScenariosVisual() {
  return (
    <div className="h-52 rounded border border-background/15 bg-gradient-to-br from-background/8 to-background/4 p-5 overflow-hidden relative">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-1.5 rounded-full bg-accent/40" />
          <div className="h-2 w-24 rounded bg-background/15" />
        </div>
        <div className="text-[7px] text-background/40">4 flows</div>
      </div>

      <div className="relative h-32">
        <div className="absolute left-0 top-0 flex h-10 w-16 flex-col items-center justify-center rounded-lg border border-accent/30 bg-accent/15">
          <div className="mb-1 h-4 w-4 rounded-full bg-accent/30" />
          <div className="text-[6px] text-background/50">Start</div>
        </div>

        <div className="absolute left-16 top-5 h-px w-8 bg-background/20" />
        <div className="absolute left-24 top-0 flex h-10 w-20 items-center justify-center rounded-lg border border-background/20 bg-background/10">
          <div className="text-center">
            <div className="mx-auto h-1.5 w-12 rounded bg-background/20" />
            <div className="mt-1 text-[5px] text-background/30">Decision</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-8 w-14 rounded-lg border border-background/12 bg-background/6" />
        <div className="absolute bottom-0 left-16 h-8 w-14 rounded-lg border border-background/12 bg-background/6" />
        <div className="absolute bottom-0 left-32 h-8 w-14 rounded-lg border border-background/12 bg-background/6" />

        <div className="absolute right-4 top-0 flex h-10 w-18 items-center justify-center rounded-lg border border-background/20 bg-background/10">
          <div className="h-1.5 w-10 rounded bg-background/15" />
        </div>

        <div className="absolute right-4 bottom-0 flex h-8 w-16 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
          <div className="h-3 w-3 rounded-full border-2 border-accent/40" />
        </div>
      </div>

      <div className="absolute bottom-3 left-5 flex items-center gap-3 text-[6px] text-background/40">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded bg-accent/30" />
          Primary
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded bg-background/15" />
          Secondary
        </div>
      </div>
    </div>
  )
}

function ScreenMapVisual() {
  return (
    <div className="h-52 rounded border border-background/15 bg-gradient-to-br from-background/8 to-background/4 p-5 overflow-hidden">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded border border-background/15 bg-background/10">
            <div className="grid h-2.5 w-2.5 grid-cols-2 gap-0.5">
              <div className="rounded-sm bg-background/30" />
              <div className="rounded-sm bg-background/30" />
              <div className="rounded-sm bg-background/30" />
              <div className="rounded-sm bg-background/30" />
            </div>
          </div>
          <div className="h-2 w-20 rounded bg-background/15" />
        </div>
        <div className="flex items-center gap-2 text-[7px] text-background/40">
          <span>18 screens</span>
          <span className="h-3 w-px bg-background/15" />
          <span>4 modules</span>
        </div>
      </div>

      <div className="space-y-3">
        {['Core', 'Users', 'Admin'].map((label, row) => (
          <div key={label} className="flex gap-2">
            <div className="w-12 shrink-0 text-[6px] uppercase tracking-wider text-background/30">
              {label}
            </div>
            <div className="grid flex-1 grid-cols-5 gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'aspect-[3/4] rounded-sm border',
                    row === 0 && i === 0
                      ? 'border-accent/40 bg-accent/20'
                      : row === 1 && i === 2
                        ? 'border-background/25 bg-background/12'
                        : 'border-background/12 bg-background/6',
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3 text-[6px] text-background/40">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-sm border border-accent/50 bg-accent/30" />
          Ready
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-sm border border-background/25 bg-background/12" />
          In progress
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-sm border border-background/10 bg-background/5" />
          Planned
        </div>
      </div>
    </div>
  )
}

function PrototypeVisual() {
  return (
    <div className="h-52 rounded border border-background/15 bg-gradient-to-br from-background/8 to-background/4 p-4 overflow-hidden">
      <div className="flex h-full gap-3">
        <div className="flex-1 overflow-hidden rounded-lg border border-background/15 bg-background/10 shadow-lg shadow-black/10">
          <div className="flex h-5 items-center gap-1.5 border-b border-background/10 bg-background/12 px-2.5">
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-background/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-background/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-background/20" />
            </div>
            <div className="mx-4 flex h-2.5 flex-1 items-center rounded-sm border border-background/10 bg-background/8 px-1.5">
              <div className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500/30" />
              <div className="h-1 w-16 rounded-full bg-background/15" />
            </div>
          </div>

          <div className="flex gap-2 p-2.5">
            <div className="w-10 space-y-1.5 py-1">
              <div className="h-5 w-full rounded border border-accent/25 bg-accent/15" />
              <div className="h-5 w-full rounded bg-background/8" />
              <div className="h-5 w-full rounded bg-background/8" />
              <div className="h-5 w-full rounded bg-background/8" />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div className="h-2 w-16 rounded bg-background/20" />
                <div className="flex gap-1">
                  <div className="h-4 w-8 rounded bg-background/10" />
                  <div className="h-4 w-10 rounded bg-accent/20" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="rounded border border-background/10 bg-background/8 p-1.5">
                    <div className="mb-1 h-1 w-6 rounded bg-background/15" />
                    <div className="h-2.5 w-8 rounded bg-background/20" />
                  </div>
                ))}
              </div>

              <div className="flex-1 rounded border border-background/10 bg-background/6 p-2">
                <div className="flex h-10 items-end gap-1">
                  {[30, 45, 35, 60, 50, 70, 55, 80, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-accent/20"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-16 rounded-xl border border-white/10 bg-[#1a1a1a] p-1 shadow-lg shadow-black/20">
          <div className="h-full overflow-hidden rounded-lg bg-[#0a0a0a]">
            <div className="flex h-4 items-center justify-center">
              <div className="h-1 w-8 rounded-full bg-white/20" />
            </div>
            <div className="space-y-1.5 px-1.5 pb-2">
              <div className="h-2.5 rounded bg-white/15" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded border border-white/5 bg-white/5 p-1.5">
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 rounded bg-white/10" />
                    <div className="flex-1">
                      <div className="h-1 w-8 rounded bg-white/15" />
                      <div className="mt-0.5 h-0.5 w-5 rounded bg-white/8" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex h-5 items-center justify-center rounded bg-white/90">
                <div className="text-[5px] font-medium text-black">Action</div>
              </div>
            </div>
            <div className="flex h-3 items-center justify-center">
              <div className="h-0.5 w-8 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DesignSystemVisual() {
  return (
    <div className="h-52 rounded border border-background/15 bg-gradient-to-br from-background/8 to-background/4 p-5 overflow-hidden">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded border border-background/15 bg-background/10">
            <div className="h-2.5 w-2.5 rounded-sm bg-background/25" />
          </div>
          <div className="h-2 w-24 rounded bg-background/15" />
        </div>
        <div className="text-[7px] text-background/40">24 components</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Type</div>
          <div className="flex items-baseline gap-3">
            <div className="h-4 w-10 rounded bg-background/20" />
            <div className="h-3 w-8 rounded bg-background/15" />
            <div className="h-2.5 w-7 rounded bg-background/12" />
            <div className="h-2 w-6 rounded bg-background/10" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Buttons</div>
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-14 items-center justify-center rounded bg-background/25">
              <div className="h-1 w-8 rounded bg-background/40" />
            </div>
            <div className="flex h-5 w-14 items-center justify-center rounded border border-background/25 bg-transparent">
              <div className="h-1 w-8 rounded bg-background/25" />
            </div>
            <div className="h-5 w-8 rounded bg-accent/25" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Fields</div>
          <div className="flex flex-1 items-center gap-2">
            <div className="flex h-5 flex-1 items-center rounded border border-background/15 bg-background/6 px-2">
              <div className="h-1 w-12 rounded bg-background/15" />
            </div>
            <div className="flex h-5 w-20 items-center justify-between rounded border border-background/15 bg-background/6 px-2">
              <div className="h-1 w-8 rounded bg-background/15" />
              <div className="h-2 w-2 rotate-45 border-b border-r border-background/20" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-14 text-[6px] uppercase tracking-wider text-background/30">Palette</div>
          <div className="flex gap-1.5">
            <div className="h-5 w-5 rounded-md border border-background/20 bg-background/40" />
            <div className="h-5 w-5 rounded-md border border-background/15 bg-background/25" />
            <div className="h-5 w-5 rounded-md border border-background/10 bg-background/15" />
            <div className="h-5 w-5 rounded-md border border-accent/30 bg-accent/40" />
            <div className="h-5 w-5 rounded-md border border-accent/20 bg-accent/25" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DevMaterialsVisual() {
  return (
    <div className="h-52 rounded border border-background/15 bg-gradient-to-br from-background/8 to-background/4 p-5 overflow-hidden">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-24 rounded bg-background/15" />
          <div className="rounded bg-accent/20 px-2 py-0.5 text-[6px] text-background/60">
            Handoff
          </div>
        </div>
        <div className="text-[7px] text-background/40">Ready to share</div>
      </div>

      <div className="space-y-2.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded border border-background/12 bg-background/8 p-2">
            <div className="mb-1.5 flex items-center gap-1.5">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-accent/30 text-[5px] text-background/70">
                {i}
              </div>
              <div className="h-1.5 rounded bg-background/20" style={{ width: `${50 - i * 8}px` }} />
            </div>
            <div className="space-y-0.5 pl-1">
              <div className="h-1 w-full rounded bg-background/10" />
              <div className={cn('h-1 rounded bg-background/8', i === 1 ? 'w-4/5' : i === 2 ? 'w-2/3' : 'w-full')} />
            </div>
          </div>
        ))}

        <div className="flex h-5 items-center justify-center gap-1 rounded bg-background/20">
          <div className="h-2.5 w-2.5 rounded-sm border border-background/30" />
          <span className="text-[6px] text-background/50">Export</span>
        </div>
      </div>
    </div>
  )
}

function DeliverableVisual({ type }: { type?: string | null }) {
  switch (type) {
    case 'structure':
      return <StructureVisual />
    case 'scenarios':
      return <ScenariosVisual />
    case 'screen-map':
      return <ScreenMapVisual />
    case 'prototype':
      return <PrototypeVisual />
    case 'design-system':
      return <DesignSystemVisual />
    case 'dev-materials':
      return <DevMaterialsVisual />
    default:
      return <StructureVisual />
  }
}

export function DeliverablesPreviewPricingBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const isSimple = block.layoutVariant === 'simple'

  if (isSimple) {
    return (
      <section dir={rtl ? 'rtl' : 'ltr'} className="overflow-hidden bg-foreground py-20 text-background lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-signature-brass">
              {block.eyebrow}
            </p>

            <h2 className="text-balance font-serif text-3xl font-light leading-tight lg:text-4xl xl:text-5xl">
              {block.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-background/70">
              {block.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {block.items?.map((item, index) =>
              item?.name && item?.subtitle ? (
                <div key={`${item.name}-${index}`} className="group relative">
                  <div className="rounded-sm border border-background/10 bg-background/5 p-6 transition-colors hover:border-background/20">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-background/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {index === 0 ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-signature-brass" />
                      ) : null}
                    </div>

                    <h3 className="mb-2 font-serif text-lg text-background">{item.name}</h3>
                    <p className="text-sm text-background/60">{item.subtitle}</p>
                  </div>
                </div>
              ) : null,
            )}
          </div>

          {block.footerLinkLabel && block.footerLinkPageKey ? (
            <div className="mt-16 text-center">
              <Link
                href={getHrefForPageKey(block.footerLinkPageKey, locale)}
                className="inline-flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
              >
                {rtl ? (
                  <>
                    <ArrowLeft className="h-4 w-4" />
                    <span>{block.footerLinkLabel}</span>
                  </>
                ) : (
                  <>
                    <span>{block.footerLinkLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section dir={rtl ? 'rtl' : 'ltr'} className="bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between', rtl && 'lg:flex-row-reverse')}>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-background/50">
              {block.eyebrow}
            </p>

            <h2 className="text-balance font-serif text-3xl font-light leading-tight text-background lg:text-4xl xl:text-5xl">
              {block.title}
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-background/60">
              {block.description}
            </p>
          </div>

          {block.topLinkLabel && block.topLinkPageKey ? (
            <div className="flex gap-4">
              <Link
                href={getHrefForPageKey(block.topLinkPageKey, locale)}
                className="text-sm text-background/60 underline underline-offset-4 transition-colors hover:text-background"
              >
                {block.topLinkLabel}
              </Link>
            </div>
          ) : null}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {block.items?.map((item, index) =>
            item?.name && item?.subtitle ? (
              <div key={`${item.name}-${index}`} className="group">
                <DeliverableVisual type={item.visual} />

                <div className="mt-6">
                  <h3 className="mb-1.5 font-serif text-lg text-background">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-background/50">{item.subtitle}</p>
                </div>
              </div>
            ) : null,
          )}
        </div>

        {(block.footerNote || (block.footerLinkLabel && block.footerLinkPageKey)) ? (
          <div className={cn('mt-20 flex flex-col gap-4 border-t border-background/10 pt-10 sm:flex-row sm:items-center sm:justify-between', rtl && 'sm:flex-row-reverse')}>
            {block.footerNote ? (
              <p className="text-sm text-background/50">{block.footerNote}</p>
            ) : (
              <div />
            )}

            {block.footerLinkLabel && block.footerLinkPageKey ? (
              <Link
                href={getHrefForPageKey(block.footerLinkPageKey, locale)}
                className="group inline-flex items-center text-sm text-background transition-colors hover:text-background/80"
              >
                {rtl ? (
                  <>
                    <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    {block.footerLinkLabel}
                  </>
                ) : (
                  <>
                    {block.footerLinkLabel}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
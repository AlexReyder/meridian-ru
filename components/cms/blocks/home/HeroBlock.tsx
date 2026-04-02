import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getMediaAlt, getMediaUrl } from '@/lib/media'
import { cn } from '@/lib/utils'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'

const FALLBACK_IMAGES = {
  desktop:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b_-YLfXIBTYWrxNbzxLrJDGx60NVQVUoc.png',
  mobile:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-eYpOKl8hCbLaEv636IYFSUfEBrMeeQ.png',
} as const

type Tag = {
  label?: string | null
}

type TitleSegment = {
  text?: string | null
  tone?: 'default' | 'emphasis' | 'muted' | null
}

type TitleRow = {
  segments?: TitleSegment[] | null
}

type HeroBlockData = {
  eyebrow?: string | null
  title?: string | null
  titleRows?: TitleRow[] | null
  description?: string | null
  supportingNote?: string | null
  tags?: Tag[] | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  desktopBadgeLabel?: string | null
  mobileBadgeLabel?: string | null

  desktopImageSource?: 'url' | 'upload' | null
  desktopImageUrl?: string | null
  desktopImageAlt?: string | null
  desktopImage?: unknown

  mobileImageSource?: 'url' | 'upload' | null
  mobileImageUrl?: string | null
  mobileImageAlt?: string | null
  mobileImage?: unknown
}

type Props = {
  block: HeroBlockData
  locale: Locale
}

const localeFallbacks: Record<
  Locale,
  {
    desktopBadgeLabel: string
    mobileBadgeLabel: string
    desktopAlt: string
    mobileAlt: string
  }
> = {
  ru: {
    desktopBadgeLabel: 'Digital-система',
    mobileBadgeLabel: 'Mobile app',
    desktopAlt: 'B2B platform dashboard',
    mobileAlt: 'Mobile app interface',
  },
}

function normalizeTitleRows(block: HeroBlockData): TitleRow[] {
  if (block.titleRows?.length) {
    return block.titleRows.filter((row) => row?.segments?.some((segment) => segment?.text?.trim()))
  }

  if (block.title?.trim()) {
    return block.title
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => ({
        segments: [{ text: line, tone: 'default' as const }],
      }))
  }

  return []
}

export function HeroBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const fallback = localeFallbacks[locale]

  const titleRows = normalizeTitleRows(block)

  const desktopImageUrl =
    block.desktopImageSource === 'url'
      ? block.desktopImageUrl || FALLBACK_IMAGES.desktop
      : getMediaUrl(block.desktopImage) ?? block.desktopImageUrl ?? FALLBACK_IMAGES.desktop

  const mobileImageUrl =
    block.mobileImageSource === 'url'
      ? block.mobileImageUrl || FALLBACK_IMAGES.mobile
      : getMediaUrl(block.mobileImage) ?? block.mobileImageUrl ?? FALLBACK_IMAGES.mobile

  const desktopImageAlt =
    block.desktopImageSource === 'url'
      ? block.desktopImageAlt || fallback.desktopAlt
      : getMediaAlt(block.desktopImage, block.desktopImageAlt ?? fallback.desktopAlt)

  const mobileImageAlt =
    block.mobileImageSource === 'url'
      ? block.mobileImageAlt || fallback.mobileAlt
      : getMediaAlt(block.mobileImage, block.mobileImageAlt ?? fallback.mobileAlt)

  const primaryHref = getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)
  const secondaryHref = getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)

  const titleClass = rtl
    ? 'font-serif text-[2rem] font-light leading-[1.3] tracking-tight text-[#2a2520] text-balance sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]'
    : 'font-serif text-[2.25rem] font-light leading-[1.08] tracking-[-0.015em] text-[#2a2520] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem]'

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="relative overflow-hidden pb-8 pt-20 lg:pb-12 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#faf9f6] via-[#f8f7f4] to-[#f5f3ef]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #9a9080 1px, transparent 1px), linear-gradient(to bottom, #9a9080 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <div
          className={cn(
            'flex flex-col gap-8 lg:items-start',
            rtl ? 'lg:flex-row-reverse lg:gap-4' : 'lg:flex-row lg:gap-4',
          )}
        >
          <div
            className={cn(
              'w-full flex-shrink-0 lg:w-[42%] xl:w-[40%] lg:pt-8 xl:pt-12',
              rtl && 'text-right',
            )}
          >
            <div className={cn('mb-5 inline-flex items-center gap-3', rtl && 'flex-row-reverse')}>
              <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
                <span className="h-[2px] w-3 rounded-full bg-signature-cobalt" />
                <span
                  className={cn(
                    'ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass',
                    rtl && 'mr-0.5 ml-0',
                  )}
                />
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9080]">
                {block.eyebrow}
              </span>
            </div>

            {titleRows.length ? (
              <h1 className={titleClass}>
                {titleRows.map((row, rowIndex) => (
                  <span key={rowIndex} className="block">
                    {row.segments?.map((segment, segmentIndex) => (
                      <span
                        key={`${rowIndex}-${segmentIndex}`}
                        className={cn(
                          segment?.tone === 'emphasis' && 'font-normal',
                          segment?.tone === 'muted' && 'text-[#8a847a]',
                        )}
                      >
                        {segment?.text}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            ) : null}

            {block.description ? (
              <p
                className={cn(
                  'mt-5 text-[14px] text-[#6b6560] lg:text-[15px]',
                  rtl ? 'max-w-[480px] leading-[1.8]' : 'max-w-[440px] leading-[1.7]',
                )}
              >
                {block.description}
              </p>
            ) : null}

            {block.supportingNote ? (
              <p className="mt-3 text-[12px] text-[#9a9080]">{block.supportingNote}</p>
            ) : null}

            <div
              className={cn(
                'mt-7 flex flex-col gap-3 sm:flex-row',
                rtl && 'sm:flex-row-reverse',
              )}
            >
              {block.primaryButtonLabel ? (
                <div className="group relative">
                  <Link
                    href={primaryHref}
                    className={cn(
                      'inline-flex h-10 items-center justify-center rounded-[3px] bg-[#2a2520] px-6 text-[10px] uppercase text-[#faf9f6] shadow-sm transition-colors hover:bg-[#3a3530]',
                      rtl ? 'flex-row-reverse tracking-[0.12em]' : 'tracking-[0.14em]',
                    )}
                  >
                    {rtl ? (
                      <>
                        <ArrowLeft className="ml-2 h-3.5 w-3.5" />
                        {block.primaryButtonLabel}
                      </>
                    ) : (
                      <>
                        {block.primaryButtonLabel}
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </>
                    )}
                  </Link>

                  <div
                    className={cn(
                      'absolute left-1/2 -bottom-[2px] h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-3/4',
                      rtl
                        ? 'bg-gradient-to-r from-signature-brass to-signature-cobalt'
                        : 'bg-gradient-to-r from-signature-cobalt to-signature-brass',
                    )}
                  />
                </div>
              ) : null}

              {block.secondaryButtonLabel ? (
                <Link
                  href={secondaryHref}
                  className={cn(
                    'inline-flex h-10 items-center justify-center rounded-[3px] border border-[#d4cfc5] px-6 text-[10px] text-[#5a554f] transition-colors hover:border-[#c4bfb5] hover:bg-[#f0eee9]',
                    rtl ? 'tracking-[0.12em]' : 'tracking-[0.14em]',
                  )}
                >
                  {block.secondaryButtonLabel}
                </Link>
              ) : null}
            </div>

            {block.tags?.length ? (
              <div className="mt-8 border-t border-[#e8e5de] pt-5">
                <div className="flex flex-wrap gap-2">
                  {block.tags.map((tag, index) =>
                    tag?.label ? (
                      <span
                        key={`${tag.label}-${index}`}
                        className={cn(
                          'inline-flex items-center rounded-[3px] border border-[#e8e5de] bg-[#faf9f6] px-2.5 py-1.5 text-[9px] text-[#8a847a] transition-all duration-300 hover:border-[#d4cfc5] hover:text-[#6b6560]',
                          rtl ? 'tracking-[0.04em]' : 'tracking-[0.06em] uppercase',
                        )}
                      >
                        {tag.label}
                      </span>
                    ) : null,
                  )}
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative h-[440px] w-full sm:h-[480px] lg:h-[540px] lg:w-[58%] xl:h-[580px] xl:w-[60%]">
            <div
              className={cn(
                'absolute inset-0 flex items-center justify-center',
                rtl ? 'lg:justify-start' : 'lg:justify-end',
              )}
            >
              <div className="relative h-full w-full max-w-[520px] lg:max-w-[580px] xl:max-w-[640px]">
                <div className="absolute bottom-[20px] left-1/2 h-[2px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#e0ddd5]/60 to-transparent sm:bottom-[25px] lg:bottom-[30px]" />
                <div className="absolute bottom-[15px] left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#d4cfc5]/40 to-transparent sm:bottom-[18px] lg:bottom-[22px]" />

                <div
                  className={cn(
                    'absolute top-[25px] z-10 w-[380px] sm:top-[30px] sm:w-[440px] lg:top-[35px] lg:w-[500px] xl:w-[560px]',
                    rtl ? 'left-1/2 -translate-x-[55%]' : 'left-1/2 -translate-x-[45%]',
                  )}
                >
                  <div className="relative">
                    <div className="relative rounded-t-[10px] bg-gradient-to-b from-[#d8d4cc] via-[#ccc8c0] to-[#c0bbb2] p-[3px] lg:rounded-t-[12px] lg:p-[4px]">
                      <div className="rounded-t-[8px] bg-[#1a1816] p-[3px] lg:rounded-t-[10px] lg:p-[4px]">
                        <div className="flex justify-center py-[4px] lg:py-[5px]">
                          <div className="h-[6px] w-[6px] rounded-full bg-[#2a2824] lg:h-[7px] lg:w-[7px]" />
                        </div>

                        <div className="overflow-hidden rounded-[3px] bg-[#0d0c0b] lg:rounded-[4px]">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                              src={desktopImageUrl}
                              alt={desktopImageAlt}
                              className="h-full w-full object-cover object-top"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="h-[3px] w-[92%] rounded-b-[2px] bg-gradient-to-b from-[#b8b4ac] to-[#a8a49c] lg:h-[4px]" />
                    </div>
                  </div>

                  <div className="relative -mt-[1px]">
                    <div
                      className="relative h-[12px] rounded-b-[4px] bg-gradient-to-b from-[#d4d0c8] via-[#ccc8c0] to-[#c0bcb4] lg:h-[14px] lg:rounded-b-[5px]"
                      style={{
                        clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',
                      }}
                    >
                      <div className="absolute bottom-[2px] left-1/2 h-[1px] w-[18%] -translate-x-1/2 rounded-full bg-[#b8b4ac]/50" />
                    </div>
                  </div>

                  <div className="absolute -bottom-[15px] left-1/2 h-[20px] w-[85%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#2a2520]/12 to-transparent blur-[8px] lg:-bottom-[18px] lg:h-[25px]" />

                  <div
                    className={cn(
                      'absolute top-[20%]',
                      rtl ? '-right-4 lg:-right-6' : '-left-4 lg:-left-6',
                    )}
                  >
                    <div className="relative inline-flex items-center rounded-[3px] border border-[#e0ddd5] bg-[#faf9f6]/95 px-2.5 py-1.5 shadow-[0_4px_12px_-3px_rgba(42,37,32,0.1)] backdrop-blur-sm lg:px-3 lg:py-2">
                      <div
                        className={cn(
                          'absolute top-1/2 h-3.5 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-signature-cobalt to-signature-brass',
                          rtl ? '-right-[1px]' : '-left-[1px]',
                        )}
                      />
                      <span className="text-[7px] font-medium uppercase tracking-[0.1em] text-[#5a554f] lg:text-[8px]">
                        {block.desktopBadgeLabel || fallback.desktopBadgeLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    'absolute bottom-[40px] z-20 w-[105px] sm:bottom-[50px] sm:w-[120px] lg:bottom-[55px] lg:w-[138px] xl:w-[150px]',
                    rtl
                      ? 'left-[10px] sm:left-[15px] lg:left-[20px] xl:left-[25px]'
                      : 'right-[10px] sm:right-[15px] lg:right-[20px] xl:right-[25px]',
                  )}
                >
                  <div className="rounded-[24px] bg-gradient-to-b from-[#4a4540] via-[#3a3530] to-[#2a2520] p-[2.5px] shadow-[0_45px_90px_-20px_rgba(42,37,32,0.5),0_22px_45px_-12px_rgba(42,37,32,0.3)] sm:rounded-[28px] lg:rounded-[32px] lg:p-[3px] xl:rounded-[35px]">
                    <div className="rounded-[22px] bg-[#1a1816] p-[1.5px] sm:rounded-[26px] lg:rounded-[30px] lg:p-[2px] xl:rounded-[33px]">
                      <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] xl:rounded-[31px]">
                        <div className="absolute left-1/2 top-[5px] z-10 h-[10px] w-[30%] -translate-x-1/2 rounded-full bg-[#1a1816] lg:top-[6px] lg:h-[12px]" />
                        <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
                          <img
                            src={mobileImageUrl}
                            alt={mobileImageAlt}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-[12px] left-1/2 h-[18px] w-[80%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#2a2520]/15 to-transparent blur-[6px] lg:-bottom-[15px] lg:h-[22px]" />

                  <div
                    className={cn(
                      'absolute top-[38%]',
                      rtl ? '-left-3 lg:-left-5' : '-right-3 lg:-right-5',
                    )}
                  >
                    <div className="relative inline-flex items-center rounded-[3px] border border-[#e0ddd5] bg-[#faf9f6]/95 px-2.5 py-1.5 shadow-[0_4px_12px_-3px_rgba(42,37,32,0.1)] backdrop-blur-sm lg:px-3 lg:py-2">
                      <div
                        className={cn(
                          'absolute top-1/2 h-3.5 w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-signature-cobalt to-signature-brass',
                          rtl ? '-right-[1px]' : '-left-[1px]',
                        )}
                      />
                      <span className="text-[7px] font-medium uppercase tracking-[0.1em] text-[#5a554f] lg:text-[8px]">
                        {block.mobileBadgeLabel || fallback.mobileBadgeLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
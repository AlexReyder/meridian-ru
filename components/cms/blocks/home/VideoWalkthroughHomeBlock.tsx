'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Play, X } from 'lucide-react'

import { getMediaAlt, getMediaUrl } from '@/lib/media'
import { getHrefForPageKey, isRTL, type Locale, type PageKey } from '@/lib/routes'
import { cn } from '@/lib/utils'

type BadgeItem = {
  label?: string | null
}

type TimelineItem = {
  number?: string | null
  label?: string | null
  description?: string | null
}

type HighlightItem = {
  label?: string | null
}

type VideoWalkthroughHomeBlockData = {
  displayMode?: 'full' | 'compact' | null
  eyebrow?: string | null
  title?: string | null
  subheadline?: string | null
  videoLabel?: string | null
  durationLabel?: string | null
  metaBadges?: BadgeItem[] | null
  timeline?: TimelineItem[] | null
  highlightsTitle?: string | null
  highlights?: HighlightItem[] | null
  ctaTitle?: string | null
  ctaSubtext?: string | null
  primaryButtonLabel?: string | null
  primaryPageKey?: PageKey | null
  secondaryButtonLabel?: string | null
  secondaryPageKey?: PageKey | null
  videoSource?: 'url' | 'upload' | null
  videoUrl?: string | null
  videoFile?: unknown
  posterSource?: 'url' | 'upload' | null
  posterUrl?: string | null
  posterMedia?: unknown
  posterAlt?: string | null
}

type Props = {
  block: VideoWalkthroughHomeBlockData
  locale: Locale
}

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url)
}

export function VideoWalkthroughHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)
  const [isOpen, setIsOpen] = useState(false)

  const displayMode = block.displayMode ?? 'full'

  const posterUrl =
    block.posterSource === 'upload'
      ? getMediaUrl(block.posterMedia) ?? block.posterUrl ?? ''
      : block.posterUrl ?? getMediaUrl(block.posterMedia) ?? ''

  const posterAlt =
    block.posterSource === 'upload'
      ? getMediaAlt(block.posterMedia, block.posterAlt ?? block.title ?? 'Video poster')
      : block.posterAlt ?? getMediaAlt(block.posterMedia, block.title ?? 'Video poster')

  const videoUrl =
    block.videoSource === 'upload'
      ? getMediaUrl(block.videoFile) ?? block.videoUrl ?? ''
      : block.videoUrl ?? getMediaUrl(block.videoFile) ?? ''

  const canPlayVideo = Boolean(videoUrl)
  const useNativeVideo = isVideoFile(videoUrl)

  const primaryHref = getHrefForPageKey(block.primaryPageKey ?? 'get-proposal', locale)
  const secondaryHref = getHrefForPageKey(block.secondaryPageKey ?? 'pricing', locale)

  const metaBadges = block.metaBadges?.filter((item) => item?.label?.trim()) ?? []
  const timeline = block.timeline?.filter((item) => item?.label?.trim()) ?? []
  const highlights = block.highlights?.filter((item) => item?.label?.trim()) ?? []

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const compactHeading = useMemo(
    () => ({
      eyebrow: block.eyebrow ?? 'Walkthrough',
      title: block.title ?? 'От задачи до готового прототипа',
    }),
    [block.eyebrow, block.title],
  )

  const renderPlaySurface = (compact = false) => (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm border border-background/10 bg-[#0f0e0d] shadow-2xl shadow-black/40',
        compact ? 'aspect-video' : 'aspect-video',
      )}
    >
      <div className="absolute top-0 left-0 z-20">
        <div className="absolute top-0 left-0 h-[2px] w-8 rounded-r-full bg-signature-cobalt" />
        <div className="absolute top-0 left-0 h-8 w-[2px] rounded-b-full bg-signature-cobalt" />
        <div className="absolute top-[2px] left-8 h-[1.5px] w-3 rounded-full bg-signature-brass/70" />
      </div>

      <div className="absolute bottom-0 right-0 z-20">
        <div className="absolute right-0 bottom-0 h-[2px] w-8 rounded-l-full bg-signature-cobalt/50" />
        <div className="absolute right-0 bottom-0 h-8 w-[2px] rounded-t-full bg-signature-cobalt/50" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1816] via-[#0f0e0d] to-[#1a1816]">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={posterAlt}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: compact ? '30px 30px' : '40px 40px',
                }}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full border border-background/5" />
              <div className="absolute h-64 w-64 rounded-full border border-background/[0.03]" />
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/30 via-transparent to-transparent" />
      </div>

      <button
        type="button"
        onClick={() => {
          if (canPlayVideo) setIsOpen(true)
        }}
        className="absolute inset-0 z-10 flex items-center justify-center group/play"
        aria-label={block.videoLabel || 'Play video'}
      >
        <div className="relative">
          {!compact ? (
            <div className="absolute -inset-4 rounded-full border border-background/20 transition-colors duration-300 group-hover/play:border-background/40" />
          ) : null}
          <div
            className={cn(
              'flex items-center justify-center rounded-full border border-background/30 bg-background/10 backdrop-blur-sm transition-all duration-300 group-hover/play:border-signature-cobalt/50 group-hover/play:bg-background/20',
              compact ? 'h-16 w-16' : 'h-20 w-20',
            )}
          >
            <Play
              className={cn(
                'ml-1 fill-background/80 text-background',
                compact ? 'h-6 w-6' : 'h-8 w-8',
              )}
            />
          </div>
        </div>
      </button>

      <div className="absolute top-4 left-4 z-20">
        <span className="text-[10px] uppercase tracking-[0.15em] text-signature-brass/80">
          {block.videoLabel || 'Видео'}
        </span>
      </div>

      <div className="absolute right-4 bottom-4 z-20">
        <span className="rounded-sm bg-black/40 px-2 py-1 text-[10px] uppercase tracking-wider text-background/60 backdrop-blur-sm">
          {block.durationLabel || '4:32'}
        </span>
      </div>
    </div>
  )

  return (
    <>
      <section
        dir={rtl ? 'rtl' : 'ltr'}
        className={cn(
          'relative overflow-hidden bg-[#1a1816]',
          displayMode === 'compact' ? 'py-16 lg:py-20' : 'py-24 lg:py-32',
        )}
      >
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
              backgroundSize: '150px 150px',
            }}
          />
        </div>

        <div className="container relative mx-auto px-6 lg:px-8">
          {displayMode === 'compact' ? (
            <div className="mx-auto max-w-4xl">
              <div className={cn('mb-10 text-center', rtl && 'text-right')}>
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="h-[1.5px] w-6 rounded-full bg-signature-cobalt" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-signature-cobalt">
                    {compactHeading.eyebrow}
                  </span>
                  <div className="h-[1.5px] w-6 rounded-full bg-signature-cobalt" />
                </div>

                <h2 className="mb-4 font-serif text-2xl font-light leading-tight text-background text-balance lg:text-3xl">
                  {compactHeading.title}
                </h2>

                <p className="mx-auto max-w-xl text-sm leading-relaxed text-background/60">
                  {block.subheadline}
                </p>
              </div>

              <div className="group relative mx-auto max-w-2xl">
                {renderPlaySurface(true)}
              </div>

              {highlights.length ? (
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {highlights.slice(0, 4).map((item, index) => (
                    <span
                      key={`${item.label}-${index}`}
                      className="rounded-sm border border-background/15 px-3 py-1.5 text-xs text-background/50"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <div className={cn('mb-16 max-w-3xl lg:mb-20', rtl && 'text-right')}>
                <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse')}>
                  <div className="h-[1.5px] w-6 rounded-full bg-signature-cobalt" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-signature-cobalt">
                    {block.eyebrow || 'Walkthrough'}
                  </span>
                </div>

                <h2 className="mb-6 font-serif text-3xl font-light leading-tight text-background text-balance lg:text-4xl xl:text-5xl">
                  {block.title || 'От задачи до готового прототипа'}
                </h2>

                <p className="max-w-2xl text-base leading-relaxed text-background/70 lg:text-lg">
                  {block.subheadline}
                </p>

                {metaBadges.length ? (
                  <div className={cn('mt-8 flex flex-wrap items-center gap-4', rtl && 'justify-end')}>
                    {metaBadges.map((item, index) => (
                      <span
                        key={`${item.label}-${index}`}
                        className="rounded-sm border border-background/20 px-3 py-1.5 text-xs text-background/50"
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <div className="group relative">
                    {renderPlaySurface(false)}
                    <div className="absolute -bottom-4 left-4 right-4 h-8 rounded-b-lg bg-gradient-to-b from-black/20 to-transparent blur-xl" />
                  </div>

                  {timeline.length ? (
                    <div className="mt-12 border-t border-background/10 pt-8">
                      <div className="flex items-start justify-between gap-2 overflow-x-auto pb-2">
                        {timeline.map((step, index) => (
                          <div
                            key={`${step.number}-${step.label}-${index}`}
                            className="relative min-w-[100px] flex-1"
                          >
                            {index < timeline.length - 1 ? (
                              <div className="absolute top-3 left-[calc(50%+16px)] right-0 h-[1px] bg-gradient-to-r from-background/20 to-background/10" />
                            ) : null}

                            <div className="relative text-center">
                              <div
                                className={cn(
                                  'mx-auto mb-2 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-medium',
                                  index === 0
                                    ? 'border-signature-cobalt/30 bg-signature-cobalt/20 text-signature-cobalt'
                                    : 'border-background/10 bg-background/5 text-background/40',
                                )}
                              >
                                {step.number}
                              </div>

                              <div className="mb-1 text-xs font-medium text-background/80">
                                {step.label}
                              </div>

                              <div className="hidden text-[10px] text-background/40 sm:block">
                                {step.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col lg:col-span-5">
                  <div className={cn('mb-10', rtl && 'text-right')}>
                    <h3 className="mb-6 text-sm uppercase tracking-[0.1em] text-background/50">
                      {block.highlightsTitle || 'Что вы увидите в ролике'}
                    </h3>

                    {highlights.length ? (
                      <ul className="space-y-4">
                        {highlights.map((item, index) => (
                          <li
                            key={`${item.label}-${index}`}
                            className={cn('group flex items-start gap-3', rtl && 'flex-row-reverse')}
                          >
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signature-cobalt/60 transition-colors group-hover:bg-signature-cobalt" />
                            <span className="text-sm leading-relaxed text-background/70 transition-colors group-hover:text-background/90">
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <div className="flex-grow" />

                  <div className={cn('rounded-sm border border-background/10 bg-background/[0.03] p-6 lg:p-8', rtl && 'text-right')}>
                    <h3 className="mb-3 font-serif text-xl font-light text-background lg:text-2xl">
                      {block.ctaTitle}
                    </h3>

                    <p className="mb-6 text-sm text-background/50">
                      {block.ctaSubtext}
                    </p>

                    <div className={cn('flex flex-col gap-3 sm:flex-row', rtl && 'sm:flex-row-reverse')}>
                      <Link
                        href={primaryHref}
                        className={cn(
                          'inline-flex items-center justify-center gap-2 rounded-sm bg-signature-cobalt px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-signature-cobalt/90',
                          rtl && 'flex-row-reverse',
                        )}
                      >
                        {block.primaryButtonLabel}
                        {rtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                      </Link>

                      <Link
                        href={secondaryHref}
                        className="inline-flex items-center justify-center gap-2 rounded-sm border border-background/20 px-5 py-3 text-sm font-medium text-background/80 transition-colors hover:border-background/40 hover:text-background"
                      >
                        {block.secondaryButtonLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-video bg-black">
              {canPlayVideo ? (
                useNativeVideo ? (
                  <video
                    src={videoUrl}
                    poster={posterUrl || undefined}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full"
                  />
                ) : (
                  <iframe
                    src={videoUrl}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    title={block.title || 'Video walkthrough'}
                  />
                )
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
                  Видео пока не загружено
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type SamplePreviewItem = {
  title?: string | null
  subtitle?: string | null
  imageSource?: 'url' | 'upload' | null
  imageUrl?: string | null
  imageMedia?: any
  alt?: string | null
}

type SamplePreviewHomeBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: SamplePreviewItem[] | null
  bottomNote?: string | null
}

type Props = {
  block: SamplePreviewHomeBlockData
  locale: Locale
}

export function SamplePreviewHomeBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="overflow-hidden bg-foreground py-24 text-background lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn('mb-16 max-w-3xl', rtl && 'text-right')}>
          <div className={cn('mb-4 flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center', rtl && 'flex-row-reverse')}>
              {rtl ? (
                <>
                  <span className="h-[2px] w-2 rounded-full bg-signature-brass-soft" />
                  <span className="mr-0.5 h-[2px] w-3 rounded-full bg-signature-cobalt-soft" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-3 rounded-full bg-signature-cobalt-soft" />
                  <span className="ml-0.5 h-[2px] w-2 rounded-full bg-signature-brass-soft" />
                </>
              )}
            </div>

            <span
              className={cn(
                'text-[10px] text-background/50',
                rtl ? 'tracking-[0.15em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-background text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base text-background/60">{block.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {block.items?.map((artifact, index) => {
            const media = artifact.imageMedia

            const resolvedImageUrl =
              artifact.imageSource === 'upload'
                ? (typeof media === 'object' ? media?.url : artifact.imageUrl)
                : artifact.imageUrl

            const resolvedImageAlt =
              artifact.imageSource === 'upload'
                ? (typeof media === 'object'
                    ? artifact.alt || media?.alt || artifact.title
                    : artifact.alt || artifact.title)
                : artifact.alt || artifact.title

            const finalUrl = resolvedImageUrl ?? ''
            const finalAlt = resolvedImageAlt ?? artifact.title ?? ''

            return (
              <div
                key={`${artifact.title}-${index}`}
                className={cn(
                  'group relative overflow-hidden rounded-sm border border-background/10 bg-background/[0.03] transition-all duration-300 hover:border-background/20 hover:bg-background/[0.06]',
                  rtl && 'text-right',
                )}
              >
                {index === 0 ? (
                  <div className={cn('absolute top-0 z-10', rtl ? 'right-0' : 'left-0')}>
                    <div
                      className={cn(
                        'absolute top-0 h-[2px] w-4 bg-signature-cobalt-soft/60',
                        rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-0 h-4 w-[2px] bg-signature-cobalt-soft/60 rounded-b-full',
                        rtl ? 'right-0' : 'left-0',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-[2px] h-[1.5px] w-2 rounded-full bg-signature-brass-soft/50',
                        rtl ? 'right-4' : 'left-4',
                      )}
                    />
                  </div>
                ) : null}

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={finalUrl}
                    alt={finalAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-5">
                  <h3 className="mb-1.5 font-serif text-lg text-background">{artifact.title}</h3>
                  <p className="text-sm leading-relaxed text-background/50">{artifact.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/40">{block.bottomNote}</p>
        </div>
      </div>
    </section>
  )
}
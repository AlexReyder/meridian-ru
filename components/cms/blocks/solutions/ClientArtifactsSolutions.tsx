import { isRTL, type Locale } from '@/lib/routes'
import { cn } from '@/lib/utils'

type ArtifactItem = {
  title?: string | null
  subtitle?: string | null
  imageSource?: 'url' | 'upload' | null
  imageUrl?: string | null
  imageMedia?: any
  alt?: string | null
}

type ClientArtifactsSolutionsBlockData = {
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  items?: ArtifactItem[] | null
  bottomNote?: string | null
}

type Props = {
  block: ClientArtifactsSolutionsBlockData
  locale: Locale
}

export function ClientArtifactsSolutionsBlockComponent({ block, locale }: Props) {
  const rtl = isRTL(locale)

  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="bg-foreground py-20 text-background lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className={cn('mb-12 lg:mb-16', rtl && 'text-right')}>
          <div className={cn('mb-6 flex items-center gap-3', rtl && 'flex-row-reverse')}>
            <div className={cn('flex items-center gap-1', rtl && 'flex-row-reverse')}>
              {rtl ? (
                <>
                  <span className="h-[2px] w-1 rounded-full bg-signature-brass" />
                  <span className="h-[2px] w-2 rounded-full bg-signature-cobalt" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-2 rounded-full bg-signature-cobalt" />
                  <span className="h-[2px] w-1 rounded-full bg-signature-brass" />
                </>
              )}
            </div>

            <span
              className={cn(
                'text-[10px] text-background/50',
                rtl ? 'tracking-[0.18em]' : 'uppercase tracking-[0.2em]',
              )}
            >
              {block.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl font-light leading-tight text-background text-balance lg:text-4xl xl:text-5xl">
            {block.title}
          </h2>

          <p className="mt-4 max-w-2xl text-base text-background/60 lg:text-lg">
            {block.description}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {block.items?.map((artifact, index) => {
            if (!artifact?.title) return null

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
            const finalAlt = resolvedImageAlt ?? artifact.title

            return (
              <div
                key={`${artifact.title}-${index}`}
                className="group relative overflow-hidden rounded-sm border border-background/[0.12] bg-background/[0.06] transition-all duration-300 hover:border-background/20 hover:bg-background/[0.08]"
              >
                {index === 0 ? (
                  <div className={cn('absolute top-0 z-10', rtl ? 'right-0' : 'left-0')}>
                    <div
                      className={cn(
                        'absolute top-0 h-[2px] w-4 bg-signature-cobalt/70',
                        rtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-0 h-4 w-[2px] bg-signature-cobalt/70 rounded-b-full',
                        rtl ? 'right-0' : 'left-0',
                      )}
                    />
                    <div
                      className={cn(
                        'absolute top-[2px] h-[1.5px] w-2 rounded-full bg-signature-brass/60',
                        rtl ? 'right-4' : 'left-4',
                      )}
                    />
                  </div>
                ) : null}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={finalUrl}
                    alt={finalAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                </div>

                <div className={cn('p-5 lg:p-6', rtl && 'text-right')}>
                  <h3 className="font-serif text-lg font-light text-background transition-colors group-hover:text-background/90 lg:text-xl">
                    {artifact.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/50">
                    {artifact.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/40">{block.bottomNote}</p>
        </div>
      </div>
    </section>
  )
}
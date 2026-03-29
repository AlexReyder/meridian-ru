import { getPayloadClient } from '@/lib/payload'

import { type Locale } from '@/lib/routes'

export async function getHeader(locale: Locale) {
  const payload = await getPayloadClient()

  const header = await payload.findGlobal({
    slug: 'header',
    locale,
  })

  return header
}
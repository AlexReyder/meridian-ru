import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const FinalCtaHomeBlock: Block = {
  slug: 'finalCtaHome',
  labels: {
    singular: 'Final CTA Home',
    plural: 'Final CTA Home blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryButtonLabel',
          type: 'text',
          required: true,
          defaultValue: 'Получить предложение',
        },
        {
          name: 'primaryPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryButtonLabel',
          type: 'text',
          required: true,
          defaultValue: 'Посмотреть цены',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      name: 'footerNote',
      type: 'text',
      required: true,
    },
  ],
}
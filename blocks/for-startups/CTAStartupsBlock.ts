import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '@/lib/routes'

export const CTAStartupsBlock: Block = {
  slug: 'ctaStartups',
  labels: {
    singular: 'CTA Startups',
    plural: 'CTA Startups',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      localized: true,
      required: true,
      defaultValue: 'Не уверены, с чего начать: с сайта, MVP или prototype?',
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryButtonLabel',
          type: 'text',
          localized: true,
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
          localized: true,
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
      localized: true,
      required: true,
    },
  ],
}
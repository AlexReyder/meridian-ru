import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const SituationsStartupsBlock: Block = {
  slug: 'situationsStartups',
  labels: {
    singular: 'Situations Startups',
    plural: 'Situations Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Когда актуально',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Когда эта страница особенно актуальна',
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'detailedCards',
      options: [
        { label: 'Detailed Cards', value: 'detailedCards' },
        { label: 'Simple Cards', value: 'simpleCards' },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      required: true,
      defaultValue: 'Получить предложение',
    },
    {
      name: 'ctaPageKey',
      type: 'select',
      required: true,
      options: PAGE_KEY_OPTIONS,
      defaultValue: 'get-proposal',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 6,
      fields: [
        {
          name: 'situation',
          type: 'text',
          required: true,
        },
        {
          name: 'explanation',
          type: 'textarea',
          admin: {
            condition: (_, siblingData) => siblingData?.layoutVariant !== 'simpleCards',
          },
        },
      ],
    },
  ],
}
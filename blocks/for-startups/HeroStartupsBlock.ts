import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const HeroStartupsBlock: Block = {
  slug: 'heroStartups',
  labels: {
    singular: 'Hero Startups',
    plural: 'Hero Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Для стартапов',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Для стартапов, которым нужен ясный продукт до начала разработки',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'note',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      minRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
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
  ],
}
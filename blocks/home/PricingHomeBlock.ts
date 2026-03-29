import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const PricingHomeBlock: Block = {
  slug: 'pricingHome',
  labels: {
    singular: 'Pricing Home',
    plural: 'Pricing Home blocks',
  },
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      defaultValue: 'formats',
    },
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Packages',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Форматы работы',
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
      name: 'featuredBadge',
      type: 'text',
      required: true,
      defaultValue: 'Популярный выбор',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'timeline',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'includes',
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
      ],
    },
  ],
}
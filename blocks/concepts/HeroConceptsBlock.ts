import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const HeroConceptsBlock: Block = {
  slug: 'heroConcepts',
  labels: {
    singular: 'Hero Concepts',
    plural: 'Hero Concepts blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Studio Portfolio',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Концепты студии',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'supportLine',
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
          dbName: 'hc_pri_pk',
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
          dbName: 'hc_sec_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
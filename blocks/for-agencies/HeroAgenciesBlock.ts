import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const HeroAgenciesBlock: Block = {
  slug: 'heroAgencies',
  labels: {
    singular: 'Hero Agencies',
    plural: 'Hero Agencies blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Для партнёров',
    },
    {
      name: 'titlePrefix',
      type: 'textarea',
      required: true,
      defaultValue: 'Для партнёров, которым нужен внешний',
    },
    {
      name: 'titleAccent',
      type: 'text',
      required: true,
      defaultValue: 'premium-партнёр',
    },
    {
      name: 'titleSuffix',
      type: 'textarea',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'descriptionSecondary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'partnerTags',
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
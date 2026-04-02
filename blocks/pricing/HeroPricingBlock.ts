import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const HeroPricingBlock: Block = {
  slug: 'heroPricing',
  labels: {
    singular: 'Hero Pricing',
    plural: 'Hero Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Форматы и стоимость',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Цены и форматы работы',
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
      name: 'trustLabels',
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
          dbName: 'hp_pri_pk',
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
          defaultValue: 'Посмотреть метод',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          dbName: 'hp_sec_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'method',
        },
      ],
    },
  ],
}
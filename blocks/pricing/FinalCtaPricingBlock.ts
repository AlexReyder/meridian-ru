import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const FinalCtaPricingBlock: Block = {
  slug: 'finalCtaPricing',
  labels: {
    singular: 'Final CTA Pricing',
    plural: 'Final CTA Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Следующий шаг',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Закажите дизайн сайта, системы или приложения',
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
          dbName: 'fctp_pri_pk',
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
          defaultValue: 'На главную',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          dbName: 'fctp_sec_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'home',
        },
      ],
    },
    {
      name: 'footerNote',
      type: 'text',
      required: true,
      defaultValue: 'Для сайтов · Digital-систем · Порталов · Mobile apps',
    },
  ],
}
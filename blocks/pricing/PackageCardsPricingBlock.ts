import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const PackageCardsPricingBlock: Block = {
  slug: 'packageCardsPricing',
  labels: {
    singular: 'Package Cards Pricing',
    plural: 'Package Cards Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Форматы работы',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Три формата работы',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'contextLine',
      type: 'textarea',
    },
    {
      name: 'forWhomLabel',
      type: 'text',
      required: true,
      defaultValue: 'Для кого',
    },
    {
      name: 'includesLabel',
      type: 'text',
      required: true,
      defaultValue: 'Что входит',
    },
    {
      name: 'packages',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'packageKey',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'priceNote',
          type: 'text',
          required: true,
        },
        {
          name: 'timeline',
          type: 'text',
          required: true,
        },
        {
          name: 'forWhom',
          type: 'textarea',
          required: true,
        },
        {
          name: 'includes',
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
          name: 'primaryButtonLabel',
          type: 'text',
          required: true,
          defaultValue: 'Получить предложение',
        },
        {
          name: 'primaryPageKey',
          type: 'select',
          dbName: 'pcp_pri_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
        {
          name: 'secondaryLinkLabel',
          type: 'text',
          required: true,
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          dbName: 'pcp_sec_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'for-startups',
        },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
}
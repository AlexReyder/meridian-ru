import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const NoCallCtaPricingBlock: Block = {
  slug: 'noCallCtaPricing',
  labels: {
    singular: 'No Call CTA Pricing',
    plural: 'No Call CTA Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Старт без звонков',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Получите рекомендацию по проекту без обязательного стартового звонка',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
   {
  name: 'steps',
  type: 'array',
  required: true,
  minRows: 1,
  fields: [
    {
      name: 'icon',
      type: 'text',
      required: true,
      defaultValue: 'fileText',
    },
    {
      name: 'step',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
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
          dbName: 'nccp_pri_pk',
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
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          dbName: 'nccp_sec_pk',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
  ],
}
import type { Block } from 'payload'

export const PositioningBlockPricingBlock: Block = {
  slug: 'positioningBlockPricing',
  labels: {
    singular: 'Positioning Block Pricing',
    plural: 'Positioning Block Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Понятный процесс работы',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Не прайс на дизайн, а понятные форматы продуктовой работы',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'descriptionSecondary',
      type: 'textarea',
    },
    {
      name: 'rightTitle',
      type: 'text',
      required: true,
      defaultValue: 'Работа напрямую с командой',
    },
    {
      name: 'pillars',
      type: 'array',
      fields: [
        {
          name: 'label',
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
      name: 'deliveryElements',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
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
  ],
}
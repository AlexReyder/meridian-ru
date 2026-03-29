import type { Block } from 'payload'

export const PriceExplanationPricingBlock: Block = {
  slug: 'priceExplanationPricing',
  labels: {
    singular: 'Price Explanation Pricing',
    plural: 'Price Explanation Pricing blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Почему так',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Почему это стоит столько',
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
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'points',
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
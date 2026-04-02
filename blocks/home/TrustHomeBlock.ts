import type { Block } from 'payload'

export const TrustHomeBlock: Block = {
  slug: 'trustHome',
  labels: {
    singular: 'Trust Home',
    plural: 'Trust Home blocks',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 4,
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
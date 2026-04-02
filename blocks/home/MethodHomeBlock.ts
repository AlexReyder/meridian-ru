import type { Block } from 'payload'

export const MethodHomeBlock: Block = {
  slug: 'methodHome',
  labels: {
    singular: 'Method Home',
    plural: 'Method Home blocks',
  },
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      defaultValue: 'method',
    },
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Process',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Метод работы',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 5,
      maxRows: 5,
      fields: [
        {
          name: 'number',
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
          type: 'textarea',
          required: true,
        },
        {
          name: 'details',
          type: 'array',
          required: true,
          minRows: 2,
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
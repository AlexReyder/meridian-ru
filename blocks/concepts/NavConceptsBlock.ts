import type { Block } from 'payload'

export const NavConceptsBlock: Block = {
  slug: 'navConcepts',
  labels: {
    singular: 'Nav Concepts',
    plural: 'Nav Concepts',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Концепты:',
    },
    {
      name: 'items',
      type: 'array',
      localized: true,
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'anchorId',
          type: 'text',
          required: true,
        },
        {
          name: 'shortLabel',
          type: 'text',
          required: true,
        },
        {
          name: 'number',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
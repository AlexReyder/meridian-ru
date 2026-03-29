import type { Block } from 'payload'

export const GridSolutionsBlock: Block = {
  slug: 'gridSolutions',
  labels: {
    singular: 'Grid Solutions',
    plural: 'Grid Solutions blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Типы задач',
    },
    {
      name: 'learnMoreLabel',
      type: 'text',
      required: true,
      defaultValue: 'Подробнее',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 6,
      maxRows: 6,
      fields: [
        {
          name: 'anchorId',
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
      ],
    },
  ],
}
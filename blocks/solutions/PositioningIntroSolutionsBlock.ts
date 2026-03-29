import type { Block } from 'payload'

export const PositioningIntroSolutionsBlock: Block = {
  slug: 'positioningIntroSolutions',
  labels: {
    singular: 'Positioning Intro Solutions',
    plural: 'Positioning Intro Solutions blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Не просто дизайн, а решение под тип задачи',
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
      minRows: 3,
      maxRows: 3,
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
      ],
    },
  ],
}
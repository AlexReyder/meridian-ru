import type { Block } from 'payload'

export const StepsMethodBlock: Block = {
  slug: 'stepsMethod',
  labels: {
    singular: 'Steps Method',
    plural: 'Steps Method blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Этапы работы',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как устроен процесс — от первого контакта до передачи в разработку',
    },
    {
      name: 'layoutVariant',
      type: 'select',
      dbName: 'sm_layout_v',
      required: true,
      defaultValue: 'detailed',
      options: [
        {
          label: 'Detailed',
          value: 'detailed',
        },
        {
          label: 'Grid',
          value: 'grid',
        },
      ],
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 1,
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
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'duration',
          type: 'text',
        },
      ],
    },
  ],
}
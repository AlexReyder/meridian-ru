import type { Block } from 'payload'

export const ValueStartupsBlock: Block = {
  slug: 'valueStartups',
  labels: {
    singular: 'Value Startups',
    plural: 'Value Startups blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Зачем приходят',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Зачем стартапы приходят в Atelier Meridian',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'layoutVariant',
      type: 'select',
      required: true,
      defaultValue: 'iconCards',
      options: [
        { label: 'Icon Cards', value: 'iconCards' },
        { label: 'Numbered Cards', value: 'numberedCards' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 3,
      fields: [
        {
          name: 'number',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.layoutVariant === 'numberedCards',
          },
        },
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'lightbulb',
          options: [
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Presentation', value: 'presentation' },
            { label: 'Rocket', value: 'rocket' },
            { label: 'Arrow Right', value: 'arrowRight' },
          ],
          admin: {
            condition: (_, siblingData) => siblingData?.layoutVariant !== 'numberedCards',
          },
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
import type { Block } from 'payload'

export const IntroConceptsBlock: Block = {
  slug: 'introConcepts',
  labels: {
    singular: 'Intro Concepts',
    plural: 'Intro Concepts blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'О концептах',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Что показывают эти концепты',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'pillars',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          dbName: 'ic_pillar_icon',
          required: true,
          options: [
            { label: 'Layers', value: 'layers' },
            { label: 'Pen Tool', value: 'penTool' },
            { label: 'Arrow Right', value: 'arrowRight' },
            { label: 'Arrow Left', value: 'arrowLeft' },
          ],
          defaultValue: 'layers',
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
  ],
}
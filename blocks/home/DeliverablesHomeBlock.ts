import type { Block } from 'payload'

export const DeliverablesHomeBlock: Block = {
  slug: 'deliverablesHome',
  labels: {
    singular: 'Deliverables Home',
    plural: 'Deliverables Home blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Что входит в работу',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Что вы получаете на первом этапе',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 4,
      maxRows: 8,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          defaultValue: 'fileText',
          options: [
            { label: 'File Text', value: 'fileText' },
            { label: 'Users', value: 'users' },
            { label: 'Git Branch', value: 'gitBranch' },
            { label: 'Layout Grid', value: 'layoutGrid' },
            { label: 'Palette', value: 'palette' },
            { label: 'Mouse Pointer', value: 'mousePointer' },
            { label: 'Layers', value: 'layers' },
            { label: 'File Check', value: 'fileCheck' },
          ],
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
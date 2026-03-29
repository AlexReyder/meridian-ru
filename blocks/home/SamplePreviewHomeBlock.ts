import type { Block } from 'payload'

export const SamplePreviewHomeBlock: Block = {
  slug: 'samplePreviewHome',
  labels: {
    singular: 'Sample Preview Home',
    plural: 'Sample Preview Home blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Материалы первого этапа',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Что вы получаете на первом этапе',
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
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'imageSource',
              label: 'Источник изображения',
              type: 'radio',
              defaultValue: 'url',
              options: [
                { label: 'URL', value: 'url' },
                { label: 'Загрузить файл', value: 'upload' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alt',
              label: 'Alt изображения',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'imageUrl',
          label: 'URL изображения',
          type: 'text',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.imageSource === 'url',
          },
        },
        {
          name: 'imageMedia',
          label: 'Выберите файл',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.imageSource === 'upload',
          },
        },
      ],
    },
    {
      name: 'bottomNote',
      type: 'textarea',
      required: true,
    },
  ],
}
import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const ConceptsHomeBlock: Block = {
  slug: 'conceptsHome',
  labels: {
    singular: 'Concepts Home',
    plural: 'Concepts Home blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Концепты',
    },
    {
      name: 'title',
      type: 'textarea',
      required: true,
      defaultValue: 'Как это может выглядеть',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'challengeLabel',
          type: 'text',
          required: true,
          defaultValue: 'Challenge',
        },
        {
          name: 'structuredLabel',
          type: 'text',
          required: true,
          defaultValue: 'Structured',
        },
        {
          name: 'deliveredLabel',
          type: 'text',
          required: true,
          defaultValue: 'Delivered',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'viewConceptsLabel',
          type: 'text',
          required: true,
          defaultValue: 'Посмотреть концепты',
        },
        {
          name: 'conceptsPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'concepts',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'previousAriaLabel',
          type: 'text',
          required: true,
          defaultValue: 'Previous concept',
        },
        {
          name: 'nextAriaLabel',
          type: 'text',
          required: true,
          defaultValue: 'Next concept',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'badge',
          type: 'text',
          required: true,
        },
        {
          name: 'challenge',
          type: 'textarea',
          required: true,
        },
        {
          name: 'structured',
          type: 'textarea',
          required: true,
        },
        {
          name: 'delivered',
          type: 'textarea',
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
              name: 'imageAlt',
              label: 'Alt изображения',
              type: 'text',
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
          admin: {
            condition: (_, siblingData) => siblingData?.imageSource === 'url',
          },
        },
        {
          name: 'imageMedia',
          label: 'Выберите файл',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.imageSource === 'upload',
          },
        },
      ],
    },
  ],
}
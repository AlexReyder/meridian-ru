import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '@/lib/routes'

export const ConceptSectionConceptBlock: Block = {
  slug: 'conceptSectionConcept',
  labels: {
    singular: 'Concept Section Concept',
    plural: 'Concept Section Concept',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionNumber',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'categoryLabel',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'title',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'intro',
      type: 'textarea',
      localized: true,
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
          localized: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'image',
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
      admin: {
        condition: (_, siblingData) => siblingData?.imageSource === 'upload',
      },
    },
    {
      name: 'challengeLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Задача',
    },
    {
      name: 'challenge',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'structuredLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Что структурировали',
    },
    {
      name: 'structured',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'deliveredLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Что подготовили',
    },
    {
      name: 'delivered',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'suitableForLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Подходит для:',
    },
    {
      name: 'suitableFor',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'captionLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Concept',
    },
    {
      name: 'captionStudioLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Atelier Meridian Studio',
    },
    {
      name: 'layout',
      type: 'select',
      required: true,
      defaultValue: 'imageLeft',
      options: [
        { label: 'Image Left', value: 'imageLeft' },
        { label: 'Image Right', value: 'imageRight' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          localized: true,
          required: true,
          defaultValue: 'Получить предложение',
        },
        {
          name: 'ctaPageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
  ],
}
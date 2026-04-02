import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'UX/UI Design Studio',
    },
    {
      name: 'title',
      type: 'textarea',
      admin: {
        description:
          'Fallback title. Used if titleRows are not filled. You can keep it for quick editing, but titleRows give a closer match to the original hero styling.',
      },
      defaultValue: 'Проектируем сайты, digital-системы и mobile apps до начала разработки',
    },
    {
      name: 'titleRows',
      type: 'array',
      labels: {
        singular: 'Title row',
        plural: 'Title rows',
      },
      admin: {
        initCollapsed: true,
        description:
          'Recommended for pixel-closer hero styling. Each row can contain several segments with different tone.',
      },
      fields: [
        {
          name: 'segments',
          type: 'array',
          required: true,
          minRows: 1,
          maxRows: 4,
          labels: {
            singular: 'Segment',
            plural: 'Segments',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'tone',
              type: 'select',
              defaultValue: 'default',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Emphasis', value: 'emphasis' },
                { label: 'Muted', value: 'muted' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Делаем дизайн сайтов, интерфейсов B2B-платформ и мобильных приложений с продуктовой логикой и понятной структурой.',
    },
    {
      name: 'supportingNote',
      type: 'textarea',
      admin: {
        description: 'Optional small supporting note under the main description.',
      },
    },
    {
      name: 'tags',
      type: 'array',
      labels: {
        singular: 'Tag',
        plural: 'Tags',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryButtonLabel',
          type: 'text',
          defaultValue: 'Получить предложение',
        },
        {
          name: 'primaryPageKey',
          type: 'select',
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'get-proposal',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryButtonLabel',
          type: 'text',
          defaultValue: 'Посмотреть цены',
        },
        {
          name: 'secondaryPageKey',
          type: 'select',
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'desktopBadgeLabel',
          type: 'text',
          defaultValue: 'Digital-система',
        },
        {
          name: 'mobileBadgeLabel',
          type: 'text',
          defaultValue: 'Mobile app',
        },
      ],
    },

    {
      type: 'collapsible',
      label: 'Desktop image',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'desktopImageSource',
              label: 'Источник desktop-изображения',
              type: 'radio',
              defaultValue: 'upload',
              options: [
                { label: 'URL', value: 'url' },
                { label: 'Загрузить файл', value: 'upload' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'desktopImageAlt',
              label: 'Alt desktop-изображения',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'desktopImageUrl',
          label: 'URL desktop-изображения',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.desktopImageSource === 'url',
          },
        },
        {
          name: 'desktopImage',
          label: 'Desktop image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.desktopImageSource === 'upload',
          },
        },
      ],
    },

    {
      type: 'collapsible',
      label: 'Mobile image',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'mobileImageSource',
              label: 'Источник mobile-изображения',
              type: 'radio',
              defaultValue: 'upload',
              options: [
                { label: 'URL', value: 'url' },
                { label: 'Загрузить файл', value: 'upload' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'mobileImageAlt',
              label: 'Alt mobile-изображения',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'mobileImageUrl',
          label: 'URL mobile-изображения',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.mobileImageSource === 'url',
          },
        },
        {
          name: 'mobileImage',
          label: 'Mobile image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.mobileImageSource === 'upload',
          },
        },
      ],
    },
  ],
}
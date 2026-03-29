import type { Block } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const VideoWalkthroughHomeBlock: Block = {
  slug: 'videoWalkthroughHome',
  labels: {
    singular: 'Видео walkthrough',
    plural: 'Блоки видео walkthrough',
  },
  fields: [
    {
      name: 'displayMode',
      label: 'Режим отображения',
      type: 'radio',
      required: true,
      defaultValue: 'full',
      options: [
        {
          label: 'Полный',
          value: 'full',
        },
        {
          label: 'Компактный',
          value: 'compact',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'eyebrow',
      label: 'Надзаголовок',
      type: 'text',
      required: true,
      defaultValue: 'Walkthrough',
    },
    {
      name: 'title',
      label: 'Заголовок',
      type: 'textarea',
      required: true,
      defaultValue: 'От задачи до готового прототипа',
    },
    {
      name: 'subheadline',
      label: 'Подзаголовок',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'videoLabel',
          label: 'Подпись видео',
          type: 'text',
          required: true,
          defaultValue: 'Видео',
        },
        {
          name: 'durationLabel',
          label: 'Подпись длительности',
          type: 'text',
          required: true,
          defaultValue: '4:32',
        },
      ],
    },
    {
      name: 'metaBadges',
      label: 'Мета-бейджи',
      type: 'array',
      labels: {
        singular: 'Бейдж',
        plural: 'Бейджи',
      },
      fields: [
        {
          name: 'label',
          label: 'Текст',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'timeline',
      label: 'Этапы timeline',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Этап',
        plural: 'Этапы',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'number',
              label: 'Номер',
              type: 'text',
              required: true,
              admin: {
                width: '25%',
              },
            },
            {
              name: 'label',
              label: 'Заголовок',
              type: 'text',
              required: true,
              admin: {
                width: '35%',
              },
            },
            {
              name: 'description',
              label: 'Описание',
              type: 'text',
              required: true,
              admin: {
                width: '40%',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'highlightsTitle',
      label: 'Заголовок списка',
      type: 'text',
      required: true,
      defaultValue: 'Что вы увидите в ролике',
    },
    {
      name: 'highlights',
      label: 'Пункты списка',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Пункт',
        plural: 'Пункты',
      },
      fields: [
        {
          name: 'label',
          label: 'Текст пункта',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctaTitle',
      label: 'Заголовок CTA',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaSubtext',
      label: 'Подтекст CTA',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'primaryButtonLabel',
          label: 'Текст основной кнопки',
          type: 'text',
          required: true,
        },
        {
          name: 'primaryPageKey',
          label: 'Страница основной кнопки',
          type: 'select',
          required: true,
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
          label: 'Текст второй кнопки',
          type: 'text',
          required: true,
        },
        {
          name: 'secondaryPageKey',
          label: 'Страница второй кнопки',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          defaultValue: 'pricing',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Видео',
      fields: [
        {
          name: 'videoSource',
          label: 'Источник видео',
          type: 'radio',
          required: true,
          defaultValue: 'url',
          options: [
            {
              label: 'URL',
              value: 'url',
            },
            {
              label: 'Загрузить файл',
              value: 'upload',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'videoUrl',
          label: 'URL видео',
          type: 'text',
          admin: {
            description: 'Можно использовать прямую ссылку на mp4/webm.',
            condition: (_, siblingData) => siblingData?.videoSource === 'url',
          },
        },
        {
          name: 'videoFile',
          label: 'Видео из media',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.videoSource === 'upload',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Постер',
      fields: [
        {
          name: 'posterSource',
          label: 'Источник постера',
          type: 'radio',
          required: true,
          defaultValue: 'url',
          options: [
            {
              label: 'URL',
              value: 'url',
            },
            {
              label: 'Загрузить файл',
              value: 'upload',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'posterUrl',
          label: 'URL постера',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.posterSource === 'url',
          },
        },
        {
          name: 'posterMedia',
          label: 'Постер из media',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.posterSource === 'upload',
          },
        },
        {
          name: 'posterAlt',
          label: 'Alt постера',
          type: 'text',
        },
      ],
    },
  ],
}
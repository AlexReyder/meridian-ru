import type { Field, GlobalConfig } from 'payload'

import { PAGE_KEY_OPTIONS } from '@/lib/routes'
import { revalidateAllPages } from '@/lib/revalidate'

const linkFields = [
  {
    name: 'label',
    label: 'Название ссылки',
    type: 'text',
    required: true,
  },
  {
    name: 'pageKey',
    label: 'Страница',
    type: 'select',
    required: false,
    options: PAGE_KEY_OPTIONS,
  },
  {
    name: 'href',
    label: 'Внешняя ссылка',
    type: 'text',
    required: false,
  },
  {
    name: 'anchor',
    label: 'Якорь',
    type: 'text',
    required: false,
  },
]

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Подвал сайта',
   hooks: {
    afterChange: [
      async ({ req }) => {
        await revalidateAllPages(req.payload)
      },
    ],
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Глобальные настройки',
  },
  fields: [
    {
      name: 'variant',
      label: 'Вариант оформления',
      type: 'select',
      localized: true,
      required: true,
      defaultValue: 'dark',
      options: [
        { label: 'Тёмный / стиль RU', value: 'dark' },
        { label: 'Светлый / стиль EN-AR', value: 'light' },
      ],
    },
    {
      name: 'brandName',
      label: 'Название бренда',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'brandTagline',
      label: 'Подпись бренда',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'brandEmail',
      label: 'Email бренда',
      type: 'email',
      localized: true,
      required: false,
    },
    {
      name: 'columns',
      label: 'Колонки',
      type: 'array',
      localized: true,
      required: true,
      minRows: 1,
      labels: {
        singular: 'Колонка',
        plural: 'Колонки',
      },
      fields: [
        {
          name: 'type',
          label: 'Тип колонки',
          type: 'select',
          required: true,
          defaultValue: 'links',
          options: [
            { label: 'Ссылки', value: 'links' },
            { label: 'CTA-блок', value: 'cta' },
          ],
        },
        {
          name: 'title',
          label: 'Заголовок',
          type: 'text',
          required: true,
        },
        {
          name: 'links',
          label: 'Ссылки',
          type: 'array',
          required: false,
          labels: {
            singular: 'Ссылка',
            plural: 'Ссылки',
          },
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'links',
          },
          fields: linkFields as Field[],
        },
        {
          name: 'body',
          label: 'Текст блока',
          type: 'textarea',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'cta',
          },
        },
        {
          name: 'buttonLabel',
          label: 'Текст кнопки',
          type: 'text',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'cta',
          },
        },
        {
          name: 'buttonPageKey',
          label: 'Страница кнопки',
          type: 'select',
          required: false,
          options: PAGE_KEY_OPTIONS,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'cta',
          },
        },
        {
          name: 'buttonHref',
          label: 'Внешняя ссылка кнопки',
          type: 'text',
          required: false,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'cta',
          },
        },
      ],
    },
    {
      name: 'bottomTextTemplate',
      label: 'Нижний текстовый шаблон',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'bottomLinks',
      label: 'Нижние ссылки',
      type: 'array',
      localized: true,
      required: false,
      labels: {
        singular: 'Нижняя ссылка',
        plural: 'Нижние ссылки',
      },
      fields: linkFields as Field[],
    },
  ],
}
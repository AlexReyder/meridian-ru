import type { GlobalConfig } from 'payload'
import { PAGE_KEY_OPTIONS } from '@/lib/routes'
import { revalidateAllPages } from '@/lib/revalidate'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Шапка сайта',
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
      name: 'logo',
      label: 'Логотип',
      type: 'upload',
      relationTo: 'media',
      localized: true,
      required: false,
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
      name: 'navigation',
      label: 'Навигация',
      type: 'array',
      localized: true,
      required: true,
      minRows: 1,
      labels: {
        singular: 'Пункт навигации',
        plural: 'Пункты навигации',
      },
      fields: [
        {
          name: 'label',
          label: 'Название пункта',
          type: 'text',
          required: true,
        },
        {
          name: 'pageKey',
          label: 'Страница',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
        },
      ],
    },
    {
      name: 'proposalButtonLabel',
      label: 'Текст кнопки заявки',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'mobileLanguageLabel',
      label: 'Подпись переключателя языка в мобильном меню',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'menuAriaLabel',
      label: 'ARIA-подпись кнопки меню',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: 'Toggle menu',
    },
  ],
}
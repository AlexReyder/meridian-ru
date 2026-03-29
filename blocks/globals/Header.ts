import type { GlobalConfig } from 'payload'

import { PAGE_KEY_OPTIONS } from '../../lib/routes'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brandTitle',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: {
        ru: 'Atelier Meridian',
        en: 'Atelier Meridian',
        ar: 'Atelier Meridian',
      },
    },
    {
      name: 'brandSubtitle',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: {
        ru: 'Product Architecture & Interface Studio',
        en: 'Product Architecture & Interface Studio',
        ar: 'استوديو هندسة المنتجات والواجهات',
      },
    },

    {
      name: 'navItems',
      type: 'array',
      required: true,
      minRows: 1,
      defaultValue: [
        {
          label: {
            ru: 'Решения',
            en: 'Solutions',
            ar: 'الحلول',
          },
          pageKey: 'solutions',
        },
        {
          label: {
            ru: 'Для стартапов',
            en: 'For Startups',
            ar: 'للشركات الناشئة',
          },
          pageKey: 'for-startups',
        },
        {
          label: {
            ru: 'Для партнёров',
            en: 'For Partners',
            ar: 'للشركاء',
          },
          pageKey: 'for-partners',
        },
        {
          label: {
            ru: 'Цены',
            en: 'Pricing',
            ar: 'الأسعار',
          },
          pageKey: 'pricing',
        },
        {
          label: {
            ru: 'Как мы работаем',
            en: 'How We Work',
            ar: 'كيف نعمل',
          },
          pageKey: 'method',
        },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'pageKey',
          type: 'select',
          required: true,
          options: PAGE_KEY_OPTIONS,
          dbName: 'hdr_nav_pk',
        },
      ],
    },

    {
      name: 'ctaLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: {
        ru: 'Получить предложение',
        en: 'Get Proposal',
        ar: 'اطلب عرضاً',
      },
    },
    {
      name: 'ctaPageKey',
      type: 'select',
      required: true,
      options: PAGE_KEY_OPTIONS,
      dbName: 'hdr_cta_pk',
      defaultValue: 'get-proposal',
    },

    {
      name: 'languageLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: {
        ru: 'Язык',
        en: 'Language',
        ar: 'اللغة',
      },
    },
    {
      name: 'comingSoonLabel',
      type: 'text',
      localized: true,
      required: true,
      defaultValue: {
        ru: 'Скоро',
        en: 'Soon',
        ar: 'قريباً',
      },
    },
  ],
}
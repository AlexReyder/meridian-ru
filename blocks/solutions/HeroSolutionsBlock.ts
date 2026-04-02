import type { Block } from 'payload'
import { PAGE_KEY_OPTIONS } from '../../lib/routes'

type ImageSource = 'url' | 'upload'

type ImageSourceSiblingData = {
  imageSource?: ImageSource | null
}

export const HeroSolutionsBlock: Block = {
  slug: 'heroSolutions',
  labels: {
    singular: 'Главный экран страницы solutions',
    plural: 'Блоки главного экрана страницы solutions',
  },
  fields: [
    {
      name: 'eyebrow',
      label: 'Надзаголовок',
      type: 'text',
      required: true,
      defaultValue: 'UX/UI Design Solutions',
    },
    {
      name: 'title',
      label: 'Заголовок',
      type: 'textarea',
      required: true,
      defaultValue: 'Решения для сайтов, digital-систем и мобильных приложений',
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      required: true,
    },
    {
      name: 'note',
      label: 'Заметка',
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      label: 'Теги',
      type: 'array',
      required: true,
      minRows: 3,
      labels: {
        singular: 'Тег',
        plural: 'Теги',
      },
      fields: [
        {
          name: 'label',
          label: 'Название тега',
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
          label: 'Текст основной кнопки',
          type: 'text',
          required: true,
          defaultValue: 'Получить предложение',
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
          defaultValue: 'Посмотреть цены',
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
      admin: { width: '50%' }
    },
    {
      name: 'imageAlt',
      label: 'Alt изображения',
      type: 'text',
      required: true,
      admin: { width: '50%' }
    },
  ],
},
{
  name: 'imageUrl',
  label: 'URL изображения',
  type: 'text',
  required: true, // Будет работать только если условие ниже истинно
  admin: {
    condition: (_, siblingData) => siblingData?.imageSource === 'url',
  },
},
{
  name: 'imageMedia',
  label: 'Выберите файл',
  type: 'upload',
  relationTo: 'media',
  required: true, // Будет работать только если выбрано 'upload'
  admin: {
    condition: (_, siblingData) => siblingData?.imageSource === 'upload',
  },
},
  ],
}
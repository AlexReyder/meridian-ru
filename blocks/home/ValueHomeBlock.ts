import type { Block } from 'payload'

export const ValueHomeBlock: Block = {
  slug: 'valueHome',
  labels: {
    singular: 'Value Home',
    plural: 'Value Home blocks',
  },
  fields: [
    {
      name: 'eyebrow',
      label: "Подзаголовок",
      type: 'text',
      required: true,
      defaultValue: 'Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями.',
    },
    {
      name: 'title',
      label: "Заголовок",
      type: 'textarea',
      required: true,
      defaultValue: 'Для проектов, которые нужно не просто нарисовать, а объяснить, согласовать и запустить',
    },
    {
      name: 'description',
      label: "Описание",
      type: 'textarea',
      admin: {
        description: 'Optional supporting paragraph under the title. Used in Arabic version in the original design.',
      },
    },
    {
      name: 'items',
      label: "Карточки",
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 3,
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'variant',
          label: "Вариант",
          type: 'select',
          required: true,
          defaultValue: 'icon',
          options: [
            { label: 'С иконкой', value: 'icon' },
            { label: 'С цифрами', value: 'step' },
          ],
        },
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'trendingUp',
          options: [
            { label: 'Trending Up', value: 'trendingUp' },
            { label: 'Trophy', value: 'trophy' },
            { label: 'Code', value: 'code' },
          ],
          admin: {
            condition: (_, siblingData) => siblingData?.variant !== 'step',
          },
        },
        {
          name: 'kicker',
          type: 'text',
          admin: {
            description: 'Small top label. For RU this is EN word (Raise/Win/Build). Optional for step cards.',
          },
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
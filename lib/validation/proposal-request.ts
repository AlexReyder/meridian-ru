import { z } from 'zod'

export const MAX_PROPOSAL_FILE_SIZE = 50 * 1024 * 1024
export const MAX_PROPOSAL_FILES = 5

export const ALLOWED_PROPOSAL_FILE_TYPES = [
  'application/pdf',
  'application/zip',
  'application/x-zip-compressed',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/x-cfb',
  'text/plain',
  'image/jpeg',
  'image/png',
  'image/webp',
] as const

const ALLOWED_PROPOSAL_EXTENSIONS = [
  '.pdf',
  '.zip',
  '.doc',
  '.docx',
  '.txt',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
] as const

function isFile(value: unknown): value is File {
  return typeof globalThis.File !== 'undefined' && value instanceof globalThis.File
}

function hasAllowedExtension(filename: string) {
  const lower = filename.toLowerCase()
  return ALLOWED_PROPOSAL_EXTENSIONS.some((ext) => lower.endsWith(ext))
}

export function validateProposalFile(file: File) {
  if (file.size > MAX_PROPOSAL_FILE_SIZE) {
    return 'Файл слишком большой'
  }

  const isAllowedMime = ALLOWED_PROPOSAL_FILE_TYPES.includes(
    file.type as (typeof ALLOWED_PROPOSAL_FILE_TYPES)[number],
  )

  const isAllowedByExtension = hasAllowedExtension(file.name)

  if (!isAllowedMime && !isAllowedByExtension) {
    return 'Неподдерживаемый тип файла'
  }

  return null
}

export const proposalFilesSchema = z
  .array(
    z.custom<File>((value) => isFile(value), {
      message: 'Некорректный файл',
    }),
  )
  .max(MAX_PROPOSAL_FILES, `Можно загрузить не более ${MAX_PROPOSAL_FILES} файлов`)
  .superRefine((files, ctx) => {
    files.forEach((file, index) => {
      const error = validateProposalFile(file)

      if (error) {
        ctx.addIssue({
          code: 'custom',
          message: `${file.name}: ${error}`,
          path: [index],
        })
      }
    })
  })

export const proposalWizardSchema = z.object({
  mode: z.literal('wizard'),
  locale: z.literal('ru'),

  projectType: z.string().min(1, 'Выберите тип проекта'),
  projectGoal: z.string().min(1, 'Выберите цель проекта'),
  teamType: z.string().min(1, 'Выберите формат команды'),

  companyName: z.string().optional(),
  website: z.string().trim().optional().or(z.literal('')),
  teamSize: z.string().optional(),
  rolesCount: z.string().optional(),
  screenCount: z.string().optional(),

  complexityFlags: z.array(z.string()).default([]),
  materials: z.array(z.string()).default([]),
  referenceLinks: z
    .array(
      z
        .string()
        .trim()
        .min(1, 'Поле с референсом не должно быть пустым')
        .max(500, 'Референс слишком длинный'),
    )
    .default([]),

  timeline: z.string().optional(),
  budget: z.string().optional(),
  briefNotes: z.string().optional(),

  name: z.string().min(1, 'Введите ваше имя'),
  email: z.string().min(1, 'Введите email').email('Введите корректный email'),
  company: z.string().optional(),
  role: z.string().optional(),
  region: z.string().optional(),
  phone: z.string().optional(),
  comment: z.string().optional(),

  noCallFirst: z.boolean().optional(),
  expertReview: z.boolean().optional(),
  nda: z.boolean().optional(),
})

export const proposalUploadSchema = z.object({
  mode: z.literal('upload'),
  locale: z.literal('ru'),

  name: z.string().min(1, 'Введите ваше имя'),
  email: z.string().min(1, 'Введите email').email('Введите корректный email'),
  description: z.string().min(1, 'Добавьте описание'),
  links: z.array(z.string().url('Каждая ссылка должна быть корректным URL')).default([]),
})

export function getFirstZodError(error: z.ZodError) {
  const flattened = error.flatten()

  const fieldError = Object.values(flattened.fieldErrors).find(
    (messages: unknown) => Array.isArray(messages) && messages.length > 0,
  ) as string[] | undefined

  if (fieldError?.[0]) return fieldError[0]
  if (flattened.formErrors[0]) return flattened.formErrors[0]

  return 'Ошибка валидации'
}
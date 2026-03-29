import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

import {
  getFirstZodError,
  proposalFilesSchema,
  proposalUploadSchema,
  proposalWizardSchema,
} from '@/lib/validation/proposal-request'

function getString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value : ''
}

function getBoolean(formData: FormData, key: string) {
  return getString(formData, key) === 'true'
}

function getJsonStringArray(formData: FormData, key: string): string[] {
  const value = formData.get(key)

  if (typeof value !== 'string' || !value.trim()) return []

  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : []
  } catch {
    return []
  }
}

function getFiles(formData: FormData, key: string): File[] {
  return formData
    .getAll(key)
    .filter(
      (item): item is File =>
        typeof File !== 'undefined' && item instanceof File,
    )
    .filter((file) => file.size > 0)
}

type PayloadUploadFile = {
  data: Buffer
  mimetype: string
  name: string
  size: number
}

type EmailAttachment = {
  filename: string
  content: Buffer
  contentType: string
}

async function toPayloadUploadFile(file: File): Promise<PayloadUploadFile> {
  const arrayBuffer = await file.arrayBuffer()

  return {
    data: Buffer.from(arrayBuffer),
    mimetype: file.type || 'application/octet-stream',
    name: file.name,
    size: file.size,
  }
}

function buildWizardEmailText(
  requestId: string | number,
  data: Record<string, unknown>,
) {
  return [
    'Новая заявка на предложение',
    `ID заявки: ${requestId}`,
    '',
    'Режим: wizard',
    `Локаль: ${String(data.locale ?? '')}`,
    '',
    `Имя: ${String(data.name ?? '')}`,
    `Email: ${String(data.email ?? '')}`,
    `Компания: ${String(data.company ?? '')}`,
    `Роль: ${String(data.role ?? '')}`,
    `Регион: ${String(data.region ?? '')}`,
    `Телефон: ${String(data.phone ?? '')}`,
    '',
    `Тип проекта: ${String(data.projectType ?? '')}`,
    `Цель проекта: ${String(data.projectGoal ?? '')}`,
    `Формат команды: ${String(data.teamType ?? '')}`,
    `Название компании: ${String(data.companyName ?? '')}`,
    `Сайт: ${String(data.website ?? '')}`,
    `Размер команды: ${String(data.teamSize ?? '')}`,
    `Количество ролей: ${String(data.rolesCount ?? '')}`,
    `Количество экранов: ${String(data.screenCount ?? '')}`,
    `Сроки: ${String(data.timeline ?? '')}`,
    `Бюджет: ${String(data.budget ?? '')}`,
    '',
    `Флаги сложности: ${
      Array.isArray(data.complexityFlags) ? data.complexityFlags.join(', ') : ''
    }`,
    `Материалы: ${
      Array.isArray(data.materials) ? data.materials.join(', ') : ''
    }`,
    '',
    `Комментарий к brief: ${String(data.briefNotes ?? '')}`,
    `Дополнительный комментарий: ${String(data.comment ?? '')}`,
    '',
    `Без звонка сначала: ${String(Boolean(data.noCallFirst))}`,
    `Экспертный разбор: ${String(Boolean(data.expertReview))}`,
    `NDA: ${String(Boolean(data.nda))}`,
  ].join('\n')
}

function buildUploadEmailText(
  requestId: string | number,
  data: {
    locale: string
    name: string
    email: string
    description: string
    links: string[]
    files: Array<{ filename?: string | null; url?: string | null }>
  },
) {
  return [
    'Новая загрузка материалов',
    `ID заявки: ${requestId}`,
    '',
    'Режим: upload',
    `Локаль: ${data.locale}`,
    '',
    `Имя: ${data.name}`,
    `Email: ${data.email}`,
    '',
    'Описание:',
    data.description,
    '',
    'Ссылки:',
    ...(data.links.length ? data.links : ['—']),
    '',
  ].join('\n')
}

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const formData = await req.formData()
    const mode = getString(formData, 'mode')

    const files = getFiles(formData, 'files')
    const filesValidation = proposalFilesSchema.safeParse(files)

    if (!filesValidation.success) {
      return NextResponse.json(
        { ok: false, error: getFirstZodError(filesValidation.error) },
        { status: 400 },
      )
    }

    if (mode === 'wizard') {
      const parsed = proposalWizardSchema.safeParse({
        mode: 'wizard',
        locale: getString(formData, 'locale'),

        projectType: getString(formData, 'projectType'),
        projectGoal: getString(formData, 'projectGoal'),
        teamType: getString(formData, 'teamType'),

        companyName: getString(formData, 'companyName'),
        website: getString(formData, 'website'),
        teamSize: getString(formData, 'teamSize'),
        rolesCount: getString(formData, 'rolesCount'),
        screenCount: getString(formData, 'screenCount'),

        complexityFlags: getJsonStringArray(formData, 'complexityFlags'),
        materials: getJsonStringArray(formData, 'materials'),

        timeline: getString(formData, 'timeline'),
        budget: getString(formData, 'budget'),
        briefNotes: getString(formData, 'briefNotes'),

        name: getString(formData, 'name'),
        email: getString(formData, 'email'),
        company: getString(formData, 'company'),
        role: getString(formData, 'role'),
        region: getString(formData, 'region'),
        phone: getString(formData, 'phone'),
        comment: getString(formData, 'comment'),

        noCallFirst: getBoolean(formData, 'noCallFirst'),
        expertReview: getBoolean(formData, 'expertReview'),
        nda: getBoolean(formData, 'nda'),
      })

      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, error: getFirstZodError(parsed.error) },
          { status: 400 },
        )
      }

      const requestDoc = await payload.create({
        collection: 'proposal-requests',
        data: {
          mode: 'wizard',
          locale: parsed.data.locale,
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company,
          role: parsed.data.role,
          region: parsed.data.region,
          phone: parsed.data.phone,
          payload: parsed.data,
          links: [],
          files: [],
        },
      })

      const uploadedFileDocs = []
      const emailAttachments: EmailAttachment[] = []

      for (const file of files) {
        const payloadFile = await toPayloadUploadFile(file)

        emailAttachments.push({
          filename: payloadFile.name,
          content: payloadFile.data,
          contentType: payloadFile.mimetype,
        })

        const fileDoc = await payload.create({
          collection: 'proposal-files',
          data: {
            alt: file.name,
            sourceType: 'proposal-upload',
            request: requestDoc.id,
          },
          file: payloadFile,
        })

        uploadedFileDocs.push(fileDoc)
      }

      if (uploadedFileDocs.length) {
        await payload.update({
          collection: 'proposal-requests',
          id: requestDoc.id,
          data: {
            files: uploadedFileDocs.map((fileDoc) => fileDoc.id),
          },
        })
      }

      try {
        await payload.sendEmail({
          to:
            process.env.PROPOSAL_NOTIFICATION_EMAIL ||
            process.env.SMTP_USER ||
            'hello@atelier-meridian.com',
          subject: `[Proposal][Wizard][${parsed.data.locale.toUpperCase()}] ${parsed.data.name}`,
          text: buildWizardEmailText(requestDoc.id, parsed.data),
          attachments: emailAttachments,
        })
      } catch (emailError) {
        console.error('Proposal wizard email error:', emailError)
      }

      return NextResponse.json({
        ok: true,
        requestId: requestDoc.id,
      })
    }

    if (mode === 'upload') {
      const links = getJsonStringArray(formData, 'links')

      const parsed = proposalUploadSchema.safeParse({
        mode: 'upload',
        locale: getString(formData, 'locale'),
        name: getString(formData, 'name'),
        email: getString(formData, 'email'),
        description: getString(formData, 'description'),
        links,
      })

      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, error: getFirstZodError(parsed.error) },
          { status: 400 },
        )
      }

      const requestDoc = await payload.create({
        collection: 'proposal-requests',
        data: {
          mode: 'upload',
          locale: parsed.data.locale,
          name: parsed.data.name,
          email: parsed.data.email,
          payload: {
            description: parsed.data.description,
          },
          links: parsed.data.links.map((url) => ({ url })),
          files: [],
        },
      })

      const uploadedFileDocs = []
      const emailAttachments: EmailAttachment[] = []

      for (const file of files) {
        const payloadFile = await toPayloadUploadFile(file)

        emailAttachments.push({
          filename: payloadFile.name,
          content: payloadFile.data,
          contentType: payloadFile.mimetype,
        })

        const fileDoc = await payload.create({
          collection: 'proposal-files',
          data: {
            alt: file.name,
            sourceType: 'proposal-upload',
            request: requestDoc.id,
          },
          file: payloadFile,
        })

        uploadedFileDocs.push(fileDoc)
      }

      if (uploadedFileDocs.length) {
        await payload.update({
          collection: 'proposal-requests',
          id: requestDoc.id,
          data: {
            files: uploadedFileDocs.map((fileDoc) => fileDoc.id),
          },
        })
      }

      try {
        await payload.sendEmail({
          to:
            process.env.PROPOSAL_NOTIFICATION_EMAIL ||
            process.env.SMTP_USER ||
            'hello@atelier-meridian.com',
          subject: `[Proposal][Upload][${parsed.data.locale.toUpperCase()}] ${parsed.data.name}`,
          text: buildUploadEmailText(requestDoc.id, {
            locale: parsed.data.locale,
            name: parsed.data.name,
            email: parsed.data.email,
            description: parsed.data.description,
            links: parsed.data.links,
            files: uploadedFileDocs.map((fileDoc) => ({
              filename: fileDoc.filename,
              url: fileDoc.url,
            })),
          }),
          attachments: emailAttachments,
        })
      } catch (emailError) {
        console.error('Proposal upload email error:', emailError)
      }

      return NextResponse.json({
        ok: true,
        requestId: requestDoc.id,
      })
    }

    return NextResponse.json(
      { ok: false, error: 'Неподдерживаемый режим отправки' },
      { status: 400 },
    )
  } catch (error) {
    console.error('Proposal request route error:', error)

    return NextResponse.json(
      { ok: false, error: 'Внутренняя ошибка.' },
      { status: 500 },
    )
  }
}
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

type RevalidateBody = {
  paths?: string[]
}

export async function POST(req: Request) {
  const secret = req.headers.get('x-revalidate-secret')

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: 'REVALIDATE_SECRET is not configured' },
      { status: 500 },
    )
  }

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: 'Unauthorized' },
      { status: 401 },
    )
  }

  let body: RevalidateBody | null = null

  try {
    body = (await req.json()) as RevalidateBody
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body' },
      { status: 400 },
    )
  }

  const paths = Array.from(
    new Set(
      (body.paths ?? []).filter(
        (value): value is string => typeof value === 'string' && value.length > 0,
      ),
    ),
  )

  for (const path of paths) {
    revalidatePath(path)
  }

  return NextResponse.json({
    ok: true,
    revalidated: true,
    paths,
  })
}
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The requested Atelier Meridian page is not found.
      </p>
      <Link href="/" className="inline-flex h-10 items-center justify-center rounded-[3px] bg-foreground px-5 text-[10px] uppercase tracking-[0.16em] text-background">
        Go home
      </Link>
    </main>
  )
}

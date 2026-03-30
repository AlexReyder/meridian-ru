# Atelier Meridian — Next.js + Payload scaffold

This is the initial scaffold for the Payload CMS rewrite.

## Included

- Next.js 16.2.0
- Payload 3.80.0
- PostgreSQL adapter
- Locales: `ru`, `en`, `ar`
- Frontend catch-all routing mapped to current site URLs
- `Header` global
- `Footer` global
- `Pages` collection
- First block: `Hero`
- RTL-ready frontend layout via locale-aware `dir` and Tailwind `rtl:` variant

## Route map

- `/` → `home` (RU)
- `/en` → `home` (EN)
- `/ar` → `home` (AR)
- `/solutions`, `/en/solutions`, `/ar/solutions`
- `/pricing`, `/en/pricing`, `/ar/pricing`
- `/get-proposal`, `/en/get-proposal`, `/ar/get-proposal`
- `/concepts`, `/en/concepts`, `/ar/concepts`
- `/for-startups`, `/en/for-startups`, `/ar/for-startups`
- `/for-agencies`, `/en/for-partners`, `/ar/for-partners`
- `/method`, `/en/how-we-work`, `/ar/how-we-work`

## Local setup

1. Copy env file:

   ```bash
   cp .env.example .env
   ```

2. Start PostgreSQL:

   ```bash
   docker compose up -d
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the app:

   ```bash
   pnpm dev
   ```

5. Open admin:

   ```text
   http://localhost:3000/admin
   ```

6. Create first user.

## First content to enter in admin

1. `Header` global
2. `Footer` global
3. Create `Pages` document with `pageKey = home`
4. Fill `layout` for RU / EN / AR using locale switcher in admin
5. Add `Hero` block for each locale
6. Upload hero images in `Media`

## Suggested next implementation steps

1. Move current Home Hero markup into the new `HeroBlockComponent` field-by-field.
2. Add the next unique Home block as a second Payload block.
3. Finish Home page completely.
4. Repeat per page using controlled blocks, not a free-form builder.

Изменить шапку - добавить лого
Сделать возможность меня шапку и подвал в Payload
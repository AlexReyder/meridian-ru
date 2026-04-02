import { type MigrateDownArgs, type MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$
    BEGIN
      CREATE TYPE "public"."enum_pages_blocks_hero_solutions_image_source" AS ENUM ('url', 'upload');
    EXCEPTION
      WHEN duplicate_object THEN NULL;
    END
    $$;
  `)

  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    ADD COLUMN IF NOT EXISTS "image_source" "public"."enum_pages_blocks_hero_solutions_image_source";
  `)

  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    ADD COLUMN IF NOT EXISTS "image_file_id" integer;
  `)

  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    ALTER COLUMN "image_source" SET DEFAULT 'url';
  `)

  await db.execute(sql`
    UPDATE "pages_blocks_hero_solutions"
    SET "image_source" = 'url'
    WHERE "image_source" IS NULL;
  `)

  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    ALTER COLUMN "image_source" SET NOT NULL;
  `)

  await db.execute(sql`
    DO $$
    BEGIN
      ALTER TABLE "pages_blocks_hero_solutions"
      ADD CONSTRAINT "pages_blocks_hero_solutions_image_file_id_media_id_fk"
      FOREIGN KEY ("image_file_id")
      REFERENCES "public"."media"("id")
      ON DELETE SET NULL
      ON UPDATE NO ACTION;
    EXCEPTION
      WHEN duplicate_object THEN NULL;
    END
    $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    DROP CONSTRAINT IF EXISTS "pages_blocks_hero_solutions_image_file_id_media_id_fk";
  `)

  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    DROP COLUMN IF EXISTS "image_file_id";
  `)

  await db.execute(sql`
    ALTER TABLE "pages_blocks_hero_solutions"
    DROP COLUMN IF EXISTS "image_source";
  `)

  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum_pages_blocks_hero_solutions_image_source";
  `)
}
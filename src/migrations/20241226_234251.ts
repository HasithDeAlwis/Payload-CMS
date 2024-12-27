import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "blog_content" ADD COLUMN "paragraph" jsonb NOT NULL;
  ALTER TABLE "blog" ADD COLUMN "slug" varchar NOT NULL;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "blog_content" DROP COLUMN IF EXISTS "paragraph";
  ALTER TABLE "blog" DROP COLUMN IF EXISTS "slug";`)
}

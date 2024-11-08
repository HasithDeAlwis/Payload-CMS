import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "blog" RENAME COLUMN "short_description" TO "byline";
  ALTER TABLE "blog" ADD COLUMN "technical_blog" boolean;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "blog" ADD COLUMN "short_description" varchar NOT NULL;
  ALTER TABLE "blog" DROP COLUMN IF EXISTS "byline";
  ALTER TABLE "blog" DROP COLUMN IF EXISTS "technical_blog";`)
}

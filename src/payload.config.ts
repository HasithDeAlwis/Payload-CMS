// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  lexicalEditor
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { AboutMeAsset, AboutMeDescription } from './collections/AboutMe'
import { CurrentlyLearningSkill, LearnedSkill } from './collections/Skills'
import { Blog, BlogContent } from './collections/Blog'
import { Tags } from './collections/Tags'
import { Projects } from './collections/Projects'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, AboutMeAsset, AboutMeDescription, LearnedSkill, CurrentlyLearningSkill, Projects, BlogContent, Blog, Tags],
  editor: lexicalEditor(
    {
    }
  ),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  cors: process.env.CORS_WHITELIST_ORIGINS ? process.env.CORS_WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS ? process.env.CSRF_WHITELIST_ORIGINS.split(',') : [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: process.env.NODE_ENV == 'production' ? 'media' : 'media-dev',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        forcePathStyle: true, // Needed with Supabase
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})

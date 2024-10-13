import type { CollectionConfig } from 'payload'
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,

  },
  upload: {
    staticDir: process.env.NODE_ENV == "production" ? 'media' : 'media-dev', // Directory to store uploads
    mimeTypes: ['image/svg+xml', 'image/webp', 'video/mp4'], // Restrict file types to SVG and WEBP
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}

import type { CollectionConfig } from 'payload'

export const AboutMeAsset: CollectionConfig = {
  slug: 'about-me-asset',
  access: {
      read: () => true,
      create: ({ req: { user } }) => {
        return Boolean(user)
      },
      delete: ({ req: { user } }) => {
        return Boolean(user)
      },
      update: ({ req: { user } }) => {
        return Boolean(user)
      },
  },
  fields: [
    {
      name: 'aboutMeOrder',
      type: 'number',
      required: true,
      admin: {
        description: 'What order should this svg appear in?',
      },
    },
    {
      name: 'aboutMeSVG',
      type: 'relationship',
      relationTo: 'media', // References the 'media' collection
      label: 'Media File',
      admin: {
        description: 'Select a svg that represents an trait about you',
      },
      required: true,
    },
  ],
}

export const AboutMeDescription: CollectionConfig = {
  slug: 'about-me-description',
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
        return Boolean(user)
      },
      delete: ({ req: { user } }) => {
        return Boolean(user)
      },
      update: ({ req: { user } }) => {
        return Boolean(user)
      },
  },
  fields: [
    {
      name: 'aboutMeDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'aboutMeSubheader',
      type: 'text',
      required: true,
    },
  ],
}

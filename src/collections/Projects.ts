import { CollectionConfig } from "payload"

export const Projects: CollectionConfig = {
  slug: 'projects',
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
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'title', // Use the title as the identifier in the admin panel
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'sourceLink',
      type: 'text',
      required: true,
    },
    {
      name: 'demoLink',
      type: 'text',
      required: false,
    },
    {
      name: 'readMoreLink',
      type: 'text',
      required: false,
    },
    {
        name: 'projectImage',
        type: 'relationship',
        relationTo: 'media', // References the 'media' collection
        label: 'Media File',
        admin: {
            description: 'Select a svg that represents an trait about you',
        },
    },
    {
      name: 'videoLink',
      type: 'text',
      required: false,
    },
  ],
};

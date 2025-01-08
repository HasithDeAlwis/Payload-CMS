import type { CollectionConfig } from 'payload'
export const Tags: CollectionConfig = {
    slug: 'tags',
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
    admin: {
        useAsTitle: 'tagText',
    },
    fields: [
        {
        name: 'tagValue',
        type: 'text',
        required: true,
        label: 'Tag Value',
        admin: {
            description: "How we store it internally"
        },
        },
        {
            name: 'tagText',
            type: 'text',
            required: true,
            label: 'Tag Text',
            admin: {
                description: "What the user sees"
            }
        },
        {
            name: 'isTechnical',
            type: 'checkbox',
            required: false,
            label: 'Technical Tag?',
            admin: {
                description: "Is this tag technical? Will be used to filter tags"
            }
        }
    ],
}

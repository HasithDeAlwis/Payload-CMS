import type { CollectionConfig } from 'payload'
export const Tags: CollectionConfig = {
    slug: 'tags',
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update: () => true,
    },
    fields: [
        {
        name: 'tag-value',
        type: 'text',
        required: true,
        label: 'Tag Value',
        admin: {
            description: "How we store it internally"
        },
        },
        {
            name: 'tag-text',
            type: 'text',
            required: true,
            label: 'Tag Text',
            admin: {
                description: "What the user sees"
            }
        },
        {
            name: 'is-technical',
            type: 'checkbox',
            required: false,
            label: 'Technical Tag?',
            admin: {
                description: "Is this tag technical? Will be used to filter tags"
            }
        }
    ],
}

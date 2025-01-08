import type { CollectionConfig, CollectionSlug } from 'payload'
export const Blog: CollectionConfig = {
  slug: 'blog',
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
    singular: 'Blog',
    plural: 'Blogs',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'byline',
      type: 'textarea',
      required: true
    },
    {
      name: 'date',
      type: 'date',
      required: true
    },
    {
      name: 'thumbnail',
      type: 'relationship',
      relationTo: 'media', // References the 'media' collection
      label: 'Thumbail',
      admin: {
        description: 'Blog thumbnail',
      },
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true
    },
    {
      name: 'blogContent',
      type: 'relationship',
      // ts-disable-next-line 
      relationTo: 'blog-content' as CollectionSlug,
      label: 'Blog Content',
      hasMany: true,
      admin: {
        description: 'Add content to the blog'
      },
      required: true
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags' as CollectionSlug,
      label: 'Tags',
      hasMany: true,
      admin: {
        description: 'Add tags to the blog'
      },
      required: true
    },
    {
      name: 'technicalBlog',
      type: 'checkbox',
      required: false,
      label: 'Technical Blog?',
      admin: {
        description: 'If the blog is technical, check this box'
      }
    }
  ]
}

export const BlogContent: CollectionConfig = {
  slug: 'blog-content',
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
    useAsTitle: 'header',
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: false,
      label: 'Paragraph Header'
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Enter the content of the blog here'
      }
    },
    {
      name: 'paragraph',
      type: 'richText',
      required: true
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media', // References the 'media' collection
      label: 'Paragraph Image',
      admin: {
        description: 'Blog thumbnail',
      },
      required: false,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Image Caption',
      admin: {
        description: 'Add a caption to the image'
      },
      required: false

    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Order',
      admin: {
        description: 'What order should this content appear in the blog?'
      }
    }

  ]
}

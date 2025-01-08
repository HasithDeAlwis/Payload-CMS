import { CollectionConfig } from "payload"

export const LearnedSkill: CollectionConfig = {
    slug: 'learned-skill-logos',
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
        name: 'skillOrder',
        type: 'number',
        required: true,
        admin: {
          description: 'What order should this svg appear in?',
        },
      },
      {
        name: 'skillLogo',
        type: 'relationship',
        relationTo: 'media', // References the 'media' collection
        label: 'Media File',
        admin: {
          description: 'Select a svg that represents an trait about you',
        },
        required: true,
      },
      {
        name: 'skillHref',
        type: 'text',
        required: true,
        admin: {
            description: 'Enter a link to the skill'
        }
      }
    ],
  }

  export const CurrentlyLearningSkill: CollectionConfig = {
    slug: 'currently-learning-skill',
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
        name: 'currentSkillName',
        type: 'text',
        required: true,
        admin: {
          description: 'What order should this svg appear in?',
        },
      },
      {
        name: 'currentSkillLogo',
        type: 'relationship',
        relationTo: 'media', // References the 'media' collection
        label: 'Media File',
        admin: {
          description: 'Select a svg that represents an trait about you',
        },
        required: true,
      },
      {
        name: 'currentSkillHref',
        type: 'text',
        required: true,
        admin: {
            description: 'Enter a link to the skill'
        }
      },
      {
        name: 'currentSkillDescription',
        type: 'textarea',
        required: true,
        admin: {
            description: 'Enter a description of the skill'
        }
      }
    ],
  }

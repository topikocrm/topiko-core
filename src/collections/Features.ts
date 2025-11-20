import type { CollectionConfig } from 'payload'

export const Features: CollectionConfig = {
  slug: 'features',
  admin: {
    description: 'Manage feature cards and sections',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order'],
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
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Custom icon for this feature (optional)',
      },
    },
    {
      name: 'iconEmoji',
      type: 'text',
      admin: {
        description: 'Emoji icon if no custom icon is uploaded',
      },
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Purple', value: 'from-purple-500 to-purple-600' },
        { label: 'Green', value: 'from-green-500 to-green-600' },
        { label: 'Blue', value: 'from-blue-500 to-blue-600' },
        { label: 'Orange', value: 'from-orange-500 to-orange-600' },
        { label: 'Red', value: 'from-red-500 to-red-600' },
        { label: 'Yellow', value: 'from-yellow-500 to-yellow-600' },
        { label: 'Teal', value: 'from-teal-500 to-teal-600' },
        { label: 'Cyan', value: 'from-cyan-500 to-cyan-600' },
      ],
      defaultValue: 'from-teal-500 to-teal-600',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Main Features', value: 'main' },
        { label: 'Detailed Features', value: 'detailed' },
      ],
      defaultValue: 'main',
      admin: {
        description: 'Which feature section this belongs to',
      },
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.category === 'detailed',
        description: 'List of benefits for detailed features',
      },
    },
    {
      name: 'learnMoreUrl',
      type: 'text',
      admin: {
        description: 'URL for the "Learn More" link',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order of appearance (lower numbers appear first)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  defaultSort: 'order',
}
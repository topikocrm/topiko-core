import type { CollectionConfig } from 'payload'

export const CompanyLogos: CollectionConfig = {
  slug: 'companyLogos',
  admin: {
    description: 'Manage client company logos and social proof',
    useAsTitle: 'name',
    defaultColumns: ['name', 'isActive', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Company name',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Company logo image (SVG or PNG preferred)',
      },
    },
    {
      name: 'logoText',
      type: 'text',
      admin: {
        description: 'Text to show if no logo image is uploaded',
      },
    },
    {
      name: 'website',
      type: 'text',
      admin: {
        description: 'Company website URL (optional)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order of appearance',
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
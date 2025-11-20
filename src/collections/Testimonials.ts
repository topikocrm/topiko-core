import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    description: 'Manage customer testimonials and success stories',
    useAsTitle: 'customerName',
    defaultColumns: ['customerName', 'company', 'featured', 'isActive'],
  },
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the customer',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      admin: {
        description: 'Job title of the customer',
      },
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      admin: {
        description: 'Company name',
      },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Customer photo/avatar',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The testimonial quote',
      },
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        description: 'Star rating (1-5)',
      },
    },
    {
      name: 'metrics',
      type: 'group',
      fields: [
        {
          name: 'metric1',
          type: 'group',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'value', type: 'text' },
          ],
        },
        {
          name: 'metric2',
          type: 'group',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'value', type: 'text' },
          ],
        },
        {
          name: 'metric3',
          type: 'group',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'value', type: 'text' },
          ],
        },
      ],
      admin: {
        description: 'Success metrics to display with this testimonial',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as featured testimonial (appears larger)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order of appearance in carousel',
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
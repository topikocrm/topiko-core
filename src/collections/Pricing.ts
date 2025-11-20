import type { CollectionConfig } from 'payload'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  admin: {
    description: 'Manage pricing plans and features',
    useAsTitle: 'name',
    defaultColumns: ['name', 'monthlyPrice', 'popular', 'isActive'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Plan name (e.g., Starter, Professional, Enterprise)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description of the plan',
      },
    },
    {
      name: 'monthlyPrice',
      type: 'number',
      required: true,
      admin: {
        description: 'Monthly price in dollars',
      },
    },
    {
      name: 'yearlyPrice',
      type: 'number',
      required: true,
      admin: {
        description: 'Yearly price in dollars (usually discounted)',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Emoji or icon identifier',
      },
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Teal', value: 'from-teal-500 to-teal-600' },
        { label: 'Blue', value: 'from-blue-500 to-blue-600' },
        { label: 'Purple', value: 'from-purple-500 to-purple-600' },
        { label: 'Green', value: 'from-green-500 to-green-600' },
        { label: 'Orange', value: 'from-orange-500 to-orange-600' },
      ],
      defaultValue: 'from-teal-500 to-teal-600',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'included',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
      admin: {
        description: 'List of features included/excluded in this plan',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Start Free Trial',
      admin: {
        description: 'Call-to-action button text',
      },
    },
    {
      name: 'ctaUrl',
      type: 'text',
      admin: {
        description: 'Call-to-action button URL',
      },
    },
    {
      name: 'popular',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark as most popular plan',
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
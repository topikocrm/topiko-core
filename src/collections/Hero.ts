import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    description: 'Manage the hero section content of the FinanceFlow theme',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Hero Section',
      admin: {
        description: 'Internal title for this hero section',
      },
    },
    {
      name: 'badge',
      type: 'text',
      required: true,
      defaultValue: '🚀 New AI Features Available',
      admin: {
        description: 'Badge text above the main headline',
      },
    },
    {
      name: 'headline',
      type: 'textarea',
      required: true,
      defaultValue: 'The AI Revenue Platform for Next Gen Finance teams',
      admin: {
        description: 'Main headline text',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      required: true,
      defaultValue: 'Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.',
      admin: {
        description: 'Supporting text below the headline',
      },
    },
    {
      name: 'primaryButton',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          defaultValue: 'Start Free Trial',
        },
        {
          name: 'url',
          type: 'text',
          required: false,
          defaultValue: '/signup',
        },
      ],
    },
    {
      name: 'secondaryButton',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          defaultValue: 'Watch Demo',
        },
        {
          name: 'url',
          type: 'text',
          required: false,
          defaultValue: '#demo',
        },
      ],
    },
    {
      name: 'emailSignup',
      type: 'group',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Join 10,000+ finance professionals',
        },
        {
          name: 'placeholder',
          type: 'text',
          defaultValue: 'Enter your work email',
        },
        {
          name: 'buttonText',
          type: 'text',
          defaultValue: 'Get Started',
        },
        {
          name: 'disclaimer',
          type: 'text',
          defaultValue: 'No credit card required • 14-day free trial',
        },
      ],
    },
    {
      name: 'statistics',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { value: '$2.5B+', label: 'Revenue Tracked' },
        { value: '10K+', label: 'Finance Teams' },
        { value: '94%', label: 'Accuracy Rate' },
      ],
    },
    {
      name: 'dashboardImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Dashboard preview image shown in the hero section',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Enable/disable this hero section',
      },
    },
  ],
}
import type { CollectionConfig } from 'payload'

export const Navigation: CollectionConfig = {
  slug: 'navigation',
  admin: {
    description: 'Manage site navigation and footer content',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Main Navigation',
      admin: {
        description: 'Internal title for this navigation set',
      },
    },
    {
      name: 'header',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'FinanceFlow',
              admin: {
                description: 'Brand name/logo text',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo image (optional)',
              },
            },
          ],
        },
        {
          name: 'menuItems',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'hasDropdown',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'dropdownItems',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
                {
                  name: 'icon',
                  type: 'text',
                },
              ],
              admin: {
                condition: (_, siblingData) => siblingData.hasDropdown,
              },
            },
          ],
          defaultValue: [
            { label: 'Solutions', url: '#solutions', hasDropdown: true },
            { label: 'Features', url: '#features', hasDropdown: false },
            { label: 'Pricing', url: '#pricing', hasDropdown: false },
            { label: 'Resources', url: '#resources', hasDropdown: false },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Get Started',
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '/signup',
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        {
          name: 'companyDescription',
          type: 'textarea',
          defaultValue: 'The AI-powered revenue platform that helps finance teams make smarter decisions and drive predictable growth.',
        },
        {
          name: 'socialLinks',
          type: 'array',
          fields: [
            {
              name: 'platform',
              type: 'select',
              options: [
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'GitHub', value: 'github' },
                { label: 'Email', value: 'email' },
              ],
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'footerSections',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
          defaultValue: [
            {
              title: 'Product',
              links: [
                { label: 'Features', url: '/features' },
                { label: 'Integrations', url: '/integrations' },
                { label: 'Pricing', url: '/pricing' },
                { label: 'API', url: '/api' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', url: '/about' },
                { label: 'Blog', url: '/blog' },
                { label: 'Careers', url: '/careers' },
                { label: 'Contact', url: '/contact' },
              ],
            },
          ],
        },
        {
          name: 'newsletter',
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
              defaultValue: 'Stay ahead of finance trends',
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue: 'Get weekly insights, AI trends, and revenue optimization tips delivered to your inbox.',
            },
            {
              name: 'placeholder',
              type: 'text',
              defaultValue: 'Enter your email address',
            },
            {
              name: 'buttonText',
              type: 'text',
              defaultValue: 'Subscribe',
            },
            {
              name: 'disclaimer',
              type: 'text',
              defaultValue: 'Join 25,000+ subscribers. Unsubscribe anytime.',
            },
          ],
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
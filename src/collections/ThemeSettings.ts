import type { CollectionConfig } from 'payload'

export const ThemeSettings: CollectionConfig = {
  slug: 'themeSettings',
  admin: {
    description: 'Customize theme colors, fonts, and styling',
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'Default Theme',
      admin: {
        description: 'Theme configuration name',
      },
    },
    {
      name: 'colors',
      type: 'group',
      fields: [
        {
          name: 'primary',
          type: 'text',
          defaultValue: '#0d9488',
          admin: {
            description: 'Primary color (hex code)',
          },
        },
        {
          name: 'secondary',
          type: 'text',
          defaultValue: '#06b6d4',
          admin: {
            description: 'Secondary color (hex code)',
          },
        },
        {
          name: 'accent',
          type: 'text',
          defaultValue: '#3b82f6',
          admin: {
            description: 'Accent color (hex code)',
          },
        },
        {
          name: 'gradientFrom',
          type: 'select',
          options: [
            { label: 'Teal', value: 'from-teal-600' },
            { label: 'Blue', value: 'from-blue-600' },
            { label: 'Purple', value: 'from-purple-600' },
            { label: 'Green', value: 'from-green-600' },
            { label: 'Orange', value: 'from-orange-600' },
            { label: 'Pink', value: 'from-pink-600' },
          ],
          defaultValue: 'from-teal-600',
        },
        {
          name: 'gradientTo',
          type: 'select',
          options: [
            { label: 'Cyan', value: 'to-cyan-600' },
            { label: 'Blue', value: 'to-blue-600' },
            { label: 'Purple', value: 'to-purple-600' },
            { label: 'Green', value: 'to-green-600' },
            { label: 'Orange', value: 'to-orange-600' },
            { label: 'Pink', value: 'to-pink-600' },
          ],
          defaultValue: 'to-cyan-600',
        },
      ],
    },
    {
      name: 'typography',
      type: 'group',
      fields: [
        {
          name: 'headingFont',
          type: 'select',
          options: [
            { label: 'Inter', value: 'font-sans' },
            { label: 'Poppins', value: 'font-poppins' },
            { label: 'Roboto', value: 'font-roboto' },
            { label: 'Open Sans', value: 'font-opensans' },
          ],
          defaultValue: 'font-sans',
        },
        {
          name: 'bodyFont',
          type: 'select',
          options: [
            { label: 'Inter', value: 'font-sans' },
            { label: 'Poppins', value: 'font-poppins' },
            { label: 'Roboto', value: 'font-roboto' },
            { label: 'Open Sans', value: 'font-opensans' },
          ],
          defaultValue: 'font-sans',
        },
      ],
    },
    {
      name: 'styling',
      type: 'group',
      fields: [
        {
          name: 'borderRadius',
          type: 'select',
          options: [
            { label: 'Sharp (none)', value: 'rounded-none' },
            { label: 'Small', value: 'rounded-sm' },
            { label: 'Medium', value: 'rounded-md' },
            { label: 'Large', value: 'rounded-lg' },
            { label: 'Extra Large', value: 'rounded-xl' },
            { label: 'Pill', value: 'rounded-full' },
          ],
          defaultValue: 'rounded-lg',
        },
        {
          name: 'buttonStyle',
          type: 'select',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
          ],
          defaultValue: 'solid',
        },
        {
          name: 'cardStyle',
          type: 'select',
          options: [
            { label: 'Elevated (shadow)', value: 'elevated' },
            { label: 'Bordered', value: 'bordered' },
            { label: 'Flat', value: 'flat' },
          ],
          defaultValue: 'elevated',
        },
      ],
    },
    {
      name: 'presetThemes',
      type: 'select',
      options: [
        { label: 'Professional (Teal/Cyan)', value: 'professional' },
        { label: 'Corporate (Blue/Gray)', value: 'corporate' },
        { label: 'Startup (Purple/Pink)', value: 'startup' },
        { label: 'Finance (Green/Gold)', value: 'finance' },
        { label: 'Tech (Dark Blue)', value: 'tech' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'professional',
      admin: {
        description: 'Choose a preset theme or select Custom to use manual settings',
      },
    },
    {
      name: 'customCSS',
      type: 'textarea',
      admin: {
        description: 'Advanced: Custom CSS overrides (for experienced users)',
        condition: (_, siblingData) => siblingData.presetThemes === 'custom',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Apply this theme configuration',
      },
    },
  ],
}
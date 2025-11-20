import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Hero } from './src/collections/Hero'
import { Features } from './src/collections/Features'
import { Testimonials } from './src/collections/Testimonials'
import { Pricing } from './src/collections/Pricing'
import { CompanyLogos } from './src/collections/CompanyLogos'
import { Navigation } from './src/collections/Navigation'
import { ThemeSettings } from './src/collections/ThemeSettings'

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
    user: Users.slug,
    meta: {
      titleSuffix: '- FinanceFlow CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [
    Users,
    Media,
    Hero,
    Features,
    Testimonials,
    Pricing,
    CompanyLogos,
    Navigation,
    ThemeSettings,
  ],
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
      ]
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  typescript: {
    outputFile: './src/payload-types.ts',
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/financeflow',
  }),
  cors: [
    'http://localhost:3000',
    'https://topiko-core-hrv1s81pl-topikos-projects-882c6152.vercel.app',
  ],
  csrf: [
    'http://localhost:3000',
    'https://topiko-core-hrv1s81pl-topikos-projects-882c6152.vercel.app',
  ],
})
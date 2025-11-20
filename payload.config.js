const { buildConfig } = require('payload')
const { mongooseAdapter } = require('@payloadcms/db-mongodb')
const { lexicalEditor } = require('@payloadcms/richtext-lexical')
const { webpackBundler } = require('@payloadcms/bundler-webpack')
const { Users } = require('./src/collections/Users')
const { Media } = require('./src/collections/Media')
const { Hero } = require('./src/collections/Hero')
const { Features } = require('./src/collections/Features')
const { Testimonials } = require('./src/collections/Testimonials')
const { Pricing } = require('./src/collections/Pricing')
const { CompanyLogos } = require('./src/collections/CompanyLogos')
const { Navigation } = require('./src/collections/Navigation')
const { ThemeSettings } = require('./src/collections/ThemeSettings')

module.exports = buildConfig({
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
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-key',
  typescript: {
    outputFile: './src/payload-types.ts',
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/financeflow',
  }),
  serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000',
  cors: [
    'http://localhost:3000',
    'https://topiko-core-hrv1s81pl-topikos-projects-882c6152.vercel.app',
  ],
  csrf: [
    'http://localhost:3000',
    'https://topiko-core-hrv1s81pl-topikos-projects-882c6152.vercel.app',
  ],
})
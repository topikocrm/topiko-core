require('dotenv').config({ path: '.env.local' })
const mongoose = require('mongoose')

async function seed() {
  try {
    console.log('🌱 Starting database seed...')
    
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('✅ Connected to MongoDB Atlas')
    
    // Clear existing data
    await mongoose.connection.db.collection('heroes').deleteMany({})
    await mongoose.connection.db.collection('themeSettings').deleteMany({})
    await mongoose.connection.db.collection('navigations').deleteMany({})
    console.log('🧹 Cleared existing data')
    
    // Seed Hero Content
    await mongoose.connection.db.collection('heroes').insertOne({
      badge: '🚀 New AI Features Available',
      headline: 'The AI Revenue Platform for Next Gen Finance teams',
      description: 'Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.',
      primaryButton: {
        text: 'Start Free Trial',
        url: '/signup'
      },
      secondaryButton: {
        text: 'Watch Demo',
        url: '/demo'
      },
      emailSignup: {
        enabled: true,
        placeholder: 'Enter your work email',
        buttonText: 'Get Started',
        subtitle: 'Join 10,000+ finance professionals'
      },
      statistics: [
        { label: 'Revenue Growth', value: '300%' },
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Time Saved', value: '75%' }
      ],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    // Seed Theme Settings
    await mongoose.connection.db.collection('themeSettings').insertOne({
      name: 'FinanceFlow Default Theme',
      colors: {
        primary: '#0d9488',
        secondary: '#06b6d4',
        accent: '#3b82f6',
        gradientFrom: 'from-teal-600',
        gradientTo: 'to-cyan-600'
      },
      typography: {
        headingFont: 'font-sans',
        bodyFont: 'font-sans'
      },
      styling: {
        borderRadius: 'rounded-lg',
        buttonStyle: 'solid',
        cardStyle: 'elevated'
      },
      presetThemes: 'professional',
      customCSS: '',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    // Seed Navigation
    await mongoose.connection.db.collection('navigations').insertOne({
      title: 'Main Navigation',
      header: {
        logo: {
          text: 'FinanceFlow',
          image: null
        },
        menuItems: [
          { label: 'Solutions', url: '#solutions', hasDropdown: false },
          { label: 'Features', url: '#features', hasDropdown: false },
          { label: 'Pricing', url: '#pricing', hasDropdown: false },
          { label: 'Resources', url: '#resources', hasDropdown: false }
        ],
        ctaButton: {
          text: 'Get Started',
          url: '/signup'
        }
      },
      footer: {
        companyDescription: 'The AI-powered revenue platform that helps finance teams make smarter decisions and drive predictable growth.',
        socialLinks: [
          { platform: 'twitter', url: 'https://twitter.com/financeflow' },
          { platform: 'linkedin', url: 'https://linkedin.com/company/financeflow' }
        ],
        footerSections: [
          {
            title: 'Product',
            links: [
              { label: 'Features', url: '/features' },
              { label: 'Pricing', url: '/pricing' },
              { label: 'API', url: '/api' }
            ]
          },
          {
            title: 'Company',
            links: [
              { label: 'About', url: '/about' },
              { label: 'Blog', url: '/blog' },
              { label: 'Contact', url: '/contact' }
            ]
          }
        ],
        newsletter: {
          enabled: true,
          title: 'Stay ahead of finance trends',
          description: 'Get weekly insights, AI trends, and revenue optimization tips delivered to your inbox.',
          placeholder: 'Enter your email address',
          buttonText: 'Subscribe',
          disclaimer: 'Join 25,000+ subscribers. Unsubscribe anytime.'
        }
      },
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    // Seed sample features
    const features = [
      {
        title: 'AI-Powered Analytics',
        description: 'Advanced machine learning algorithms analyze your revenue patterns and predict future growth opportunities.',
        icon: '🤖',
        benefits: [
          'Predictive revenue forecasting',
          'Automated trend analysis',
          'Real-time insights dashboard'
        ],
        order: 1,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Smart Automation',
        description: 'Automate repetitive financial processes and focus on strategic decision-making.',
        icon: '⚡',
        benefits: [
          'Automated report generation',
          'Smart workflow optimization',
          'Intelligent data processing'
        ],
        order: 2,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Real-time Insights',
        description: 'Get instant visibility into your financial performance with dynamic dashboards.',
        icon: '📊',
        benefits: [
          'Live performance tracking',
          'Custom dashboard creation',
          'Mobile-responsive analytics'
        ],
        order: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    
    await mongoose.connection.db.collection('features').deleteMany({})
    await mongoose.connection.db.collection('features').insertMany(features)
    
    console.log('✅ Database seeded successfully!')
    console.log('📊 Created:')
    console.log('  - Hero section content')
    console.log('  - 3 Feature cards')
    console.log('  - Navigation structure')
    console.log('  - Theme settings')
    console.log('')
    console.log('🎉 Ready to use! Access admin panel at http://localhost:3000/admin')
    
    await mongoose.connection.close()
    process.exit(0)

  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()
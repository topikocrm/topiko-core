require('dotenv').config()

async function seed() {
  try {
    console.log('🌱 Starting database seed...')
    
    // Direct database connection using mongoose
    const mongoose = require('mongoose')
    
    // Connect to MongoDB
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('✅ Connected to MongoDB Atlas')
    
    // Define schemas directly for seeding
    const HeroSchema = new mongoose.Schema({
      badge: String,
      headline: String,
      description: String,
      primaryButton: {
        text: String,
        url: String
      },
      secondaryButton: {
        text: String,
        url: String
      },
      emailSignup: {
        enabled: Boolean,
        placeholder: String,
        buttonText: String,
        subtitle: String
      },
      statistics: [{
        label: String,
        value: String
      }],
      isActive: { type: Boolean, default: true }
    })
    
    const Hero = mongoose.model('hero', HeroSchema)

    // Seed Hero Content
    await payload.create({
      collection: 'hero',
      data: {
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
        dashboardImage: null,
        isActive: true
      }
    })

    // Seed Features
    const featuresData = [
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
        isActive: true
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
        isActive: true
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
        isActive: true
      }
    ]

    for (const feature of featuresData) {
      await payload.create({
        collection: 'features',
        data: feature
      })
    }

    // Seed Navigation
    await payload.create({
      collection: 'navigation',
      data: {
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
        isActive: true
      }
    })

    // Seed Theme Settings
    await payload.create({
      collection: 'themeSettings',
      data: {
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
        isActive: true
      }
    })

    console.log('✅ Database seeded successfully!')
    process.exit(0)

  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()
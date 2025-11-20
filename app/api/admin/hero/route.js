import { NextResponse } from 'next/server'

// Fallback to simple storage for now since MongoDB is having issues
const defaultHeroData = {
  badge: "🚀 New AI Features Available",
  headline: "The AI Revenue Platform for Next Gen Finance teams",
  description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
  primaryButton: { text: "Start Free Trial", url: "/signup" },
  secondaryButton: { text: "Watch Demo", url: "/demo" },
  emailSignup: { placeholder: "Enter your work email" }
}

// In-memory storage for demo purposes (will reset on each deployment)
let storedHeroData = { ...defaultHeroData }

export async function GET() {
  try {
    console.log('GET /api/admin/hero - Returning stored data')
    
    return NextResponse.json({ 
      success: true, 
      data: storedHeroData,
      message: 'Using in-memory storage (demo mode)'
    })
  } catch (error) {
    console.error('GET /api/admin/hero error:', error.message)
    
    return NextResponse.json({ 
      success: true, 
      data: defaultHeroData,
      fallback: true,
      error: error.message
    })
  }
}

export async function POST(request) {
  try {
    console.log('POST /api/admin/hero - Starting request')
    
    const data = await request.json()
    console.log('Received data:', JSON.stringify(data, null, 2))
    
    // Validate required fields
    if (!data.headline || !data.description) {
      throw new Error('Missing required fields: headline and description are required')
    }
    
    // Update in-memory storage
    storedHeroData = {
      badge: data.badge || defaultHeroData.badge,
      headline: data.headline,
      description: data.description,
      primaryButton: {
        text: data.primaryButton?.text || defaultHeroData.primaryButton.text,
        url: data.primaryButton?.url || defaultHeroData.primaryButton.url
      },
      secondaryButton: {
        text: data.secondaryButton?.text || defaultHeroData.secondaryButton.text,
        url: data.secondaryButton?.url || defaultHeroData.secondaryButton.url
      },
      emailSignup: {
        placeholder: data.emailSignup?.placeholder || defaultHeroData.emailSignup.placeholder
      },
      updatedAt: new Date().toISOString()
    }
    
    console.log('Updated stored data:', JSON.stringify(storedHeroData, null, 2))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Content updated successfully (demo mode - will reset on next deployment)',
      data: storedHeroData
    })
  } catch (error) {
    console.error('POST /api/admin/hero error:', error)
    console.error('Error stack:', error.stack)
    
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: error.stack
    }, { status: 500 })
  }
}
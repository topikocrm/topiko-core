import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

let cachedClient = null

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient
  }

  try {
    const client = new MongoClient(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
    })
    
    await client.connect()
    cachedClient = client
    return client
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

export async function GET() {
  try {
    if (!process.env.DATABASE_URI) {
      throw new Error('DATABASE_URI environment variable is not set')
    }

    const client = await connectToDatabase()
    const db = client.db()
    const collection = db.collection('heroes')
    
    const hero = await collection.findOne({ isActive: true })
    
    const defaultHero = {
      badge: "🚀 New AI Features Available",
      headline: "The AI Revenue Platform for Next Gen Finance teams",
      description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
      primaryButton: { text: "Start Free Trial", url: "/signup" },
      secondaryButton: { text: "Watch Demo", url: "/demo" },
      emailSignup: { placeholder: "Enter your work email" }
    }
    
    return NextResponse.json({ 
      success: true, 
      data: hero || defaultHero
    })
  } catch (error) {
    console.error('GET /api/admin/hero error:', error.message)
    
    // Return default content if database fails
    return NextResponse.json({ 
      success: true, 
      data: {
        badge: "🚀 New AI Features Available",
        headline: "The AI Revenue Platform for Next Gen Finance teams",
        description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
        primaryButton: { text: "Start Free Trial", url: "/signup" },
        secondaryButton: { text: "Watch Demo", url: "/demo" },
        emailSignup: { placeholder: "Enter your work email" }
      },
      fallback: true,
      error: error.message
    })
  }
}

export async function POST(request) {
  try {
    console.log('POST /api/admin/hero - Starting request')
    
    if (!process.env.DATABASE_URI) {
      console.error('DATABASE_URI environment variable is not set')
      throw new Error('DATABASE_URI environment variable is not set')
    }

    const data = await request.json()
    console.log('Received data:', JSON.stringify(data, null, 2))
    
    // Validate required fields
    if (!data.headline || !data.description) {
      throw new Error('Missing required fields: headline and description are required')
    }
    
    const client = await connectToDatabase()
    console.log('Connected to database')
    
    const db = client.db()
    const collection = db.collection('heroes')
    
    // Prepare update data with proper structure
    const updateData = {
      badge: data.badge || "🚀 New AI Features Available",
      headline: data.headline,
      description: data.description,
      primaryButton: {
        text: data.primaryButton?.text || "Start Free Trial",
        url: data.primaryButton?.url || "/signup"
      },
      secondaryButton: {
        text: data.secondaryButton?.text || "Watch Demo", 
        url: data.secondaryButton?.url || "/demo"
      },
      emailSignup: {
        placeholder: data.emailSignup?.placeholder || "Enter your work email",
        enabled: true,
        buttonText: "Get Started",
        subtitle: "Join 10,000+ finance professionals"
      },
      isActive: true,
      updatedAt: new Date()
    }
    
    console.log('Update data prepared:', JSON.stringify(updateData, null, 2))
    
    // Update or create hero content
    const result = await collection.replaceOne(
      { isActive: true },
      updateData,
      { upsert: true }
    )
    
    console.log('Database operation result:', result)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Content updated successfully',
      result: {
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount,
        upsertedCount: result.upsertedCount
      }
    })
  } catch (error) {
    console.error('POST /api/admin/hero error:', error)
    console.error('Error stack:', error.stack)
    
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : 'Internal server error'
    }, { status: 500 })
  }
}
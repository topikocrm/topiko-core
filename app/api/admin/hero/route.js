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
    if (!process.env.DATABASE_URI) {
      throw new Error('DATABASE_URI environment variable is not set')
    }

    const data = await request.json()
    
    const client = await connectToDatabase()
    const db = client.db()
    const collection = db.collection('heroes')
    
    // Update or create hero content
    const result = await collection.updateOne(
      { isActive: true },
      { 
        $set: {
          ...data,
          isActive: true,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    )
    
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('POST /api/admin/hero error:', error.message)
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
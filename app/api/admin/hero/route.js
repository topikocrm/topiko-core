import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DATABASE_URI)

export async function GET() {
  try {
    await client.connect()
    const db = client.db()
    const collection = db.collection('heroes')
    
    const hero = await collection.findOne({ isActive: true })
    
    return NextResponse.json({ 
      success: true, 
      data: hero || {
        badge: "🚀 New AI Features Available",
        headline: "The AI Revenue Platform for Next Gen Finance teams",
        description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
        primaryButton: { text: "Start Free Trial", url: "/signup" },
        secondaryButton: { text: "Watch Demo", url: "/demo" },
        emailSignup: { placeholder: "Enter your work email" }
      }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  } finally {
    await client.close()
  }
}

export async function POST(request) {
  try {
    const data = await request.json()
    
    await client.connect()
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
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  } finally {
    await client.close()
  }
}
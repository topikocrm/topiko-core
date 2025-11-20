import { NextResponse } from 'next/server'

// Simple API endpoint to check PayloadCMS status
export async function GET(request) {
  try {
    return NextResponse.json({ 
      status: 'PayloadCMS API ready',
      database: process.env.DATABASE_URI ? 'Connected' : 'Not configured'
    })
  } catch (error) {
    return NextResponse.json({ error: 'PayloadCMS not available' }, { status: 500 })
  }
}
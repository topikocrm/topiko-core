'use client'

import { useState, useEffect } from 'react'
import FinanceFlowTheme from "@/themes/financeFlow";

export default function Home() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  const staticContent = {
    hero: {
      badge: "🚀 New AI Features Available",
      headline: "The AI Revenue Platform for Next Gen Finance teams",
      description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
      primaryButton: { text: "Start Free Trial", url: "/signup" },
      secondaryButton: { text: "Watch Demo", url: "/demo" },
      emailSignup: { placeholder: "Enter your work email" }
    },
    theme: {
      colors: {
        gradientFrom: "from-teal-600",
        gradientTo: "to-cyan-600",
        primary: "#0d9488"
      }
    }
  };

  useEffect(() => {
    async function fetchContent() {
      try {
        console.log('Fetching content from API...')
        const response = await fetch('/api/admin/hero', { 
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        
        const heroData = await response.json()
        console.log('Fetched hero data:', heroData)
        
        if (heroData.success) {
          setContent({
            hero: heroData.data,
            theme: staticContent.theme
          })
          console.log('Updated content with:', heroData.data)
        } else {
          setContent(staticContent)
        }
      } catch (error) {
        console.error('Failed to fetch content:', error)
        setContent(staticContent)
      }
      setLoading(false)
    }

    fetchContent()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading FinanceFlow theme...</div>
      </div>
    )
  }

  return <FinanceFlowTheme content={content} />;
}

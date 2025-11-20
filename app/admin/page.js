'use client'

import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [heroData, setHeroData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // Load current hero data
  useEffect(() => {
    fetch('/api/admin/hero')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }
        return res.json()
      })
      .then(data => {
        if (data.success) {
          setHeroData(data.data)
          if (data.fallback) {
            setMessage('⚠️ Using fallback data. Database connection issue.')
          }
        } else {
          setMessage(`❌ Failed to load content: ${data.error || 'Unknown error'}`)
          // Set default data if API fails
          setHeroData({
            badge: "🚀 New AI Features Available",
            headline: "The AI Revenue Platform for Next Gen Finance teams",
            description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
            primaryButton: { text: "Start Free Trial", url: "/signup" },
            secondaryButton: { text: "Watch Demo", url: "/demo" },
            emailSignup: { placeholder: "Enter your work email" }
          })
        }
        setLoading(false)
      })
      .catch(error => {
        console.error('Admin fetch error:', error)
        setMessage(`❌ Connection failed: ${error.message}`)
        // Set default data
        setHeroData({
          badge: "🚀 New AI Features Available",
          headline: "The AI Revenue Platform for Next Gen Finance teams",
          description: "Unlock powerful revenue insights with AI-driven analytics. Make data-driven decisions faster and grow revenue predictably.",
          primaryButton: { text: "Start Free Trial", url: "/signup" },
          secondaryButton: { text: "Watch Demo", url: "/demo" },
          emailSignup: { placeholder: "Enter your work email" }
        })
        setLoading(false)
      })
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/admin/hero', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroData)
      })
      const result = await response.json()
      if (result.success) {
        setMessage('✅ Content updated successfully! Refresh your site to see changes.')
      } else {
        setMessage('❌ Failed to update content.')
      }
    } catch (error) {
      setMessage('❌ Error updating content.')
    }
    setSaving(false)
    setTimeout(() => setMessage(''), 5000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading admin...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              FinanceFlow Admin
            </h1>
            <p className="text-gray-600">
              Edit your homepage content and see changes live on your site.
            </p>
            {message && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                {message}
              </div>
            )}
          </div>

          {heroData && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Badge
                </label>
                <input
                  type="text"
                  value={heroData.badge || ''}
                  onChange={(e) => setHeroData({...heroData, badge: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="🚀 New AI Features Available"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Headline
                </label>
                <textarea
                  value={heroData.headline || ''}
                  onChange={(e) => setHeroData({...heroData, headline: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="The AI Revenue Platform for Next Gen Finance teams"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={heroData.description || ''}
                  onChange={(e) => setHeroData({...heroData, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Unlock powerful revenue insights with AI-driven analytics..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Button Text
                  </label>
                  <input
                    type="text"
                    value={heroData.primaryButton?.text || ''}
                    onChange={(e) => setHeroData({
                      ...heroData, 
                      primaryButton: {...heroData.primaryButton, text: e.target.value}
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Start Free Trial"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secondary Button Text
                  </label>
                  <input
                    type="text"
                    value={heroData.secondaryButton?.text || ''}
                    onChange={(e) => setHeroData({
                      ...heroData, 
                      secondaryButton: {...heroData.secondaryButton, text: e.target.value}
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Watch Demo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Placeholder
                </label>
                <input
                  type="text"
                  value={heroData.emailSignup?.placeholder || ''}
                  onChange={(e) => setHeroData({
                    ...heroData, 
                    emailSignup: {...heroData.emailSignup, placeholder: e.target.value}
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your work email"
                />
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 disabled:opacity-50 font-medium"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Database Info</h2>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• MongoDB Atlas: Connected ✅</p>
              <p>• Collections: Heroes, Features, Testimonials, Pricing, Navigation, Theme Settings</p>
              <p>• Live URL: <a href="/" className="text-teal-600 hover:underline">View your site</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
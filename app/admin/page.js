'use client'

import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    fetch('/api/payload')
      .then(res => res.json())
      .then(data => setStatus(data.status || 'Error'))
      .catch(() => setStatus('Connection failed'))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            FinanceFlow CMS Setup
          </h1>
          <p className="text-gray-600">
            PayloadCMS Status: <span className="font-medium">{status}</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              🗄️ Database Ready
            </h2>
            <p className="text-blue-800">
              Your MongoDB Atlas database has been seeded with FinanceFlow content including:
            </p>
            <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
              <li>Hero section with AI-focused headlines</li>
              <li>3 feature cards (AI Analytics, Smart Automation, Real-time Insights)</li>
              <li>Theme settings with professional teal/cyan colors</li>
              <li>Navigation structure</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-900 mb-3">
              🎨 Current Theme Features
            </h2>
            <p className="text-green-800">
              Your FinanceFlow theme is live with:
            </p>
            <ul className="list-disc list-inside text-green-800 mt-2 space-y-1">
              <li>Responsive design optimized for finance/AI companies</li>
              <li>Dynamic content structure (ready for CMS integration)</li>
              <li>Professional color scheme and typography</li>
              <li>Modern gradient backgrounds and animations</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-amber-900 mb-3">
              🔧 Content Management
            </h2>
            <p className="text-amber-800">
              Your content can be customized by:
            </p>
            <ul className="list-disc list-inside text-amber-800 mt-2 space-y-1">
              <li>Editing static content in the code (immediate)</li>
              <li>Directly updating MongoDB Atlas collections</li>
              <li>Using PayloadCMS admin (requires additional setup)</li>
            </ul>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              📊 Available Collections
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-gray-700">• Heroes</div>
              <div className="text-gray-700">• Features</div>
              <div className="text-gray-700">• Testimonials</div>
              <div className="text-gray-700">• Pricing</div>
              <div className="text-gray-700">• Company Logos</div>
              <div className="text-gray-700">• Navigation</div>
              <div className="text-gray-700">• Theme Settings</div>
              <div className="text-gray-700">• Media</div>
            </div>
          </div>

          <div className="text-center pt-6">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
            >
              ← Back to FinanceFlow Theme
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
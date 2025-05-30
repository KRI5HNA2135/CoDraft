'use client'

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Let's build an API productivity app
      </h1>
      <Button className="mb-8">Hmm</Button>
      <p className="text-gray-500 text-lg">Some placeholder text</p>
      
      {/* Additional content cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">API Integration</h3>
          <p className="text-gray-600 text-sm">Connect and manage your APIs efficiently</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-2">Task Management</h3>
          <p className="text-gray-600 text-sm">Organize your workflow and boost productivity</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibool-semibold text-gray-900 mb-2">Collaboration</h3>
          <p className="text-gray-600 text-sm">Share documents and work together seamlessly</p>
        </div>
      </div>
    </div>
  )
}
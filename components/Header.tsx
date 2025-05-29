// components/Header.tsx
'use client'

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs"

const Header = () => {
  const { user } = useUser()

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      {/* Left: User's name */}
      <div>
        {user && (
          <h1 className="text-xl font-semibold">
            {user.firstName}
            <span className="text-blue-600 ml-1">'s Space</span>
          </h1>
        )}
      </div>

       {/* Breadcrumbs Placeholder */}
  {/* <nav className="text-sm text-gray-500 mb-6">
    <ol className="flex space-x-2">
      <li><a href="/" className="hover:underline text-blue-500">Home</a></li>
      <li>/</li>
      <li className="text-gray-700">Dashboard</li>
    </ol>
  </nav> */}

      {/* Right: Auth buttons */}
      <div className="space-x-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  )
}

export default Header

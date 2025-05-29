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
  const {user} = useUser();

  return (
    <div>
      {
        user &&
        (
          <h1>{user?.firstName}{`'s`} Space </h1>
        )
      }

      {/* Breadcrumbs */}


      
      <div>
          <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>

    </div>
  )
}

export default Header
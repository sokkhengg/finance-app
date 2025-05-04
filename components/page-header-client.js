'use client'

import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'
import useTheme from '@/hooks/use-theme'
import { KeyRound } from 'lucide-react'
import { sizes, variants } from '@/lib/variants'
import SignOutButton from './sign-out-button'

// Client component that handles the UI and uses the React hook
export default function PageHeaderClient({ className, user, initialTheme = 'dark', avatarComponent }) {
  // Use our new client-side theme hook
  const { theme, toggleTheme } = useTheme(initialTheme)
  
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link href="/dashboard" className="text-xl hover:underline underline-offset-8 decoration-2">Finance App</Link>

      <div className="flex items-center">
        <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
        {user && <Link href="/dashboard/settings" className={`flex items-center space-x-1 ${variants['ghost']} ${sizes['sm']}`}>
          {avatarComponent}
          <span>{user?.user_metadata?.fullName ?? user?.email}</span>
        </Link>}
        {user && <SignOutButton />}
        {!user && <Link href="/login" className={`${variants['ghost']} ${sizes['sm']}`}>
          <KeyRound className="w-6 h-6" />
        </Link>}
      </div>
    </header>
  )
}


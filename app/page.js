'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import useTheme from '@/hooks/use-theme'
import { KeyRound, ArrowRight, LineChart, Shield, Wallet } from 'lucide-react'
import { sizes, variants } from '@/lib/variants'
import DarkModeToggle from '@/components/dark-mode-toggle'
import SignOutButton from '@/components/sign-out-button'
import Footer from '@/components/footer'

export default function WelcomePage({ className, user, initialTheme = 'dark', avatarComponent }) {
  const { theme, toggleTheme } = useTheme(initialTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={("sticky top-0 z-50 bg-background/80 backdrop-blur-sm", className)}>
        <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto w-full">
          <Link 
            href="/dashboard" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
          >
            FinanceApp
          </Link>
          
          <div className="flex items-center gap-4">
            <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
            {user ? (
              <>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center gap-2 ${variants['ghost']} ${sizes['sm']} hover:bg-accent/50`}
                >
                  {avatarComponent}
                  <span className="truncate max-w-[160px]">
                    {user?.user_metadata?.fullName ?? user?.email}
                  </span>
                </Link>
                <SignOutButton />
              </>
            ) : (
              <Link
                href="/login"
                className={`flex items-center gap-2 ${variants['secondary']} ${sizes['sm']}`}
              >
                <KeyRound className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Section */}
          <section className="text-center space-y-8 mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {user ? `Welcome Back, ${user?.user_metadata?.firstName ?? 'User'}!` : 'Take Control of Your Finances'}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {user ? 
                "Pick up where you left off or explore new features" : 
                "Simple, secure, and powerful personal finance management for everyone"
              }
            </p>

            <div className="flex justify-center gap-4">
              {user ? (
                <Link
                  href="/dashboard"
                  className={`${variants['default']} ${sizes['lg']} gap-2 transition-transform hover:scale-105`}
                >
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <Link
                    href="/login#signup"
                    className={`${variants['default']} ${sizes['lg']} gap-2 transition-transform hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/login"
                    className={`${variants['outline']} ${sizes['lg']} gap-2`}
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </section>

          {/* Features Grid */}
          {!user && (
           <div className="flex justify-center">
           <section className="grid md:grid-cols-2 gap-8 py-20 w-full max-w-5xl">
             <div className="border rounded-xl p-6 hover:border-primary transition-colors flex flex-col items-center text-center">
               <LineChart className="w-10 h-10 mb-4 text-primary" />
               <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
               <p className="text-muted-foreground">
                 Visualize your spending patterns with interactive charts and detailed reports
               </p>
             </div>
         
             <div className="border rounded-xl p-6 hover:border-primary transition-colors flex flex-col items-center text-center">
               <Wallet className="w-10 h-10 mb-4 text-primary" />
               <h3 className="text-xl font-semibold mb-2">Multi-account</h3>
               <p className="text-muted-foreground">
                 Manage all your financial transactions in one unified interface
               </p>
             </div>
           </section>
         </div>
         
          
          )}
        </div>
      </main>

      <Footer/>
    </div>
  )
}
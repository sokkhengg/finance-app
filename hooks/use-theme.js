'use client'

import { useState, useEffect } from 'react'

export default function useTheme(initialTheme = 'dark') {
  const [theme, setTheme] = useState(initialTheme)
  
  // Synchronize with localStorage when component mounts
  useEffect(() => {
    // Check if localStorage has a theme value, if not use the initialTheme
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // If no theme in localStorage, use the initialTheme and save it
      localStorage.setItem('theme', initialTheme)
    }
  }, [initialTheme])
  
  // Update localStorage and document cookie when theme changes
  useEffect(() => {
    // Update localStorage
    localStorage.setItem('theme', theme)
    
    // Update cookie for server consistency
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Lax`
    
    // Update document class for global styling if needed
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }
  
  return { theme, toggleTheme }
}


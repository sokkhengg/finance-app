import { cookies } from 'next/headers'

// Get theme from cookies (server-side only)
export function getThemeFromCookies(defaultTheme = 'dark') {
  const cookieStore = cookies()
  return cookieStore.get('theme')?.value ?? defaultTheme
}


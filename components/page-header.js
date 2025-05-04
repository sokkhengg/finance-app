import { createClient } from '@/lib/supabase/server'
import { getThemeFromCookies } from '@/lib/theme'
import Avatar from './avatar'
import AvatarClient from './avatar-client'
import PageHeaderClient from './page-header-client'

// Server component that handles data fetching
export default async function PageHeader({ className }) {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  const initialTheme = getThemeFromCookies('dark')
  
  // Get avatar data for the user
  let avatarUrl = null
  if (user?.user_metadata?.avatar) {
    const { data: imageData, error: avatarError } = await supabase.storage
      .from('avatars')
      .createSignedUrl(user.user_metadata.avatar, 60 * 5)
      
    if (!avatarError) {
      avatarUrl = imageData.signedUrl
    }
  }
  
  // Render the AvatarClient directly here to pass to PageHeaderClient
  const avatarComponent = <AvatarClient imageUrl={avatarUrl} />
  
  return (
    <PageHeaderClient 
      className={className} 
      user={user} 
      initialTheme={initialTheme}
      avatarComponent={avatarComponent}
    />
  )
}

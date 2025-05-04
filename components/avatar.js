import { createClient } from "@/lib/supabase/server"
import AvatarClient from './avatar-client'

export default async function Avatar({ width = 32, height = 32 }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  let imageUrl = null
  
  if (user?.user_metadata?.avatar) {
    const { data: imageData, error } = await supabase.storage
      .from('avatars')
      .createSignedUrl(user.user_metadata.avatar, 60 * 5)
      
    if (!error) {
      imageUrl = imageData.signedUrl
    }
  }
  
  return <AvatarClient imageUrl={imageUrl} width={width} height={height} />
}

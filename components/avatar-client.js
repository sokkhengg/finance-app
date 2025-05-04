'use client'

import Image from 'next/image'
import { CircleUser } from 'lucide-react'

export default function AvatarClient({ imageUrl, width = 32, height = 32 }) {
  if (!imageUrl) {
    return <CircleUser className="w-6 h-6" />
  }
  
  return <Image 
    src={imageUrl} 
    width={width} 
    height={height} 
    alt="User avatar" 
    className="rounded-full" 
  />
}


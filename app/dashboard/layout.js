import PageHeader from '@/components/page-header'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <PageHeader className="my-8"/>
    <main>
        {children}
    </main>
    <footer>Footer</footer>
    </>
    
  )
}

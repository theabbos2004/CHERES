import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, Sheet } from '../components'

export default function RootLayout() {
  return (
    <div className='w-full min-h-screen'>
        <Header/>
        <Outlet/>
        <Sheet/>
        <Footer/>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

export default function RootLayout() {
  return (
    <div className='w-full min-h-screen'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

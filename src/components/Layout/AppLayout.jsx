import React from 'react'
import Headers from '../UI/Headers'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Headers />


           <Outlet />

      <Footer />
    </div>
  )
}

export default AppLayout
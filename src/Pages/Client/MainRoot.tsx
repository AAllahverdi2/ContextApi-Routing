import React from 'react'
import Header from '../../Layout/Client/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layout/Client/Footer'

const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default MainRoot

import React from 'react'
import { Outlet } from 'react-router-dom'
import Headerr from '../../Layout/Admin/Header'

const AdminRoot = () => {
  return (
    <div>
        <Headerr/>
        <Outlet/>
      
    </div>
  )
}

export default AdminRoot

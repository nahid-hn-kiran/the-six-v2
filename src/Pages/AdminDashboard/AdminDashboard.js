import React from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'
import DashboardMenu from './DashboardMenu/DashboardMenu'

const AdminDashboard = () => {
  return (
    <div className='bg-slate-200'>
      <AdminNavbar />
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <label htmlFor='my-drawer-2' className='btn drawer-button lg:hidden'>
            Dashboard
          </label>
          <div className='p-4 shadow-xl bg-base-100 m-4'>
            <Outlet />
          </div>
        </div>
        <DashboardMenu />
      </div>
    </div>
  )
}

export default AdminDashboard

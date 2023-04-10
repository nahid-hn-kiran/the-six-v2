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
          <label
            htmlFor='my-drawer-2'
            className='btn drawer-button lg:hidden ml-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
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

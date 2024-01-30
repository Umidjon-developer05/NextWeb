"use client"
import React from 'react'
import DashboardUser from './_components/DashboardUser'
import DashboardBanner from './_components/DashboardBanner'

const Dashboard = () => {
  
  return (
    <div
      className='grid grid-cols-1 sm:ml-60  gap-3 '
    >
        <DashboardUser/>
        <DashboardBanner/>
    </div>
  )
}

export default Dashboard
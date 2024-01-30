"use client"
import React from 'react'
import DashboardUser from './_components/DashboardUser'
const Dashboard = () => {
  
  return (
    <div
      className='grid grid-cols-1 sm:ml-60  gap-3 '
    >
        <DashboardUser/>
    </div>
  )
}

export default Dashboard
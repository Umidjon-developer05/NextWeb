"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'

const DashboardUser = () => {
    const { user } = useUser();
    console.log(user);
  return (
    <div>

    </div>
  )
}

export default DashboardUser
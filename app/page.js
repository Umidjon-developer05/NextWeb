"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
function Courses() {
  const router = useRouter();
  const {user,isLoaded} = useUser();
  useEffect(()=>{
      if (user) {
        router.push('/dashbord')
      }else{
        router.push('/dashbord')
      }
    },[])
  return (
    <UserButton afterSignOutUrl="/sign-in"/>
  )
}

export default Courses
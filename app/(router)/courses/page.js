"use client"
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function COurses() {
  return (
    <div className='grid grid-cols-1  gap-3'>
        <div className=' col-span-2  p-2 '>
            {/* banner */}
            <WelcomeBanner/>

            {/* COurse List */}

            <CourseList/>
        </div>
        <div>

        </div>
    </div>
  )
}

export default COurses
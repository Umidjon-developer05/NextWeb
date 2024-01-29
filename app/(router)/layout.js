import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
function Layout({ children  }) {
  return (
    <>
      <div className=''>
        <div >
          <Header 
          />
        <div className='sm:w-64 sm:block fixed min-h-screen'>
        <Suspense>
          <SideNav/>
        </Suspense>
        </div>
        <div className='flex-grow ml-0 sm:ml-60  p-5 '>

          {children}
        </div>
        </div>
      </div>
    </>
  )
}

export default Layout;

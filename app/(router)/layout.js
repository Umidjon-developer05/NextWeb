"use client"
import React, { useState } from 'react';
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
function Layout({ children  }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};
  return (
    <>
      <div className=''>
        <div  style={{position:"relative"}}>
          <Header 
          menuOpen ={menuOpen}
          />
            <button style={{position:"absolute",top:"-5px"}} className='lg:hidden  cursor-pointer mx-1 mt-10' onClick={toggleMenu}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        ></path>
                    </svg>
            </button>
        <div className='sm:w-64 sm:block   min-h-screen ' style={{position:"fixed",top:"0"}}>
        <Suspense>
          <SideNav
            menuOpen = {menuOpen}
          />
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

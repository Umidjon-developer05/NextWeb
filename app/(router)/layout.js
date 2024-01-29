"use client"
import React, { useEffect, useState } from 'react';
import SideNav from './_components/SideNav'
import { usePathname } from 'next/navigation'
import Header from './_components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
import GlobalsApi from '../_utils/GlobalsApi';
function Layout({ children  }) {
  const path = usePathname();
  const [courses, setCourses] = useState([]);
  const [coursesSlug, setCoursesSlug] = useState();

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalsApi.getAllCourseList()
      .then(resp => {
        setCourses(resp?.blogs);
      })
  };
  useEffect(()=>{
    courses?.forEach(element => {
      setCoursesSlug(element?.slug)
    });

  },[courses])

  return (
    <>
      <div className=''>
        <div  style={{position:"relative"}}>
          <Header 
          
          />
          
        <div className='sm:w-64 sm:block   min-h-screen ' style={{position:"fixed",top:"0"}}>
        <Suspense>
          {
            path === `/course-preview/reactjs` || path === "/course-preview/javascript" ? '' :<SideNav
            />
          }
          
        </Suspense>
        </div>
        <div className='flex-grow ml-0   p-5 '>
          {children}
        </div>
        </div>
      </div>
    </>
  )
}

export default Layout;

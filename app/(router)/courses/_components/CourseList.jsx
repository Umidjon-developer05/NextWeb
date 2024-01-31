"use client"
import GlobalsApi from '@/app/_utils/GlobalsApi';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import CourseItem from "./CourseItem"
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useUser();
  console.log(user?.primaryEmailAddress?.emailAddress);
  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    GlobalsApi.getAllCourseList()
      .then(resp => {
        setCourses(resp?.blogs);
      })
  };
  
  return (
    <div style={{ display:'flex' ,gap:"10px",flexWrap:"wrap"}} > 
        {
        courses.length > 0 ? courses?.map((item, index) => 
          <div key={index}>
               
            
                <>
                  <Link  href={`${user?.primaryEmailAddress?.emailAddress  ? `/course-preview/${item?.slug}` :'/sign-in' }  `} >
           
                    <CourseItem item={item}/>
                  </Link>
                </>
                
           
          </div>
        
        )
          :
          [1,2,3].map((item,index)=>(
            <div style={{width:"410px",display:"flex",gap:"20px"}} key={index}>
              <div className='w-full h-[430px] rounded-xl m-2 bg-slate-500 animate-pulse flex flex-col gap-3 p-2 blur-2xl'> 
          
              </div>
            </div>
          ))
      }
    </div>
  )  
};

export default CourseList;

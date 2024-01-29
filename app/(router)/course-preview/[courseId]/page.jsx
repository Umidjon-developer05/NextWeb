"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from "./_components/CourseVideoDescription"
import GlobalsApi from '@/app/_utils/GlobalsApi'

import CourseContentSection from "./_components/CourseContentSection"
import { toast } from 'sonner'
const CoursePreview = ({params}) => {
    const [courseInfo,setCourseInfo] = useState()
    const [courseChapter,setChapter]= useState()
    const [activeChapterIndex,setActiveChapterIndex] = useState(0)
    const path = usePathname();
    useEffect(()=>{
      params&&getCourseInfoById()
    },[params])
    const getCourseInfoById =()=>{
        GlobalsApi.getCourseById(params?.courseId).then(resp=>{
            setCourseInfo(resp?.blogs);
            setChapter(resp?.blogs[0]?.chapter)
        })
    }
    // save Completed chapter id
   
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>


            <div className='col-span-2  p-2  '>
                    <CourseVideoDescription courseInfo={courseInfo}
                     activeChapterIndex={activeChapterIndex}
                     watchMode={true}
                   />

                   </div>
            
                <div>
                  
                  {courseChapter?.map((item,index)=>(
                       <div key={index}>
                    
                       <CourseContentSection Chapter={item}
                          watchMode={true}
                          index ={index}
                          setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}
                        />
                       </div>
                  ))}
                </div>
     </div>
  )
}

export default CoursePreview
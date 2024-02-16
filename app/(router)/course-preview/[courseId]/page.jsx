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
    const [ID,setID] = useState(0)
    const [buttonClicked, setButtonClicked] = useState(false);
    const path = usePathname();
    useEffect(()=>{
      params&&getCourseInfoById()
    },[ params ])
    const getCourseInfoById =()=>{
        GlobalsApi.getCourseById(params?.courseId).then(resp=>{
            setCourseInfo(resp?.blogs);
            setChapter(resp?.blogs[0].chapter)
        })
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3' style={{maxWidth:"1500px"}}>
            <div className='col-span-2    '>
                    <CourseVideoDescription courseInfo={courseInfo}
                     activeChapterIndex={activeChapterIndex}
                     watchMode={true}
                     setID={setID}
                     ID={ID}
                     setButtonClicked={setButtonClicked}
                     buttonClicked={buttonClicked}
                    />
                   </div>
                <div>
                  
                  {courseChapter?.length > 0 ?
                   courseChapter?.map((item,index)=>(
                     <div key={index}>
                       <CourseContentSection Chapter={item}
                          watchMode={true}
                          activeChapterIndex={activeChapterIndex}
                          index ={index}
                          buttonClicked ={buttonClicked}
                          setActiveChapterIndex={(index)=>setActiveChapterIndex(index) }
                        />
                       </div>
                  ))
                  :
                  <>
                   {
                 [1,2].map((item,index)=>(
                    <div style={{width:"100%",display:"flex",gap:"20px"}} key={index}>
                      <div className='w-full  h-full rounded-xl m-2 bg-slate-500 animate-pulse flex flex-col gap-3 p-6 '> 
                  
                      </div>
                    </div>
                  ))
               }
                  </>
                  }
                </div>
     </div>
  )
}

export default CoursePreview

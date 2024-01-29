import { Button } from '@/components/ui/button'
import React from 'react'

const CourseVideoDescription = ({courseInfo,activeChapterIndex,watchMode=false,setChapterCompleted}) => {
    return (
    <div>
        {
          courseInfo?.length > 0 ?   courseInfo?.map((item,index)=>(
                <div className='border shadow border-spacing-28  ' style={{borderRadius:"10px",zIndex:"0"}} key={index}>
                    { 
                        <video key={item?.chapter[activeChapterIndex]?.video?.url} style={{width:"100%",height:"500px",zIndex:"0"}} controls className='rounded-sm' >
                            <source src={item?.chapter[activeChapterIndex]?.video?.url} type='video/mp4'/>
                        </video>
                    }
                   
                        <div className='p-4 font-serif mt-5 '>
                                    <h1> 
                                    
                                    </h1>
                                    <h1 className='text-[17px] font-semibold'>

                                    {
                                        watchMode ? <span className='flex justify-between'>{item?.chapter[activeChapterIndex]?.name}
                                            
                                        </span>
                                        :<span>About This Courses</span>
                                    }
                                    </h1>
                                        <h3  className='text-[12px] font-light mt-2 leading-7'>
                                        {
                                                watchMode ? <span>
                                                    {item?.chapter[activeChapterIndex]?.shortDesc}
                                                </span>:
                                                
                                                <span>

                                                </span>
                                        }
                                            
                                        </h3>
                    </div>
                   
                   
                </div>
            )):
            <>
            {
                [1].map((item,index)=>(
                    <div style={{width:"100%",height:"600px",display:"flex",gap:"20px"}} key={index}>
                      <div className='w-full h-full rounded-xl m-2 bg-slate-500 animate-pulse flex flex-col gap-3 p-2 '> 
                  
                      </div>
                    </div>
                  ))
            }
            </>
        }
    </div>
  )
}

export default CourseVideoDescription
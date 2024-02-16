"use client"
import React, {useState} from 'react'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

const CourseVideoDescription = ({ID,courseInfo,activeChapterIndex,watchMode=false,setChapterCompleted,setID,setButtonClicked }) => {
    const CourseOver = async (item) => {
        setButtonClicked(true)
        try {
            if (!item?.chapter) {
                console.error('Invalid data for CourseOver:', item);
                return;
            }
            const requestBody = {
                id:item.id,
                courseInfo: item?.description?.text,
                name1: item?.excerpt,
                data: item?.data,
                slug: item?.slug,
                title: item.title,
                image: item?.image?.url,
            };
            let res =  await axios.post("http://localhost:3000/api/course", requestBody);
            if (res) {
                toast({
                    title: "Yana bir darsingizni tugatib olganingizdan xursandmiz 😊",
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    
    
    return (
    <div>
        {
          courseInfo?.length > 0 ?   courseInfo?.map((item,index)=>(
                <div className='border shadow border-spacing-28  ' style={{borderRadius:"10px",zIndex:"0"}} key={index}>
                    { 
                        <video  key={item?.chapter[activeChapterIndex]?.video?.url} style={{width:"100%",height:"500px",zIndex:"0"}} controls className='rounded-sm ' >
                            <source src={item?.chapter[activeChapterIndex]?.video?.url} type='video/mp4'/>
                        </video>
                    }
                   
                        <div className='p-4 font-serif mt-5 '>
                                    <h1> 
                                    
                                    </h1>
                                    <h1 className='text-[17px] font-semibold'>

                                    {
                                        watchMode ? <span className='flex items-center justify-between'>{item?.chapter[activeChapterIndex]?.name}
                                         {
                                             <Button onClick={()=>CourseOver(item) && setID(item.id)   } className={`text-white    `} 

                                             >Darsni yakunlash   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle "><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> </Button> 
                                         }
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
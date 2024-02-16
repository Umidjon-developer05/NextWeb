import { Item } from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react'
import { Lock, Play } from 'lucide-react';
const CourseContentSection = ({Chapter,watchMode = true,setActiveChapterIndex, index,activeChapterIndex,}) => {
    const [activeIndex, setActiveIndex]= useState(0);

  return (
    <div className='mt-2 flex flex-col gap-3'>
        
            <div className={`p-2 text-[14xp] flex justify-between items-center gap-3
            border rounded-sm px-4 cursor-pointer
            hover:bg-primary hover:text-white
            ${activeChapterIndex !== index ? '':'bg-primary text-white'}
            `}
            onClick={()=> {watchMode && setActiveChapterIndex(index);
             watchMode && setActiveIndex(index)} 
            }
           >
                {index + 1}.   {Chapter?.name}       {
                  activeIndex === index ? <Play className='h-4 w-4'/> : <Play className='h-4 w-4'/> 
                }
            </div>
    </div>  
  ) 
}

export default CourseContentSection
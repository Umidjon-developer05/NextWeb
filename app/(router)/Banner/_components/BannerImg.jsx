"use client"
import React, { useEffect, useState } from 'react'
import GlobalsApi from '@/app/_utils/GlobalsApi';
import Image from 'next/image';
import Link from "next/link"
const BannerImg = () => {
    const [banner, setBanner] = useState([]);
  
    useEffect(() => {
      getAllCourses();
    }, []);
  
    const getAllCourses = () => {
      GlobalsApi.getBanner()
        .then(resp => {
            setBanner(resp?.sideBanners);
        })
        
    };
  return (
    <div  style={{borderRadius:"20px"}} className=' flex flex-wrap justify-center mb-3 gap-3' >
        {
          banner.length > 0 ?    banner?.map((item,index)=>(
               <Link href={`${item?.url}`} className='cursor-pointer'>
                <div key={index} className=' flex mb-3  '>
                        <Image src={item?.banner?.url} width={300} height={300} alt={'banner'} className='border shadow-sm' style={{borderRadius:"10px"}}/>
                </div>
               </Link>
            )
          ) 
          :
          [1,2,3,4,5].map((item,index)=>(
            <div className=' flex flex-wrap  justify-center' key={index}>
              <div className='w-[250px] h-[170px] rounded-xl m-2 bg-slate-500 animate-pulse flex flex-col gap-3 p-2 ' > 
          
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default BannerImg
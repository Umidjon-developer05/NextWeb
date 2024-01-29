import React from 'react'
import Image from 'next/image';

const CourseItem = ({item}) => {
  return (
    <div>
        <div  className='flex  ' >
            <div className="my-1 " style={{ maxWidth: '410px' }}>
              <article className="overflow-hidden rounded-lg shadow border" >
                <header className=" items-center justify-between leading-tight  p-1 " >
                  <div>
                    <Image alt='Kurs' src={item?.image?.url} style={{borderRadius:"9px"}} width={1000}  height={200}/>
                  </div>
                </header>
                <div className='p-2 flex flex-col gap-2'>
                  <h1 className="text-lg">
                    <p className="no-underline  " >
                      {item?.excerpt}
                    </p>
                  </h1>
                  <h1 className="">{item?.description?.text}</h1>
                </div>
                <footer className="flex items-center mt-10 justify-between leading-none p-2 md:p-2">
                  <p className="flex justify-between items-center no-underline  " >
                    <img alt={`Author: ${item?.author?.name}`} className="block rounded-full" src={item?.author?.avatar?.url} width={50} height={50}/>
                    <p className="ml-2 text-sm" >{item?.author?.name}</p>
                  </p>
                  <p className="text-grey-darker  items-end d-flex justify-end">{item?.data}</p>
                </footer>
              </article>
            </div>
                </div>
    </div>
  )
}

export default CourseItem
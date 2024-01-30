import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

const DashboardUser = () => {
  const { user } = useUser();
  console.log(user?.fullName);
  return (
    <div className='border h-auto md:h-56 flex flex-wrap   items-center rounded-lg p-6'>
      <div className=' md:mr-5 '>
        <Image src={'/panda1.webp'} width={150} height={200} alt='panda' />
      </div>
      <div >
        <h2 className='font-bold text-3xl mb-3 md:mt-0'>
        Welcome Back, <span className='text-primary Logo'>{user?.fullName}</span>
        </h2>
        <h2 className='text-gray-500 mt-3'>
        Lets Begin Learning where you left off,
        </h2>
        <h2 className='text-gray-500 mt-3'>
        Keep it up and improve your progress
        </h2>
      </div>
    </div>
  );
};

export default DashboardUser;

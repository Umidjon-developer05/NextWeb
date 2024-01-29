"use client"
import { useUser } from '@clerk/nextjs';
import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "../../globals.css";
import { useTheme } from 'next-themes';
const SideNav = ({menuOpen}) => {
    const { user } = useUser();

    const { resolvedTheme} = useTheme()
    console.log(resolvedTheme);
    const menu = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: 'dashbord',
            auth: user
        },
        {
            id: 2,
            name: 'All Courses',
            icon: BookOpen,
            path: 'courses',
            auth: true
        },
        {
            id: 3,
            name: 'Membership',
            icon: BadgeIcon,
            path: 'Membership',
            auth: true
        },
        {
            id: 4,
            name: 'Be Instructor',
            icon: GraduationCap,
            path: 'BeInstructor',
            auth: true
        },
    ];

    return (
        <>
        <div className={` shadow-sm mt-24 `} style={{ height:"100vh",zIndex:"9999"}}>
        <div className='' >
        
            
        </div>

            <div className={` ${resolvedTheme == "dark" ? 'bg-slate-950':''} ${menuOpen ? '':''} ${menuOpen ? 'block   ' : 'hidden border h-[100vh]   w-full p-5'} lg:block  ${menuOpen ?' shadow  group-hover:animate-accordion-down h-screen border p-5':''} `} >
                <div className='mt-24'> 
                {menu.map(
                    (item, index) =>
                        item.auth && (
                         <Link href={item?.path} key={index} >
                                <div
                                    className='group flex gap-3 mt-10 p-3 text-lg lg:text-xl items-center text-gray-500 cursor-pointer
                            hover:bg-primary
                            hover:text-white
                            rounded-md
                            transition-all ease-in-out duration-200
                            border
                            '
                                >
                                    <item.icon className='group-hover:animate-bounce' />
                                    <h2>{item.name}</h2>
                                </div>
                            </Link>
                        )
                        )}
                        </div>
            </div>
        </div>
        </>
    );
};

export default SideNav;

"use client"
import { useUser } from '@clerk/nextjs';
import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import "../../globals.css";
const SideNav = () => {
    const { user } = useUser();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
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
        <div className={` shadow-sm h-screen z-0 `} style={{height:"100vh",position:"fixed",zIndex:"9999"}}>
        <div className='' style={{position:"absolute",top:"-50px"}}>
        <div className='lg:hidden cursor-pointer mx-2' onClick={toggleMenu}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        ></path>
                    </svg>
                </div>
        </div>
            <div className={` ${menuOpen ? 'block' : 'hidden border h-[100vh] w-full p-5'} lg:block  ${menuOpen ?' shadow  group-hover:animate-accordion-down h-screen border p-5':''} `} >
                {menu.map(
                    (item, index) =>
                        item.auth && (
                            <Link href={item?.path} key={index}>
                                <div
                                    className='group flex gap-3 mt-8 p-3 text-lg lg:text-xl items-center text-gray-500 cursor-pointer
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
        </>
    );
};

export default SideNav;

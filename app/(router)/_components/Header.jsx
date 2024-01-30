"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'
 
const Header = () => {
  const {user,isLoaded} = useUser()

  const { setTheme,resolvedTheme} = useTheme()
  return (
    <div  className={`h-24 pl-3 pr-3 w-full z-10   flex justify-between items-center border shadow-sm ${resolvedTheme == "light" && 'bg-white' }  ${resolvedTheme == "dark" && 'bg-slate-950' } `} style={{position:"sticky",width:"100%",top:'0',left:"0"}}>
      <div className='flex gap-3 items-center' style={{zIndex:"9999"}}>
      <Link href={'/dashbord'}>
      <h1 className={`Logo text-2xl lg:text-4xl text-center mx-4 '`} >Umidjon </h1>
      </Link>
            
      </div>
        
        <div className='flex items-center justify-between gap-4'>
     
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
            {
              isLoaded && user ? <UserButton afterSignOutUrl='/courses'/>:<Link href={'/sign-in'}><Button>Get Started</Button></Link>
            }
        </div>
    </div>
  )
}

export default Header
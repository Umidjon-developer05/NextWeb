"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { Label } from "@/components/ui/label"
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
 
const Header = () => {
  const {user,isLoaded} = useUser()
  const [title,setTitle] = useState('')
  const [Desc,setDesc] = useState('')
  const { setTheme,resolvedTheme} = useTheme()

  const  handleSubmit = async(e)=>{
    e.preventDefault(); 
   const  requestBody ={
    username:title,
    Offer:Desc
    }
    let res =  await axios.post("http://localhost:3000/api/courseoffer", requestBody);
    if (res) {
        toast({
            title: "Siz qoldirgan taklifingizni o'qib chiqib siz bilan bog'lanamiz 😊",
        });
    }
    setDesc('')
    setTitle('')
  }


  return (
    <div  className={`h-24 pl-3 pr-3 w-full   flex justify-between items-center border shadow-sm ${resolvedTheme == "light" && 'bg-white' }  ${resolvedTheme == "dark" && 'bg-slate-950' } `} style={{position:"sticky",width:"100%",top:'0',left:"0"}}>
      <div className='flex gap-3 items-center' >
      <Link href={'/dashbord'}>
      <h1 className={`Logo text-2xl lg:text-4xl text-center mx-4 '`} >Umidjon </h1>
      </Link>
            
      </div>
        
        <div className='flex items-center justify-between gap-4'>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-contact h-5 w-5"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
         <form action="" onSubmit={handleSubmit}>
        <AlertDialogHeader>
          <AlertDialogTitle>Biz bilan telegram orqali bog'laning 😊</AlertDialogTitle>
          <hr />
         <div className='flex flex-col gap-7 pt-5'>
        <div className='flex flex-col gap-2'>
         <Label className='text-lg' htmlFor="email">Telegram username <span className='text-blue-700'>*</span></Label>
         <Input onChange={(e) => setTitle(e.target.value) }  value={title} type="text" placeholder="@username"  className='p-6'/>
         <span className='text-left text-sm text-gray-500'>Siz bilan ushbu username yordamida aloqaga chiqishimiz mumkin.</span>
        </div>
         <div>
          <Label className='text-lg' >Taklifingiz <span className='text-blue-700'>*</span></Label>
         <Textarea onChange={(e)=>setDesc(e.target.value)}  value={Desc} placeholder="" className='sm:h-[150px]'  />
         <span className='text-left text-sm text-gray-500'>Platformamizni yaxshilash uchun taklifingizni yozing.</span>
         </div>
         </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <button type='submit'> <AlertDialogCancel>Continue </AlertDialogCancel></button>
        </AlertDialogFooter>
         </form>
      </AlertDialogContent>
    </AlertDialog>
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
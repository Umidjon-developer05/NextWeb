"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"
const Contact = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const { toast } = useToast()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
    let chat_id = process.env.NEXT_PUBLIC_Chat_Id; 
    let telegram_bot_id = process.env.NEXT_PUBLIC_Telegram_bot_Id;
    let message = `Ismi : ${title}; Email: ${description}; So'zi: ${time}`;
    if (!title || !description || !time   ) {
      toast({
        title: "To'liq to'ldiring iltimos ☺️"
      })
    }else{

      let settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache"
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: message
        })
      };
      try {
        const response = await fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, settings);
  
        if (response.ok) {
          toast({
            title: "Habaringizdan mamnunmiz ☺️",
            description: "Habaringiz telegram botga yuborildi ",
          })
     
        } else {
          console.error('Failed to send message');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
      setTitle("");
      setDescription("");
      setTime("");
    }




  };

  return (
    <form action="" onSubmit={handleSubmit} className='sm:w-[600px] mx-auto mt-14 '>
      <div className='sm:w-full  flex flex-col gap-10 mt-5 justify-center h-[100%] '>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Your Name" className='p-6  shadow-lg rounded-sm ' />
        <Input onChange={(e) => setDescription(e.target.value)} value={description} type="email" placeholder="Email" className='p-6  shadow-lg rounded-sm ' />
        <Textarea onChange={(e) => setTime(e.target.value)} value={time} placeholder="Type your message here." className='  shadow-lg rounded-sm ' />
        <Button type="submit" className='text-white hover:-mt-5 flex gap-2 hover:bg-red-600 p-6' style={{ transition: "1s all" }}>
          <div><p>Send</p></div>
          <div style={{ fontSize: "20px" }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" t="1569683742680" viewBox="0 0 1024 1024" version="1.1" class="Contact_sendIcon__7dE65" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
            </svg>
          </div>
        </Button>
      </div>
    </form>
  );
}

export default Contact;

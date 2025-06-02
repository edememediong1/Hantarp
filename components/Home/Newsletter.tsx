"use client"

import React from 'react'
import  Image from 'next/image'
import {useState, type FormEvent} from "react"
import { Loader2, CheckCircle, AlertCircle} from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({type: null, message: ""})

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {

      setStatus({
        type: "error",
        message: "Please enter a valid email address."
      })
      return;
    }

    setIsSubmitting(true);
    setStatus({type: null, message: ""})

    try {
      const response = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      })
      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Successfully subscribed to the newsletter!"
        })
        setEmail("")
      }else {
        throw new Error(data.error || "Subscription failed")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "An unexpected error occurred."
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FFD488] px-4 py-8 md:p-8 gap-4 w-full h-full text-[#004A61] justify-around items-center lg:h-[300px]">
        <section className='w-full'>
            <p className='mb-2'>Stay Connected</p>
            <h2 className="text-[#004A61] font-bold text-2xl md:text-3xl tracking-tighter">Stay in the Loop with HanTarp</h2>
            
            {/* Status Message */}
            {status.type && (
              <div 
                className={`mt-4 flex items-center gap-2 text-sm font-medium ${status.type === "success" ? "text-green-700": "text-red-700"}`}
              >
                {status.type === "success" ? <CheckCircle className='w-5 h-5' /> : <AlertCircle className='w-5 h-5' />}
                {status.message}
              </div>
            )}
        </section>
        <form onSubmit={handleSubmit}  className='flex border-2 border-[#004A61] rounded-full gap-2 h-[60px] justify-between md:max-w-[600px]'>
            <input 
              type="text" 
              name='newsletter' 
              id='newsletter' 
              placeholder='enter your mail here' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              disabled={isSubmitting} 
              required 
              className='w-full pl-6 outline-none '
            />
            <button className='bg-[#004A61] rounded-full p-3 h-full w-[60px] flex items-center justify-center' disabled={isSubmitting} type='submit'>
              {isSubmitting ? (
                <Loader2 className='w-5 h-5 text-white animate-spin' />
              ) : (
                <Image src="message.svg" alt='Subscribe' width={25} height={25} />
              )}

            </button>
        </form>
    </div>
  )
}

export default Newsletter
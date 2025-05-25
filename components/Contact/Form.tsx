'use client'

import React from 'react'
import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if(form.current){
      // Log the form data to debug  what's being sent
      const formData = new FormData(form.current);
      console.log('Form data being sent');
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`)
      });

      emailjs
        .sendForm(
          'service_dgbz3al',
          'template_kzrpoi8',
          form.current,
           {
            publicKey: 'D9xm9cd9VBmlpU7QL'
          }
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setSubmitStatus({
              success: true,
              message: 'Your message has been sent submitted'
            });
            form.current?.reset();
          },
          (error: {text: string}) => {
            console.log('FAILED...', error.text);
            setSubmitStatus({
              success: false,
              message: 'There was an error sending your message. Please try again later.'
            })
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        })
    }
  }

  return (
    <div className='bg-[#FFDAA3] space-y-5 px-4 py-8 md:p-8 w-full'>
        <h2 className='font-bold text-[1.5rem] text-[#004A61] text-center'>Clarify your Queries <br></br> Contact Us Now!</h2>
        <form ref={form}  onSubmit={sendEmail} action="" className='text-black font-semibold space-y-8 max-w-full'>
          <p>
            <input type="text" name='name' placeholder='Full Name' className='border-b-2 border-[#004A61] p-2 w-full outline-none'/>
          </p>
          <p>
            <input type="phone" name='phone' placeholder='Phone Number' className='border-b-2 border-[#004A61] p-2 w-full outline-none'/>
          </p>
          <p>
            <input type="email" name='email' placeholder='Email' className='border-b-2 border-[#004A61] p-2 w-full outline-none'/>
          </p>
          <p>
            <select name='service' className='max-w-full border-b-2 border-[#004A61] p-2 w-full outline-none '>
              <option className='bg-[#FFDAA3] hover:bg-[#004A61]'>Service Required</option>
              <option className='bg-[#FFDAA3] hover:bg-[#004A61]' value="IT Support">IT Support</option>
              <option className='bg-[#FFDAA3] hover:bg-[#004A61]' value="Cybersecurity and Compliance" >Cybersecurity and Compliance</option>
              <option className='bg-[#FFDAA3] hover:bg-[#004A61]' value="Cloud and Hybrid IT Solutions">Cloud and Hybrid IT Solutions</option>
              <option className='bg-[#FFDAA3] hover:bg-[#004A61]' value="Strategic IT Consulting">Cloud and Hybrid IT Solutions</option>
            </select>
          </p>
          <p>
            <textarea name="message" id="" placeholder='Additional message' className='border-b-2 border-[#004A61] w-full outline-none p-2 resize-none' rows={1}></textarea>
          </p>
          <button 
            type='submit'  
            className='bg-[#004A61] text-white w-full p-3 rounded-full '
            >
              {isSubmitting ? 'Sending...': 'Submit'}
          </button>
          {submitStatus && (
            <div className={`p-4 mb-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
    </div>
  )
}

export default Form
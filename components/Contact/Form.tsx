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
              message: 'Your message has been sent successfully'
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
           <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="bg-[#FFDAA3] border-b-2 border-[#004A61] p-2 w-full outline-none placeholder-[#004A61]/70 focus:border-[#004A61] transition-colors autofill:bg-[#FFDAA3] autofill:text-[#004A61] autofill:shadow-[inset_0_0_0px_1000px_#FFDAA3]"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="bg-[#FFDAA3] border-b-2 border-[#004A61] p-2 w-full outline-none placeholder-[#004A61]/70 focus:border-[#004A61] transition-colors autofill:bg-[#FFDAA3] autofill:text-[#004A61] autofill:shadow-[inset_0_0_0px_1000px_#FFDAA3]"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-[#FFDAA3] border-b-2 border-[#004A61] p-2 w-full outline-none placeholder-[#004A61]/70 focus:border-[#004A61] transition-colors autofill:bg-[#FFDAA3] autofill:text-[#004A61] autofill:shadow-[inset_0_0_0px_1000px_#FFDAA3]"
          />
        </div>

        <div className="relative">
          <select
            name="service"
            required
            className="bg-[#FFDAA3] border-b-2 border-[#004A61] p-2 w-full outline-none focus:border-[#004A61] transition-colors text-[#004A61] font-semibold appearance-none cursor-pointer autofill:bg-[#FFDAA3] autofill:text-[#004A61] autofill:shadow-[inset_0_0_0px_1000px_#FFDAA3]"
            defaultValue=""
          >
            <option value="" disabled className=" text-[#004A61]">
              Service Required
            </option>
            <option value="IT Support" className=" text-[#004A61] hover:bg-[#004A61] hover:text-[#FFDAA3]">
              IT Support
            </option>
            <option
              value="Cybersecurity and Compliance"
              className=" text-[#004A61] hover:bg-[#004A61] hover:text-[#FFDAA3]"
            >
              Cybersecurity and Compliance
            </option>
            <option
              value="Cloud and Hybrid IT Solutions"
              className="bg-[#FFDAA3] text-[#004A61] hover:bg-[#004A61] hover:text-[#FFDAA3]"
            >
              Cloud and Hybrid IT Solutions
            </option>
            <option
              value="Strategic IT Consulting"
              className="bg-[#FFDAA3] text-[#004A61] hover:bg-[#004A61] hover:text-[#FFDAA3]"
            >
              Strategic IT Consulting
            </option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="w-5 h-5 text-[#004A61]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Additional message"
            className="bg-[#FFDAA3] border-b-2 border-[#004A61] w-full outline-none p-2 resize-none placeholder-[#004A61]/70 focus:border-[#004A61] transition-colors autofill:bg-[#FFDAA3] autofill:text-[#004A61] autofill:shadow-[inset_0_0_0px_1000px_#FFDAA3]"
            rows={1}
          />
        </div>
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
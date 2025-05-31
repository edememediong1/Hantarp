'use client'
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Forms: React.FC = () => {
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
            'service_5xagpyb',
            'template_qcvuahh',
            form.current,
             {
              publicKey: 'iLRIjLtuIYYv07n6z'
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
    <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col bg-[#004A61] px-4 py-8 md:p-8 gap-4 w-full h-full text-white justify-around">
        <p className="text-[16px] md:text-[18px] font-medium">Get in touch</p>
        <h2 className="text-[#FFD488] font-bold text-2xl md:text-3xl">Contact Hantarp LLC</h2>
        <p>We’re committed to providing exceptional managed IT services tailored to your business requirements.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" name="fullname" id="fullname"  placeholder="Full Name" className="outline-none border-b-1 w-full p-2"/>
            <input type="text" name="company" id="company"  placeholder="Company" className="outline-none border-b-1 w-full p-2"/>
            <input type="email" name="email" id="email"  placeholder="Email" className="outline-none border-b-1 w-full p-2"/>
            <input type="tel" name="phone" id="phone"  placeholder="Phone" className="outline-none border-b-1 w-full p-2"/>
        </div>
        <div className="">
          <p className="text-xl font-bold">Feedback Type</p>
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-4 mt-4 lg:w-[80%] text-[16px] lg:text-[18px]">
            <span className="flex items-center gap-2">
              <input type="radio" name="feedback" id="inquiry" width={30} height={30} value='General Inquiry'/>
              <label htmlFor="inquiry">General Inquiry</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="feedback" id="inquiry" value='Service Complaint'/>
              <label htmlFor="complaint">Service Complaint</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="feedback" id="support" value='Technical Support' />
              <label htmlFor="support">Technical Support</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="feedback" id="suggest" value='Suggestion for Improvement'/>
              <label htmlFor="suggest">Suggestion for Improvement</label>
            </span>
          </section>
        </div>

        <div className="">
          <h2 className="text-xl font-bold">Service Category</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-4 mt-4 lg:w-[80%] text-[16px] lg:text-[18px]">
            <span className="flex items-center gap-2">
              <input type="radio" name="service" id="inquiry" width={30} height={30} value='Managed IT Services'/>
              <label htmlFor="inquiry">Managed IT Services</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="service" id="inquiry" value="Cybersecurity and Compliance" />
              <label htmlFor="complaint">Cybersecurity and Compliance</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="service" id="support" value="Cloud solutions"/>
              <label htmlFor="support">Cloud solutions</label>
            </span>
            <span className="flex items-center gap-2">
              <input type="radio" name="service" id="suggest" value="Strategic consulting" />
              <label htmlFor="suggest">Strategic consulting</label>
            </span>
          </section>
        </div>
        <button className="bg-[#FFD488] w-full text-[#000] rounded-full p-2 hover:bg-amber-500 font-medium">
          {isSubmitting ? 'Sending...': 'Submit'}
        </button>
          {submitStatus && (
            <div className={`p-4 mb-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}

    </form>
  )
}

export default Forms
import React from 'react'
import Image from 'next/image'

function Map() {
  return (
    <div className='relative w-full min-h-[400px] h-[400px] md:h-[800px] flex flex-col items-center justify-center gap-4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.2084751707575!2d-95.5177290792775!3d29.70295986731938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c25f206aaaab%3A0x556331facc79b00e!2s7322%20Southwest%20Fwy%20Ste%20755%2C%20Houston%2C%20TX%2077074%2C%20USA!5e0!3m2!1sen!2sng!4v1746491649799!5m2!1sen!2sng"  height="800"  loading="lazy" className='w-full' ></iframe>
        <section className='absolute  bottom-[10%] flex flex-col lg:flex-row gap-4 md:gap-8 items-center justify-center'>
            <div className='flex items-center bg-[rgb(255,218,163)] p-2 gap-2 w-[220px] rounded-full'>
                <span className='bg-[#004A61] p-2 rounded-full'>
                    <Image src="home_icon.svg" alt="home icon" width={17} height={1} className=''/>
                </span>
                <span>
                    <h2 className='text-[18px] font-bold text-[#004A61]'>Our Location</h2>
                    <p className='text-[14px] font-medium text-black'>Texas Houston</p>
                </span>
            </div>
            <div className='flex items-center bg-[#FFDAA3] p-2 gap-2 w-[220px] rounded-full'>
                <span className='bg-[#004A61] p-2 rounded-full'>
                    <Image src="phone_icon.svg" alt="home icon" width={15} height={15} className=''/>
                </span>
                <span>
                    <h2 className='text-[18px] font-bold text-[#004A61]'>Have Queries?</h2>
                    <p className='text-[14px] font-medium text-black'>info@hantarp.com</p>
                </span>
            </div>
            
        </section>
        
        
    </div>
  )
}

export default Map
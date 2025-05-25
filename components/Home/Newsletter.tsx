import React from 'react'
import  Image from 'next/image'

function Newsletter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#FFD488] px-4 py-8 md:p-8 gap-4 w-full h-full text-[#004A61] justify-around items-center lg:h-[300px]">
        <section className='w-full'>
            <p className='mb-2'>Stay Connected</p>
            <h2 className="text-[#004A61] font-bold text-2xl md:text-3xl tracking-tighter">Stay in the Loop with HanTarp</h2>
        </section>
        <section className='flex border-2 border-[#004A61] rounded-full gap-2 h-[60px] justify-between md:max-w-[600px]'>
            <input type="text" name='newsletter' id='newsletter' placeholder='enter your mail here' className='w-full pl-6 outline-none '/>
            <button className='bg-[#004A61] rounded-full p-3 h-full w-[60px] flex items-center justify-center'>
                <Image src="message.svg" alt='' width={25} height={25} />
            </button>
        </section>
    </div>
  )
}

export default Newsletter
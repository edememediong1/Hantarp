import React from 'react'

function Businesses() {
  return (
    <div className='bg-[#FFDAA3] p-4 md:p-8 space-y-6'>
        <h2 className='text-[#004A61] font-bold text-[1.7rem] md:text-4xl tracking-tight'>Why Businesses Choose Us</h2>
        <p className='md:text-[18px] w-full md:w-[80%] lg:w-[60%]'>Beyond Break-Fix: How Proactive IT Management Reduces Downtime, Lowers Costs, and Keeps Your Business Running Smoothly</p>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <article className='flex flex-col gap-4 rounded-2xl p-4 lg:h-[300px] text-white bg-stone-800 justify-end md:px-8 '>
                <p className='text-2xl font-bold'>Proactive; Not Reactive</p>
                <p>90% of issues resolved before you notice them. Our monitoring tools and certified engineers work while you sleep.</p>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>01</h2>
                </div>   
            </article>
            <article className='flex flex-col gap-4 rounded-2xl p-4 lg:h-[300px] text-white bg-violet-400 justify-end md:px-8 '>
                <p className='text-2xl font-bold'>Industry Tailored Expertise</p>
                <p>From HIPAA-compliant healthcare systems to financial data encryption, we speak your regulatory language.</p>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>02</h2>
                </div>   
            </article>
            <article className='flex flex-col gap-4 rounded-2xl p-4 lg:h-[300px] text-white  bg-[#1CB335] justify-end md:px-8 '>
                <p className='text-2xl font-bold'>No Longterm Lock in</p>
                <p>Month-to-month flexible plans with transparent pricing.</p>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>03</h2>
                </div>   
            </article>
            <article className='flex flex-col gap-4 rounded-2xl p-4 lg:h-[300px] text-white  justify-end md:px-8 bg-[#B38211]'>
                <p className='text-2xl font-bold'>Global Team, Local Understanding</p>
                <p>U.S.-based leadership with technicians in [regions] for 24/5 coverage.</p>
                <div className='flex justify-end w-full'>
                  <h2 className='text-7xl font-bold '>04</h2>
                </div>   
            </article>
      

        </section>
    </div>
  )
}

export default Businesses
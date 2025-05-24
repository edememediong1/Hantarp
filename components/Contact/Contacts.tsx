import React from 'react'
import Queries from './Queries'
import Form from './Form'

function Contacts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:py-16 md:px-8 px-4 py-8 gap-6'>
        <Queries/>
        <Form/>
    </div>
  )
}

export default Contacts
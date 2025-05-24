import Forms from './Forms'
import Map from './Map'

function Contact() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full'>
        <Map />
        <Forms />
    </div>
  )
}

export default Contact
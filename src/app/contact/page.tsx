import React from 'react'
import Image from 'next/image'



const contact = () => {
  return (
    <div>
      <Image 
      className="lg:w-5/6 md:w-4/5 w-full mb-10 object-cover object-center rounded flex justify-center items-center"
      src="/1.JPG"
      alt="Profile Picture"
      height={500}
      width={500}
      priority
  />
    </div>
  )
}

export default contact

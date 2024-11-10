import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <header className="text-pink-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
  <Link href="/" className="mr-5 hover:text-gray-900">
    Home
  </Link>
  <Link href="/about" className="mr-5 hover:text-gray-900">
    About
  </Link>
  <Link href="/contact" className="mr-5 hover:text-gray-900">
    Contact
  </Link>
</nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
  
      <span className="ml-3 text-xl">All About Jewellery</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Click to Buy
      
      </button>
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar

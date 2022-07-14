import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>

      {/* container */}
      <div className='px-2 flex justify-between items-center w-full h-full'>

        {/* logo & items */}
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mx-4 sm:text-4xl'>Brand</h1>

          <ul className=' hidden md:flex menu-items'>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>

        </div>

        {/* buttons */}
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-5'>Sign In</button>
          <button className='px-2 py-1'>Sign Up </button>
        </div>

        {/* humburger Menu */}
        <div className='md:hidden'>
          {navOpen ? <XIcon className='w-8 cursor-pointer' onClick={() => setNavOpen(!navOpen)} /> : <MenuIcon className='w-8 cursor-pointer' onClick={() => setNavOpen(!navOpen)} />}
        </div>


      </div>

      {/* drop down menu */}
      <ul className={navOpen ? 'absolute bg-zinc-200 w-full px-8 ' : 'hidden'}>
          <li className='border-b-2 border-zinc-300 w-full'>Home</li>
          <li className='border-b-2 border-zinc-300 w-full'>About</li>
          <li className='border-b-2 border-zinc-300 w-full'>Support</li>
          <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
          <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>

          <div className='flex flex-col my-3 '>
            <button className=' border-indigo-600 bg-transparent text-black py-4'>Sign In</button>
            <button className='mt-5 py-4'>Sign Up </button>
          </div>
      </ul>

    </div>
  )
}

export default Navbar
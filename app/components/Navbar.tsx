'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  return (

    <div className='flex  w-full justify-center p-3'>
      <nav className='flex  w-[90%] h-[66px]  rounded-full  bg-white text-black font-quicksand font-bold overflow-hidden'>



        <div className='hidden md:flex flex-10/12 items-center justify-end space-x-10 mr-15'>

          <Link href="#home">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>




        {/* Mobile View */}

        <div className='md:hidden relative flex  w-full '>

          {isNavBarOpen ?
            (
              <div className=' absolute w-3/4 h-[50vh] -left-4 -top-4 bg-white/30 backdrop-blur-md p-6 rounded-lg text-4xl text-black'>

                <div className='flex flex-col space-y-5'
                  onClick={() => { setIsNavBarOpen((prev) => !prev) }}

                >
                  <Link href="#home">Home</Link>
                  <Link href="#work">Projects</Link>
                  <Link href="#about">About</Link>
                  <Link href="#contact">Contact</Link>
                </div>
              </div>

            )
            :
            (<div className='flex flex-col justify-center gap-y-3 rounded-full w-20 p-5'
              onClick={() => { setIsNavBarOpen((prev) => !prev) }}
            >
              <hr className='w-full border-2 border-black' />
              <hr className='w-full border-2 border-black' />
              <hr className='w-full border-2 border-black' />

            </div>)
          }



        </div>
        <Link href='/admin'
          className='md:flex-2/12 flex items-center  justify-center border-2 border-white w-1/6 text-white rounded-r-full bg-[#222222] ml-auto cursor-pointer'>


          Admin Panel

        </Link>


      </nav>

    </div>
  )
}

export default Navbar
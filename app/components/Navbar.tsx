
'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {

      gsap.fromTo(menuRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, [isOpen]);

  const handleClose = () => {

    gsap.to(menuRef.current, {
      opacity: 0,
      y: -20,
      scale: 0.95,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setIsOpen(false)
    });
  };

  return (

    <div className='flex  w-full justify-center p-3'>
      <nav className='flex  w-[90%] h-[66px]  rounded-full  bg-white text-black font-quicksand font-bold overflow-hidden'>



        <div className='hidden md:flex flex-10/12 items-center justify-end space-x-10 mr-15'>

          <Link href="#home">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>




        <Link href='/admin'
          className='hidden  md:flex  items-center  justify-center border-2 border-white w-1/6 text-white rounded-r-full bg-[#222222] ml-auto cursor-pointer'
        >
          Admin Panel

        </Link>

        <button
          className='md:hidden flex items-center text-4xl ml-7'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>
      {isOpen && (
        <div
          ref={menuRef}
          className='absolute md:hidden top-20 w-[80%] bg-white text-black rounded-2xl shadow-lg p-5 flex flex-col items-center space-y-5 font-quicksand font-bold z-50'
        >
          <Link href="#home" onClick={handleClose} className='border-b-2 border-black'>Home</Link>
          <Link href="#projects" onClick={handleClose} className='border-b-2 border-black'>Projects</Link>
          <Link href="#about" onClick={handleClose} className='border-b-2 border-black'>About</Link>
          <Link href="#contact" onClick={handleClose} className='border-b-2 border-black'>Contact</Link>
          <Link
            href='/admin'
            onClick={handleClose}
            className='flex items-center justify-center border-2 border-white w-full py-2 text-white rounded-full bg-[#222222] cursor-pointer'
          >
            Admin Panel
          </Link>
        </div>
      )}

    </div >
  )
}

export default Navbar
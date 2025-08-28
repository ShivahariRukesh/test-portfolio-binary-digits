"use client"

import Image from 'next/image'

const Hero = () => {



  return (
    <div
      className="h-screen bg-[url('/images/hero-moon.svg')] bg-cover bg-center"
    >
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-4xl">

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="block">FROM DARKNESS TO THE</span>
                <span className="block">DAWN, IDEAS TAKE FLIGHT.</span>
              </h1>
            </div>


            <div className="mb-12">
              <p className="text-lg md:text-xl text-gray-300">
                Hi, I am <span className="font-semibold text-white">John Doe</span>. Welcome to my portfolio.
              </p>
            </div>


            <button
              className="border border-gray-500 bg-[#222222] text-white px-8 py-3 rounded-r-full hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105"
            >
              Download resume
            </button>
          </div>
        </div>
      </section>
    </div>

  )
}


export default Hero
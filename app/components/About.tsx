import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>About
      <div className='flex flex-col gap-y-50 px-3 py-14'>

        <div
          className="flex flex-col justify-center space-y-5 bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/aboutUs-moon.svg')", backgroundSize: "400px", height: "500px" }}
        >

          <hr className='border-1 border-[#555555] w-1/2 mx-auto' />
          <div className='mt-10 mb-20 text-6xl'>
            LESS DOUBT
          </div>

          <div className='  text-6xl self-end'>
            MORE OUTPUT
          </div>
          <hr className='border-1 border-[#555555] w-1/2 mx-auto' />

          <div>
            {/* <Image src='/images/aboutUs-moon.svg' alt="About us moon" height={200} width={200}/> */}
          </div>

        </div>

        {/* Namaste to Let's know more Section */}
        <div className='flex flex-col ml-50 gap-y-8'>

          <div className='text-5xl'>
            NAMASTE 🙏<br />
            I'M JOHN DOE
          </div>

          <div className='flex flex-col ml-5 gap-y-3'>
            Tell about your intro and story
            <hr className='border-1 border-dotted w-1/2' />
            <hr className='border-1 border-dotted w-1/2' />
            <div className='flex gap-x-4  text-3xl mt-10'>
              <span> Let's know more </span>
              <Image src='/images/arrow.svg' width={25} height={25} alt="Arrow icon in about us" />
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
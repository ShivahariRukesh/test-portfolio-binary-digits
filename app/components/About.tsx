'use client'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {

    gsap.from(".letter-animate",
      {
        scrollTrigger: {
          trigger: ".letter-animate",
          start: "top center",
          end: "bottom ",
          scrub: 2,

        },
        x: (i) => {
          if (i === 0) {
            return 400
          } else {
            return -400
          }
        },

      })

    gsap.from(".horizontal-line",

      {
        scrollTrigger: {
          trigger: ".letter-animate",
          start: "top center",
          end: "bottom",
          scrub: 1
        },
        width: "100%",
        borderWidth: "3",
        borderRadius: "100%",
        borderColor: 'white',

      }
    )


  }, [])
  return (
    <section id="about">
      <div className='flex flex-col gap-y-50 px-3 py-14 font-abeezee'>

        <div
          className="flex flex-col justify-center space-y-5 bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/aboutUs-moon.svg')", backgroundSize: "400px", height: "500px" }}
        >

          <hr className='horizontal-line border-1 border-[#555555] w-1/2 mx-auto' />
          <div className='letter-animate mt-10 mb-20 text-6xl'>
            LESS DOUBT
          </div>

          <div className='letter-animate  text-6xl self-end'>
            MORE OUTPUT
          </div>
          <hr className='horizontal-line border-1 border-[#555555] w-1/2 mx-auto' />



        </div>

        <div className='flex flex-col ml-50 gap-y-8'>

          <div className='text-5xl'>
            NAMASTE 🙏<br />
            I&apos;M RUKESH SHIVAHARI
          </div>

          <div className='flex flex-col  gap-y-3 font-quicksand '>


            <div className="typing-animation">
              I hope that you like my portfolio, Thank you !!
            </div>


            <div className='flex gap-x-4  text-3xl mt-10'>
              <span> Let&apos;s know more </span>
              <Image src='/images/arrow.svg' width={25} height={25} alt="Arrow icon in about us" />
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
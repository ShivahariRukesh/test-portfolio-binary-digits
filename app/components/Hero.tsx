'use client'
import gsap from "gsap"
import { useEffect } from "react";

const Hero = () => {


  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#bg-moon",
        start: "top top",
        end: "+=200",
        scrub: 1,

      }
    })

    t1.to("#bg-moon-right", { opacity: 0, ease: "none" })
      .to("#bg-moon-left", { opacity: 1, ease: "none" })

  }, []);

  return (
    <div className="h-screen relative ">
      <img
        src="/images/hero-moon.svg"
        alt="Moon"
        className=" absolute top-0 right-30 w-[70%] h-[90%] object-cover z-0 "
        id="bg-moon-right"
      />

      <img
        src="/images/hero-moon.svg"
        alt="Moon"
        className=" absolute opacity-0 transform scale-x-[-1] top-0 left-10 w-[70%] h-[90%] object-cover z-0"
        id="bg-moon-left"
      />
      <section id="home" className="min-h-screen flex  items-center ml-[530px] relative   overflow-hidden">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 text-center md:text-left ">
          <div className="max-w-4xl ml-0">

            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-medium font-abeezee leading-tight">
                <span className="block">FROM DARKNESS TO THE</span>
                <span className="block">DAWN, IDEAS TAKE FLIGHT.</span>
              </h1>
            </div>


            <div className="ml-5 font-quicksand">
              <p className="text-lg md:text-lg text-gray-300 my-12">
                Hi, I am <span className="font-semibold text-white">Rukesh Shivahari</span>. Welcome to my portfolio.
              </p>


              <button
                className="border border-gray-500 bg-[#222222] text-white px-8 py-3 rounded-r-full hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105"
              >
                Download resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}


export default Hero
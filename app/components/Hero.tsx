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
      .to(".hero-header", { color: "black" }, "<")
      .to("#bg-moon-left", { opacity: 1, ease: "none" })

  }, []);

  return (
    <div className="h-screen relative ">
      <div className="hidden md:block">

        <img
          src="/images/hero-moon.svg"
          alt="Moon"
          className=" absolute top-0 right-30 w-[70%] h-[90%] object-cover z-0 "
          id="bg-moon-right"
        />

        <img
          src="/images/hero-moon.svg"
          alt="Moon"
          className=" absolute opacity-0 transform scale-x-[-1] rotate-90 top-0 left-10 w-[70%] h-[90%] object-cover -z-10"
          id="bg-moon-left"
        />
      </div>
      <section id="home"
        className="min-h-screen flex items-center justify-center md:justify-start lg:ml-[530] relative"
      >
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 text-center md:text-left ">
          <div className="max-w-4xl ml-0">

            <div>
              <h1 className="hero-header text-4xl sm:text-6xl lg:text-6xl font-medium font-abeezee leading-tight">
                <span className="block">FROM DARKNESS TO THE</span>
                <span className="block">DAWN, IDEAS TAKE FLIGHT.</span>
              </h1>
            </div>


            <div className="ml-5 font-quicksand">
              <p className="text-lg md:text-lg text-gray-300 my-12">
                Hi, I am <span className="font-semibold text-white">Rukesh Shivahari</span>. Welcome to my portfolio.
              </p>


              <button
                className="border border-gray-500 bg-[#222222] text-white px-8 py-3 rounded-r-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Download resume
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-8 left-1/3 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

      </section>

      <div className="md:hidden absolute top-20 right-4 w-20 h-20 bg-gradient-to-br from-white to-transparent rounded-full blur-xl"></div>
      <div className="md:hidden absolute bottom-32 left-8 w-16 h-16 bg-gradient-to-br from-white to-transparent rounded-full blur-lg"></div>
      <div className="md:hidden absolute top-1/3 left-4 w-12 h-12 bg-gradient-to-br from-white to-transparent rounded-full blur-md"></div>
    </div>

  )
}


export default Hero
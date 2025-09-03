import Image from "next/image"
import StarsAnimation from "./StarsAnimation"
import './index.css'


const Contact = () => {


  return (


    <section id="contact" className="relative p-10 sm:p-6 lg:p-8">
      <StarsAnimation />
      <div className="h-[250px] sm:h-[300px] lg:h-[350px] relative z-10 flex flex-col lg:flex-row items-center justify-center lg:space-x-10 space-y-6 lg:space-y-0 text-white px-4">

        <div className="text-lg md:text-4xl lg:text-5xl font-abeezee text-center lg:text-left">
          Want to <br />
          collaborate ??
        </div>

        <div className="font-quicksand text-center lg:text-left max-w-md lg:max-w-none">
          <div className="text-lg sm:text-xl mb-4">
            Let&apos;s Connect
          </div>

          <div className="hidden md:block text-sm sm:text-base mb-4 leading-relaxed">
            Feel free to reach out for collaborations or just a friendly hello
          </div>

          <div className="flex justify-center lg:justify-start mb-6">
            <Image
              src="/images/emoji-waving-hand.svg"
              height={36}
              width={36}
              alt="waving hand emoji"
              className="wave"
            />
          </div>

          <button className="border border-gray-500 bg-[#222222] px-6 sm:px-8 py-2 sm:py-3 rounded-r-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
            Send an Email
          </button>
        </div>
      </div>
    </section>

  )
}

export default Contact
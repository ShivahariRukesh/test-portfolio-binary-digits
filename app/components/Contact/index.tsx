import Image from "next/image"
import StarsAnimation from "./StarsAnimation"
import './index.css'


const Contact = () => {


  return (


    <section id="contact" className="relative p-8 ">
      <StarsAnimation />
      <div className=" h-[300px] relative z-10 flex  items-center justify-center space-x-10  text-white">

        <div className=" text-5xl font-abeezee">
          Want to <br />
          collaborate ??
        </div>
        <div className=" font-quicksand">
          Let&apos;s Connect <br />
          Feel free to reach out for collaborations or just a friendly hello <br />
          <Image
            src="/images/emoji-waving-hand.svg"
            height={36}
            width={36}
            alt="waving hand emoji"
            className="wave"
          />

          <br />

          <button
            className="border border-gray-500 bg-[#222222] px-8 py-3 rounded-r-full hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105"
          >
            Send an Email
          </button>


        </div>
      </div>
    </section>

  )
}

export default Contact
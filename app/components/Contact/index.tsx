import StarsAnimation from "./StarsAnimation"



const Contact = () => {


  return (


    <div className="relative p-8 ">
      <StarsAnimation />
      <div className=" h-[300px] relative z-10 flex  items-center justify-center space-x-10  text-white">

        <div className=" text-5xl">
          Want to <br />
          collaborate ??
        </div>
        <div className=" ">
          Let&apos;s Connect <br />
          Feel free to reach out for collaborations or just a friendly hello <br />
          👋 <br />

          <button
            className="border border-gray-500 bg-[#222222] px-8 py-3 rounded-r-full hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105"
          >
            Send an Email
          </button>


        </div>
      </div>
    </div>

  )
}

export default Contact
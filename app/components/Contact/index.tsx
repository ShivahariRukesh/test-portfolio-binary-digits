import StarsAnimation from "./StarsAnimation"



const Contact = () => {


  return (


    <div className="relative p-8 ">
      <StarsAnimation />
      <div className="border-2 border-amber-500 relative z-10 flex  items-center justify-center space-x-10 min-h-screen text-white">

        <div className=" text-5xl">
          Want to collaborate ??
        </div>
        <div className=" ">
          Let's Connect <br />
          Feel free to reach out for collaborations or just a friendly hello <br />
          👋 <br />

          <button>Send an Email</button>


        </div>
      </div>
    </div>

  )
}

export default Contact
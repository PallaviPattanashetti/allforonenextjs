import React from 'react'
import BG from "@/public/assets/BG.png";

const page = () => {
  return (
    <div  className="bg-[url(/assets/BG.png)] min-h-screen bg-cover">
     <h1 className="font-['Irish_Grover'] text-[96px] text-white text-center">
            {" "}
            Say Hello
          </h1>
    </div>
  )
}

export default page

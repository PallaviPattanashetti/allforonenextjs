"use client";
import React, { useState } from "react";
import BG from "@/public/assets/BG.png";
import SayHelloFetch from "@/app/Scripts/sayhello";
import { Button } from "flowbite-react/components/Button";
import Link from "next/link";

const Page = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");


  const handleSubmit = async  () => {

      let data = await SayHelloFetch(name); 

    setGreeting(data); 
    console.log(data);
  };

  return (
    <div className="bg-[url(/assets/BG.png)] min-h-screen bg-cover">
      <h1 className="font-['Irish_Grover'] text-[96px] text-white text-center">
        {" "}
        Say Hello
      </h1>
      <div className="flex flex-col items-center justify-start pt-10 min-h-screen space-y-2">
        <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
          Enter Name
        </p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full max-w-[800px] h-24 rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center mb-20 text-white text-[32px] px-6 outline-none"
        />
        <button
          onClick={handleSubmit}
          className="w-[263px] h-[79px] bg-[#880F0F]/90 border-2 border-white rounded-[10px] mb-20 flex items-center justify-center cursor-pointer hover:bg-[#880F0F] transition-colors font-['Instrument_Sans'] text-[32px] font-bold text-white"
        >
          SUBMIT
        </button>
        <div className="w-full max-w-[800px] h-24 rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-[32px] font-bold p-8">
    {greeting}
</div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mt-12 mb-25">
 
  <Link 
    href="/page" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    ← Back Home
  </Link>

  
  <Link 
    href="/pages/Adding" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    Next Page →
  </Link>
</div>
      </div>
    </div>
  );
};

export default Page;

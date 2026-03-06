"use client"

import React, { useState } from "react";
import BG from "@/public/assets/BG.png";
import PickerFetch from "@/app/Scripts/restaurentpicker";
import { Button } from "flowbite-react";
import Link from "next/dist/client/link";

const page = () => {

const [category, setCategory] = useState("");

const handleQuestions = async () => {
    let data = await PickerFetch(category);
    setCategory(data);
    console.log(data);
  };




  return (
    <div className="bg-[url(/assets/BG.png)] min-h-screen bg-cover">
      <h1 className="font-['Irish_Grover'] text-[96px] text-white text-center">
        {" "}
        Restaurent Picker
      </h1>

      <div className="flex flex-col items-center justify-start pt-10 min-h-screen space-y-2">
        <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
          Enter Category(American/Indian/Italian)
        </p>

        <div
       
          className="w-218 h-24 rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center mb-20 text-white text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
        ></div>

        <Button
       onClick={handleQuestions} 
          className="w-65.75 h-19.75 bg-[#880F0F]/90 border-2 border-white rounded-[10px] mb-20 flex items-center justify-center cursor-pointer hover:bg-[#880F0F] transition-colors"
        >
          <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
            Get Sugesttion
          </p>
        </Button>

        <div
         
          className="w-218 h-80 rounded-[25px] bg-black/60  flex items-center justify-center text-white text-[32px] font-bold p-8"
        >{category}</div>

        <div className="flex items-center justify-center gap-12 w-full mb-25">
          <Link
       href="../" 
            className="font-['Instrument_Sans'] text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg mt-24"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";

import React, { useState } from "react";
import BG from "@/public/assets/BG.png";
import MagicFetch from "@/app/Scripts/magic8balls";
import { Button } from "flowbite-react";
import Link from "next/link";

const MagicBallsPage = () => {
  const [questions, setQuestions] = useState("");
  const[result, setResult]=useState("");


  const handleQuestions = async () => {
    let data = await MagicFetch(questions);
   setResult(data);
    console.log(data);
  };

  return (
    <div className="bg-[url(/assets/BG.png)] min-h-screen bg-cover">
      <h1 className="font-['Irish_Grover'] text-[96px] text-white text-center">
        {" "}
        Magic 8 Balls
      </h1>

      <div className="flex flex-col items-center justify-start pt-10 min-h-screen space-y-2">
        <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
          What is your question?
        </p>

        <input
          type="text"
          value={questions}
          onChange={(event) => setQuestions(event.target.value)}
          placeholder="type..."
          className="w-[800px] h-24 rounded-[25px] bg-black/60 border-2 border-white text-white text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6 text-center"
        />

        <Button
       onClick={handleQuestions}
          className="w-65.75 h-19.75 bg-[#880F0F]/90 border-2 border-white rounded-[10px] mb-20 mt-15
          flex items-center justify-center cursor-pointer hover:bg-[#880F0F] transition-colors"
        >
          <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
            SUBMIT
          </p>
        </Button>

        <div
          
          className="w-218 h-24 rounded-[25px] bg-black/60  flex items-center justify-center text-white text-[32px] font-bold p-8"
        > {result}</div>
        

 <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mt-12 mb-25">
 
  <Link 
    href="../" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    ← Back Home
  </Link>

  
  <Link 
    href="/pages/RestoPicker" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    Next Page →
  </Link>
</div>
      </div>
    </div>
  );
};

export default MagicBallsPage;

"use client";
import React, { useState } from "react";
import BG from "@/public/assets/BG.png";
import AddingFetch from "@/app/Scripts/adding";
import Link from "next/link";

const AddingPage = () => {
  const [Num1, setNum1] = useState("");
  const [Num2, setNum2] = useState("");
  const [sum, setSum] = useState("");

  const handleCalculate = async () => {
    let data = await AddingFetch(Num1, Num2);
    setSum(data);
    console.log(data);
  };

  return (
    <div className="bg-[url(/assets/BG.png)] min-h-screen bg-cover">
      <h1 className="font-['Irish_Grover'] text-[96px] text-white text-center">
        Adding
      </h1>

      <div className="flex flex-col items-center justify-start pt-10 min-h-screen space-y-2">
        <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
          Enter First Number
        </p>
        <input
          type="number"
          value={Num1}
          onChange={(event) => setNum1(event.target.value)}
          placeholder="0"
          className="w-[800px] h-24 rounded-[25px] bg-black/60 border-2 border-white text-white text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6 text-center"
        />

        <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
          Enter Second Number
        </p>
        <input
          type="number"
          value={Num2}
          onChange={(event) => setNum2(event.target.value)}
          placeholder="0"
          className="w-[800px] h-24 rounded-[25px] bg-black/60 border-2 border-white text-white text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6 text-center"
        />

        <button
          onClick={handleCalculate}
          className="w-[263px] h-[79px] bg-[#880F0F]/90 border-2 border-white rounded-[10px] mb-20 flex items-center justify-center cursor-pointer hover:bg-[#880F0F] transition-colors mt-10"
        >
          <span className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
            SUBMIT
          </span>
        </button>

        <p className="font-['Instrument_Sans'] text-[32px] font-bold text-white">
          Sum of the numbers
        </p>

        <div className="w-[872px] h-[96px] rounded-3xl bg-black/60  flex items-center justify-center mb-20 text-white text-[32px] font-bold font-['Instrument_Sans'] px-6">
          {sum !== null ? sum : "..."}
        </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mt-12 mb-25">
 
  <Link 
    href="/pages/homepage" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    ← Back Home
  </Link>

  
  <Link 
    href="/pages/AskQue" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    Next Page →
  </Link>
</div>
      </div>
    </div>
  );
};

export default AddingPage;

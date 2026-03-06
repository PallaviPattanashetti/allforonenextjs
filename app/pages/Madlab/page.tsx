// 


"use client";

import React, { useState } from "react";
import BG from "@/public/assets/BG.png";
import MadlabFetch from "@/app/Scripts/madlab";
import { Button } from "flowbite-react";
import Link from "next/link";

const page = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [noun, setNoun] = useState("");
  const [adjective, setAdjective] = useState("");
  const [adverb, setAdverb] = useState("");
  const [animal, setAnimal] = useState("");
  const [sillyword, setSillyword] = useState("");
  const [food, setFood] = useState("");
  const [otherfriends, setOtherfriends] = useState("");
  const [inputs, setInputs] = useState("");

  const handleCategory = async () => {
    let data = await MadlabFetch(
      name,
      place,
      city,
      noun,
      adjective,
      adverb,
      animal,
      sillyword,
      food,
      otherfriends
    );
    setInputs(data);
    console.log(data);
  };

  return (
    <div className="bg-[url(/assets/BG.png)] min-h-screen bg-cover bg-fixed px-4 py-8 flex flex-col items-center">
      <h1 className="font-['Irish_Grover'] text-6xl md:text-[96px] text-white text-center mb-8">
        MadLab
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-[1100px] mb-12">
        
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Name</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Place</p>
          <input
            type="text"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

    
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter City</p>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

      
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Noun</p>
          <input
            type="text"
            value={noun}
            onChange={(event) => setNoun(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

        
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Adjective</p>
          <input
            type="text"
            value={adjective}
            onChange={(event) => setAdjective(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

       
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Adverb</p>
          <input
            type="text"
            value={adverb}
            onChange={(event) => setAdverb(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

       
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Animal</p>
          <input
            type="text"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

       
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Silly word</p>
          <input
            type="text"
            value={sillyword}
            onChange={(event) => setSillyword(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

       
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter Food</p>
          <input
            type="text"
            value={food}
            onChange={(event) => setFood(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>

       
        <div>
          <p className="text-white font-['Instrument_Sans'] mb-2 ml-2">Enter otherfriends</p>
          <input
            type="text"
            value={otherfriends}
            onChange={(event) => setOtherfriends(event.target.value)}
            placeholder="type..."
            className="w-full h-20 md:h-[104px] rounded-[25px] bg-black/60 border-2 border-white flex items-center justify-center text-white text-2xl md:text-[32px] font-bold font-['Instrument_Sans'] outline-none px-6"
          />
        </div>
      </div>

      <Button
        onClick={handleCategory}
        className="w-full max-w-[400px] h-20 bg-[#880F0F]/90 border-2 border-white rounded-[10px] mb-20 flex items-center justify-center cursor-pointer hover:bg-[#880F0F] transition-colors"
      >
        <p className="font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white">
          Generate Story
        </p>
      </Button>

      <div className="flex flex-col w-full max-w-[1100px] items-center">
        <div className="w-full md:w-[700px] min-h-[400px] md:h-[600px] rounded-[25px] bg-black/60 flex items-start justify-center text-white text-lg md:text-[24px] font-bold p-8 pt-12 overflow-y-auto">
          {inputs}
        </div>
      </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mt-12 mb-25">

  <Link 
    href="/pages/homepage" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    ← Back Home
  </Link>


  <Link 
    href="/pages/AlphaReverse" 
    className="w-full md:w-auto font-['Instrument_Sans'] text-2xl md:text-[32px] font-bold text-white bg-white/10 px-10 py-3 rounded-[15px] border-2 border-white/30 hover:bg-[#880F0F]/90 hover:border-white transition-all shadow-lg text-center"
  >
    Next Page →
  </Link>
</div>
    </div>
  );
};

export default page;
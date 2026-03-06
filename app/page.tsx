
import BG from "@/public/assets/BG.png";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <main>
        <div className="bg-[url(/assets/BG.png)] min-h-screen bg-cover">
          <h1 className="font-['Irish_Grover'] text-[96px] text-white text-center">
            {" "}
            Welcome To All For One
          </h1>
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-[921px] h-[774px] rounded-[25px] bg-black/60 flex flex-col items-center justify-center p-8">
              <ol className="flex flex-col items-start space-y-6">
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 
                 <Link href="/pages/SayHello">1. Say Hello</Link>
                </li>
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/Adding">2.Adding </Link>
            
                </li>
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/AskQue">3. Asking Questions</Link>
              
                </li>
                
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/Madlab">4.MadLab</Link>
           
                </li>
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/AlphaReverse">5.Alpha Reverse</Link>
           
                </li>
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/NumReverse">6.Number Reverse It</Link>
                  
                </li>
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/Magic8Balls">7.Magic 8 Balls</Link>
              
                </li>
                <li className="font-['Irish_Grover'] text-[36px] text-white hover:text-[#880F0F] transition-colors">
                 <Link href="/pages/RestoPicker">8. Restaurent Picker</Link>
               
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative shadow-[15px_25px_80px_-19px_rgba(0,0,0,0.3)] shadow-black   w-80 h-80  mt-5 bg-white   rounded-full  flex justify-center items-center">
        <div className="w-72 h-72 bg-gradient-to-b  from-[#F1F1F1] to-[#F8F8F8] rounded-full shadow-md flex justify-center items-center ">
          <div className="w-8 h-8 bg-gradient-to-b from-[#646464] to-[#cbcaca] rounded-full flex justify-center items-center ">
            <Image
              alt="gear"
              src="/assets/gear.svg"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
        <div className="absolute bottom-1 -left-5 flex rounded-full bg-gray-400 backdrop-blur-md bg-opacity-30 py-2 px-1 z-10">
          <div className="flex justify-between items-center">
            <div className="-space-x-3 flex w-28 justify-center">
              <ChevronRight color="white" opacity={0.5}></ChevronRight>
              <ChevronRight color="white"></ChevronRight>
            </div>

            <div className="w-11 h-11 bg-white rounded-full flex justify-center items-center">
              <Check size={18} color="black"></Check>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

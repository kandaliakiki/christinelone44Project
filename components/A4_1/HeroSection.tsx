import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col  justify-center ">
      <div className="w-44 h-44 bg-hero-a4-background-2  bg-[left_39px_top_28px] bg-[length:150px_150px] bg-no-repeat rounded-full -translate-x-10 -translate-y-7"></div>

      <div className="relative w-80 h-80 z-10 bg-white  bg-center bg-contain rounded-full  self-center -mt-24 flex justify-center items-center">
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
      </div>

      <div className="w-48 h-48 relative rounded-full bg-gradient-to-br from-white via-[#EEACA8] to-transparent  -mt-16 ml-24 flex self-center justify-center items-center ">
        <div className="w-[185px] h-[185px] bg-[#DC5049]   bg-center bg-contain rounded-full  inset-2 flex justify-center items-center">
          <div className="absolute w-40 h-40 bg-hero-a4-background-1   bg-center bg-contain rounded-full z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

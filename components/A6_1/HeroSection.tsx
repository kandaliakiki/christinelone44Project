import React from "react";

const HeroSection = () => {
  return (
    <div className="w-80 h-80 rounded-full border-[#BBC1B6] border border-dashed border-transparent bg-transparent relative flex justify-center items-center mt-10">
      <div className="w-56 h-56 rounded-full border-[#A3AAA4] border border-dashed border-transparent bg-transparent flex justify-center items-center ">
        <div
          className="relative w-24 h-24  rounded-full overflow-hidden  self-center mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:100px_100px]"
        ></div>
      </div>
      <div
        className="absolute w-11 h-11   rounded-full overflow-hidden   bottom-14 right-16 mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"
      ></div>
      <div
        className="absolute w-11 h-11   rounded-full overflow-hidden   top-5 right-8 mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"
      ></div>
      <div
        className="absolute w-11 h-11   rounded-full overflow-hidden   top-14 left-0 mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"
      ></div>
      <div className="absolute w-8 h-8 bg-[#E33E3C]  rounded-full overflow-hidden   bottom-24 left-11 mt-1"></div>
      <div className="absolute w-8 h-8 bg-[#E33E3C]  rounded-full overflow-hidden   top-28 -right-3 mt-1"></div>
      <div className="absolute w-8 h-8 bg-[#E33E3C]  rounded-full overflow-hidden   top-28 -right-3 mt-1"></div>
      <div className="absolute w-8 h-8 bg-[#0E2432]  rounded-full overflow-hidden   -bottom-4 right-36 mt-1"></div>
      <div className="absolute w-8 h-8 bg-[#0E2432]  rounded-full overflow-hidden   -top-5 right-40 mt-1"></div>
    </div>
  );
};

export default HeroSection;

import Image from "next/image";
import React from "react";

const BottomControls = () => {
  return (
    <div className="z-30 fixed bottom-5 left-1/2 transform -translate-x-1/2 rounded-full p-3 bg-slate-700 bg-opacity-60 backdrop-brightness-150 backdrop-blur-md flex gap-2">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
        <Image
          alt="home icon"
          src="/assets/home_a4.svg"
          width={24}
          height={24}
        ></Image>
      </div>
      <div className="w-16 h-16 bg-gray-300 bg-opacity-30 rounded-full flex items-center justify-center">
        <Image
          alt="heart icon"
          src="/assets/heart_a4.svg"
          width={30}
          height={30}
        ></Image>
      </div>
      <div className="w-16 h-16 bg-gray-300 bg-opacity-30 rounded-full flex items-center justify-center">
        <Image
          alt="paste icon"
          src="/assets/paste_a4.svg"
          width={30}
          height={30}
        ></Image>
      </div>
      <div className="relative w-16 h-16 bg-gray-300 bg-opacity-30 rounded-full flex items-center justify-center">
        <Image
          alt="profile icon"
          src="/assets/profile_a4.svg"
          width={30}
          height={30}
        ></Image>

        <div className="absolute top-2` right-1 w-2 h-2 bg-[#CFF0A5] rounded-full"></div>
      </div>
    </div>
  );
};

export default BottomControls;

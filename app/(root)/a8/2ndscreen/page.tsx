import { ChevronLeft, PhoneMissed, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full bg-white rounded-3xl py-3">
        <div className="flex gap-3 items-center px-5">
          <div className="w-12 h-12 rounded-full bg-[#ECECEC] flex items-center justify-center">
            <ChevronLeft size={24} color="black" />
          </div>
          <div className="flex-1  flex flex-col items-center -space-y-1">
            <p className="font-medium text-lg">Zara</p>
            <p className=" text-sm text-black/40">United Kingdom</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#ECECEC] flex items-center justify-center">
            <Image
              alt="menu icon"
              src="/assets/menu-a8.svg"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
        <div className="w-full px-1 mt-3 flex justify-center ">
          <div className="relative h-[36rem] w-[23rem] bg-red-300 rounded-3xl bg-[left_-3rem_top_0px] bg-[length:580px_580px] bg-girl2-background-dateapp p-1 ">
            <div className="relative w-20 h-24    rounded-3xl overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:97px_97px]"></div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center px-5 mt-5">
          <div className="w-14 h-14 rounded-full bg-[#ECECEC] flex items-center justify-center">
            <Video size={24} color="black" fill="black" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#ECECEC] flex items-center justify-center ">
            <Image
              alt="menu icon"
              src="/assets/mic.svg"
              width={24}
              height={24}
            ></Image>
          </div>
          <div className="w-14 h-14 rounded-full bg-[#FE5145] flex items-center justify-center">
            <PhoneMissed size={24} fill="white" stroke="white" />
          </div>
          <div className="w-14 h-14 rounded-full bg-[#ECECEC] flex items-center justify-center ">
            <Image
              alt="menu icon"
              src="/assets/headphone.svg"
              width={24}
              height={24}
            ></Image>
          </div>
          <div className="w-14 h-14 rounded-full bg-[#1C1C1C]  flex items-center justify-center ">
            <Image
              alt="menu icon"
              src="/assets/gear-a8-2.svg"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

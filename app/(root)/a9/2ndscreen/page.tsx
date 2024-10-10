import ProfileCard from "@/components/A9_1/ProfileCard";
import ProfileCard2 from "@/components/A9_1/ProfileCard2";
import { ChevronLeft, Heart, RotateCcw, X, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex w-full text-white items-center  ">
        <div className="relative w-12 h-12  rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>

        <div className="flex-1 flex justify-center">
          <p className="text-3xl font-light font-clemente">e.</p>
        </div>
        <Image
          alt="filter icon"
          src="/assets/filter-a9.svg"
          width={27}
          height={27}
        ></Image>
      </div>
      <div className="flex justify-center mt-10">
        <ProfileCard2></ProfileCard2>
      </div>

      <div className="flex justify-center gap-7 mt-5">
        <div className="w-11 h-11 rounded-full bg-[#404040] flex justify-center items-center">
          <RotateCcw size={30} color="white" strokeWidth={1}></RotateCcw>
        </div>

        <div className="w-11 h-11 rounded-full bg-[#404040] flex justify-center items-center">
          <X size={30} color="white" strokeWidth={1}></X>
        </div>

        <div className="w-11 h-11 rounded-full bg-[#404040] flex justify-center items-center">
          <Heart size={27} color="white" fill="white"></Heart>
        </div>

        <div className="w-11 h-11 rounded-full bg-[#404040] flex justify-center items-center">
          <Zap size={25} color="white" fill="white"></Zap>
        </div>
      </div>
    </div>
  );
};

export default page;

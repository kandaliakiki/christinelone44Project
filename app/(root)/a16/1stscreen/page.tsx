import { feelingsList } from "@/constant";
import { ArrowLeft, MoveLeft, X } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex w-full items-center  justify-between px-5 ">
        <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center">
          <ArrowLeft color="white" size={24} opacity={0.5}></ArrowLeft>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-32 flex rounded-full bg-white/10 ">
            <div className="w-8 bg-white rounded-full h-1"></div>
          </div>
        </div>
        <p className="uppercase text-white/40 text-sm">skip</p>
      </div>
      <div className="mt-7 text-white/70 px-5">
        <p className="text-sm">HI, Kris!</p>
        <p className="text-2xl ">How are you feeling today?</p>
      </div>

      <div className=" w-full   flex justify-center mt-10 ">
        <div className="w-[500px] overflow-x-scroll scrollbar-hide">
          <div className="flex w-[500px]   flex-wrap gap-1 gap-y-2 ">
            {feelingsList.map((item, index) => {
              const theme =
                item.toLowerCase() === "calm"
                  ? "bg-[#F0CCFA] text-black"
                  : item.toLowerCase() === "euphoric"
                  ? "bg-[#FFB9A0] text-black"
                  : "bg-white/10 text-white";
              return (
                <div
                  key={index}
                  className={`w-max  h-12 rounded-full ${theme}  px-4 flex 
                justify-center items-center `}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-24 flex gap-2 justify-center items-center uppercase text-white/70 text-sm">
        <p className=" ">selected: </p>
        <div className="rounded-lg flex bg-white/10 p-2 gap-2 items-center">
          <p>calm</p>
          <X size={18} color="white"></X>
        </div>
        <div className="rounded-lg flex bg-white/10  p-2 gap-2 items-center">
          <p>euphoric</p>
          <X size={18} color="white"></X>
        </div>
      </div>
      <div className="px-5 mt-7">
        <div className="w-full bg-[#CAE5FE] h-14 rounded-full uppercase flex justify-center items-center font-bold">
          continue
        </div>
      </div>
    </div>
  );
};

export default page;

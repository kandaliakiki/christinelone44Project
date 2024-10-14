import { EllipsisIcon, MoveLeft, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="px-5 flex flex-col h-full">
      <div className="flex text-white items-center mt-4">
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-lg">
          <MoveLeft size={20} color="white"></MoveLeft>
        </div>

        <div className="flex flex-1 justify-center  ">
          <p className="font-medium">Personality type</p>
        </div>
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-lg ">
          <X size={20} color="white"></X>
        </div>
      </div>
      <div className="flex-1  flex flex-col justify-center items-center">
        <p className=" text-white/50">Question 4/6</p>
        <p className="text-white text-3xl font-semibold text-center mt-3">
          I'm comfortable making new acquaintances
        </p>
        <div className="flex mt-5 gap-2">
          <div>
            <div className="w-14 h-14 rounded-full border-2 border-[#febf44]"></div>
            <p className="text-white/80 text-sm mt-2">Disagree</p>
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#febf44]"></div>
          <div>
            <div className="w-14 h-14 rounded-full border-2 border-[#febf44]"></div>
            <p className="text-white/80 text-sm mt-2">Not sure</p>
          </div>
          <div className="w-14 h-14 rounded-full border-2 border-[#febf44]"></div>
          <div className="">
            <div className="w-14 h-14 rounded-full border-2 border-[#febf44] flex justify-center items-center">
              <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-bl from-[#e84545] to-[#febf44] to-80%"></div>
            </div>
            <p className="text-white/80 text-sm mt-2 text-center">Agree</p>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-full flex justify-center items-center py-4 font-bold ">
        Continue
      </div>
    </div>
  );
};

export default page;

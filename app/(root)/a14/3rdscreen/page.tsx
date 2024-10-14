import { Check, MoveLeft, Upload, X } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="px-5">
      <div className="flex text-white items-center mt-4">
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-lg">
          <Upload size={20} color="white"></Upload>
        </div>

        <div className="flex flex-1 justify-center  ">
          <p className="font-medium">Personality type</p>
        </div>
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-lg ">
          <X size={20} color="white"></X>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="relative w-28 h-28  rounded-full outline outline-2  outline-[#0c1115]  bg-profile-face bg-[center] bg-no-repeat bg-[length:112px_112px]      "></div>
        <div className=" -ml-4 relative w-28 h-28  rounded-full outline outline-2  outline-[#0c1115]  bg-profile-face bg-[center] bg-no-repeat bg-[length:112px_112px]    "></div>
      </div>

      <div className="w-full bg-[#303438] rounded-xl p-3 px-5 mt-14 ">
        <div className="relative w-full flex py-5">
          <div className="w-2/3 bg-white rounded-full h-3"></div>
          <div className="w-1/3 bg-gradient-to-bl from-[#e84545] to-[#febf44] to-80% rounded-full h-3 "></div>
          <div className="absolute top-[5px] right-10 w-10 h-10  rounded-full outline outline-2  outline-[#303438]  bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]      "></div>
          <div className="absolute top-[5px] right-24 w-10 h-10  rounded-full outline outline-2  outline-[#303438]  bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]      "></div>
        </div>
        <div className="flex justify-between text-white font-light text-sm mt-1">
          <p>Introvert</p>
          <div className="flex gap-1 items-center">
            <Check size="17" color="#febf44"></Check>
            <p>Extrovert</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#303438] rounded-xl p-3 px-5 mt-3">
        <p className="text-white ">
          Extroverts are such "lighters" of the company that are open to the
          world and directed to people. They are very sociable, easily converge
          with people. As a rule, extroverts quickly get used to a new team and
          can support any conversation.
          <br />
          <br />
          Extroverts are filled with energy if there are a lot of people around
          them. Most often, it is extroverts who become the good spirit of the
          company, leaders of movements and activists.
        </p>
      </div>
      <div className="flex gap-2 justify-center mt-4">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    </div>
  );
};

export default page;

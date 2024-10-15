import { Camera, Ellipsis, MoveLeft } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full bg-white rounded-b-3xl  shadow-md ">
      <div className="h-[32rem] w-full bg-red-50 rounded-b-3xl relative bg-girl2-background-dateapp bg-[length:550px_550px] bg-[left_-2rem_top_0px]">
        <div className="flex justify-between px-5 pt-5">
          <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-black/55 backdrop-blur-lg">
            <Ellipsis size={20} color="white"></Ellipsis>
          </div>
          <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-black/55 backdrop-blur-lg">
            <Camera size={20} color="white"></Camera>
          </div>
        </div>
        <div className="flex w-full justify-center items-center absolute bottom-5">
          <div
            className="flex justify-center items-center gap-2 w-max py-1 px-1 rounded-full
         bg-black/10 backdrop-blur-lg"
          >
            <div className="h-1  w-4 rounded-full bg-white"></div>
            <div className="h-1  w-1 rounded-full bg-white/50"></div>
            <div className="h-1  w-1 rounded-full bg-white/50"></div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-5">
        <div className="flex justify-between ">
          <p className="font-extrabold text-lg">Jacob, 24</p>
          <p className="font-semibold">Edit</p>
        </div>
        <div className="flex mt-3 gap-1">
          <div className="flex justify-center items-center w-max py-1 px-2 font-semibold rounded-full bg-[#EAE8E7] text-xs">
            Design
          </div>
          <div className="flex justify-center items-center w-max py-1 px-2 font-semibold rounded-full bg-[#EAE8E7] text-xs">
            Games
          </div>
          <div className="flex justify-center items-center w-max py-1 px-2 font-semibold rounded-full bg-[#EAE8E7] text-xs">
            Cycling
          </div>
        </div>
        <p className="text-black/50 text-sm font-semibold mt-5">BIO</p>
        <p className="text-black font-semibold mt-1">
          Hey, I'm Jacob! I love to unwind by cycling around town or exploring
          new trails. I'm looking for someone who shares my passions for gaming
          and outdoor adventures.
        </p>
      </div>
    </div>
  );
};

export default page;

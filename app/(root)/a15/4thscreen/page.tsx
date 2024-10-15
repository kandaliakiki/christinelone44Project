import GradientHeart from "@/components/A14_1/GradientHeart";
import {
  ChevronDown,
  Heart,
  MapPin,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="absolute px-5  bottom-3  mb-4 w-full ">
        <div className="flex w-full justify-center items-center ">
          <div
            className="flex justify-center items-center gap-2 w-max py-1 px-1 rounded-full
         bg-black/10 backdrop-blur-lg"
          >
            <div className="h-1  w-4 rounded-full bg-white"></div>
            <div className="h-1  w-1 rounded-full bg-white/50"></div>
            <div className="h-1  w-1 rounded-full bg-white/50"></div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center  gap-2">
            <p className=" text-xl font-bold text-white ">
              {" "}
              <span className="">Peggie,</span> 23
            </p>
            <div className="w-2 h-2 rounded-full bg-[#EF501B]  "></div>
          </div>
          <div className="flex items-center h-14 gap-2">
            <Send size={15} color="white"></Send>
            <p className=" text-sm font-light text-white "> -300ft from you</p>
          </div>
        </div>
        <div className="flex gap-1 ">
          <div className="flex items-center text-xs font-light px-2 h-5 gap-2 rounded-full relative bg-white/15 backdrop-brightness-75 backdrop-blur-sm     ">
            <p className="text-white">Modeling</p>
          </div>
          <div className="flex items-center text-xs font-light px-2 h-5 gap-2 rounded-full relative bg-white/15  backdrop-brightness-75 backdrop-blur-sm ">
            <p className="text-white">Hiking</p>
          </div>
          <div className="flex items-center text-xs font-light px-2 h-5 gap-2 rounded-full relative bg-white/15  backdrop-brightness-75 backdrop-blur-sm   ">
            <p className="text-white">Photo</p>
          </div>
          <div className="flex items-center text-xs font-light px-2 h-5  gap-2 rounded-full relative bg-white/15  backdrop-brightness-75 backdrop-blur-sm  ">
            <p className="text-white">Design</p>
          </div>
        </div>
        <p className="text-white/50 text-sm font-semibold mt-5">BIO</p>
        <p className="text-white text-[15px] font-light mt-1 tracking-tighter pr-10">
          Hey there! My name is Peggie and I'm a fashion photographer. I love
          going to concerts and festivals. Let's grab some coffee and see where
          things go!
        </p>

        <div className=" flex  gap-2 w-full justify-center mt-5 items-center h-12  ">
          <div className="rounded-2xl h-full w-1/2 flex justify-center items-center bg-white/50 backdrop-blur-md">
            <X size={20} color="white"></X>
          </div>
          <div className="rounded-2xl h-full w-1/2 flex justify-center items-center bg-[#F2681B] ">
            <Heart size={20} color="white" fill="white"></Heart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

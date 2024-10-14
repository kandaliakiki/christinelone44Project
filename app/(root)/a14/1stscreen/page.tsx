import GradientHeart from "@/components/A14_1/GradientHeart";
import { ChevronDown, Heart, MapPin, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="absolute px-5  bottom-3  mb-4 w-full ">
        <div className="flex items-center text-white gap-1 mt-3">
          <MapPin size={16} color="white"></MapPin>
          <p className="text-sm font-light ">5 km</p>
        </div>
        <div className="flex items-center  gap-3">
          <p className=" text-4xl text-white font-light mt-3">
            {" "}
            <span className="font-medium">John,</span> 23
          </p>
          <div className="w-3 h-3 rounded-full bg-[#D0FB95] mt-3 "></div>
        </div>
        <div className="flex gap-1 mt-3">
          <div className="flex items-center text-sm px-3 py-[5px] gap-2 rounded-full relative bg-white/15 backdrop-brightness-75 backdrop-blur-sm  gradient-rounded-corners   ">
            <p className="text-white">Travel</p>
          </div>
          <div className="flex items-center text-sm px-3 py-[5px] gap-2 rounded-full relative bg-white/15  backdrop-brightness-75 backdrop-blur-sm  gradient-rounded-corners ">
            <p className="text-white">Literature</p>
          </div>
          <div className="flex items-center text-sm px-3 py-[5px] gap-2 rounded-full relative bg-white/15  backdrop-brightness-75 backdrop-blur-sm   ">
            <p className="text-white">Sport</p>
          </div>
          <div className="flex items-center text-sm px-3 py-[5px] gap-2 rounded-full relative bg-white/15  backdrop-brightness-75 backdrop-blur-sm  ">
            <p className="text-white">Cinema</p>
          </div>
        </div>
        <div className=" flex  gap-6 w-full justify-center mt-5 items-center ">
          <div className=" w-12 h-12 rounded-full flex justify-center items-center bg-white/30 backdrop-blur-lg backdrop-brightness-125">
            <X size={20} color="white"></X>
          </div>
          <div className=" w-16 h-16 rounded-full flex justify-center items-center bg-white backdrop-blur-lg backdrop-brightness-125">
            <GradientHeart></GradientHeart>
          </div>
          <div className=" w-12 h-12 rounded-full flex justify-center items-center bg-white/30 backdrop-blur-lg backdrop-brightness-125">
            <MessageCircle size={24} color="white"></MessageCircle>
          </div>
        </div>
        <div className="mt-3  w-full flex justify-center items-center ">
          <ChevronDown size={25} color="white"></ChevronDown>
        </div>
      </div>
    </div>
  );
};

export default page;

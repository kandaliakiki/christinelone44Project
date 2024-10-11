import { Heart, MessageSquareText } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="absolute left-5 bottom-5  mb-4 ">
        <div className="relative w-11 h-11    rounded-xl overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>

        <p
          className="font-neueMachina text-5xl text-white font-medium mt-3
        "
        >
          Eduardo<br></br>Mccoy{" "}
          <span className="text-2xl font-geometria font-light">22</span>
        </p>
        <div className="flex items-center text-white gap-1 mt-3">
          <Image
            alt="map"
            src="/assets/map.svg"
            width={14}
            height={14}
            className=""
          ></Image>
          <p className="text-xs font-light ">San Francisco, USA</p>
        </div>
      </div>
      <div className="absolute right-5 bottom-10 flex flex-col gap-3">
        <div className=" w-10 h-10 rounded-2xl flex justify-center items-center bg-gray-600/30 backdrop-blur-lg backdrop-brightness-125">
          <Heart size={20} color="white"></Heart>
        </div>
        <div className=" w-10 h-10 rounded-2xl flex justify-center items-center bg-gray-600/30 backdrop-blur-lg backdrop-brightness-125">
          <MessageSquareText size={20} color="white"></MessageSquareText>
        </div>
      </div>
    </div>
  );
};

export default page;

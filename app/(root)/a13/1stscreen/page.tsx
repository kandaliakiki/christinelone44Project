import { Heart, MapPin, MessageSquareText, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="absolute  bottom-5  mb-4 w-full px-5">
        <div className="flex items-center  gap-3">
          <p className=" text-4xl text-white font-semibold mt-3">
            Betty Green, 22
          </p>
          <div className="w-3 h-3 rounded-full bg-[#D0FB95] mt-3"></div>
        </div>
        <div className="flex items-center text-white gap-1 mt-3">
          <MapPin size={16} color="white"></MapPin>
          <p className="text-sm font-light ">Brooklyn, NY</p>
        </div>
        <div className=" flex  gap-6 w-full justify-center mt-5 items-center ">
          <div className=" w-12 h-12 rounded-full flex justify-center items-center bg-white/30 backdrop-blur-lg backdrop-brightness-125">
            <X size={20} color="white"></X>
          </div>
          <div className=" w-16 h-16 rounded-full flex justify-center items-center bg-white backdrop-blur-lg backdrop-brightness-125">
            <Heart size={28} color="#D64141" fill="#D64141"></Heart>
          </div>
          <div className=" w-12 h-12 rounded-full flex justify-center items-center bg-white/30 backdrop-blur-lg backdrop-brightness-125">
            <Image
              alt="chat icon"
              src="/assets/chat-dots-white.svg"
              width={24}
              height={24}
            ></Image>
          </div>
        </div>
        <div className="mt-5 bg-white w-full rounded-xl flex justify-center items-center py-3">
          <p className="text-xl font-bold">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default page;

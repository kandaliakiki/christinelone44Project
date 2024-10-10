import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div
      className={`
       h-[32rem] w-[18rem]   relative`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 to-90%"></div>
      <div className="h-full w-full bg-black bg-[left_-6rem_top_0px] bg-[length:530px_530px] bg-girl1-background-dateapp rounded-[3rem]"></div>
      <div className="absolute left-0 top-5 w-full flex justify-center gap-6 ">
        <div className="w-11 h-11 rounded-full  bg-white/40 flex justify-center items-center">
          <Image
            alt="map icon"
            src="/assets/gift-a9.svg"
            width={28}
            height={28}
          ></Image>
        </div>
        <div className="w-11 h-11 rounded-full  bg-white/40 flex justify-center items-center">
          <Heart size={25} color="white" fill="white"></Heart>
        </div>
        <div className="w-11 h-11 rounded-full  bg-white/40 flex justify-center items-center">
          <Image
            alt="map icon"
            src="/assets/chat-round-dots-a9.svg"
            width={28}
            height={28}
          ></Image>
        </div>
      </div>
      <div className="absolute  left-0  bottom-0  w-full px-5 py-3 ">
        <div className="flex  items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#00FB81] mt-1"></div>
          <p className="text-white  font-light ">Online</p>
        </div>
        <h1 className="text-3xl  text-white ">Emily Thomson, 21</h1>
        <div className="flex gap-1 font-clemente text-white/50 mt-1">
          <MapPin color="white" size={20}></MapPin>
          <p className="font-light">600 meters</p>
        </div>
        <div className="flex gap-1 justify-center mt-3">
          <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white/50"></div>
          <div className="w-[6px] h-[6px] rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

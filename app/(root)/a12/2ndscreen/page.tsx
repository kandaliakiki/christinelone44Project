import ProfileCards from "@/components/A12_1/ProfileCards";
import { ListFilter, MessageSquare, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex w-full gap-2 items-center">
        <div className="relative w-[84px] h-[84px] rounded-full overflow-hidden bg-white flex justify-center items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-profile-face bg-[center] bg-no-repeat bg-[length:80px_80px]"></div>
        </div>
        <div className="flex-1">
          <p>Hey</p>
          <p className="font-semibold">Rahail Evans </p>
        </div>
        <div className="flex gap-2 self-start">
          <div
            className="   w-10 h-10 rounded-full relative
           flex justify-center items-center bg-black/20 backdrop-blur-lg "
          >
            <MessageSquare color="black" fill="black" size={20}></MessageSquare>
          </div>
          <div
            className="   w-10 h-10 rounded-full relative
           flex justify-center items-center bg-black/20 backdrop-blur-lg "
          >
            <Image
              alt="calendar icon"
              src="/assets/calendar-black.svg"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
      </div>
      <div className="mt-14 flex text-5xl gap-10 ml-2 ">
        <p className="text-white">
          <span className="text-white/80">Future</span>
          <br></br>Meetings
        </p>
        <p className="text-black">
          <span className="text-black/80">Your</span>
          <br></br>Friends
        </p>
      </div>
      <div className="mt-10 flex gap-2">
        <div
          className="   w-10 h-10 rounded-full relative
           flex justify-center items-center bg-transparent border border-black "
        >
          <ListFilter color="black" size={21}></ListFilter>
        </div>
        <div className="py-2 px-4 bg-white rounded-full">
          <p>Online</p>
        </div>
        <div
          className="   w-10 h-10 rounded-full relative
           flex justify-center items-center bg-black  "
        >
          <Plus color="white" size={17} strokeWidth={3}></Plus>
        </div>
      </div>
      <ProfileCards></ProfileCards>
    </div>
  );
};

export default page;

import ChatSection from "@/components/A15_5/ChatSection";
import { matchName3 } from "@/constant";
import { Camera, Ellipsis, MoveLeft, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full bg-white rounded-b-3xl  shadow-md ">
      <p className="pt-5 px-5 uppercase text-sm text-black/70 tracking-normal ">
        matches
      </p>

      <div className="flex mt-3 overflow-x-scroll gap-4 scrollbar-hide pl-5">
        {matchName3.map((match) => (
          <div className="flex flex-col items-center text-sm">
            <div className=" w-[50px] h-[50px] rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>
            <p className="font-bold ">{match.name}</p>
            <p className="font-bold ">{match.age}</p>
          </div>
        ))}
      </div>
      <div className="px-5 mt-5 flex gap-2">
        <div className=" h-12 pr-3 rounded-2xl bg-[#EAE8E7] backdrop-blur-sm flex items-center flex-1">
          <input
            placeholder="Search "
            className="bg-transparent text-black/50 focus:outline-none   px-5 flex-1"
          ></input>
          <div className="flex gap-2">
            <Search size={22} color="black" opacity={0.3}></Search>
          </div>
        </div>
      </div>
      <p className="mt-4 px-5 uppercase text-sm text-black/70 tracking-normal ">
        chat
      </p>
      <ChatSection />
    </div>
  );
};

export default page;

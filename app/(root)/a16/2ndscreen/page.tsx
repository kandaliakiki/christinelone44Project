import GraphSmiley from "@/components/A16_2/GraphSmiley";
import PopularTestsCards from "@/components/A16_2/PopularTestsCards";
import { BellRing, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-5 flex justify-between ">
        <div className="flex items-center pr-3 gap-2 rounded-full  bg-[#C1DBF4]">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <Image
              alt="logo icon"
              src="/assets/logo-a16.svg"
              width={24}
              height={24}
            ></Image>
          </div>
          <p className=" font-bold ">Focus 1.5</p>
          <ChevronDown size={18} color="black"></ChevronDown>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#C1DBF4] flex items-center justify-center">
          <BellRing size={15} color="black"></BellRing>
        </div>
      </div>
      <div className="px-5 mt-5">
        <h1 className="text-5xl">
          Keep your <br></br>mind clear
        </h1>
        <div className="flex justify-between uppercase text-sm text-blue-500 mt-4 tracking-tight">
          <p>popular tests</p>
          <p>view all</p>
        </div>
      </div>
      <PopularTestsCards></PopularTestsCards>
      <div className="px-5  text-sm text-blue-500 mt-8 tracking-tight">
        <p className="uppercase">mood history</p>
        <div className="flex mt-3">
          <div className="h-7 w-32 bg-white rounded-lg flex justify-center items-center">
            All
          </div>
          <div className="h-7 w-24  flex justify-center items-center">Days</div>
          <div className="h-7 w-24  flex justify-center items-center">
            Weeks
          </div>
          <div className="h-7 w-24  flex justify-center items-center">
            Months
          </div>
          <div className="h-7 w-24 flex justify-center items-center">Years</div>
        </div>
      </div>
      <div className=" w-full  text-black  relative  mt-14  ">
        <hr className="mt-10 border-t border-black/10 w-full" />
        <hr className="mt-[30px] border-t border-black/10 w-full" />
        <hr className="mt-[30px] border-t border-black/10 w-full" />
        <hr className="mt-[30px] border-t border-black/10 w-full" />
        <hr className="mt-[30px] border-t border-black/10 w-full" />
        <div className="absolute -top-1">
          <Image
            alt="circular abstract background"
            src="/assets/graph-a16.svg"
            width={816}
            height={258}
            className="    "
          ></Image>
        </div>
        <GraphSmiley></GraphSmiley>
      </div>
      <div className="flex gap-7 px-5 mt-3 text-sm text-blue-500">
        <div className="h-7   ">Mon</div>
        <div className="h-7   ">Tue</div>
        <div className="h-7   ">Wed</div>
        <div className="h-7   ">Thu</div>
        <div className="h-7  ">Fri</div>
        <div className="h-7 ml-3 ">Sat</div>
        <div className="h-7 ml-2 ">Sun</div>
      </div>
    </div>
  );
};

export default page;

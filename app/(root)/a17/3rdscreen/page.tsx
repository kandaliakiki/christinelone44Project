import GraphSection from "@/components/A17_3/GraphSection";
import { ChevronDown, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="text-white/50 text-xs mt-5 px-5">Total</p>
      <div className="flex  gap-1 items-center mt-1 px-5">
        <p className="text-white text-3xl font-bold ">$20,505.00</p>
        <p className="text-white/50 text-xs  ml-2 mt-2">Month</p>
        <ChevronDown
          size={15}
          color="#FFFFFF"
          opacity={0.7}
          className="mt-2 "
        ></ChevronDown>
      </div>
      <GraphSection />
      <div className=" px-5 mt-5 flex w-full items-center justify-between">
        <p className="font-semibold text-xl text-white/80">
          Transaction History
        </p>
        <p className="text-xs font-semibold text-white/50">See All</p>
      </div>
      <div className="flex flex-col gap-3 px-6 mt-4">
        <div className="bg-white rounded-2xl h-20 flex items-center gap-3 px-3">
          <div className="w-14 h-14 rounded-full bg-[#F2F2F2] flex justify-center items-center">
            <Image
              alt="burger icon"
              src="/assets/burger-a17.png"
              width={32}
              height={32}
            ></Image>
          </div>
          <div className="flex-1 ">
            <p className="text-sm font-extrabold">Festive Celebration</p>
            <p className="text-xs text-black/50 font-bold mt-1">22 Dec' 22</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-extrabold">$100.00</p>
            <div className="flex items-center gap-1 ">
              <UserRound size={12} color="#000000" opacity={0.5}></UserRound>
              <p className="text-xs text-black/50 font-bold ">4 Persons</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl h-20 flex items-center gap-3 px-3">
          <div className="w-14 h-14 rounded-full bg-[#F2F2F2] flex justify-center items-center">
            <Image
              alt="mountain icon"
              src="/assets/mountain-a17.png"
              width={32}
              height={32}
            ></Image>
          </div>
          <div className="flex-1 ">
            <p className="text-sm font-extrabold">Adventure Trip</p>
            <p className="text-xs text-black/50 font-bold mt-1">12 Nov' 22</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-extrabold">$1200.00</p>
            <div className="flex items-center gap-1 ">
              <UserRound size={12} color="#000000" opacity={0.5}></UserRound>
              <p className="text-xs text-black/50 font-bold ">2 Persons</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl h-20 flex items-center gap-3 px-3">
          <div className="w-14 h-14 rounded-full bg-[#F2F2F2] flex justify-center items-center">
            <Image
              alt="travel luggage icon"
              src="/assets/travel-a17.png"
              width={32}
              height={32}
            ></Image>
          </div>
          <div className="flex-1 ">
            <p className="text-sm font-extrabold">Group Tour to Italy</p>
            <p className="text-xs text-black/50 font-bold mt-1">9 Sep' 22</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-extrabold">$6000.00</p>
            <div className="flex items-center gap-1 ">
              <UserRound size={12} color="#000000" opacity={0.5}></UserRound>
              <p className="text-xs text-black/50 font-bold ">12 Persons</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl h-20 flex items-center gap-3 px-3">
          <div className="w-14 h-14 rounded-full bg-[#F2F2F2] flex justify-center items-center">
            <Image
              alt="cocktail icon"
              src="/assets/cocktail-a17.png"
              width={32}
              height={32}
            ></Image>
          </div>
          <div className="flex-1 ">
            <p className="text-sm font-extrabold">Cocktail Party</p>
            <p className="text-xs text-black/50 font-bold mt-1">22 May' 22</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-extrabold">$700.00</p>
            <div className="flex items-center gap-1 ">
              <UserRound size={12} color="#000000" opacity={0.5}></UserRound>
              <p className="text-xs text-black/50 font-bold ">6 Persons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import MotifAbstractShape from "@/components/a17_1/MotifAbstractShape";
import NearbyFriendsSection from "@/components/a17_1/NearbyFriendsSection";
import PendingBillsCards from "@/components/a17_1/PendingBillsCards";
import {
  ChevronDown,
  Clock,
  Plus,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="px-5 mt-5">
        <div className="border-2 border-[#0b0105]/70 border-b-0 rounded-t-xl p-2 w-max">
          <p className="text-xs font-semibold">My Balance</p>
        </div>
        <div className="border-2 border-[#0b0105]/70 rounded-xl rounded-tl-none p-4 flex justify-between items-center ">
          <p className="text-3xl font-extrabold">
            <span className="font-bold">$</span>20,505.00
          </p>
          <Image
            alt="arrow icon"
            src="/assets/arrow-a17.svg"
            width={100}
            height={27}
          ></Image>
        </div>
      </div>
      <p className="mt-5 px-5 font-bold text-xl">Pending Bills</p>
      <PendingBillsCards />

      <p className=" px-5 font-bold text-xl">Nearby Friends</p>
      <NearbyFriendsSection />

      <div className=" px-5 mt-5 flex w-full items-center justify-between">
        <p className="font-bold text-xl">Recent Payments</p>
        <p className="text-xs font-bold">See All</p>
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
        <div className="bg-transparent border-2 border-black rounded-2xl h-20 flex items-center gap-3 px-3">
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
            <p className="text-xs text-black/50 font-bold mt-1">22 Dec' 22</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-extrabold">$1200.00</p>
            <div className="flex items-center gap-1 ">
              <UserRound size={12} color="#000000" opacity={0.5}></UserRound>
              <p className="text-xs text-black/50 font-bold ">4 Persons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

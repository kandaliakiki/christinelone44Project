import { Heart, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="h-[90vh]  text-white px-3 ">
        <div className="h-3/4 w-full rounded-[3rem] relative bg-[left_-6rem_top_0px] bg-[length:600px_600px] bg-girl1-background-dateapp  px-5 py-5 mt-5">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/50 from-[10%] via-transparent via-30% to-black/50 to-80%"></div>{" "}
          <div className="h-full flex flex-col justify-between ">
            <div className="flex z-10 justify-between items-center">
              <div className="flex gap-2 ">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
              <div className="rounded-full px-4 h-10 bg-[#FAFF2A] flex gap-1 justify-center items-center text-black  ">
                <p className="uppercase text-xs font-semibold">
                  Potential Match
                </p>
                <Image
                  alt="user heart icon"
                  src="/assets/user-heart.svg"
                  width={14}
                  height={14}
                ></Image>
              </div>
            </div>
            <div className="z-10 space-y-2">
              <div className="flex items-center text-white gap-1 opacity-50">
                <Image
                  alt="map"
                  src="/assets/map.svg"
                  width={20}
                  height={20}
                  className=""
                ></Image>
                <p className="text-sm">France, Marseille</p>
              </div>
              <div className="flex items-center gap-3 z-20">
                <span className="text-6xl font-inter italic font-semibold ">
                  Lia
                </span>
                <span className="text-6xl italic ">23</span>
                <Image
                  alt="verified icon"
                  src="/assets/verified.svg"
                  width={30}
                  height={30}
                ></Image>
              </div>
              <div className="flex gap-1">
                <div className="rounded-full px-4 py-3 bg-white/20 backdrop-blur-lg flex  justify-center items-center   ">
                  <p className=" text-xs whitespace-nowrap">Wes Anderson</p>
                </div>
                <div className="rounded-full px-4 py-3 bg-white/20  backdrop-blur-lg flex justify-center items-center   ">
                  <p className=" text-xs whitespace-nowrap ">Photography</p>
                </div>
                <div className="rounded-full px-4 py-2 bg-white/20  backdrop-blur-lg flex justify-center items-center   ">
                  <p className=" text-xs  whitespace-nowrap">+14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-full h-24 w-full bg-[#3D3D3D] mt-6 flex gap-1 p-1">
          <div className="w-1/2 h-full bg-white rounded-full flex justify-center items-center">
            <X size={20} color="black"></X>
          </div>
          <div className="w-1/2 h-full bg-[#FAFF2A] rounded-full flex justify-center items-center">
            <Heart size={20} color="black"></Heart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

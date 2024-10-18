import Image from "next/image";
import React from "react";
import MotifAbstractShape from "../a17_1/MotifAbstractShape";

const SplitBillsChart = () => {
  return (
    <div className="flex mt-14 gap-3">
      <div>
        <p className="text-center text-white/80 text-sm">Lisa</p>
        <div className="h-96 w-16 rounded-full bg-white/10 border border-white/10 mt-1">
          <div className="relative ">
            <div className="h-56 w-16 rounded-full bg-white flex flex-col items-center relative overflow-hidden">
              <div className="w-[50px] h-[50px] mt-2 rounded-full bg-[#F04F4D] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
              <div className="absolute w-max -bottom-20 -right-28 rotate-45 opacity-50 ">
                <MotifAbstractShape
                  color="#F04F4D"
                  opacity={0.1}
                  strokeWidth={7}
                />
              </div>
            </div>
            <div className=" absolute left-1/2 -translate-x-1/2 -bottom-8 flex flex-col items-center">
              <div
                className="bg-white/20 w-6 h-5 rounded-xl 
                backdrop-blur-sm border border-[#F04F4D] flex justify-center items-center"
              >
                <Image
                  alt="updown icon"
                  src="/assets/up-down-a17.svg"
                  width={8}
                  height={8}
                ></Image>
              </div>
              <p className="text-white/80 text-xs mt-2">$350</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-white/80 text-sm">Jacob</p>
        <div className="h-96 w-16 rounded-full bg-white/10 border border-white/10 mt-1">
          <div className="relative ">
            <div className="h-32 w-16 rounded-full bg-white flex flex-col items-center relative overflow-hidden ">
              <div className="w-[50px] h-[50px] mt-2 rounded-full bg-[#F9C147] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
              <div className="absolute w-max -bottom-40 -left-24 rotate-45 ">
                <MotifAbstractShape
                  color="#F9C147"
                  opacity={0.1}
                  strokeWidth={7}
                />
              </div>
            </div>
            <div className=" absolute left-1/2 -translate-x-1/2 -bottom-8 flex flex-col items-center">
              <div
                className="bg-white/20 w-6 h-5 rounded-xl 
                backdrop-blur-sm border border-[#F9C147] flex justify-center items-center"
              >
                <Image
                  alt="updown icon"
                  src="/assets/up-down-a17.svg"
                  width={8}
                  height={8}
                ></Image>
              </div>
              <p className="text-white/80 text-xs mt-2">$150</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-white/80 text-sm">Harry</p>
        <div className="h-96 w-16 rounded-full bg-white/10 border border-white/10 mt-1">
          <div className="relative ">
            <div className="h-64 w-16 rounded-full bg-white flex flex-col items-center relative overflow-hidden">
              <div className="w-[50px] h-[50px] mt-2 rounded-full bg-[#1C6F97] flex justify-center items-center ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
              <div className="absolute w-max -bottom-5 -right-28 -rotate-[30deg] ">
                <MotifAbstractShape
                  color="#1C6F97"
                  strokeWidth={6}
                  opacity={0.07}
                />
              </div>
            </div>
            <div className=" absolute left-1/2 -translate-x-1/2 -bottom-8 flex flex-col items-center">
              <div
                className="bg-white/20 w-6 h-5 rounded-xl 
                backdrop-blur-sm border border-[#1C6F97] flex justify-center items-center"
              >
                <Image
                  alt="updown icon"
                  src="/assets/up-down-a17.svg"
                  width={8}
                  height={8}
                ></Image>
              </div>
              <p className="text-white/80 text-xs mt-2">$400</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-white/80 text-sm">Brook</p>
        <div className="h-96 w-16 rounded-full bg-white/10 border border-white/10 mt-1">
          <div className="relative ">
            <div className="h-52 w-16 rounded-full bg-white flex flex-col items-center relative overflow-hidden">
              <div className="w-[50px] h-[50px] mt-2 rounded-full bg-[#ED9FA7] flex justify-center items-center  ">
                <div
                  className=" w-[50px] h-[50px]  rounded-full overflow-hidden   bg-profile-face-nobg bg-[center] bg-no-repeat
                 bg-[length:50px_50px]"
                ></div>
              </div>
              <div className="absolute w-max -bottom-16 -right-2 rotate-[135deg] opacity-50 ">
                <MotifAbstractShape
                  color="#ED9FA7"
                  opacity={0.3}
                  strokeWidth={7}
                />
              </div>
            </div>
            <div className=" absolute left-1/2 -translate-x-1/2 -bottom-8 flex flex-col items-center">
              <div
                className="bg-white/20 w-6 h-5 rounded-xl 
                backdrop-blur-sm border border-[#ED9FA7] flex justify-center items-center"
              >
                <Image
                  alt="updown icon"
                  src="/assets/up-down-a17.svg"
                  width={8}
                  height={8}
                ></Image>
              </div>
              <p className="text-white/80 text-xs mt-2">$300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBillsChart;

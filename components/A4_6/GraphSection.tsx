import React from "react";

const GraphSection = () => {
  return (
    <div className="mt-10">
      <div className="flex  w-full h-full gap-5 items-end justify-center">
        {/* 1st bar */}
        <div className="flex flex-col gap-20">
          <div className="relative w-12 h-52 rounded-xl bg-[#F45951]">
            <div className="absolute w-12 h-[95%] rounded-xl bg-gradient-to-t from-black to-black/20"></div>
          </div>
          <div className="relative w-12 h-12 rounded-xl bg-[#F45951]"></div>
        </div>
        {/* 2nd bar */}
        <div className="flex flex-col gap-10 ">
          <div className="relative w-12 h-36 rounded-xl bg-[#A5A7AD]">
            <div className="absolute w-12 h-[95%] rounded-xl bg-gradient-to-t from-black transparent"></div>
          </div>
          <div className="relative w-12 h-8 rounded-xl bg-[#A5A7AD]"></div>
        </div>
        {/* 3rd bar */}
        <div className="flex flex-col gap-10 text-zinc-400">
          <div className="text-center">
            <p className="mb-3">145</p>
            <div className="relative w-12 h-52 rounded-xl bg-[#2E2E36]">
              <div className="absolute w-12 h-[95%] rounded-xl bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <p className="mt-1">1</p>
          </div>
          <div className="relative w-12 h-8 rounded-xl bg-[#F45951]"></div>
        </div>
        {/* 4th bar */}
        <div className="flex flex-col gap-28 ">
          <div className="relative w-12 h-24 rounded-xl bg-[#A5A7AD]">
            <div className="absolute w-12 h-[95%] rounded-xl bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div className="relative w-12 h-8 rounded-xl bg-[#A5A7AD]"></div>
        </div>
        {/* 5th bar */}
        <div className="flex flex-col gap-8 ">
          <div className="relative w-12 h-36 rounded-xl bg-[#F45951]">
            <div className="absolute w-12 h-[95%] rounded-xl bg-gradient-to-t from-black to-black/20"></div>
          </div>
          <div className="relative w-12 h-8 rounded-xl bg-[#F45951]"></div>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;

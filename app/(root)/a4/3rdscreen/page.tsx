import ProgressBar from "@/components/A4_3/ProgressBar";
import { ArrowUp, MoveDown, MoveUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-3 my-10">
        <div className="rounded-full border border-[#797979] text-[#D2D2D2] flex items-center justify-center   py-3  px-5 ">
          <p className="px">Yesterday</p>
        </div>
        <div className="rounded-full border border-[#333333] text-[#585858] flex items-center justify-center   py-3 px-5">
          <p className="">Tuesday, 28 March</p>
        </div>
      </div>
      <ProgressBar></ProgressBar>
      <div className="flex text-white justify-between items-center my-5 ">
        <p className="leading-none text-4xl font-light">
          Most <br></br> Recent
        </p>
        <p className="flex">
          <span className="text-8xl">185</span>
          <span className="mt-2 text-[#717171]">mg/dL</span>
        </p>
      </div>
      <div className="rounded-[3rem] w-full py-5 px-3 mt-5 bg-[#DC5049] flex flex-col gap-2">
        <div className="rounded-full w-full py-4 px-3 bg-white flex justify-center items-center gap-3">
          <div className="w-14 h-14 bg-[#DC5049] rounded-full flex justify-center items-center">
            <Image
              alt="inject"
              src="/assets/arrow-compress.svg"
              width={40}
              height={40}
            ></Image>
          </div>
          <p className="text-xl flex-1 font-semibold tracking-tight ">
            Average
          </p>
          <div className="rounded-full  py-3 px-4 bg-black text-white ">
            <span className="text-xl">145</span>
            <span className="text-xs font-thin text-white"> mg/dL</span>
          </div>
        </div>
        <div className="rounded-full w-full py-4 px-3 bg-white flex justify-center items-center gap-3">
          <div className="w-14 h-14 bg-[#DC5049] rounded-full flex justify-center items-center">
            <MoveUp color="white" size={35}></MoveUp>
          </div>
          <div className="flex-1 tracking-tight">
            <p className="text-xl  font-semibold ">High</p>
            <p className="text-base ">10:45 AM</p>
          </div>
          <div className="rounded-full  py-3 px-4 bg-black text-white ">
            <span className="text-xl">185</span>
            <span className="text-xs font-thin text-white"> mg/dL</span>
          </div>
        </div>
        <div className="rounded-full w-full py-4 px-3 bg-white flex justify-center items-center gap-3">
          <div className="w-14 h-14 bg-[#DC5049] rounded-full flex justify-center items-center">
            <MoveDown color="white" size={35}></MoveDown>
          </div>
          <div className="flex-1 tracking-tight">
            <p className="text-xl  font-semibold ">Low</p>
            <p className="text-base ">1:45 PM</p>
          </div>
          <div className="rounded-full  py-3 px-4 bg-black text-white ">
            <span className="text-xl">185</span>
            <span className="text-xs font-thin text-white"> mg/dL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

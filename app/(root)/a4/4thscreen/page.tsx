import GraphBackground from "@/components/A4_4/GraphBackground";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white">
      <GraphBackground></GraphBackground>
      <div className="flex mt-9 gap-3 ">
        <div className="  rounded-[3rem] py-7 px-5 w-56 bg-white flex-none text-black">
          <div className="flex gap-10 items-center">
            <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center ">
              <Image
                alt="inject"
                src="/assets/inject-white.svg"
                width={30}
                height={30}
              ></Image>
            </div>
            <div className=" text-left flex flex-col justify-center">
              <p className="text-xl font-semibold">Dosage</p>
              <p className="text-lg font-light text-gray-400">Insulin</p>
            </div>
          </div>
          <div className=" relative w-full h-2 bg-[#F0F0F0] rounded-full mt-4 mx-auto">
            <div className="absolute h-2 bg-[#DC564F] rounded-full w-[60.5%]"></div>
          </div>
          <div className="flex justify-between text-xl mt-5">
            <p className="text-[#CECED2]">060,5%</p>
            <p className="font-semibold">1,6U</p>
          </div>
        </div>
        <div className="  rounded-[3rem] py-7 px-5 w-56 bg-white text-black flex-none">
          <div className="flex gap-10 items-center">
            <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center ">
              <Image
                alt="inject"
                src="/assets/pill.svg"
                width={30}
                height={30}
              ></Image>
            </div>
            <div className=" text-left flex flex-col justify-center">
              <p className="text-xl font-semibold">Pill</p>
              <p className="text-lg font-light text-gray-400">2</p>
            </div>
          </div>
          <div className=" relative w-full h-2 bg-[#F0F0F0] rounded-full mt-4 mx-auto">
            <div className="absolute h-2 bg-[#DC564F] rounded-full w-[20.5%]"></div>
          </div>
          <div className="flex justify-between text-xl mt-5">
            <p className="text-[#CECED2]">020,5%</p>
            <p className="font-semibold">1,6U</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

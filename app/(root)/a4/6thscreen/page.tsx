import DosageSection from "@/components/A4_6/DosageSection";
import GraphSection from "@/components/A4_6/GraphSection";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <DosageSection />
      <GraphSection />
      <div className="bg-white  w-full  rounded-full  text-white flex p-2 px-4 items-center justify-between  relative mt-14">
        <div className=" text-5xl bg-transpare  rounded-3xl  py-2 px-3 gap-10">
          <div className=" text-left flex flex-col justify-center ">
            <p className="text-xl font-semibold text-black">Dosage</p>
            <p className="text-lg font-light text-gray-400">Insulin</p>
          </div>
        </div>

        <div className=" z-10 absolute right-2 text-5xl bg-gradient-to-r from-purple-500/30  to-purple-500/10 border border-violet-400 rounded-full py-8 px-16 flex justify-center items-center">
          <div className="flex space-x-1">
            <div className="w-4 h-1 bg-[#DB463D] rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="absolute z-20 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-3xl border-2 border-gray-100 bg-gray-200 backdrop-blur-sm bg-opacity-20 flex justify-center items-center">
          <p className="font-bold text-sm text-black">0.9 U</p>
        </div>
      </div>
    </div>
  );
};

export default page;

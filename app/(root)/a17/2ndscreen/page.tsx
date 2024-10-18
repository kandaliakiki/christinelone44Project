import MotifAbstractShape from "@/components/a17_1/MotifAbstractShape";
import SplitBillsChart from "@/components/A17_2/SplitBillsChart";
import SplitBillsUsers from "@/components/A17_2/SplitBillsUsers";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-1 items-center justify-center mt-5">
        <p className="text-white/50 text-sm">Total Bill</p>
        <p className="text-2xl font-bold text-white">$1200.00</p>
        <p className="text-[#bf193e] text-xs">Birthday Party!</p>
        <SplitBillsUsers />
        <SplitBillsChart />
        <div className="bg-black pl-2 pr-4 h-14  rounded-2xl mt-10 flex gap-3 items-center ">
          <div className="h-12 px-7 rounded-2xl bg-[#BF193E] text-white text-sm flex justify-center items-center">
            Split Now
          </div>
          <div className="flex  -space-x-3">
            <ChevronRight color="white" size={20} opacity={0.1}></ChevronRight>
            <ChevronRight color="white" size={20} opacity={0.2}></ChevronRight>
            <ChevronRight color="white" size={20} opacity={0.3}></ChevronRight>
            <ChevronRight color="white" size={20} opacity={0.4}></ChevronRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

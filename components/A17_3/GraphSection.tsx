import Image from "next/image";
import React from "react";

const GraphSection = () => {
  return (
    <div className="w-full overflow-hidden flex justify-center items-center ">
      <div className="w-max relative my-20">
        <hr className="w-full  border-t border-[#BF193E] border-opacity-30 border-dashed absolute bottom-14 z-10" />
        <Image
          alt="graphbackground"
          src="/assets/graph-background-a17.svg"
          width={400}
          height={400}
        ></Image>
        <Image
          alt="graphbackground"
          src="/assets/graph-chart-a17.svg"
          width={400}
          height={400}
          className="absolute top-0 left-0 z-20"
        ></Image>
        <div className="absolute -bottom-5 right-32 flex">
          <div className="w-16 h-64 rounded-full bg-white/10 border  backdrop-blur-md border-[#BF193E]/10 relative flex items-start z-20"></div>
        </div>
        <div className=" ml-8 absolute -top-3 right-10 z-30">
          <div className="flex items-center  ">
            <div className="w-3 h-3 rounded-full bg-white flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            <div className="w-8 h-[2px] bg-white/30"></div>
            <div className="ml-3">
              <p className="text-white/80 text-xs">Received</p>
              <p className="text-white  font-bold ">$9000.00</p>
            </div>
          </div>
        </div>
        <div className=" absolute -bottom-0 right-[158px] z-30">
          <div className="flex items-center  ">
            <div className="mr-3">
              <p className="text-white/80 text-xs">Spent</p>
              <p className="text-white  font-bold ">$4500.00</p>
            </div>
            <div className="w-8 h-[2px] bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;

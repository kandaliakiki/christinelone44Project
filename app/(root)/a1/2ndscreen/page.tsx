import HeaderControl from "@/components/A1_2/HeaderControl";
import WebsiteEvent from "@/components/A1_2/WebsiteEvent";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" h-full">
      <HeaderControl />
      <div className="flex h-1/2  w-full  justify-center items-center mt-28">
        <div className="h-full  w-1/2 flex flex-col justify-start items-end">
          <div className="text-white text-9xl  font-modularAmplitude leading-[7rem]">
            <p className="text-[#B3EF1B]">J</p>
            <p>U</p>
            <p>S</p>
            <p>T</p>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-start items-center ">
          <WebsiteEvent />
          <p className="text-white text-sm font-barlow -translate-x-5 translate-y-36">
            Internation annual event is here
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center relative text-white font-barlow   h-32 mt-24">
        <p className="text-sm  ">On this February,</p>
        <p className="font-modularAmplitude absolute text-9xl self-start right-8 bottom-8 ">
          {" "}
          7
        </p>
      </div>
    </div>
  );
};

export default page;

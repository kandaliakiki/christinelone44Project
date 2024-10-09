import SelectQuantityShape from "@/components/A5_2/SelectQuantityShape";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white flex flex-col">
      <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <MoveLeft color="black"></MoveLeft>
      </div>
      <div className="flex  items-center gap-2 mt-10">
        <Image
          alt="premium icon"
          src="/assets/premium-orange.svg"
          width={15}
          height={15}
        ></Image>
        <p className="uppercase text-sm text-[#E38035] mt-1">Premium</p>
      </div>
      <h1 className="text-8xl font-light">Cookies</h1>
      <h2 className="text-4xl font-thin">Choco chips</h2>
      <div className="rounded-full w-36 h-12 mt-5 bg-transparent border-2 border-white text-white flex gap-2 justify-center items-center ">
        <Image alt="info" src="/assets/book.svg" width={20} height={20}></Image>
        <p>Information</p>
      </div>
      <SelectQuantityShape></SelectQuantityShape>
    </div>
  );
};

export default page;

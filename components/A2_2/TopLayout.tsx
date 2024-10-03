import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const TopLayout = () => {
  return (
    <div className="flex w-full justify-between items-center fixed  px-7 mt-10">
      <div className="flex justify-center items-center">
        <Image src="/assets/zavo-logo.svg" alt="Logo" width={40} height={40} />
        <p className="text-white text-4xl  font-amaranth mb-2 ">zavo</p>
      </div>
      <div className="flex justify-between items-center flex-1 px-20 text-2xl text-white">
        <div className="flex gap-11 font-roboto">
          <p>Services</p>
          <p>About Us</p>
          <p>Company</p>
        </div>
        <p>Contact</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button className=" rounded-full bg-blue-300 focus:bg-blue-300 py-6 px-10 text-lg tracking-wider">
          Download App
        </Button>
      </div>
    </div>
  );
};

export default TopLayout;

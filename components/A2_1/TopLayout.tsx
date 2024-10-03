import Image from "next/image";
import React from "react";

const TopLayout = () => {
  return (
    <div className="flex w-full justify-between items-center  px-3 mt-10">
      <div className="flex justify-center items-center">
        <Image src="/assets/zavo-logo.svg" alt="Logo" width={40} height={40} />
        <p className="text-white text-4xl  font-amaranth mb-2 ">zavo</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image src="/assets/menu-a2.svg" alt="menu" width={50} height={50} />
        <p className="text-white text-2xl font-roboto ">MENU</p>
      </div>
    </div>
  );
};

export default TopLayout;

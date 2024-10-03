import PaymentCard from "@/components/A2_1/PaymentCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-3 h-full font-schibstedGrotesk text-white">
      <p className=" text-base  ">Main USD Account</p>
      <p className=" text-5xl mt-2 ">$ 17,527.80</p>
      <Image
        src="/assets/coin-a2.png"
        alt="coin image"
        width={400}
        height={400}
        className="scale-150"
      ></Image>
      <p className="leading-none text-lg self-start ml-3 mt-5 ">
        Pay multiple <br></br> people with ease.
      </p>
      <div className="flex gap-[1px] px-[1px] mt-8 ">
        <div className="   relative">
          <Image
            src="/assets/button-a2.svg"
            alt="button"
            width={200}
            height={200}
          ></Image>
          <div className="absolute top-0 right-0 z-30">
            <PaymentCard arrowDirection="left" />
          </div>
          <div className="absolute top-16 left-0 z-30 ml-2">
            <PaymentCard arrowDirection="right" />
          </div>
          <div className="absolute bottom-1 left-2 z-30 ml-2">
            <p className="text-4xl">Select </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/assets/button-a2.svg"
            alt="button"
            width={200}
            height={200}
            className="transform rotate-180"
            style={{ transform: "scaleX(-1)" }}
          ></Image>
          <div className="absolute top-1 left-2 z-30 ml-2">
            <p className="text-4xl">Send </p>
          </div>
          <div className="absolute top-12 left-0 z-30 ml-3">
            <PaymentCard arrowDirection="right" />
          </div>
          <div className="absolute bottom-2 right-0 z-30 ml-2">
            <PaymentCard arrowDirection="left" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

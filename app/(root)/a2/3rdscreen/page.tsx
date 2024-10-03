import PaymentCard from "@/components/A2_1/PaymentCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-3 h-full font-schibstedGrotesk text-white">
      <p className=" text-5xl  ">Send money</p>
      <p className=" text-base mt-2  ">Your Total Balance:$ 17,527.80</p>
      <div className="relative  mt-10">
        <Image
          src="/assets/shape-a2-3.svg"
          alt="coin image"
          width={350}
          height={350}
          className=""
        ></Image>
        <p className="absolute text-white top-7 left-3 z-10 text-3xl leading-none tracking-tight ">
          Pay multiple people<br></br> with ease.
        </p>
        <p className="absolute text-white top-[7.7rem] left-16 z-10 text-3xl leading-none tracking-tight ">
          Select recipients.
        </p>
        <div className="absolute bottom-[7.2rem] left-4">
          <div className="flex gap-1">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="relative w-10 h-10  rounded-full overflow-hidden  self-center mt-1
      bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]"
              ></div>
            ))}
          </div>
        </div>
        <p className="absolute text-white bottom-2 right-14 z-10 text-6xl leading-none tracking-tight ">
          Send.
        </p>
      </div>
    </div>
  );
};

export default page;

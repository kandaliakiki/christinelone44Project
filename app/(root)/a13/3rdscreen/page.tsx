import { ChevronLeft, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="text-white px-5 mt-5">
        <div className="flex text-white items-center ">
          <ChevronLeft size={30} color="white" strokeWidth={1.5}></ChevronLeft>
          <div className="flex text-lg font-medium flex-1 justify-center items-center gap-2">
            <p className="">Jenna</p>
            <div className="w-[7px] h-[7px]  rounded-full bg-[#D0FB95]  "></div>
          </div>
          <EllipsisVertical size={25} color="white"></EllipsisVertical>
        </div>
        <div className="w-full  px-3 pb-4 rounded-xl bg-white/15 backdrop-blur-sm mt-10">
          <div className="">
            <div className="relative w-12 h-12 -translate-y-1/2 mt-1 mx-auto  rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>

            <p className="text-xs text-center  tracking-wider -mt-4  ">
              Jenna is waiting for a message from you!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col  mt-8">
          <div className="self-end ">
            <div className="py-2 px-2 bg-[#d64141] w-max rounded-xl rounded-br-none text-sm">
              <p>Hello! How are you doing ? 😊💫</p>
            </div>
            <p className="text-[11px] text-white/50 text-right mt-2">
              Today, 12:30 AM
            </p>
          </div>
          <div className=" mt-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 mb-4  rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:32px_32px]"></div>

              <div>
                <div className="py-2 px-2 bg-white font-medium text-black w-max rounded-xl rounded-bl-none text-sm ">
                  <p>Hi! Great! 💫</p>
                </div>
                <p className="text-[11px] text-white/50 text-left mt-2">
                  30 mins
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-4 pr-3 mt-20 rounded-2xl bg-white/15 backdrop-blur-sm flex ">
          <input
            placeholder="Write your message here "
            className="bg-transparent text-white/50 focus:outline-none placeholder-white/50  px-5 flex-1"
          ></input>
          <div className="flex gap-2">
            <Image
              alt="home icon"
              src="/assets/camera-white-a13.svg"
              width={25}
              height={25}
              className="opacity-40"
            ></Image>
            <Image
              alt="home icon"
              src="/assets/image-icon.svg"
              width={25}
              height={25}
              className="opacity-40"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Image
          alt="keyboard image"
          src="/assets/keyboard-image5.png"
          width={700}
          height={700}
        ></Image>
      </div>
    </>
  );
};

export default page;

import {
  Heart,
  MessageSquareText,
  MoveDiagonal,
  RotateCcw,
  X,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="absolute left-0 bottom-5  mb-4  w-full px-5 flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#00FB81] mb-1"></div>
          <p className="text-white  font-light ">Online</p>
        </div>
        <p
          className=" text-6xl text-white mt-1
        "
        >
          Kathryn&nbsp;
          <span className=" font-medium text-white/55">22</span>
        </p>
        <div className="flex gap-1 mt-3">
          <div
            className="py-1 px-3 rounded-full
           flex justify-center items-center  bg-white/20 backdrop-blur-md gap-1 "
          >
            <Image
              alt="bisexual icon"
              src="/assets/bisexual-icon.svg"
              width={20}
              height={20}
            ></Image>
            <p className="text-white mt-1 font-light text-sm tracking-wider">
              Bisexual
            </p>
          </div>
          <div
            className="py-1 px-3 rounded-full
           flex justify-center items-center  bg-white/20 backdrop-blur-md gap-2 "
          >
            <div className="w-4 h-4 rounded-md bg-white flex  justify-center items-center -rotate-45">
              <MoveDiagonal size={14} color="#1c1c1c"></MoveDiagonal>
            </div>
            <p className="text-white mt-1 font-light text-sm tracking-wider">
              180 cm
            </p>
          </div>
          <div
            className="py-1 px-3 rounded-full
           flex justify-center items-center  bg-white/20 backdrop-blur-md gap-2 "
          >
            <div className="w-4 h-4 rounded-md bg-white flex  justify-center items-center rotate-45">
              <MoveDiagonal size={14} color="#1c1c1c"></MoveDiagonal>
            </div>
            <p className="text-white mt-1 font-light text-sm tracking-wider">
              50 kg
            </p>
          </div>
        </div>
        <div className="flex items-center text-white opacity-50 gap-1 mt-3 ">
          <Image
            alt="map"
            src="/assets/map.svg"
            width={18}
            height={18}
            className=""
          ></Image>
          <p className="text-xl  mt-1 ">USA, California</p>
        </div>
        <div className="w-full flex justify-center gap-2 mt-7">
          <div
            className="w-[70px] h-[70px]  rounded-full
           flex justify-center items-center  bg-white/20 backdrop-blur-md gap-2 "
          >
            <div className="w-7 h-7 rounded-lg bg-white flex  justify-center items-center  ">
              <RotateCcw
                size={19}
                color="#1c1c1c"
                strokeWidth={2.5}
                className="rotate-45 "
              ></RotateCcw>
            </div>
          </div>
          <div
            className="w-[70px] h-[70px]  rounded-full
           flex justify-center items-center  bg-white/20 backdrop-blur-md gap-2 "
          >
            <Image
              alt="conversation icon"
              src="/assets/conversation.svg"
              width={30}
              height={30}
            ></Image>
          </div>
          <div
            className="w-[70px] h-[70px]  rounded-full
           flex justify-center items-center  bg-white/20 backdrop-blur-md gap-2 "
          >
            <div className="w-7 h-7 rounded-lg bg-white flex  justify-center items-center  ">
              <X size={22} color="#1c1c1c" strokeWidth={2.5}></X>
            </div>
          </div>
          <div
            className="w-[70px] h-[70px]  rounded-full
           flex justify-center items-center  bg-[#FF4B97] backdrop-blur-md gap-2 "
          >
            <Image
              alt="conversation icon"
              src="/assets/heart-a11.svg"
              width={35}
              height={35}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

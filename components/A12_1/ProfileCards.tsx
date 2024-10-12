import { Heart, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileCards = () => {
  return (
    <>
      {/* first card in front */}
      <div className="absolute bottom-1 z-30 ">
        <div
          className={`
       h-[20rem] w-[23rem]   relative `}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 to-90% rounded-[3rem]"></div>
          <div className="h-full w-full bg-black bg-[left_-3rem_top_0px] bg-[length:530px_530px] bg-girl2-background-dateapp rounded-[3rem]"></div>
          <div className="absolute right-5 top-5  flex flex-col justify-center gap-2 ">
            <div className="w-14 h-14 rounded-full  bg-white/20 backdrop-blur-sm flex justify-center items-center">
              <Image
                alt="video camera icon"
                src="/assets/video-white.svg"
                width={38}
                height={38}
              ></Image>
            </div>
            <div className="w-14 h-14 rounded-full  bg-white/20 backdrop-blur-sm flex justify-center items-center">
              <Heart color="white" size={30} fill="white"></Heart>
            </div>
          </div>
          <div className="absolute  left-0  bottom-2  w-full px-5 py-3 ">
            <h1 className="text-4xl  text-white ">Lucía Alaniz</h1>
            <div className="flex items-center  gap-1 text-white mt-1">
              <Image
                alt="map icon"
                src="/assets/compass-a12.svg"
                width={24}
                height={24}
              ></Image>
              <p className="font-light">Madrid, Spain</p>
            </div>
          </div>
        </div>
      </div>
      {/*  second card behind in the middle */}
      <div className="absolute bottom-16 z-20 scale-90 -rotate-2">
        <div
          className={`
       h-[20rem] w-[23rem]   relative `}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 to-90% rounded-[3rem]"></div>
          <div className="h-full w-full bg-black bg-[left_-3rem_top_0px] bg-[length:530px_530px] bg-girl1-background-dateapp rounded-[3rem]"></div>
          <div className="absolute right-5 top-5  flex flex-col justify-center gap-2 ">
            <div className="w-14 h-14 rounded-full  bg-white/20 backdrop-blur-sm flex justify-center items-center">
              <Image
                alt="video camera icon"
                src="/assets/video-white.svg"
                width={38}
                height={38}
              ></Image>
            </div>
            <div className="w-14 h-14 rounded-full  bg-white/20 backdrop-blur-sm flex justify-center items-center">
              <Heart color="white" size={30} fill="white"></Heart>
            </div>
          </div>
          <div className="absolute  left-0  bottom-2  w-full px-5 py-3 ">
            <h1 className="text-4xl  text-white ">Lucía Alaniz</h1>
            <div className="flex items-center  gap-1 text-white mt-1">
              <Image
                alt="map icon"
                src="/assets/compass-a12.svg"
                width={24}
                height={24}
              ></Image>
              <p className="font-light">Madrid, Spain</p>
            </div>
          </div>
        </div>
      </div>
      {/* third  card behind in the back */}
      <div className="absolute bottom-[120px] z-10 scale-[0.8] rotate-2">
        <div
          className={`
       h-[20rem] w-[23rem]   relative `}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black/50 to-90% rounded-[3rem]"></div>
          <div className="h-full w-full bg-black bg-[left_-3rem_top_0px] bg-[length:530px_530px] bg-girl2-background-dateapp rounded-[3rem]"></div>
          <div className="absolute right-5 top-5  flex flex-col justify-center gap-2 ">
            <div className="w-14 h-14 rounded-full  bg-white/20 backdrop-blur-sm flex justify-center items-center">
              <Image
                alt="video camera icon"
                src="/assets/video-white.svg"
                width={38}
                height={38}
              ></Image>
            </div>
            <div className="w-14 h-14 rounded-full  bg-white/20 backdrop-blur-sm flex justify-center items-center">
              <Heart color="white" size={30} fill="white"></Heart>
            </div>
          </div>
          <div className="absolute  left-0  bottom-2  w-full px-5 py-3 ">
            <h1 className="text-4xl  text-white ">Lucía Alaniz</h1>
            <div className="flex items-center  gap-1 text-white mt-1">
              <Image
                alt="map icon"
                src="/assets/compass-a12.svg"
                width={24}
                height={24}
              ></Image>
              <p className="font-light">Madrid, Spain</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCards;

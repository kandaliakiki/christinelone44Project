import AudioWaveForm from "@/components/A16_3/AudioWaveForm";
import HeroSection from "@/components/A16_3/HeroSection";

import { ArrowLeft, Ellipsis, Heart, Pause } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full flex justify-between items-center px-3">
        <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center">
          <ArrowLeft color="white" size={24} opacity={0.5}></ArrowLeft>
        </div>
        <div className="flex items-center bg-white/10 rounded-full uppercase h-max gap-2 pr-5">
          <div className="h-10 rounded-full flex justify-center items-center  bg-white px-5">
            audio
          </div>
          <p className="text-white/50">script</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center">
          <Ellipsis color="white" size={24} opacity={0.5}></Ellipsis>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-14">
        <div className="w-max">
          <HeroSection></HeroSection>
        </div>
      </div>
      <h1 className="text-3xl text-white text-center mt-7">Quiet Forest</h1>
      <h2 className="text-white/50 text-center text-sm mt-2">Rusting Leaves</h2>
      <div className="w-full px-2 mt-3 ">
        <div className=" rounded-xl bg-white/10 pb-4  ">
          <div className="flex w-full justify-center items-center pt-5">
            <AudioWaveForm></AudioWaveForm>
          </div>
          <div className="w-full flex justify-between text-xs px-5">
            <p className="text-white/50 ">35:24</p>
            <p className="text-white/50 ">54:12</p>
          </div>
        </div>
      </div>
      <div className="w-full px-5 mt-5 ">
        <div className="w-full flex items-center justify-between">
          <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center">
            <p className="text-white/50 text-sm">1:0x</p>
          </div>
          <Image
            alt="time past icon"
            src="/assets/time-past-white.svg"
            width={20}
            height={20}
          ></Image>
          <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
            <Pause color="black" size={24} fill="black"></Pause>
          </div>
          <Image
            alt="time forward icon"
            src="/assets/time-forward-white.svg"
            width={20}
            height={20}
          ></Image>
          <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center">
            <Heart color="white" size={20} fill="white"></Heart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

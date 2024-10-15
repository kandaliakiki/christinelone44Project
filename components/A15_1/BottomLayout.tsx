import { House, Heart, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const BottomLayout = () => {
  return (
    <div>
      <div className="flex w-full  justify-evenly items-center px-4  my-7">
        <House size={25} color="#1A1919"></House>
        <Heart size={25} color="#1A1919"></Heart>
        <Image
          alt="chat unread icon"
          src="/assets/chat-unread-a15.svg"
          width={25}
          height={25}
        ></Image>
        <UserRound size={25} color="#F26C22"></UserRound>
      </div>
    </div>
  );
};

export default BottomLayout;

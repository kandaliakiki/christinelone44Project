import { Heart, MessageSquareText } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  isActive: boolean;
  position?: "left" | "right";
}

const ProfileCard: React.FC<ProfileCardProps> = ({ isActive, position }) => {
  return (
    <div
      className={`
        ${isActive ? `h-[32rem] w-[17rem]` : `h-[29rem] w-[17rem]`}
        ${
          !isActive ? `${position === "left" ? `-rotate-2` : `rotate-2`} ` : ``
        }   rounded-3xl  relative `}
    >
      <div
        className={`h-full w-full bg-black bg-[left_-6rem_top_0px] bg-[length:515px_515px] ${
          isActive
            ? `bg-girl2-background-dateapp`
            : `bg-girl1-background-dateapp`
        } rounded-3xl`}
      ></div>
      <div>
        <div className="absolute left-5 bottom-5  mb-4 ">
          <p className="text-2xl font-geometria font-light text-white">26</p>
          <p
            className="font-neueMachina text-4xl text-white font-medium
        "
          >
            James
          </p>
        </div>
        <div className="absolute right-5 bottom-10 flex flex-col gap-3">
          <div className=" w-10 h-10 rounded-2xl flex justify-center items-center bg-gray-600/30 backdrop-blur-lg backdrop-brightness-125">
            <Heart size={20} color="white"></Heart>
          </div>
          <div className=" w-10 h-10 rounded-2xl flex justify-center items-center bg-gray-600/30 backdrop-blur-lg backdrop-brightness-125">
            <MessageSquareText size={20} color="white"></MessageSquareText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
